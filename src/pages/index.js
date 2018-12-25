import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`]} />
    <h3>Dave's Boring Christmas Card for Lisa</h3>
    <p>step 1: Retrieve Gift from your husband.</p>
    <p>step 2: Make sure to complete step 1 first.</p>
    <p>step 3: Click link below for additional info...</p>
    
   
    {/* <div style={{ maxWidth: `350px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Details Here</Link>
  </Layout>
)

export default IndexPage
