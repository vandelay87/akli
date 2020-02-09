import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../heading/heading';
import FigureImage from '../image/figureImage';

const Cards = ({ list }) => (
  <StyledSection>
    {list.map((card) => (
      <StyledCard key={card.id}>
        {card.image && <FigureImage image={card.image} maxWidth='300' />}
        <Heading title={card.title} size={2} />
        {card.subtitle && <Heading title={card.subtitle} size={3} />}
        <p>{card.description}</p>
      </StyledCard>
    ))}
  </StyledSection>
);

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: start;
  margin: 16px auto;
`;
const StyledCard = styled.article`
  flex: 0 0 300px;
  border: 1px solid rgba(0,0,0,.12);
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0,0,0,0.2);
  padding: 16px;
  margin: 16px 6px;

  figure {
    border: none;
    box-shadow: none;
  }

  h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: .0125em;
    line-height: 2rem;
  }

  h3 {
    color: #616161;
    margin: 0;
    font-size: .875rem;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: .00714em;
  }

  p {
    color: #616161;
    font-size: .875rem;
    letter-spacing: .01786em;
    line-height: 1.25rem;
    font-weight: 400;
    
  }
`;

Cards.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default Cards;
