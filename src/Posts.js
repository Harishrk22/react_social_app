import React from 'react'
import { Link } from 'react-router-dom'
const Posts = ({post}) => {
  return (
    <article className='post'>
      <Link to={`posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
        
        <hr></hr>
    </article>
  )
}

export default Posts
