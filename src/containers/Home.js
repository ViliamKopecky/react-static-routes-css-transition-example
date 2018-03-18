import React from 'react'
import { withSiteData } from 'react-static'
//

import Hero from './Hero'
import logoImg from '../logo.png'

export default withSiteData(() => (
  <div>
    <Hero>in Home page. Without transition</Hero>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
  </div>
))
