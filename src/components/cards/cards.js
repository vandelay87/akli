import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cards = ({ list }) => (
  <section>
    {list.map((card) => (
      <article key={card.id}>
        <h2>{card.title}</h2>
        <h3>{card.subtitle}</h3>
        <p>{card.description}</p>
      </article>
    ))}
  </section>
);

Cards.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default Cards;
