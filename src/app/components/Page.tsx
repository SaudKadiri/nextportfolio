import React, { ReactNode } from 'react'
import NavBar from './NavBar'

const Page = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
        <NavBar />
        {children}
    </main>
  )
}

export default Page