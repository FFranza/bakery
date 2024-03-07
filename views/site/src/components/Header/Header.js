import React from 'react';
import './Header.css';
import brand from '../../../../../assets/images/logo/bakery-logo.png';
import KeyList from '../../../../../assets/scripts/view-utils/key-list';
import { Link } from 'react-router-dom';

export default function Header({ pages }) {
  const keyList = new KeyList();

  const linkComponents = pages.map(page => {
    return (
      <li className="nav-item" key={keyList.generateKey(page)}>
        <Link to={page} className="nav-link">
          {page.replace(page[0], page[0].toUpperCase())}
        </Link>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-md bg-primary">
      <div id="pages" className="container-fluid">
        <Link className="navbar-brand" to="/" >
          <img src={brand} height={70}/>
        </Link>
        <button 
          className="navbar-toggler" 
          data-bs-toggle="collapse" 
          data-bs-target="#pages" 
          aria-controls="pages" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="pages">
          <ul className="navbar-nav">
            {linkComponents}
          </ul>
        </div>
      </div>
    </nav>
  );
}