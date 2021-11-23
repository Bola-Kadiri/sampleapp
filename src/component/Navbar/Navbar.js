import React from 'react'
import { useState } from 'react';
import { MenuList} from './MenuList';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <Link exact to={url} activeClassName="active">
          {title}
        </Link>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
        <img src='Images/EMS.svg' alt=''/>
      </div>
      <Link to ='/cart' className='special'>
          <button style={{alignItems: 'center', padding: '10px 30px', fontSize: '20px',
        fontWeight: 300}}>Shop</button >
      </Link>
      
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </nav>
  );
};

export default Navbar;