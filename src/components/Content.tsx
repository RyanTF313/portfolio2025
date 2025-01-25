import React from 'react'
import { Routes, Route } from "react-router";
import Home from '../pages/Home';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Socials from '../pages/Socials';
import Blog from '../pages/Blog';


function Content() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="socials" element={<Socials />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  )
}

export default Content