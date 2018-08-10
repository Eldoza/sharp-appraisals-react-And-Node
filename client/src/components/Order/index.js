import React, { Component } from 'react'
import styles from './Order.css'
class Order extends Component {

  render () {
    return (
      <div className={ styles.container }>
        <div className={ styles.hero }>
          <div className={ styles.text}>
            Hi this be the homeowner order page son!
          </div>
        </div>
    </div>
    )
  }
}

export default Order
