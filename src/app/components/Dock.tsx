import React from 'react'
import Link from 'next/link'
import { headers } from "next/headers";


const links = [
  { url: "/", color: "bg-rose-400" },
  { url: "/projects", color: "bg-cyan-400" },
  { url: "/blogs", color: "bg-blue-400" },
  { url: "/resume", color: "bg-yellow-400" },
  { url: "/gallery", color: "bg-indigo-400" },
]

const NavBar = async () => {
  const headersList = await headers();
  const activePath = headersList.get("x-invoke-path");
  return (
    <main>
        <ul className="flex space-x-2 rounded-l-full rounded-r-full border backdrop-blur-sm bg-[#161616]/60 border-white/10 p-2 hover:shadow-lg w-fit">
          {links.map((link, index) => (
            <li key={index} className={`w-12 h-12 hover:scale-125 rounded-full border border-gray-100/10 bg-[#202020] ${activePath === link.url && "shadow-inner shadow-white"}`}>
              <Link href={link.url} />
            </li>
          ))}
        </ul>
    </main>
  )
}

export default NavBar