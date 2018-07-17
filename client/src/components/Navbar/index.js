import React, { Component } from 'react'

import styles from './Navbar.css'

class Navbar extends Component {

  render () {
    return (
        <ul className={styles.container}>
          <li className={styles.mainHeader}>
            Sharp Appraisers
          </li>

          <li className={ styles.header }>
            Home
          </li>
          <li className={ styles.header }>
            Homeowner
          </li>
          <li className={ styles.header }>
            Quote
          </li>
          <li className={ styles.header }>
            Order
          </li>
          <li className={ styles.header }>
            Coverage
          </li>
          <li className={ styles.header }>
            Contact
          </li>
          <li className={ styles.header }>
            About 
          </li>
        </ul>
    )
  }
}

export default Navbar
