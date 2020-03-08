import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabBar = ({tabs}) => (
  <StyledWrapper>
    <p>{tabs[0].id}</p>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
`;

TabBar.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    content: PropTypes.shape({
      id: PropTypes.string,
      json: PropTypes.json,
    }),
  })).isRequired,
};

export default TabBar;