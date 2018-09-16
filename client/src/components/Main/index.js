import React, { Component } from 'react';

import Navbar from '../Navbar'
import styles from './Main.css'

class Main extends Component {

  render() {
    return (
      <div className={ styles.container }>
        <Navbar />
        { this.props.children }
      </div>
    );
  }
}

export default Main;
