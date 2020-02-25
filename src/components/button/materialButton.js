import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import Ripple from '../../hooks/ripple';
import { robotoRegular } from '../../styles/fonts';
import { color } from '../../styles/colors';

const MaterialButton = ({ value, click, raised }) => (
  <StyledButton onClick={click} modifiers={raised && 'raised'} role="button">
    {value}
    <Ripple color={color.primary} duration={600} />
  </StyledButton>
);

const BUTTON_CONFIG = {
  raised: () => `
    background: ${color.primary};
    color: #fff;
    box-shadow: rgba(0,0,0,0.2) 0px 3px 6px;

    &:hover {
      background: #3a91e7;
      color: #fff;
      box-shadow: rgba(0,0,0,0.4) 0px 3px 8px;
    }

    &:focus {
      background: #3a91e7;
      color: #fff;
      box-shadow: rgba(0,0,0,0.4) 0px 3px 8px;
    }
  `,
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
    cursor: pointer;
  }

  &:focus {
    background: #e5effa;
    outline: none;
  }

  ${applyStyleModifiers(BUTTON_CONFIG)}; 
`;

MaterialButton.propTypes = {
  value: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  raised: PropTypes.bool,
};
MaterialButton.defaultProps = {
  raised: false,
}

export default MaterialButton;
