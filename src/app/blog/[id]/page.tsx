import  posts from "../../../../public/posts.json";

import React from 'react'

const Blog = ({ params }: { params: { id: number } }) => {
  const { title, date, content, type } = posts[params.id]
  return (
    <div>
      <p>{title} - {date} - {content} - {type}</p>
    </div>
  )
}

export default Blog