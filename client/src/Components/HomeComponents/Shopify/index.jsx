import React, { useEffect, useState } from 'react'
import './Shopify.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

const Shopify = () => {
    const [navData, setNavData] = useState([]);

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
<Swiper key={index}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
     
        
        className="ShopifySwiper"
      >
       {item.shopify.map((data)=>(
        <>
         <SwiperSlide className='col_shopify'>
<img src={data.image} alt="" />
<h3>{data.title}</h3>
<p>{data.subtitle}</p>
         </SwiperSlide>
         </>
       ))}
        </Swiper>
          ))}
    </>
  
  )
}

export default Shopify