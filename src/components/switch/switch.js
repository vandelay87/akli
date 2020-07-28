import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../../styles/colors'
import { robotoRegular } from '../../styles/fonts'

const Switch = ({ id, checked, handleToggle, label }) => (
  <>
    <StyledSwitch
      id={id}
      type="checkbox"
      role="switch"
      checked={checked}
      onChange={handleToggle}
    />
    <StyledLabel htmlFor={id}>
      <StyledLabel.Text>{label}</StyledLabel.Text>
      <StyledThumb role="presentation" />
    </StyledLabel>
  </>
)

const StyledSwitch = styled('input')`
  visibility: hidden;
  width: 0;
  height: 0;

  &:checked + label {
    background: ${color.primary};

    span:nth-child(2) {
      transform: translateX(12px);
    }
  }
`
const StyledLabel = styled('label')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 32px;
  height: 14px;
  background: #808080;
  border-radius: 7px;
  position: relative;
  transition: background-color 0.2s;
`
StyledLabel.Text = styled('span')`
  ${robotoRegular}
  margin: 0 auto 0 40px;
  text-align: center;
`
const StyledThumb = styled('span')`
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${color.onPrimary};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  transition: transform 0.2s;
`

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  label: PropTypes.string,
}
Switch.defaultProps = {
  label: '',
}

export default Switch
