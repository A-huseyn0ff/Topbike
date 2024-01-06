import React, { useEffect, useState } from 'react'
import './filteredproducts.scss'
const FilteredProducts = () => {
    const [filter, setfilter] = useState([]);

  useEffect(() => {
    const fetchfilter = async () => {
      try {
        const res = await fetch("http://localhost:3169/navbar");
        const jsonfilter = await res.json();
        setfilter(jsonfilter);
      } catch (error) {
        console.error("Error fetching expire data:", error);
      }
    };

    fetchfilter();
  }, []);

  return (
    <>
{filter.map((item,index)=>(
    <section className='filter' key={index}>
        <div className='filter_container' >
    {item.filteredproducts.map((filtered,filteredindex)=>(
        
<div className='filter_col' key={filteredindex}>
    <img src={filtered.image} alt="" />
    <a href="">{filtered.title}</a>
</div>
       
    ))}
     </div>
    </section>
))}
    </>
  )
}

export default FilteredProducts