import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { robotoRegular } from '../../styles/fonts'
import { below } from '../../styles/breakpoints'

const Heading = ({ title, size, align }) => (
  <StyledHeading as={`h${size}`} align={align} size={size}>
    {title}
  </StyledHeading>
)

const fontSize = ['6rem', '3.75rem', '3rem', '2.125rem', '1.5rem', '1.25rem']
const fontWeight = ['300', '300', '400', '400', '400', '500']
const lineHeight = ['6rem', '3.75rem', '3.125rem', '2.5rem', '2rem', '2rem']
const letterSpacing = [
  '-.01562em',
  '-0.0083333333em',
  'nornal',
  '.0073529412em',
  'normal',
  '.0125em',
]

const StyledHeading = styled.h1`
  ${robotoRegular}
  font-size: ${({ size }) => fontSize[size - 1]};
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: ${({ size }) => fontWeight[size - 1]};
  line-height: ${({ size }) => lineHeight[size - 1]};
  letter-spacing: ${({ size }) => letterSpacing[size - 1]};
  text-align: ${({ align }) => align};
  
  ${props =>
    props.size === 1 &&
    css`
      ${below.mobile`
        font-size: 4.5rem;
        line-height: 4.5rem;
        letter-spacing: -0.0083333333em;
        word-break: break-word;
      `}

      ${below.smallMobile`
        font-size: 3.75rem;
      `}
    `}
`

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
  align: PropTypes.string,
}
Heading.defaultProps = {
  size: 1,
  align: 'initial',
}

export default Heading
