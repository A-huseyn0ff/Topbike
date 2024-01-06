import React, { useEffect, useState } from 'react'
import './news.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper/modules";
const News = () => {
    const [News, setNews] = useState([]);

    useEffect(() => {
      const fetchNews = async () => {
        try {
          const res = await fetch("http://localhost:3169/navbar");
          const jsonNews = await res.json();
          setNews(jsonNews);
        } catch (error) {
          console.error("Error fetching  data:", error);
        }
      };
      fetchNews();
    }, []);
  return (
    <>
{News.map((item,index)=>(
    <section className='news' key={index}>
        <h2>LATEST NEWS</h2>
        <Swiper
 
  slidesPerView={2}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  loop={true}
  modules={[Pagination,Autoplay]}
  className="myNews"
>
        {item.info.map((news,newsindex)=>(
            
 
  <SwiperSlide className='slider' key={newsindex}>
    <div className='news_img'>
  <img src={news.image} alt="" />
  <div className='date'>
    <p style={{fontWeight:'700'}}>{news.date[0]}</p>
<span></span>
    <p style={{fontSize:'14px'}}>{news.date[1]}</p>
  </div>
  </div>
  <div className='news_txt'>
    <p>{news.news}</p>
    <h3>{news.title}</h3>
    <p>{news.subtitle}</p>
    <a href="">{news.btn}</a>
  </div>
  </SwiperSlide>
  


   


   

        ))}
        </Swiper> 
    </section>
))}
    </>
  )
}

export default News