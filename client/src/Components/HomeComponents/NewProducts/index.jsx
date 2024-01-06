import React, { useEffect, useState } from 'react'
import './newproducts.scss'
import { FaRegHeart } from "react-icons/fa";
import { SlBag } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
const NewProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:3169/products");
          const jsonData = await res.json();
          setProducts(jsonData);
        } catch (error) {
          console.error("Error fetching  data:", error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <>
{products.map((item,index)=>(
    <section className='NewProducts' key={index}>
        <div className='NewProducts_container'>
            <h2 className='title'>New products</h2>
            <div className='product_row'>
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
        </div>
        </div>
    </section>
))}
    </>
  )
}

export default NewProducts