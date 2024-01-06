import React, { useEffect, useState } from 'react'
import './footer.scss'
import { FaTwitter } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { ImBehance } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const res = await fetch("http://localhost:3169/navbar");
        const jsonFooter = await res.json();
        setFooter(jsonFooter);
      } catch (error) {
        console.error("Error fetching expire data:", error);
      }
    };

    fetchFooter();
  }, []);
  return (
    <>
{footer.map((item,index)=>(
<footer key={index}>
  <div className='footer_top'>
    <div className='footer_row'>
    {item.footer.map((foot)=>(
      <>
      
{foot.logopart.map((x,xid)=>(
<div className='footer_logo' key={xid}>
  <img src={x.logo} alt="" />
  <p>{x.parag}</p>
  <div className='logos'>
  <FaTwitter style={{fontSize:'24px'}}/>
  <IoBasketballOutline style={{fontSize:'24px'}}/>
  <ImBehance style={{fontSize:'24px'}}/>
  <FaInstagram style={{fontSize:'24px'}}/>
  </div>
</div>
))}
  {foot.nav.map((y,yid)=>(
    <div className='footer_col' key={yid}>
   <h2>{y.title} </h2>
   <span></span>
   <ul className='footer_nav'>
      {y.navigate.map((navItem, navItemId) => (
        <li key={navItemId}>{navItem}</li>
      ))}
    </ul>
  </div>
  ))}    
     
      </>
    ))}
    </div>
  </div>
  <div className='footer_down'>
    <p>© Copyright 2020 | TopBike By EngoTheme. Powered by Shopify.</p>
    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/payment.png?v=1613576066" alt="" />
  </div>
</footer>
))}
    </>
  )
}

export default Footer