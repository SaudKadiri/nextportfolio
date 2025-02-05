import React, { ReactNode } from 'react'

const Container = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className='p-2 inset-0 relative bg-[#fff] dark:bg-[#0F1014] text-black/90 dark:text-white/90 min-h-screen'>
        {children}
    </main>
  )
}

export default Container