import React, { useState, useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Layout/Footer';
import loading from '../Assets/82614c38823695.5770ea557a3a8.gif';

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const getRandomQueryParameter = () => {
    return `?${Math.random().toString(36).substring(2)}`;
  };

  return (
    <>
      {isLoading ? (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  width: '100%',height:'100vh', boxSizing: 'border-box' }}>
          <div style={{display:'flex',alignItems:'center',flexDirection:'column',gap:'15px'}}>
          <img src={loading + getRandomQueryParameter()} alt="Loading" style={{ width: "100%", height: "100%" }} />
          <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279" alt="" style={{width:'90%',height:'120px',paddingLeft:'50px'}}/>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;

