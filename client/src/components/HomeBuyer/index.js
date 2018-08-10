import React, { Component } from 'react'
import styles from './Homebuyer.css'
class HomeBuyer extends Component {

  render () {
    return (
      <div className={ styles.container }>
        <div className={ styles.hero }>
          <div className={ styles.text}>
            Hi this is the homebuyer page
          </div>
        </div>
    </div>
    )
  }
}

export default HomeBuyer
