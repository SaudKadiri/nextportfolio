import Page from "@/app/components/Page";
import  posts from "../../../../public/posts.json";

import React from 'react'
import Container from "@/app/components/Container";

const Blog = ({ params }: { params: { id: number } }) => {
  const { id } = params
  const { title, date, content, type } = posts[id]
  return (
    <Page>
      <Container>
        <h1 className="text-blue-500 text-xl font-bold"><span>{ id + 1 }</span>. {title}<span className="text-lg">({date})</span></h1>
      </Container>
      <p>{content}</p>
    </Page>
  )
}

export default Blog