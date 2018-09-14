import React, { Component } from 'react'
import styles from './Quote.css'
import Aux from 'react-aux'
import { Button, Form } from 'semantic-ui-react'

class Quote extends Component {
  constructor(){
    super()
    this.state = {
      messageSender: '',
      messageType: 'quote',
      message: ''
    }

    this.handleMessageChange = this.handleMessageChange.bind(this)
  }
  
  handleMessageChange (e) {
    this.setState({
      message: e.target.value,
    })
  }

  handleSubmit () {
    console.log('I have been clicked!!! ==>')
    console.log('input valiues!======>', this.state.message)

    const dataToSend = {
      from: this.state.messageSender,
      to: 'cmend85@gmail.com',
      text: this.state.message,
      subject: this.state.messageType,
    }
  }

  render () {
    console.log('dat state ===>', this.state.message)
    return (
      <Aux>
        <div className={ styles.container }>
            <div className={ styles.header }>
              <h1>Request a Quote</h1>
            </div>
            <div className={ styles.formBox }>
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' />
                </Form.Field>
              </Form>
            </div> 
        </div>
      </Aux> 
    )
  }
}

export default Quote
