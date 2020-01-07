import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = ({ title, size, align }) => (
  <StyledHeading as={`h${size || 1}`} align={align} size={size}>{title}</StyledHeading>
);

const fontSize = ['6rem', '3.75rem', '3rem', '2.125rem', '1.5rem', '1.25rem'];
const fontWeight = ['300', '300', '400', '400', '400', '500'];
const lineHeight = ['6rem', '3.75rem', '3.125rem', '2.5rem', '2rem', '2rem'];
const letterSpacing = ['-.01562em', '-0.0083333333em', 'nornal', '.0073529412em', 'normal', '.0125em'];

const StyledHeading = styled.h1`
  font-size: ${(props) => (fontSize[props.size ? props.size - 1 : 0])};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: ${(props) => (fontWeight[props.size ? props.size - 1 : 0])};
  line-height: ${(props) => (lineHeight[props.size ? props.size - 1 : 0])};
  letter-spacing: ${(props) => (letterSpacing[props.size ? props.size - 1 : 0])};
  text-align: ${(props) => props.align || 'initial'};
`;

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
  align: PropTypes.string,
};

Heading.defaultProps = {
  size: 1,
  align: 'initial',
};

export default Heading;
