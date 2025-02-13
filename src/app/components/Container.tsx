import React, { ReactNode } from 'react'

const Container = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className='bg-black/30 backdrop-blur-none w-full h-fit border border-blue-400 rounded-xl'>
        {children}
    </main>
  )
}

export default Container