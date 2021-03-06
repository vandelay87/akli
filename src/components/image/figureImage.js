import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import { robotoRegular } from '../../styles/fonts'
import { color } from '../../styles/colors'
import { above } from '../../styles/breakpoints'

const getWidth = imageDetails => (imageDetails ? imageDetails.image.width : '')

const FigureImage = ({ image, caption, align, maxWidth }) => (
  <StyledFigure
    caption={caption && caption}
    maxWidth={maxWidth || getWidth(image.file.details)}
    float={align}
  >
    {typeof image.fluid !== 'undefined' ? (
      <Img fluid={image.fluid} alt={image.description} />
    ) : (
      <img src={image.file.url} alt={image.description} />
    )}
    {caption && <StyledCaption>{caption}</StyledCaption>}
  </StyledFigure>
)

const StyledFigure = styled.figure`
  ${robotoRegular};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'max-content')};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  ${above.tablet`
    float: ${({ float }) => float};
  `}

  img {
    width: auto;
    max-width: 100%;
    vertical-align: middle;
    border-radius: 3px;

    ${({ caption }) =>
      caption &&
      css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `}
  }
`
const StyledCaption = styled.figcaption`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.01786em;
  padding: 16px;
  background: ${color.primary};
  color: ${color.onPrimary};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`

FigureImage.propTypes = {
  image: PropTypes.shape({
    fluid: PropTypes.shape({}),
    file: PropTypes.shape({
      url: PropTypes.string,
      details: PropTypes.shape({
        image: PropTypes.shape({
          width: PropTypes.number,
        }),
      }),
    }),
    description: PropTypes.string,
  }).isRequired,
  caption: PropTypes.string,
  align: PropTypes.string,
  maxWidth: PropTypes.string,
}
FigureImage.defaultProps = {
  caption: '',
  align: 'none',
  maxWidth: '',
}

export default FigureImage
