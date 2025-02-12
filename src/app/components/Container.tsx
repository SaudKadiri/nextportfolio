import React, { ReactNode } from 'react'

const Container = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className='bg-white/30 backdrop-blur-none w-full h-fit'>
        {children}
    </main>
  )
}

export default Container