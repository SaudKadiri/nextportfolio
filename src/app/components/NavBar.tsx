import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/projects">Projects</Link></li>
    </ul>
  )
}

export default NavBar