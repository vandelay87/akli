import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkCTA from '../link/linkCTA';
import { color } from '../../styles/colors';

const Footer = ({ navigation }) => (
  <StyledFooter>
    <StyledNavigation>
      {navigation.map((link) => (
        <li key={link.id}>
          <LinkCTA title={link.title} link={link.link} external={link.external} />
        </li>
      ))}
    </StyledNavigation>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  background: ${color.secondary};
  padding: 16px;
`;
const StyledNavigation = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 16px;

  a {
    color: ${color.onSecondary};
  }
`;

Footer.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    external: PropTypes.bool,
  })).isRequired,
};

export default Footer;
