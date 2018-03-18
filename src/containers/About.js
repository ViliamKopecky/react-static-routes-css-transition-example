
import React from 'react'
import { withRouteData } from 'react-static'
//

import Hero from './Hero'

export default withRouteData(({ red }) => (
  <div>
    <Hero red={red}>in About page. Without transition</Hero>
    <h1>This is what we're all about.</h1>
    <p>React, static sites, performance, speed. It's the stuff that makes us tick.</p>
  </div>
))
