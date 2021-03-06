import React from 'react'
import PropTypes from 'prop-types'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import styled from 'styled-components'
import Ripple from '../../hooks/ripple'
import { robotoRegular } from '../../styles/fonts'

const openLink = (url, category) => () => {
  window.open(url)
  trackCustomEvent({
    category,
    action: 'click',
    label: url,
  })
}

const handleChipKeyPress = event => (action, category) =>
  event.key === 'Enter' &&
  (typeof action === 'function' ? action() : openLink(action, category)())

const Chips = ({ list }) => (
  <StyledWrapper>
    {list.map(chip => (
      <StyledChip
        role="button"
        tabIndex={0}
        onClick={chip.link ? openLink(chip.link, chip.category) : chip.action}
        onKeyPress={e =>
          handleChipKeyPress(e)(chip.link || chip.action, chip.category)
        }
        key={chip.id}
      >
        <span>{chip.value}</span>
        <Ripple color="gray" duration={600} />
      </StyledChip>
    ))}
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: start;
`
const StyledChip = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  background: #e0e0e0;
  height: 32px;
  padding: 0 8px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  margin: 4px;

  &:hover {
    background: #c2c2c2;
    cursor: pointer;
  }

  &:focus {
    background: #c2c2c2;
    outline: none;
  }

  span {
    ${robotoRegular}
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
  }
`

Chips.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      action: PropTypes.func,
      link: PropTypes.string,
      category: PropTypes.string,
    })
  ).isRequired,
}

export default Chips
