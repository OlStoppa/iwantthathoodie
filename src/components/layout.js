/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Drawer from "./drawer"
import Header from "./header"
import Footer from "./footer"
import "./index.scss"

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
return(
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    
    render={data => (
      <div className="site-container">
        <Header 
        siteTitle={data.site.siteMetadata.title}
        toggleDrawer={toggleDrawer}
        isOpen={drawerOpen}
        />
        <Drawer
          isOpen={drawerOpen}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `0px 0px 1.45rem`,
            paddingTop: 0,
            flexGrow: 1
            
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
        {drawerOpen && 
        <div className="overlay" onClick={toggleDrawer}/>
        }
      </div>
    )}
  />
)
        }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
