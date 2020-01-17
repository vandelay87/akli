import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../styles/global';
import useWebsiteSettings from '../hooks/useWebsiteSettings';
import Header from '../components/header/header';

const Layout = ({ children }) => {
  const { title } = useWebsiteSettings().header;

  return (
    <>
      <GlobalStyles />
      <Header title={title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
