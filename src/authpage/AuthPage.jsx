import React, { Component } from 'react'
import styles from './AuthPage.css'
import { BsEnvelopeAt, BsLock, BsTelephone, BsGlobe,BsArrowLeft } from 'react-icons/bs'
import bgImage from "REGISTRATION_LANDSCAPE_2.png"
import googleLogo from "google.png"

class AuthPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authOpen: this.props.authOpen ? this.props.authOpen : false,
      email: '',
      phone: '',
      password: '',
      emailValid: true,
      phoneValid: true,
      passwordValid: true,
      validateMsg: '',
      isEmail: true,
      myProps: props
    }
    console.log(this.state.myProps)
  }

  validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let valid = emailRegex.test(email)
    this.setState({
      emailValid: valid
    })
    !valid
      ? this.setState({
          validateMsg: 'Please make sure you input a valid email address'
        })
      : true
  }

  emailVTrue = () => {
    this.setState({ emailValid: true })
    this.setState({ validateMsg: '' })
  }

  validatePassword = (password) => {
    let valid = password.length >= 8
    this.setState({ passwordValid: valid })
    !valid
      ? this.setState({
          validateMsg:
            'Please make sure that your password is 8 characters or more'
        })
      : true
  }

  passwordVTrue = () => {
    this.setState({ passwordValid: true })
    this.setState({ validateMsg: '' })
  }

  validatePhone = (phone) => {
    let valid = phone.length > 15
    this.setState({ phoneValid: valid })
    !valid
      ? this.setState({
          validateMsg:
            'Please Input a valid Phone Number, All Phone numbers must not exceed 15 digits'
        })
      : true
  }

  phoneVTrue = () => {
    this.setState({ phoneValid: true })
    this.setState({ validateMsg: '' })
  }

  onInputChange = (newState) => {
    this.setState(newState)
  }

  updateAuthState = (payload) => {
    this.setState({
      authOpen: payload
    })
  }

  updateOption = (payload)=>{
    this.setState({
        isEmail: payload
    })
  }
  submitGoogle = () => {

  }
  submitManual = async () => {
    console.log("my props", this.state.myProps)
    this.validatePassword(this.state.password)
    this.state.isEmail ? this.validateEmail(this.state.email) : this.validatePhone(this.state.phone)
    let valid = (this.state.isEmail ? this.state.emailValid : this.state.phoneValid) && this.state.passwordValid
    if (!valid) {
      return
    }
    let data = {
      emailSignin : this.state.isEmail,
      email: this.state.email,
      username: this.state.email,
      phone: this.state.phone,
      password: this.state.password
    }
    this.props.sendLogin(data,this.state.myProps.baseURL, this.state.myProps.loginEndpoint).then(res=>{
      alert(JSON.stringify(res.data))
      console.log("response", res)
    }).catch(err=>{
      alert(err)
    })

    console.log('submitting form',data)
  }

  render() {
    let vaildationMessage = <div>{this.state.validateMsg}</div>
    let phoneInput = (
        <div className={styles.inputContainer}>
            <BsTelephone style={{ width: 40, height: 25 }} />{' '}
            <input
            type='number'
            onFocus={() => {
                this.phoneVTrue()
            }}
            onBlur={(e) => {
                this.validatePhone(e.target.value)
            }}
            onChange={(e) => {
                this.onInputChange({ phone: e.target.value })
            }}
            value={this.state.phone}
            placeholder='Input Your Phone Number'
            />
        </div>
    )

    let emailInput = (
        <div className={styles.inputContainer}>
        <BsEnvelopeAt style={{ width: 40, height: 25 }} />{' '}
        <input
          type='text'
          onFocus={() => {
            this.emailVTrue()
          }}
          onBlur={(e) => {
            this.validateEmail(e.target.value)
          }}
          onChange={(e) => {
            this.onInputChange({ email: e.target.value })
          }}
          value={this.state.email}
          placeholder='Input a vaild Email Address'
        />
      </div>
    )
    let authContainerStyle = {
      backgroundImage: `url(${bgImage})`
    }


    let auth_main = (
      <div className={styles.AuthContainer} style={authContainerStyle}>
        <div>
          <div className={styles.closeButtonContainer}>
            <button
              onClick={() => this.updateAuthState(!this.state.authOpen)}
              className={styles.closeButton}
            >
              <BsArrowLeft></BsArrowLeft>
            </button>
            <span>English</span>
            <span>
              <BsGlobe />
            </span>
          </div>
          <div className={styles.AuthContents}>
            <div className={styles.offset15}>
              <h1>Sign In To Shyn Tech</h1>
              <p className={styles.offset15}>
                You are just a step away from something amazing, Sign in with
                either your Phone number or your email address
              </p>
              <p className={styles.signUpOptions}><span className={this.state.isEmail ? styles.currentOption: ""} onClick={()=>{this.updateOption(true)}}>Email</span> <span className={!this.state.isEmail ? styles.currentOption: ""} onClick={()=>{this.updateOption(false)}}>Phone</span></p>
            </div>
            <div className={styles.vMessage}>{vaildationMessage}</div>

            {this.state.isEmail ? emailInput : phoneInput}
            <div className={styles.inputContainer}>
              <BsLock style={{ width: 40, height: 25 }} />{' '}
              <input
                type='password'
                onFocus={() => {
                  this.passwordVTrue()
                }}
                onBlur={(e) => {
                  this.validatePassword(e.target.value)
                }}
                onChange={(e) => {
                  this.onInputChange({ password: e.target.value })
                }}
                value={this.state.password}
                placeholder='Input Your Password'
              />
            </div>
          </div>
          <div className={styles.AuthButtons}>
            <div>
              <button
                onClick={() => {
                  this.submitManual()
                }}
              >
                Sign In
              </button>
            </div>
            <div>
              <p className={styles.offset15_google}>Or Sign in with Google</p>
            </div>
            <div>
              <button
                onClick={() => {
                  this.submitGoogle()
                }}
              > <span><img className={styles.googleIcon} src={googleLogo} /></span><span style={{display: 'inline-block',paddingLeft: 10,position: 'relative',bottom: 8}}>Continue With Google</span></button>
            </div>
          </div>
        </div>
      </div>
    )
    return (
      <div>
        <div> {this.state.authOpen ? auth_main : ''}</div>
        <button
          className={styles.AuthButton}
          onClick={() => this.updateAuthState(!this.state.authOpen)}
        >
          Sign In
        </button>
      </div>
    )
  }
}

export default AuthPage
