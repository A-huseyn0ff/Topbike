import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { IoClose } from "react-icons/io5"; 
import { FaRegTrashAlt } from "react-icons/fa";
import { basketDecrement, basketDelete, basketDeleteAll, basketIncrement } from '../../Components/Basket/BasketSlice.jsx';
import { useDispatch, useSelector } from "react-redux";
import { wihlistDelete } from '../../Components/Wishlist/wishlistSlice';
const Navbar = () => {
  const [navData, setNavData] = useState([]);
  const [scrollDown, setScrollDown] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false); 
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const WishlistArr = useSelector((state) => state.wishlist.value)
  const basketArr = useSelector((state) => state.basket.value)
  const dispatch = useDispatch()
  const location = useLocation();

  let subTotal = 0;

  basketArr.forEach((item) => {
    subTotal += parseFloat(item.newprice.replace(/[^0-9.-]+/g, '')) * item.count;
  });
  
  const formattedSubTotal = `$${subTotal.toFixed(2)}`;

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

  
  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };
  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };
  return (
    <>
      {navData.map((item, index) => (
        <>
        {/* <iframe src="https://player.vimeo.com/video/203552982?background=1&amp;quality=1080p&amp;loop=1" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe> */}
          <nav key={index} className={`${scrollDown ? 'scrolled' : ''} ${location.pathname.startsWith('/details/') || location.pathname.startsWith('/*')  ?  'navactive' : ''}`}>
            <div className="nav_container">
              <Link to={"/"} className="logo">
                {" "}
                <img src={item.logo} alt="logo" />{" "}
              </Link>
              
              <ul className="dropdown">
                {item.links.map((link, linkIndex) => (
                  <li>
                    <Link to={link.url} key={linkIndex} className="main_nav">
                      {link.text}
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
                          <path
                            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
                          ></path>
                        </svg>
                        <p>{link.hot}</p>
                      </span>
                    )}
                    </Link>
                    {link.dropdown ? (
                
                <>
                
                </>
              ) : (
               
                <Link to={link.url}>{link.text}</Link>
              )}
                   
                    {link.text === "Home" ? 
          (
            
            <>
           
          
              {link.dropdown && (
                <div className="dropdown_container">
                  {link.dropdown.map((dropdownItem, dropdownIndex) => (
                    <ul key={dropdownIndex} className="home_dropdown">
                      <img src={dropdownItem.img} alt="" />
                      <Link to={dropdownItem.url}>{dropdownItem.title}</Link>
                    </ul>
                  ))}
                </div>
              )}
            </>
          )
          
                      : (
          <>
            
          </>
        )}
          {link.text === "Shop" ? 
          (
            
            <>
           
          
              {link.dropdown && (
                <div className="dropdown_container_2">
                  {link.dropdown.map((dropdownItem,dropdownid) => (
                    <>
                   <ul key={dropdownid} className="shop_dropdown" style={{listStyleType:'none'}}>
<Link to={dropdownItem.url} >{dropdownItem.title}
</Link>

                    {dropdownItem.list.map((i,id)=>(
                     
                      <li style={{position:'relative',width:'140px',color: '#6e6e6e',fontSize:'16px',marginTop:'20px'}}>
                      {i.navtitle}
                      {i.hot && (
                      <span className="hot_dropdown">
                        <svg
                          stroke="currentColor"
                          fill="#e62e05"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
                          ></path>
                        </svg>
                        <p>{i.hot}</p>
                      </span>
                    )}
                     {i.new && (
                      <span className="new_dropdown">
                        <svg
                          stroke="currentColor"
                          fill="#28a745"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
                          ></path>
                        </svg>
                        <p>{i.new}</p>
                      </span>
                    )}
                      </li>
                    
                    ))}
                    
                    
                    </ul>
                  {dropdownItem.img ?   <img src={dropdownItem.img} alt="" /> : <></>}
                    </>
                  ))}
                  
                </div>
              )}
            </>
          )
          
                      : (
          <>
            
          </>
        )}
        {link.text === "Featured" ? 
          (
            
            <>
           
          
              {link.dropdown && (
                <div className="dropdown_container_3">
                  {link.dropdown.map((dropdownItem,dropdownid) => (
                    <>
                     {dropdownItem.img ?   <iframe src={dropdownItem.img} frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>  : <></>}
                  
                  <ul key={dropdownid} className="featured_dropdown" style={{listStyleType:'none'}}>
<Link to={dropdownItem.url} >{dropdownItem.title}
</Link>

                    {dropdownItem.list.map((i,id)=>(
                     
                      <li style={{position:'relative',width:'140px',color: '#6e6e6e',fontSize:'16px',marginTop:'20px'}}>
                      {i.navtitle}
                      {i.hot && (
                      <span className="hot_dropdown">
                        <svg
                          stroke="currentColor"
                          fill="#e62e05"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
                          ></path>
                        </svg>
                        <p>{i.hot}</p>
                      </span>
                    )}
                     {i.new && (
                      <span className="new_dropdown">
                        <svg
                          stroke="currentColor"
                          fill="#28a745"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
                          ></path>
                        </svg>
                        <p>{i.new}</p>
                      </span>
                    )}
                      </li>
                    
                    ))}
                    
                    
                    </ul>
                 
                 
                    </>
                  ))}
                  
                </div>
              )}
            </>
          )
          
                      : (
          <>
            
          </>
        )}
        {link.text === "Pages" ? 
          (
            
            <>
           
          
              {link.dropdown && (
                <div className="dropdown_container_4">
                  {link.dropdown.map((dropdownItem,dropdownid) => (
                    <>
                     {dropdownItem.img ?   <iframe src={dropdownItem.img} frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>  : <></>}
                  
                  <ul key={dropdownid} className="pages_dropdown" style={{listStyleType:'none'}}>
<Link to={dropdownItem.url} >{dropdownItem.title}
</Link>

                    {dropdownItem.list.map((i,id)=>(
                     
                      <li style={{position:'relative',width:'140px',color: '#6e6e6e',fontSize:'16px',marginTop:'20px'}}>
                      <Link to={i.url}>{i.navtitle}</Link>
                      {i.hot && (
                      <span className="hot_dropdown">
                        <svg
                          stroke="currentColor"
                          fill="#e62e05"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
                          ></path>
                        </svg>
                        <p>{i.hot}</p>
                      </span>
                    )}
                     {i.new && (
                      <span className="new_dropdown">
                        <svg
                          stroke="currentColor"
                          fill="#28a745"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
                          ></path>
                        </svg>
                        <p>{i.new}</p>
                      </span>
                    )}
                      </li>
                    
                    ))}
                    
                    
                    </ul>
                 
                 
                    </>
                  ))}
                  
                </div>
              )}
            </>
          )
          
                      : (
          <>
            
          </>
        )}
                  </li>



                ))}
              </ul>
              
              <div className="icons">
                <FiSearch />
                
                <FaRegUser />
                {WishlistArr.length > 0 && <span className="wishlistnew"></span>}
                <FaRegHeart onClick={toggleWishlist} style={{cursor:'pointer'}} /> 
                <SlBag onClick={toggleBasket} style={{cursor:'pointer'}}/>
                {basketArr.length > 0 && <span className="basketnew"></span>}
              </div>
            </div>
          </nav>
         
          {isWishlistOpen && (
            <>
            <div className="wishlist">
            </div>
            <div className="wishlist_container" >
              <div className="wishlist_top">
                <IoClose className="close" onClick={toggleWishlist} /> 
                <h2>My Wishlist</h2>
                <span>{WishlistArr.length}</span>
              </div>
              <div className="wishlist_middle">
              {
                        WishlistArr && WishlistArr.map((item)=>(
                            <div className='wishlistCard'>
                                <div className='cardImage'>
                                    <img src={item.images[0]} alt="" />
                                </div>
                                <div className='cardText'>
                                    <h3>{item.productName}</h3>
                                    <p className='price'>{item.newprice} </p>
                                
                                </div>
                                
                                        
                                       <div className="cardBtns">
                                       <FaRegTrashAlt onClick={()=>dispatch(wihlistDelete(item))} style={{cursor:'pointer'}}>
                                       
                                        </FaRegTrashAlt>
                                       </div>
                                   
                                
                               
                            </div> 
                        ))
                    }
           
              </div>
            </div>
            </>
          )}
          {isBasketOpen && (
            <>
            <div className="wishlist">
            </div>
            <div className="wishlist_container" >
              <div className="wishlist_top">
                <IoClose className="close" onClick={toggleBasket} /> 
                <h2>My Basket</h2>
                <span>{basketArr.length}</span>
              </div>
              <div className="wishlist_middle">
              {
                        basketArr && basketArr.map((item)=>(
                          <>
                            <div className='wishlistCard'>
                                <div className='cardImage'>
                                    <img src={item.images[0]} alt="" />
                                </div>
                                <div className='cardText'>
                                    <h3>{item.productName}</h3>
                                    <h3>QRT:{item.count}</h3>
                                    <p className='price'>{item.newprice} </p>
                                </div>
                                
                                        
                                       <div className="cardBtns">
                                       <div className="counter">
                  <button onClick={() => dispatch(basketIncrement(item))}>+</button>
                  <span>{item.count}</span>
                  <button onClick={() => dispatch(basketDecrement(item))} >
                    -
                  </button>
                  </div>
                                       <FaRegTrashAlt onClick={()=>dispatch(basketDelete(item))} style={{cursor:'pointer'}}>
                                      
                                        </FaRegTrashAlt>
                                       </div>
                                   
                                
                               
                            </div> 
                           
                            </>
                        ))
                       
                    }
            
              </div>
              <div className="Total">
        <h2>Total:</h2>
        <span>{formattedSubTotal}</span>
      </div>
              <div className="wishlistbottom">
                        <button className="viewcart">VIEW CART</button>
                        <button onClick={() => dispatch(basketDeleteAll())} className="deleteall">DELETE ALL</button>
                      </div>
            </div>
            </>
          )}
       
        </>
      ))}
    </>
  );
};

export default Navbar;
