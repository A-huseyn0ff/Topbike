import React, { useEffect, useState } from 'react';
import './newproducts.scss';
import { FaRegHeart } from 'react-icons/fa';
import { SlBag } from 'react-icons/sl';
import { FiSearch } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { wihlsitAdd, wihlistDelete } from '../../Wishlist/wishlistSlice'; 
import { basketAdd, basketDelete } from '../../Basket/BasketSlice';
import { Link } from 'react-router-dom';

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const wishlistItems = useSelector((state) => state.wishlist.value);
  const basketItems = useSelector((state) => state.basket.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3169/products');
        const jsonData = await res.json();
        setProducts(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const isProductInWishlist = (productId) => {
    return wishlistItems.some((item) => item._id === productId);
  };

  const isProductInBasket = (productId) => {
    return basketItems.some((item) => item._id === productId);
  };

  const handleWishlistToggle = (product) => {
    if (isProductInWishlist(product._id)) {
      dispatch(wihlistDelete(product));
    } else {
      dispatch(wihlsitAdd(product));
    }
  };

  const handleBasketToggle = (product) => {
    if (isProductInBasket(product._id)) {
      dispatch(basketDelete(product));
    } else {
      dispatch(basketAdd(product));
    }
  };

  return (
    <>
      {products.map((item, index) => (
        <section className="NewProducts" key={index}>
          <div className="NewProducts_container">
            <h2 className="title">New products</h2>
            {item.allproducts.map((x, xid) => (
              <div className="product_row" key={xid}>
                {x.categoryName === 'Bicycle' &&
                  x.productlar.map((datas, dataIndex) => (
                    <div className="product_col" key={dataIndex}>
                      <div className="product_img">
                        <img src={datas.images[0]} alt="" />
                        {datas.oldprice && <span>SALE</span>}
                        <div className="products_nav">
                          <a
                            onClick={() => handleWishlistToggle(datas)}
                            className={`heart ${isProductInWishlist(datas._id) ? 'active' : ''}`}
                          >
                            <FaRegHeart />
                          </a>
                          <a
                            onClick={() => handleBasketToggle(datas)}
                            className={`bag ${isProductInBasket(datas._id) ? 'active' : ''}`}
                          >
                            <SlBag />
                          </a>
                          <Link to={`/details/${datas._id}`} className="search">
                            <FiSearch />
                          </Link>
                        </div>
                      </div>
                      <p>{datas.productName}</p>
                      <div className="prices">
                        <h1 style={{ color: '#ffab00' }}>{datas.newprice}</h1>
                        {datas.oldprice && <del style={{ color: '#979797' }}>{datas.oldprice}</del>}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default NewProducts;
