import { Link } from 'gatsby'
import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
  return(
    <div>
        <Header />
        <h1>About Me</h1>
        <p>Hi i'm James, and i'm learning to work with gatsby.</p>
        <p>Contact me <Link to="/contact">here</Link></p>
        <Footer />
    </div>
  )
}

export default AboutPage