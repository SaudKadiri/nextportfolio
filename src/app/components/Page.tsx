import React, { ReactNode } from 'react'
import Dock from './Dock'

const Page = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="p-2 inset-0 relative h-screen w-screen">
      {/* Fixed dock */}
      <div className="fixed bottom-0 flex flex-col items-center w-full p-4">
          <Dock />
      </div>
      {/* Rest of the screen */}
      <div className={`p-6 h-full`}>
          {children}
      </div>
    </main>
  )
}

export default Page