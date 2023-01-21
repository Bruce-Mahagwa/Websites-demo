import { Link, useLocation } from "react-router-dom";


import { TbAlignCenter } from "react-icons/tb";
import React from "react";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [open, setOpen] = React.useState(false)
  const location = useLocation();
  let path = location.pathname;
  function togglenav() {
    setOpen((prev) => !prev);
  }
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);


  return (
    <header className = "p1-bt">
      <nav>
        <div>
          <Link to="/">
            <h2 className = "ff-medium">Bruce's Library</h2>
          </Link>
        </div>

        {Number(windowDimensions.width) < 769 && <button className={!open ? "nav-toggle" : "nav-toggle nav-disappear"} ff-medium>
          <TbAlignCenter onClick={togglenav}></TbAlignCenter>
        </button>}
      </nav>

      <div className={!open ? "nav-items" : "nav-items show-nav"}>
        <ul>
        {path === "/" && <li className = "p1 ff-small">
            <a href="#featured">Featured</a>
          
          </li>}

          <li className = "p1 ff-small">
            <Link to="/genres">
              Genres
            </Link>
          </li>

          <li className = "p1 ff-small">
            <Link to="/about">
              About us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default NavBar;