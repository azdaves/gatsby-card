import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Ring Selection Date Night</h1>
    <p>Location: House of Diamonds</p>
    <p>On a day/eve of your choice we will go to House of Diamonds and have Brent recreate your engagement ring or you can choose another one of your choice.</p>
    
    <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/">Back</Link>
  </Layout>
)

export default SecondPage
