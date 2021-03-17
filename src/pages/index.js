import React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return(
    <div>
      <h1>Hello</h1>
      <h2>I'm James, a not so fullstack developer</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </div>
  )
}

export default IndexPage