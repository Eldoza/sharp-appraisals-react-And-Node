import React, { Component } from 'react'

import Aux from 'react-aux'
import ContractIcon from '../../images/contract_icon.svg'
import HomeIcon from '../../images/home_icon.svg'
import styles from './HomePage.css'

class HomePage extends Component {
  render() {
    return (
      <Aux>
        <div className={ styles.container }>
          <div className={ styles.hero }>
            <h2 className={ styles.heroHeader }> Sharp Appraisers </h2>
            <h4 className={ styles.subHeroHeader }> Professional Residential Appraisals </h4>
            <h6 className={ styles.smallHeader }>
              Serving the local Cedar Park Texas area <br />
              (512) 797-1844
            </h6>
          </div>
        </div>

        <div className={styles.faq }>
          <div className={ styles.iconContainer }>
            <img
              alt='Home Icon'
              className={ styles.homeIcon }
              src={HomeIcon}
            />
          </div>
          <div className={ styles.smallHeaderWhy }>
            So what is an appraisal and why should I get one?
          </div>
          <div className={ styles.whyText }>
            <p> - A home appraisal is an unbiased estimate of the true (or fair market) value of what a home is worth. All lenders order an appraisal during the mortgage loan process so that there is an objective way to assess the home’s market value and ensure that the amount of money requested by the borrower is appropriate. The actual physical apraisal may last from 15 minutes to several hours, depending on your home's size and complexity.</p>
            <p> - It assures your lender that the money they'll loan you is supported by the researched, observable facts about your home.</p>
          </div>

          <div className={ styles.iconContainer }>
            <img
              alt='Contract Icon'
              className={ styles.homeIcon }
              src={ContractIcon}
            />
          </div>
          <div className={ styles.smallHeaderWhy }>
            How Appraisal Values Are Determined
          </div>
          <div className={ styles.whyText }>
            <p>
              - A property's appraisal value is influenced by recent sales of similar properties and by current market trends. The home's amenities, the number of bedrooms and bathrooms, floor plan functionality and square footage are also key factors in assessing the home's value. The appraiser must do a complete visual inspection of the interior and exterior and note any conditions that adversely affect the property's value, such as needed repairs.
            </p>
            <p>
              - Typically, appraisers use Fannie Mae's Uniform Residential Appraisal Report for single-family homes. The report asks the appraiser to describe the interior and exterior of the property, the neighborhood, and nearby comparable sales. The appraiser then provides an analysis and conclusions about the property's value based on his or her observations.
            </p>
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

export default HomePage
