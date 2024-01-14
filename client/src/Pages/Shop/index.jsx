import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.scss";
import { Helmet } from "react-helmet";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import grider from "../../Assets/Screenshot 2024-01-06 044811.png";
import { useSelector, useDispatch } from 'react-redux';
import { basketAdd, basketDelete } from '../../Components/Basket/BasketSlice';
import { wihlsitAdd, wihlistDelete } from '../../Components/Wishlist/wishlistSlice';
const Shop = () => {
  const [shop, setShop] = useState([]);
  const [grid, setGrid] = useState(4);
  const [current, setCurrent] = useState(1);
  const [pagePerData] = useState(12);
  const wishlistItems = useSelector((state) => state.wishlist.value);
  const basketItems = useSelector((state) => state.basket.value);
  const dispatch = useDispatch();
  const pagenum = [];
  for (let i = 1; i <= Math.ceil(shop.length / pagePerData); i++) {
    pagenum.push(i);
  }

  const lastElement = current * pagePerData;
  const firstElement = lastElement - pagePerData;

  const pagedatas = useMemo(
    () => shop.slice(firstElement, lastElement),
    [shop, current]
  );
  
  const handleGridChange = (value) => {
    setGrid(value);
  };

  useEffect(() => {
    const fetchShop = async () => {
      try {
        const res = await fetch("http://localhost:3169/products");
        const jsonShop = await res.json();
        setShop(jsonShop);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchShop();
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
    <Helmet>
      <title>
    Products – TopBike - Bike Store Responsive Shopify Theme
  </title>
    </Helmet>
      {pagedatas.map((item, index) => (
        <div key={index} className="shop-container">
          {item.design.map((y) => (
            <div key={y.title} className="design">
              {y.productsec.map((x, xindex) => (
                <div key={xindex} className="Productssec">
                  <img src={x.image} alt="" />
                  <div className="title">
                    <h2>{x.title}</h2>
                    <div className="shop_nav">
                      <Link to="/">Home</Link>
                      <IoIosArrowForward />
                      <p>{x.title}</p>
                    </div>
                  </div>
                </div>
              ))}
              {y.salesec.map((z, zindex) => (
                <div key={zindex} className="Salesec">
                  <img src={z.image} alt="" />
                  <div className="title">
                    <h2>{z.title}</h2>
                    <p>{z.subtitle}</p>
                    <a href="#">{z.btn}</a>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <section className="shop_products">
            <div className="category_container">
              <div className="filter_container">
                <div className="filter">
                  <CiFilter className="icon" />
                  <p>FILTER</p>
                </div>
              </div>
              <div className="sort_container">
                <div className="sort">
                  <button onClick={() => handleGridChange(2)}>2</button>
                  <button onClick={() => handleGridChange(3)}>3</button>
                  <button onClick={() => handleGridChange(4)}>4</button>
                  <button onClick={() => handleGridChange(5)}>5</button>
                  <img src={grider} alt="" />
                  <select name="" id="" className="sort_select">
                    <option value="Select">Featured</option>
                    <option value="Best Selling">Best Selling</option>
                    <option value="Alphabetically, A-Z">
                      Alphabetically, A-Z
                    </option>
                    <option value="Price, high to low">
                      Price, high to low
                    </option>
                    <option value="Price, low to high">
                      Price, low to high
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div
              className="product_row"
              style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}
            >
              {item.allproducts.map((pro) =>
                pro.productlar.map((datas, dataIndex) => (
                  <div className="product_col" key={dataIndex}>
                    <div className="product_img">
                      <img src={datas.images[0]} alt="" />
                      {datas.oldprice && <span>SALE</span>}
                      <div className="products_nav">
                        <a  onClick={() => handleWishlistToggle(datas)}
                            className={`heart ${isProductInWishlist(datas._id) ? 'active' : ''}`}>
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
                      <h1 style={{ color: "#ffab00" }}>{datas.newprice}</h1>
                      {datas.oldprice && (
                        <del style={{ color: "#979797" }}>{datas.oldprice}</del>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="pagination">
              {pagenum.map((page) => (
                <button key={page} onClick={() => setCurrent(page)}>
                  {page}
                </button>
              ))}
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default Shop;
