// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: true})
    } else {
      this.setState({firstNameError: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({lastNameError: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({firstNameError: true, lastNameError: true})
    } else if (firstName === '') {
      this.setState({firstNameError: true})
    } else if (lastName === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState({
        isFormSubmitted: true,
        firstNameError: false,
        lastNameError: false,
      })
    }
  }

  onSubmitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      isFormSubmitted: false,
      firstNameError: false,
      lastNameError: false,
    })
  }

  renderForm = () => {
    const {firstName, lastName, firstNameError, lastNameError} = this.state

    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label className="input-label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            className="input-field"
            value={firstName}
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
          {firstNameError && <p className="error-message">Required</p>}
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            className="input-field"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
          {lastNameError && <p className="error-message">Required</p>}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessView = () => (
    <div className="success-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-message">Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted ? this.renderSuccessView() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
