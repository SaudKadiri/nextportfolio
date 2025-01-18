import React, { ReactNode } from 'react'
import NavBar from './NavBar'

const Page = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className='h-screen border 1px border-violet-800 bg-[linear-gradient(to_right_top,#0f1014,#111114,#121214,#131314,#141414)] px-10'>
        <div className='fixed bottom-0 left-1/2 -translate-x-1/2 border border-blue-500 h-full'>
          {children}
          <NavBar />
        </div>
    </main>
  )
}

export default Page