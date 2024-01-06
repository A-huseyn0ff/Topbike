import React from 'react'
import Header from '../../Components/HomeComponents/Header'
import Shopify from '../../Components/HomeComponents/Shopify'
import NewProducts from '../../Components/HomeComponents/NewProducts'
import ExpiresIn from '../../Components/HomeComponents/ExpiresIn'
import FilteredProducts from '../../Components/HomeComponents/FilterProducts'
import News from '../../Components/HomeComponents/News'

const Home = () => {
  return (
    <>
    <Header></Header>
    <Shopify></Shopify>
    <NewProducts></NewProducts>
    <ExpiresIn></ExpiresIn>
    <FilteredProducts></FilteredProducts>
    <News></News>
    </>
  )
}

export default Home