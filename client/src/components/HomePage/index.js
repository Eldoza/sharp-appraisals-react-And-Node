import React, { Component } from 'react'

import { Fade } from 'react-slideshow-image';
import image1 from '../../images/Cedar_park_home.png'
import image2 from '../../images/Cedar_park_home_interior_1.png'
// import image3 from '../../images/Cedar_park_home_3.jpg'
// import image4 from '../../images/Cedar_park_home_2_interior.jpg'
// import image5 from '../../images/Cedar_park_home_2.png'
import styles from './HomePage.css'

const images = [
  image1,
  '../../components/images/Cedar_park_home_interior_1.png',
  // '../../images/Cedar_park_home_3.jpg',
  // '../../images/Cedar_park_home_2_interior.jpg',
  // '../../images/Cedar_park_home_2.png'
]



class HomePage extends Component {

  

  render() {
    const divStyle = {
      backgroundImage: 'url(' + image1 + ')',
      height: '800px',
      width: '100%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }
    return (
      <div style={ divStyle }>
      </div>
    )
  }
}

export default HomePage
