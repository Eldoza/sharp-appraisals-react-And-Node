import React, { Component } from 'react'
import styles from './Quote.css'

class Quote extends Component {

  render () {
    return (
      <div className={ styles.container }>
        <div className={ styles.hero }>
          <div className={ styles.text}>
            Hi this be the quote page
          </div>
        </div>
    </div>
    )
  }
}

export default Quote
