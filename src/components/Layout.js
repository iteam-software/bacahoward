import React from 'react'
import Header from './Header'
import Footer from './Footer'
import faviconAppleTouchIcon from '../icons/apple-touch-icon.png'
import favicon32 from '../icons/favicon-32x32.png'
import favicon16 from '../icons/favicon-16x16.png'
import Helmet from 'react-helmet'

const Layout = (props) => {
  return (
    <>
      <Helmet>
        {/*!-- FAVICONS -->*/}
        <link rel="apple-touch-icon" sizes="180x180" href={faviconAppleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href="../icons/site.webmanifest" />
        <link rel="mask-icon" href="../icons/safari-pinned-tab.svg" color="#ffffff" />
        <link rel="shortcut icon" href="../icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content=",,/icons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
