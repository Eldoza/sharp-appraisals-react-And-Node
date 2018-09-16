import React, { Component } from 'react'
import styles from './Order.css'
import Aux from 'react-aux'
class Order extends Component {

  render () {
    return (
      <Aux>
        <div className={ styles.container }>
            <div className={ styles.hero }>
              <div className={ styles.text}>
                <h3>Place an Order</h3>
                <form method='POST' action='https://formspree.io/cmend85@gmail.com'>
                    <div className={ styles.row }>
                      <label htmlFor='name' className={ styles.label }>Name</label>
                      <input className='form-control' type='name' name='name' required></input>
                
                      <label htmlFor='email' className={ styles.label }>Email</label>
                    <input className='form-control' type='email' name='email' required></input>
                    </div>

                    <div className={ styles.row }>
                      <label htmlFor='Phone' className={ styles.label }>Phone</label>
                      <input className='form-control' type='phone' name='phone' required></input>
                      <label htmlFor='property-address' className={ styles.label }>Address</label>
                      <input className='form-control' type='property' name='property-address' required></input>
                    </div>
                  
                  <div className={ styles.textAreaBox }>
                    <textarea rows="6" cols="40" className={ styles.textArea } name='reason-for-appraisal' placeholder='Reason for Appraisal' required></textarea>
                  </div>  

                  <div className={ styles.buttonBox }>
                  <button  className={ styles.button} type='submit'>Submit</button>
                  </div>
                </form> 
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

export default Order
