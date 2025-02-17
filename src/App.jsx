import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//PAGINE
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import PostBlog from './pages/PostBlog'
import SinglePost from './pages/SinglePost'
//LAYOUT
import DefaultLayout from './layout/DefaultLayout'
//CONTEXT
import { AltProvider } from './context/AlertContext';

export default function App(){
      return(
        <>
        <AltProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/post-blog" element={<PostBlog />} />
              <Route path="/post-blog/:id" element={<SinglePost/>} />
            </Route>
            </Routes>
        </BrowserRouter>
        </AltProvider>
        </>
      )
     
}
