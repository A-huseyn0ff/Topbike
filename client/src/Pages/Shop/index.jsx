import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './Shop.scss'
import { IoIosArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
const Shop = () => {
  const [shop, setShop] = useState([]);
  const [grid, setgrid] = useState(4)




  function handlegrid3() {
    setgrid(3)
  }
  function handlegrid4() {
    setgrid(4)
  }
  function handlegrid5() {
    setgrid(5)
  }
  function handlegrid2() {
    setgrid(2)
  }
  useEffect(() => {
    const fetchShop = async () => {
      try {
        const res = await fetch("http://localhost:3169/products");
        const jsonShop = await res.json();
        setShop(jsonShop);
      } catch (error) {
        console.error("Error fetching  data:", error);
      }
    };

    fetchShop();
  }, []);
  return (
    <>
{/* {shop.map((item)=>
  item.design.map((y)=>{
    
      {y.productsec.map((x,xindex)=>(
        <div className='Productssec' key={xindex}>
        <img src={x.image} alt="" />
<div className='title'>     
<h2>{x.title}</h2>
<div className='shop_nav'>
  <Link to="/">Home</Link>
  <IoIosArrowForward/>
  <p>{x.title}</p>
</div>
</div>  
        
        </div>
      ))}
    {y.salesec.map(((z,zindex)=>(
<div></div>
  )))}
})
)} */}
 {shop.map((item) =>(
  <>
        {item.design.map((y) => (
          <div key={y.title} className='design'>
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
                  <a href='#'>{z.btn}</a>
                </div>
              </div>
            ))}
          </div>
        ))}
        <section className='shop_products'>
          <div className='product_row' style={{ gridTemplateColumns: `repeat(${grid}, 1fr)` }}>
        {item.BikeAccessories.map((acc,accIndex)=>(
          <div className='product_col' key={accIndex}>
          <div className='product_img'>
          <img src={acc.images[0]} alt="" />
          {acc.oldprice && <span>SALE</span>}
          <div className='products_nav'>
              <a href="" className='heart'>
                  <FaRegHeart />
              </a>
              <a href="" className='bag'>
                  <SlBag/>
              </a>
              <a href="" className='search'>
                  <FiSearch/>
              </a>
          </div>
          </div>
          <p>{acc.productName}</p>
          <div className='prices'>
              <h1 style={{color:'#ffab00'}}>{acc.newprice}</h1>
              <del style={{color:'#979797'}}>{acc.oldprice}</del>
          </div>
      </div>
          ))}
           {item.bicycles.map((datas,dataIndex)=>(
            <div className='product_col' key={dataIndex}>
                <div className='product_img'>
                <img src={datas.images[0]} alt="" />
                {datas.oldprice && <span>SALE</span>}
                <div className='products_nav'>
                    <a href="" className='heart'>
                        <FaRegHeart />
                    </a>
                    <a href="" className='bag'>
                        <SlBag/>
                    </a>
                    <a href="" className='search'>
                        <FiSearch/>
                    </a>
                </div>
                </div>
                <p>{datas.productName}</p>
                <div className='prices'>
                    <h1 style={{color:'#ffab00'}}>{datas.newprice}</h1>
                    <del style={{color:'#979797'}}>{datas.oldprice}</del>
                </div>
            </div>
        ))}
         {item.Helmet.map((hel,helIndex)=>(
            <div className='product_col' key={helIndex}>
                <div className='product_img'>
                <img src={hel.images[0]} alt="" />
                {hel.oldprice && <span>SALE</span>}
                <div className='products_nav'>
                    <a href="" className='heart'>
                        <FaRegHeart />
                    </a>
                    <a href="" className='bag'>
                        <SlBag/>
                    </a>
                    <a href="" className='search'>
                        <FiSearch/>
                    </a>
                </div>
                </div>
                <p>{hel.productName}</p>
                <div className='prices'>
                    <h1 style={{color:'#ffab00'}}>{hel.newprice}</h1>
                    <del style={{color:'#979797'}}>{hel.oldprice}</del>
                </div>
            </div>
        ))}
        </div>
        </section>
        
</>
))}
    </>
  )
}

export default Shop