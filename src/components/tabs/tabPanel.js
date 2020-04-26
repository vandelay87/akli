import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import RichText from '../richText/richText'

const TabPanel = ({ id, content, selected, labelledBy, timeout }) => (
  <CSSTransition key={id} in={selected} timeout={timeout}>
    {state => (
      <StyledTabPanel
        role="tabpanel"
        id={id}
        state={state}
        aria-hidden={!selected}
        aria-labelledby={labelledBy}
        timeout={timeout}
      >
        <RichText content={content} />
      </StyledTabPanel>
    )}
  </CSSTransition>
)

const getPanelTransition = state => {
  switch (state) {
    case 'entering':
      return `
        display: block;
        opacity: 0;
        transform: scale(0.97) translateY(5px);
      `

    case 'entered':
    case 'exiting':
      return `
        opacity: 1;
        transform: scale(1) translateY(0);
      `

    default:
      return `
        display: none;
        opacity: 0;
        transform: scale(0.97) translateY(5px);
      `
  }
}
const StyledTabPanel = styled.div`
  transition: opacity 200ms linear, transform 200ms ease-in-out;

  ${({ state }) =>
    css`
      ${getPanelTransition(state)}
    `}
`

TabPanel.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.shape({
    id: PropTypes.string,
    json: PropTypes.shape({}),
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  labelledBy: PropTypes.string.isRequired,
  timeout: PropTypes.number,
}
TabPanel.defaultProps = {
  timeout: 200,
}

export default TabPanel
