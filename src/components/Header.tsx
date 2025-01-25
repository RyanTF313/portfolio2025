import React from 'react'
import { NavLink } from "react-router";
import { useLocation } from "react-router";

function Header() {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <div>
      <header style={headerStyle}>
        <div className='heading' style={headingStyle}>
        <h1>Ryan Hernandez-French</h1>
        <h4>Software Engineer</h4>
        </div>
        <div className='menu' style={menuStyle}>
          <ul style={listStyle}>
            <li className={pathname === '/' ? 'active' : ''}>
            <NavLink to="/">
            <span className="material-symbols-outlined">{pathname === '/' ? 'folder_open' : 'folder'}</span>
              Home</NavLink>
            </li>
            <li className={pathname === '/about' ? 'active' : ''}>
            <NavLink to="/about">
              <span className="material-symbols-outlined">{pathname === '/about' ? 'folder_open' : 'folder'}</span>
              About</NavLink>
            </li>
            <li className={pathname === '/resume' ? 'active' : ''}>
            <NavLink to="/resume">
              <span className="material-symbols-outlined">{pathname === '/resume' ? 'folder_open' : 'folder'}</span>
              Resume</NavLink>
            </li>
            <li className={pathname === '/socials' ? 'active' : ''}>
            <NavLink to="/socials">
              <span className="material-symbols-outlined">{pathname === '/socials' ? 'folder_open' : 'folder'}</span>
              Socials</NavLink>
            </li>
            <li className={pathname === '/blog' ? 'active' : ''}>
              <NavLink to="/blog">
              <span className="material-symbols-outlined">{pathname === '/blog' ? 'folder_open' : 'folder'}</span>
              Blog</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

const headerStyle: React.CSSProperties = {
  display: 'flex',
  padding: '0 5rem',
};

const headingStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
};

const menuStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
};

const listStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: 0,
  padding: 0,
  width: '100%',
}

export default Header