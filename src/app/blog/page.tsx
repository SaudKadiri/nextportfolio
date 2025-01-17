import React from 'react'
import  posts from "../../../public/posts.json";
import Link from 'next/link';

const Blogs = () => {

  return (
    <div>
      <ul>
        {posts.map(({ type, title, content, date }, index) => (
          <li key={index}>
            {index + 1}. {title} - 
            <Link href={`/blog/${index}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                View Blog
            </Link>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default Blogs