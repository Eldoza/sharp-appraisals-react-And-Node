import React, { Component } from 'react'
import styles from './coverage.css'
import Aux from 'react-aux'
class Coverage extends Component {

  render () {
    return (
      <Aux>
      <div className={ styles.container }>
        <div className={ styles.hero }>   
          <div className={ styles.text}>
            We serve Cedar Park and the surrounding areas
          </div>
           <div className={ styles.iframeContainer}>
            <iframe 
              title="map"
              width="100%" 
              height="600" 
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=200%20Lollipop%20Lane%2C%20Cedar%20Park%20Tx+(Sharp%20Appraisers)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              />
            </div>
        </div> 
      </div>
      <div className={ styles.footer }>
        <div className={ styles.footerHeader}>
          CONTACT US
        </div>
        <div className={ styles.footerText}>
          Sharp Appraisers <br />
          200 Lollipop Lane <br />
          Cedar Park, TX 78613 <br />
          (512) 797-1844
        </div>
      </div>
     </Aux> 
    )
  }
}

export default Coverage
