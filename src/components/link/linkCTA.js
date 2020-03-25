import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { robotoRegular } from '../../styles/fonts'

const LinkCTA = ({ title, link, external }) => (
  <>
    {external ? (
      <StyledLink href={link} target="_blank" rel="noreferrer noopener">
        {title}
      </StyledLink>
    ) : (
      <StyledLink as={GatsbyLink} to={link}>
        {title}
      </StyledLink>
    )}
  </>
)

const StyledLink = styled('a')`
  ${robotoRegular}
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.03125em;
`

LinkCTA.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  external: PropTypes.bool,
}
LinkCTA.defaultProps = {
  external: false,
}

export default LinkCTA
