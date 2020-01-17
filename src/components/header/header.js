import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { robotoRegular } from '../../styles/fonts';
import { color } from '../../styles/colors';

const Header = ({ title }) => (
  <StyledHeader>
    <StyledTitle>{title}</StyledTitle>
  </StyledHeader>
);

const StyledHeader = styled.header`
  background: ${color.primary};
  padding: 16px;
`;
const StyledTitle = styled.span`
  ${robotoRegular}
  color: ${color.onPrimary};
  font-size: 1.25rem;;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: .0125em;
  margin-left: 16px;
`;

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
