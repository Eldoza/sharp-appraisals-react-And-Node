import React, { Component } from 'react'
import styles from './coverage.css'
import Aux from 'react-aux'
import CoverageMap from '../../images/Coverage_Area.png'
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
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=201%20S.%20Bell%20Blvd%20Cedar%20Park%20TX%2078613+(Sharp%20Appraisers%20LLC)&amp;ie=UTF8&amp;t=&amp;z=9&amp;iwloc=B&amp;output=embed"
              />
            </div>
            <div className={ styles.countyContainer}>
            <img
              alt='Coverage Map'
              className={ styles.coverageMap }
              src={ CoverageMap }
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
              201 S. Bell Blvd, Suite 109 <br />
              Cedar Park, TX 78613 <br />
              (512)337-7410
            </div>
      </div>
     </Aux> 
    )
  }
}

export default Coverage
