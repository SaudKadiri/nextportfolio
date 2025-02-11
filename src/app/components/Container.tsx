import React, { ReactNode } from 'react'

const Container = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className='bg-white/30 backdrop-blur-none'>
        {children}
    </main>
  )
}

export default Container