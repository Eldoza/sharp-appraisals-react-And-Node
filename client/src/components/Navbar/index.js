import React, { Component } from 'react'

import { NavLink as Link } from 'react-router-dom'
import styles from './Navbar.css'

class Navbar extends Component {


  render () {
    return (
        <ul className={styles.container}>
          <li className={styles.mainHeader  }>
            Sharp Appraisers
          </li>

          <li className={ styles.header }>
            <Link className={ styles.link } to={'/'} >
              Home
            </Link>
          </li>
          <li className={ styles.header }>
            <Link className={ styles.link } to={'/Homeowner'} >
              Homeowner
            </Link>
          </li>
          {/* <li className={ styles.header }>
            <Link className={ styles.link } to={'/Homebuyer'} >
              Homebuyer
            </Link>
          </li> */}
          <li className={ styles.header }>
            <Link className={ styles.link } to={'/Quote'}>
              Quote
            </Link>
          </li>
          <li className={ styles.header }>
            <Link className={ styles.link } to={'/Order'}>
              Order
            </Link>
          </li>
          <li className={ styles.header }>
            <Link className={ styles.link } to={'/Coverage'}>
              Coverage
            </Link>
          </li>
          {/* <li className={ styles.header }>
            <Link className={ styles.link } to={'/Contact'}>
              Contact
            </Link>
          </li>
          <li className={ styles.header }>
            <Link className={ styles.link } to={'/About'}>
              About
            </Link>
          </li> */}
        </ul>
    )
  }
}

export default Navbar
