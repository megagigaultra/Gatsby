import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return(
    <Layout>
      <Head title="About" />
        <h1>About Me</h1>
        <p>Hi i'm James, and i'm learning to work with gatsby.</p>
        <p>Contact me <Link to="/contact">here</Link></p>
    </Layout>
  )
}

export default AboutPage