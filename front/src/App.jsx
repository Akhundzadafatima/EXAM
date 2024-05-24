import React from 'react'
import Header from './layout/Header/Header'
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import "./App.css"

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} >
            <Route index element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App