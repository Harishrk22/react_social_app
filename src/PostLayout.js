import React from 'react'
import { Outlet,Link} from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
    
            <Link to='/postpage/1' >Post 1</Link>
            <br></br>
            <Link to='/postpage/2'  >Post 2</Link>
            <br></br>
            <Link to='/postpage/3'> Post 3</Link>
            <li> <Link to='/postpage/newpost'>New POST</Link></li>
            <Outlet></Outlet>
    </>
  )
}

export default PostLayout
