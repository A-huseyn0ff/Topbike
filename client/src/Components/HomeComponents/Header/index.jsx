import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './Header.scss'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
const Header = () => {
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
    {navData.map((item,index)=>(
        <Swiper pagination={{
          clickable: true,
        }} 
        
         navigation={true} loop={true} modules={[Pagination,Navigation]} className="mySwiper" key={index} >
       {item.header.map((header,headerIndex)=>(
        <>
         <SwiperSlide className='col' key={headerIndex}>
            <img src={header.image} alt="" />
<div className='header_txt'>
    <h1>{header.title}</h1>
    <h3>{header.subtitle}</h3>
    <a href="">{header.btn}</a>
</div>
         </SwiperSlide>
         {/* <SwiperSlide className='col'>Slide 2</SwiperSlide> */}
         </>
       ))}
        </Swiper>
    ))
}
    </>
  )
}

export default Header