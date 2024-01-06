import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
const Navbar = () => {
  const [navData, setNavData] = useState([]);
  const [scrollDown, setScrollDown] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollDown(scrollPosition > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const res = await fetch("http://localhost:3169/navbar");
        const jsonNavData = await res.json();
        setNavData(jsonNavData);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      }
    };

    fetchNavbarData();
  }, []);

  return (
    <>
      {navData.map((item, index) => (
        <nav key={index} className={scrollDown ? 'scrolled' : ''}>
          <div className="nav_container">
            <Link to={"/"} className="logo">
              {" "}
              <img src={item.logo} alt="logo" />{" "}
            </Link>
            <ul>
              {item.links.map((link, linkIndex) => (
                <li>
                  <Link to={link.url} key={linkIndex}>
                    {link.text}
                    
                  </Link>
                  {link.hot && (
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="#e62e05"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                          
                        >
                          <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z" 
                          ></path>
                        </svg>
                        <p>{link.hot}</p>
                      </span>
                    )}
                </li>
              ))}
            </ul>
            <div className="icons">
            <FiSearch/>
            <FaRegUser />
            <FaRegHeart/>
            <SlBag/>
            </div>
            
          </div>
        </nav>
      ))}
    </>
  );
};

export default Navbar;
