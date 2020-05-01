import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEO = ({ title, description, lang }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ]}
  />
)

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
}
SEO.defaultProps = {
  description: '',
  lang: 'en-GB',
}

export default SEO
