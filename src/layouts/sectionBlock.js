import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionBlock = ({ children }) => <StyledSection>{children}</StyledSection>;

const StyledSection = styled('section')`
  margin: 10em auto;
`;

SectionBlock.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionBlock;
