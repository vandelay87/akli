import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Ripple from '../../hooks/ripple';
import { robotoRegular } from '../../styles/fonts';
import { color } from '../../styles/colors';

const MaterialButton = ({ value, click }) => {
  const buttonRef = useRef(null);

  return (
    <StyledButton onClick={click} ref={buttonRef} role="button">
      {value}
      <Ripple color={color.primary} duration={600} />
    </StyledButton>
  )
};

const StyledButton = styled.button`
  ${robotoRegular}
  transition: background 0.3s ease;
  background: transparent;
  color: ${color.primary};
  min-width: 64px;
  border-radius: 4px;
  border-width: 0;
  border-style: none;
  text-transform: uppercase;
  font-size: 14px;
  padding: 8px;
  overflow: hidden;
  position: relative;

  &:hover {
    background: #f6fafd;
    color: #1976d2;
  }

  &:focus {
    background: #e5effa;
    outline: 1px solid #f6fafd;
  }
`;

MaterialButton.propTypes = {
  value: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default MaterialButton;
