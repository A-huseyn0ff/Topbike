import React from 'react'
import { Link } from 'react-router-dom'
import './err.scss'
const Error = () => {
  return (
    <section className='Error'>
    <div className='err_con'>
    <h2>404</h2>
    <h1>Oops! That Page Can’t Be Found.</h1>
    <h3>THE PAGE YOU ARE LOOKING FOR DOES NOT EXITS</h3>
    <p>Please return to <Link to={'/'}>Home page</Link></p>
    </div>
    </section>
  )
}

export default Error