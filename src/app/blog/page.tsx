import React from 'react'
import  posts from "../../../public/posts.json";
import Link from 'next/link';

const Blogs = () => {

  return (
    <div>
      <ul>
        {posts.map(({ type, title, content, date }, index) => (
          <li key={index}>
            {title} - {date} - {content} - {type}
            <Link href={`/blog/${index}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                View Project
            </Link>
          </li>

        ))}
      </ul>
    </div>
  )
}

export default Blogs