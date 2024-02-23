import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import KeyList from '../../../../../assets/scripts/view-utils/key-list';

export default function Layout({ pages, linkClassName, appRoute }) {
  const keyList = new KeyList();
  
  const linkComponents = pages.map(page => {
    return (
      <li className={`${linkClassName} ${page}`} key={keyList.generateKey(page)}>
        <Link to={page === 'home' ? appRoute : appRoute + page}>
          {page.replace(page[0], page[0].toUpperCase())}
        </Link>
      </li>
    );
  });
  
  return (
    <>
      <nav id="nav-bar">
        <ul id="pages">
          {linkComponents}
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
