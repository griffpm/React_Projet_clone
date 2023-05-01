import React from 'react'
import Navigation from '../header/Navigation'
import Footer from '../footer/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Navigation/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
  )
}
