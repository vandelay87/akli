import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from '../styles/global'
import useWebsiteSettings from '../hooks/useWebsiteSettings'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const Layout = ({ children }) => {
  const { title } = useWebsiteSettings().header
  const { navigation } = useWebsiteSettings().footer

  return (
    <>
      <GlobalStyles />
      <Header title={title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: '64em',
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer navigation={navigation} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
