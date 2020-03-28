import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import richTextRenderer from '../../utils/richTextRenderer'
import { robotoRegular } from '../../styles/fonts'

const RichText = ({ content }) => (
  <StyledRichText>{richTextRenderer(content.json)}</StyledRichText>
)

const StyledRichText = styled.div`
  ${robotoRegular}
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.03125em;
`

RichText.propTypes = {
  content: PropTypes.shape({
    json: PropTypes.shape.isRequired,
  }).isRequired,
}

export default RichText
