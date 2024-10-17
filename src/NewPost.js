import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {
  const {postTitle,setPostTitle,postBody,setPostBody,handleSubmit} = useContext(DataContext)
  return (
    <main>
        <form className='addPostForm' onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input
            id = 'title'
            type='text'
            required
            value={postTitle}
            onChange={(e) =>setPostTitle(e.target.value)}
            >
            </input>
            <label htmlFor='body'>Body</label>
            <input type='text'
            id='body'
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
            >
            </input>
            <button className='btn btn-primary'>Add post</button>
        </form>
    </main>
  )
}

export default NewPost
