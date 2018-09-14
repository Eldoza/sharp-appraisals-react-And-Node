import React, { Component } from 'react'
import styles from './Homeowner.css'
import HomeIcon from '../../images/home_icon.svg'
import Aux from 'react-aux'
import ContractIcon from '../../images/contract_icon.svg'
import CoinIcon from '../../images/coin.svg'
import HouseCarIcon from '../../images/house_car.svg'
import PrizeIcon from '../../images/prize.svg'
import HomeLoveIcon from '../../images/sold.svg'
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
            Why get an appraisal As A Homeowner or Buyer?
          </div>
          <div className={ styles.iconContainerSmall}>
            <img
              alt='Home Car Icon'
              className={ styles.homeIcon }
              src={HouseCarIcon}
                />
          </div>
          <div className={ styles.whyText }>
            <p>
              Every year, thousands of people in Texas buy, sell or refinance their homes. A lot of these transactions contain a simple line item for an appraisal. While there are a multiplying number of automated home valuation methods that may appear cheaper than an appraisal, nearly all lenders still want a local expert to ensure an accurate valuation. You might believe that getting a mortgage is the only reason to get an appraisal, but there are additional times when the services of a licensed, independent real estate professional could come in handy.

            Whether you are just wondering what your home is worth, or looking for professional help to learn more about your home value, we can help.
            </p>
          </div>

           <div className={ styles.smallHeaderWhy }>
            Dispute your tax assessment
          </div>
          <div className={ styles.iconContainerSmall}>
            <img
              alt='Contract Icon'
              className={ styles.homeIcon }
              src={ContractIcon}
                />
          </div>
          <div className={ styles.whyText }>
            <p>
            It's probable you're paying too much in property taxes if you live in an area where property values have declined. Property taxes are determined by a previous assessment of your home, so if prices are less than what they used to be in your area, you can challenge your assessment and save money. When building your case, an appraisal from Sharp Appraisers is your best evidence. At Sharp Appraisers, we can assist you in appealing your tax assessment.
            </p>
          </div>

           <div className={ styles.smallHeaderWhy }>
            REMOVING PMI WILL LOWER YOUR MORTGAGE PAYMENT
          </div>
          <div className={ styles.iconContainerSmall}>
            <img
              alt='Coin Icon'
              className={ styles.homeIcon }
              src={CoinIcon}
                />
          </div>
          <div className={ styles.whyText }>
            <p>
              Private Mortgage Insurance, or PMI, is an added insurance plan that many lenders ask home owners to purchase when the amount being loaned to the home owner is more than 80% of the actual value of the property. This additional payment is often bundled into the monthly mortgage payment and is soon forgotten. This is unfavorable because PMI isn't necessary when the leftover balance of the loan - whether through market appreciation or principal pay down - dips below the 80% mark. In fact, the United States Congress invoked a law in 1998 (the Homeowners Protection Act of 1998) requiring lenders to do away with the PMI installments when the loan-to-value ratio conditions have been met. 

              If you'd like to get rid of PMI, Sharp Appraisers can give you a statement regarding the value of your home. The price you paid for the home valuation can generally be offset in just a few months because you'll no longer be paying the PMI. 
            </p>
          </div>

          <div className={ styles.smallHeaderWhy }>
            DIVORCE
          </div>
          <div className={ styles.iconContainerSmall}>
            <img
              alt='Prize Icon'
              className={ styles.homeIcon }
              src={PrizeIcon}
                />
          </div>
          <div className={ styles.whyText }>
            <p>
            A divorce is a particularly heartbreaking experience for the parties involved, and it is often more complicated by the strenuous decision of who gets the property. It's a good idea to order an appraisal from Sharp Appraisers so both parties are fully aware of the true market value of their home, regardless of the situation. 

            The parties will have a better idea of what price to set, if they need to sell the home. And on the flip side, if a "buyout" is the chosen option, both parties will feel like they've received a fair assessment. 
            </p>
          </div>

          <div className={ styles.smallHeaderWhy }>
            SETTLING AN ESTATE
          </div>
          <div className={ styles.iconContainerSmall}>
            <img
              alt='Contract Icon'
              className={ styles.homeIcon }
              src={ContractIcon}
                />
          </div>
          <div className={ styles.whyText }>
            <p>
            Losing a loved one is a painful time in life, and settling an estate from a death, or probate, often entails an appraisal to establish Market Value for the residential property involved. We guarantee the utmost degree of discretion, as we're bound with confidentiality by the ethics provision within the Uniform Standards of Professional Appraisal Practice (USPAP). 

            Most Americans do not have dedicated estate planners or executors to take care of these issues, unlike wealthy individuals. And seeing that a home or other property often makes up an uneven share of the total estate value, knowing the absolute value of the real estate at hand is of essential importance to ensuring disputing parties leave knowing they've received an honest deal. 
            </p>
          </div>

           <div className={ styles.smallHeaderWhy }>
            LET SHARP APPRAISERS ASSIST YOU IN SELLING YOUR HOME QUICKLY AT THE RIGHT PRICE
          </div>
          <div className={ styles.iconContainerSmall}>
            <img
              alt='Home Love Icon'
              className={ styles.homeIcon }
              src={HomeLoveIcon}
                />
          </div>
          <div className={ styles.whyText }>
            <p>
            A professional appraisal will help you make a better educated decision when determining your asking price, whether you choose to sell your home on your own or use the assistance of a real estate agent. Unlike a real estate agent, an appraiser has no vested interest in what amount the house sells for. Our fees are calculated on our efforts to complete the appraisal report and aren't related to the sales price.

            On a daily basis, we analyze the difference in value items like an additional bathroom or a kitchen remodel can make. Seeking a professional appraisal is a trusted way to determine what improvements will add value and what an appropriate sales price is for your home - so you don't come up short or have your house on the market an unnecessarily long time - because we're experts in knowing how long properties stay on the market.
            </p>
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

export default HomeOwner
