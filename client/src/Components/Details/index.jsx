import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { wihlsitAdd, wihlistDelete } from '../Wishlist/wishlistSlice'; 
import { FaRegHeart } from 'react-icons/fa';
import './details.scss'
import "swiper/css";
import { Swiper,SwiperSlide } from 'swiper/react';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState([]);
  const wishlistItems = useSelector((state) => state.wishlist.value);

 
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`http://localhost:3169/products/productlar/${id}`);
        const jsonDetail = await res.json();
  
       
        const productArray = Array.isArray(jsonDetail) ? jsonDetail : [jsonDetail];
  
        
        setProductDetails(productArray);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
  
    fetchDetail();
  }, [id]);
  
  const isProductInWishlist = (productId) => {
    return wishlistItems.some((item) => item._id === productId);
  };

  const handleWishlistToggle = (product) => {
    if (isProductInWishlist(product._id)) {
      dispatch(wihlistDelete(product));
    } else {
      dispatch(wihlsitAdd(product));
    }
  };

  return (
    <>
      {productDetails && productDetails.map((item,index)=>(
        <section className="ProductDetails" key={index}>
          <div className="ProductDetails_container">
            
            <div className="productDetails_img">
            <Swiper
      slidesPerView={3}
      spaceBetween={10}
        className="myDetails"
      >
         {item.images[0] && <SwiperSlide className='selected_img'> <img src={item.images[0]} alt={item.productName} /></SwiperSlide>}
  {item.images[1] && <SwiperSlide className='selected_img'> <img src={item.images[1]} alt={item.productName} /></SwiperSlide>}
  {item.images[2] && <SwiperSlide className='selected_img'><img src={item.images[2]} alt={item.productName} /></SwiperSlide>}
  {item.images[3] && <SwiperSlide className='selected_img'><img src={item.images[3]} alt={item.productName} /></SwiperSlide>}
  {item.images[4] && <SwiperSlide className='selected_img'><img src={item.images[4]} alt={item.productName} /></SwiperSlide>}
  {item.images[5] && <SwiperSlide className='selected_img'><img src={item.images[5]} alt={item.productName} /></SwiperSlide>}
  {item.images[6] && <SwiperSlide className='selected_img'><img src={item.images[6]} alt={item.productName} /></SwiperSlide>}
  {item.images[7] && <SwiperSlide className='selected_img'><img src={item.images[7]} alt={item.productName} /></SwiperSlide>}
      </Swiper>
              <div className='main_img'>
              <img src={item.images[0]} alt={item.productName} />
              {item.oldprice && <span>SALE</span>}
              </div>
            </div>
            
            <div className="productDetails_info">
            <h2 className="title">{item.productName}     <a
                  onClick={() => handleWishlistToggle(item)}
                  className={`heart ${isProductInWishlist(item._id) ? 'active' : ''}`}
                >
                  <FaRegHeart />
                </a></h2>
            <div className='prices'>
            {item.oldprice && <del style={{ color: '#979797' }}>{item.oldprice} USD</del>}
              <h1 style={{ color: '#ffab00' }}>{item.newprice} USD</h1>
              
              </div>

                <p>{item.about}</p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Details;
