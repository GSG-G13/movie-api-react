import React from 'react';
import './header.css';

class Header extends React.Component {

  render() {
    return <>
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="navbar">
            <h2>
              MOVIESPOT
            </h2>
            <ul className="nav no-search">
              <input className="search-active" type="text" placeholder="Search.." />
            </ul>
          </nav>
        </div>
      </div>
      <article class="background-image container">
        <header class="container__header background-image__hover">
          <div class="container__header__content">
            <h1>Welcome.</h1>
            <p>Millions of movies, TV shows and people to discover. Explore now.</p>
          </div>
          <input type="search" placeholder="Search" />
        </header>
      </article>
    </>


  }
}

export default Header;

// <img src="./512x512bb-removebg-preview.png" alt="Company Logo" />
// <div className="menu-toggle" id="mobile-menu">
//   <span className="bar"></span>
//   <span className="bar"></span>
//   <span className="bar"></span>
// </div>