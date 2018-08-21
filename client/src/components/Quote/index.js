import React, { Component } from 'react'
import styles from './Quote.css'
import Aux from 'react-aux'

class Quote extends Component {

  render () {
    return (
      <Aux>
      <div className={ styles.container }>
          this is the quote page
      </div>
     </Aux> 
    )
  }
}

export default Quote
