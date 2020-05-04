import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GlobalStyles from '../styles/global'
import useWebsiteSettings from '../hooks/useWebsiteSettings'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { above } from '../styles/breakpoints'

const Layout = ({ children }) => {
  const { title } = useWebsiteSettings().header
  const { navigation } = useWebsiteSettings().footer

  return (
    <>
      <GlobalStyles />
      <Header title={title} />
      <StyledMain>{children}</StyledMain>
      <Footer navigation={navigation} />
    </>
  )
}

const StyledMain = styled.main`
  max-width: 64em;
  margin: 0 auto;
  padding: 0 1.125em 1.5em;

  ${above.tabletLarge`
    padding: 0 2em 1.5em;
  `}

  ${above.desktop`
    padding: 0 0 1.5em;
  `}

  ${above.desktopLarge`
    padding: 0 0 2em;
  `}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
