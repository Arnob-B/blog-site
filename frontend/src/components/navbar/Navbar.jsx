import React from 'react';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar bg-slate-500">
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#create">Create</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#create" onClick={() => setToggleMenu(false)}>Create</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;