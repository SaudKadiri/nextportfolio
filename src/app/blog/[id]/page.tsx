import  posts from "../../../../public/posts.json";

import React from 'react'

const Blog = ({ params }: { params: { id: number } }) => {
  const { id } = params
  const { title, date, content, type } = posts[id]
  return (
    <div>
      <h1 className="text-blue-500 text-xl font-bold"><span>{ id + 1 }</span>. {title}<span className="text-lg">({date})</span></h1>
      <p>{content}</p>
    </div>
  )
}

export default Blog