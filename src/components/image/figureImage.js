import React from 'react';
import PropTypes from 'prop-types';
import Img from "gatsby-image";
import styled from 'styled-components';
import { robotoRegular } from '../../styles/fonts';
import { color } from '../../styles/colors';
import { above } from '../../styles/breakpoints';

const FigureImage = ({ image, caption, align, maxWidth }) => (
  <StyledFigure maxWidth={maxWidth || image.file.details.image.width} float={align}>
    {typeof image.fluid !== 'undefined' ?(
      <Img fluid={image.fluid} alt={image.description} />
    ):(
      <img src={image.file.url} alt={image.description} />
    )}
    {caption && <StyledCaption>{caption}</StyledCaption>}
  </StyledFigure>
);

const StyledFigure = styled.figure`
  ${robotoRegular};
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : 'none')};

  ${above.tablet`
    float: ${(props) => (props.float)};
  `}

  img {
    width: 100%;
    vertical-align: middle;
  }
`;
const StyledCaption = styled.figcaption`
  font-size: .875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.01786em;
  padding: 16px;
  background: ${color.primary};
  color: ${color.onPrimary};
`;

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
};

FigureImage.defaultProps = {
  caption: '',
  align: 'none',
  maxWidth: '',
};

export default FigureImage;
