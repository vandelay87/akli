import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Heading from '../heading/heading'
import FigureImage from '../image/figureImage'
import MaterialButton from '../button/materialButton'
import { above } from '../../styles/breakpoints'

const openLink = url => () => window.open(url)

const Cards = ({ cardList }) => (
  <StyledWrapper>
    {cardList.map(card => (
      <StyledCard key={card.id}>
        {card.image && <FigureImage image={card.image} />}
        <StyledCard.Body>
          <Heading title={card.title} size={2} />
          {card.subtitle && <Heading title={card.subtitle} size={3} />}
          <p>{card.description}</p>
        </StyledCard.Body>
        {card.link && (
          <MaterialButton value="View" click={openLink(card.link)} />
        )}
      </StyledCard>
    ))}
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: start;
  margin: 16px auto;
`
const StyledCard = styled.article`
  flex: 1 1 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  margin: 16px 6px;
  max-width: 400px;

  ${above.tablet`
    flex: 1 1 40%;
  `}

  ${above.desktop`
    flex: 1 1 32%;
  `}

  figure {
    border: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
    margin: 0 auto;
    text-align: center;

    img {
      max-height: 200px;
      max-width: 100%;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  button {
    margin: 0 8px 8px;
  }
`
StyledCard.Body = styled.div`
  padding: 16px;

  h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    line-height: 2rem;
  }

  h3 {
    color: #616161;
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: 0.00714em;
  }

  p {
    color: #616161;
    font-size: 0.875rem;
    letter-spacing: 0.01786em;
    line-height: 1.25rem;
    font-weight: 400;
    margin: 14px auto 7px;
  }
`

Cards.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.shape({}),
      title: PropTypes.string,
      subtitle: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
}

export default Cards
