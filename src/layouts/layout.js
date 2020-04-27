import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
      <StyledLayout>{children}</StyledLayout>
      <Footer navigation={navigation} />
    </>
  )
}

const StyledLayout = styled.main`
  max-width: 64em;
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
