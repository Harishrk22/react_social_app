import React from 'react'
import Posts from './Posts'

const Feed = ({posts}) => {
  return (
    <>
        {posts.map((post)=>{
           return <Posts key={post.id} post={post}></Posts>
        })}
    </>
  )
}

export default Feed
