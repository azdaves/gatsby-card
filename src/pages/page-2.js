import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Content removed</h1>
    <p>Content removed</p>
    <p>Content removed</p>
    
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Back</Link>
  </Layout>
)

export default SecondPage
