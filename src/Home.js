import React, { useContext } from 'react'
import Feed  from './Feed'
import DataContext from './context/DataContext'
const Home = () => {
  const {searchResults} = useContext(DataContext)
  return (
    <main className='home'>
        {searchResults.length? (
            <Feed posts={searchResults}/>
        ):
        (
        <p>No posts to display</p>
        )}
    </main>
  )
}

export default Home
