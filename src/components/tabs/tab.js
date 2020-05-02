import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import Ripple from '../../hooks/ripple'
import { robotoRegular } from '../../styles/fonts'
import { color } from '../../styles/colors'

const Tab = ({
  id,
  label,
  click,
  keyDown,
  selected,
  focused,
  controls,
  timeout,
}) => (
  <StyledTab
    role="tab"
    id={id}
    onClick={click}
    onKeyDown={keyDown}
    selected={selected}
    tabIndex={focused ? 0 : -1}
    aria-selected={selected}
    aria-controls={controls}
  >
    {label}
    <Ripple color={color.primary} duration={600} />
    <CSSTransition in={selected} timeout={timeout}>
      {state => <StyledTab.Indicator state={state} timeout={timeout} />}
    </CSSTransition>
  </StyledTab>
)

const getIndicatorTransition = state => {
  switch (state) {
    case 'entering':
    case 'exited':
      return `
        transform: translateY(2px);
      `

    case 'entered':
    default:
      return `
        transform: translateY(0);
      `
  }
}
const StyledTab = styled.button`
  ${robotoRegular}
  flex: 1 0 auto;
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  text-transform: uppercase;
  background: transparent;
  border-width: 0;
  border-style: none;
  color: #616161;
  overflow: hidden;
  position: relative;

  &:hover {
    background: #f6fafd;
    cursor: pointer;
  }

  &:focus {
    background: #e5effa;
    outline: none;
  }

  ${({ selected }) =>
    selected &&
    css`
      color: #1976d2;
    `}
`
StyledTab.Indicator = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${color.primary};
  transition: transform ${({ timeout }) => timeout}ms ease-in-out;

  ${({ state }) =>
    css`
      ${getIndicatorTransition(state)}
    `}
`

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  keyDown: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  focused: PropTypes.bool.isRequired,
  controls: PropTypes.string.isRequired,
  timeout: PropTypes.number,
}
Tab.defaultProps = {
  timeout: 200,
}

export default Tab
