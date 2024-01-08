// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { FaRegHeart } from 'react-icons/fa';
// // import { useParams } from 'react-router-dom';


// const Details = () => {
//     // const { id }=useParams()
//     const [detail, setDetails] = useState([]);
//     const wishlistItems = useSelector((state) => state.wishlist.value);
//     useEffect(() => {
//         const fetchDetail = async () => {
//           try {
//             const res = await fetch(`http://localhost:3169/products`);
//             const jsonDetail = await res.json();
//             setDetails(jsonDetail);
//           } catch (error) {
//             console.error('Error fetching data:', error);
//           }
//         };
       
          
//         fetchDetail();
//       }, []);

//       const isProductInWishlist = (productId) => {
//         return wishlistItems.some((item) => item._id === productId);
//       };
    
    
    
//       const handleWishlistToggle = (product) => {
//         if (isProductInWishlist(product._id)) {
//           dispatch(wihlistDelete(product));
//         } else {
//           dispatch(wihlsitAdd(product));
//         }
//       };
//   return (
//     <>
//  {detail.map((item, index) => (
//         <section className="NewProducts" key={index}>
//           <div className="NewProducts_container">
//             dsakd
//             {item.allproducts.map((x, xid) => (
//               <div className="product_row" key={xid}>
               
//                   {x.productlar.map((datas, dataIndex) => (
//                     <div className="product_col" key={dataIndex}>
//                       <div className="product_img">
//                         <img src={datas.images[0]} alt="" />
//                         {datas.oldprice && <span>SALE</span>}
//                         <div className="products_nav">
//                           <a
//                             onClick={() => handleWishlistToggle(datas)}
//                             className={`heart ${isProductInWishlist(datas._id) ? 'active' : ''}`}
//                           >
//                             <FaRegHeart />
//                           </a>
                          
//                         </div>
//                       </div>
//                       <p>{datas.productName}</p>
//                       <div className="prices">
//                         <h1 style={{ color: '#ffab00' }}>{datas.newprice}</h1>
//                         {datas.oldprice && <del style={{ color: '#979797' }}>{datas.oldprice}</del>}
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}

// {/* {detail.map((item, index) => (
//         <section className="ProductDetails" key={index}>
//           <div className="ProductDetails_container">
//             <h2 className="title">{item.productName}</h2>
//             <div className="productDetails_img">
//               <img src={item.images[0]} alt={item.productName} />
//               {item.oldprice && <span>SALE</span>}
//               <div className="productDetails_nav">
//                 <a
//                   onClick={() => handleWishlistToggle(item)}
//                   className={`heart ${isProductInWishlist(item._id) ? 'active' : ''}`}
//                 >
//                   <FaRegHeart />
//                 </a>
//               </div>
//             </div>
//             <p>{item.about}</p>
//             <div className="productDetails_prices">
//               <h1 style={{ color: '#ffab00' }}>{item.newprice}</h1>
//               {item.oldprice && <del style={{ color: '#979797' }}>{item.oldprice}</del>}
//             </div>
//           </div>
//         </section>
//       ))} */}
    
//     </>
//   )
// }

// export default Details



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { wihlsitAdd, wihlistDelete } from '../Wishlist/wishlistSlice'; 
import { FaRegHeart } from 'react-icons/fa';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState(null);
  const wishlistItems = useSelector((state) => state.wishlist.value);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`http://localhost:3169/products/productlar/${id}`);
        const jsonDetail = await res.json();
        setProductDetails(jsonDetail);
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
    <div>
      {productDetails ? (
        <section className="ProductDetails" key={productDetails._id}>
          <div className="ProductDetails_container">
            <h2 className="title">{productDetails.productName}</h2>
            <div className="productDetails_img">
              <img src={productDetails.images[0]} alt={productDetails.productName} />
              {productDetails.oldprice && <span>SALE</span>}
              <div className="productDetails_nav">
                <a
                  onClick={() => handleWishlistToggle(product)}
                  className={`heart ${isProductInWishlist(item._id) ? 'active' : ''}`}
                >
                  <FaRegHeart />
                </a>
              </div>
            </div>
            <p>{productDetails.about}</p>
            <div className="productDetails_prices">
              <h1 style={{ color: '#ffab00' }}>{productDetails.newprice}</h1>
              {productDetails.oldprice && <del style={{ color: '#979797' }}>{productDetails.oldprice}</del>}
            </div>
          </div>
        </section>
      ):<></>}
    </div>
  );
};

export default Details;
