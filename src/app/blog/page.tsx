import React from 'react'
import  posts from "../../../public/posts.json";
import Link from 'next/link';
import Page from '../components/Page';

const Blogs = () => {

  return (
    <Page>
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
    </Page>
  )
}

export default Blogs