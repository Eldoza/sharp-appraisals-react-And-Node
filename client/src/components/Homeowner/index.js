import React, { Component } from 'react'
import styles from './Homeowner.css'
import HomeIcon from '../../images/home_icon.svg'
import Aux from 'react-aux'

class HomeOwner extends Component {

  render () {
    return (
      <Aux>
        <div className={ styles.container }>
          <div className={ styles.hero }>
            <div className={ styles.text}>
              <div className={ styles.iconContainer }>
                <img
                  alt='Home Icon'
                  className={ styles.homeIcon }
                  src={HomeIcon}
                />
              </div>
              <h2 className={ styles.heroHeader }> Why Get An Appraisal?</h2>
            </div>
          </div>
        </div>

        <div className={styles.textContainer}>
          <div className={ styles.smallHeaderWhy }>
            Why get an appraisal?
          </div>
          <div className={ styles.whyText }>
            <p>
              Every year, thousands of people in Texas buy, sell or refinance their homes. A lot of these transactions contain a simple line item for an appraisal. And while there are a multiplying number of automated home valuation methods that may appear cheaper than an appraisal, nearly all lenders still want a local expert because the stakes are so high. You might believe that getting a mortgage is the only reason to get an appraisal, but there are additional times when the services of a licensed, independent real estate professional could come in handy.

            Whether you are just wondering what your home is worth, or looking for professional help to learn more about your home value, we can help.
            </p>
          </div>

           <div className={ styles.smallHeaderWhy }>
            Dispute your tax assessment
          </div>
          <div className={ styles.whyText }>
            <p>
            It's probable you're paying too much in property taxes if you live in an area where property values have declined. Property taxes are determined by a previous assessment of your home, so if prices are less than what they used to be in your area, you can challenge your assessment and save money. When building your case, an appraisal from Sharp Appraisers is your best evidence. At Sharp Appraisers, we can assist you in appealing your tax assessment.
            </p>
          </div>

           <div className={ styles.smallHeaderWhy }>
            REMOVING PMI WILL LOWER YOUR MORTGAGE PAYMENT
          </div>
          <div className={ styles.whyText }>
            <p>
              Private Mortgage Insurance, or PMI, is an added insurance plan that many lenders ask home owners to purchase when the amount being loaned to the home owner is more than 80% of the actual value of the property. This additional payment is often bundled into the monthly mortgage payment and is soon forgotten. This is unfavorable because PMI isn't necessary when the leftover balance of the loan - whether through market appreciation or principal pay down - dips below the 80% mark. In fact, the United States Congress invoked a law in 1998 (the Homeowners Protection Act of 1998) requiring lenders to do away with the PMI installments when the loan-to-value ratio conditions have been met. 

              If you'd like to get rid of PMI, Sharp Appraisers can give you a statement regarding the value of your home. The price you paid for the home valuation can generally be offset in just a few months because you'll no longer be paying the PMI. 
            </p>
          </div>

        </div>
      </Aux>  
    )
  }
}

export default HomeOwner
