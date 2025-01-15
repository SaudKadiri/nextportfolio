import  posts from "../../../../public/posts.json";

import React from 'react'

const Post = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <div>Post</div>
      <ul>
        {posts.map(({ type, title, content, date }, index) => (
          <li key={index}>
            {title} - {date} - {content} - {type}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Post