import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { wihlsitAdd, wihlistDelete } from '../Wishlist/wishlistSlice'; 
import { FaRegHeart } from 'react-icons/fa';
import './details.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Mousewheel } from "swiper/modules";
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Add state for the selected image index
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

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      {productDetails && productDetails.map((item, index) => (
        <section className="ProductDetails" key={index}>
          
          <div className="ProductDetails_container">
          <div className='home_name'>
<Link to={'/'}>Home</Link> / <p>{item.productName}</p>
          </div>
           
           <div className="productDetails_img">
              <Swiper
                 direction={"vertical"}
                 slidesPerView={3}
                 spaceBetween={30}
                 mousewheel={true}
                 modules={[Mousewheel]}
                className="myDetails"
              >
                {item.images.map((image, imgIndex) => (
                  <SwiperSlide
                    key={imgIndex}
                    className={`selected_img ${selectedImageIndex === imgIndex ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(imgIndex)}
                  >
                    <img src={image} alt={item.productName} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className='main_img'>
                <img src={item.images[selectedImageIndex]} alt={item.productName} />
                {item.oldprice && <span>SALE</span>}
              </div>
            </div>
          

            <div className="productDetails_info">
              <h2 className="title">
                {item.productName}
                <a
                  onClick={() => handleWishlistToggle(item)}
                  className={`heart ${isProductInWishlist(item._id) ? 'active' : ''}`}
                >
                  <FaRegHeart />
                </a>
              </h2>
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

