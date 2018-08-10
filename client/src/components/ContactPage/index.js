import React, { PureComponent } from 'react'
import styles from './ContactPage.css'
export class ContactPage extends PureComponent {

  render() {
    return (
      <div className={ styles.container }>
        <div className={ styles.hero }>
          <div className={ styles.text}>
           Yo this be that yung contact page
          </div>
        </div>
    </div>
    )
  }
}

export default ContactPage
