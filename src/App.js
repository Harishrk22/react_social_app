
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';

import PostPage from './PostPage'
import NewPost from './NewPost';
import Missing from './Missing';
import Header from './Header';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import api from "./api/posts";
import { DataProvider } from './context/DataContext';
function App() {



  return (
    <div className='App'>
      <DataProvider>
        <Header title='Welcome to react app'/>
        <Nav />
        <Routes>
          <Route path='/' element={
            <Home />
            } />
          <Route path='/posts'>
              <Route index element={
              <NewPost/>
            } />
            <Route path=':id' element={ <PostPage/> }/>
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing/>}/>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
