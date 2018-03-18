import React from 'react'

export default function Hero({ red, children }) {
  return (
    <div
      style={{
        padding: 30,
        background: red ? 'red' : 'yellow',
        transition: '2s'
      }}
    >
      Hero {children}
    </div>
  )
}
