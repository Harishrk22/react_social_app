import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const PostPage = () => {
  const {posts,handleDelete} = useContext(DataContext)
  const {id} = useParams()
  const post = posts.find(post=>(post.id).toString() === id)
  return (
    <main>
        {post && 
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button className='btn btn-danger' onClick={() =>handleDelete(post.id)}>Delete</button>
          </>
        }
        {!post && 
          <>
              <h2>Post not found!!</h2>
          </>
        }
        
    </main>
  )
}

export default PostPage
