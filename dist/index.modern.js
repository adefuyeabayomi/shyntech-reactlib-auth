import React, { Component } from 'react';
import { BsGlobe, BsLock, BsGoogle, BsTelephone, BsEnvelopeAt } from 'react-icons/bs';
import axios from 'axios';

var styles = {"AuthContainer":"_AuthPage__AuthContainer__1khLk","AuthButton":"_AuthPage__AuthButton__OgU3-","closeButton":"_AuthPage__closeButton__2bdd4","closeButtonContainer":"_AuthPage__closeButtonContainer__2xCiX","AuthContents":"_AuthPage__AuthContents__3YIKh","inputContainer":"_AuthPage__inputContainer__3mJWk","AuthButtons":"_AuthPage__AuthButtons__wIswV","vMessage":"_AuthPage__vMessage__DaI33","signUpOptions":"_AuthPage__signUpOptions__SLQi-","currentOption":"_AuthPage__currentOption__2gFjC"};

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.validateEmail = email => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      let valid = emailRegex.test(email);
      this.setState({
        emailValid: valid
      });
      !valid ? this.setState({
        validateMsg: 'Please make sure you input a valid email address'
      }) : true;
    };
    this.emailVTrue = () => {
      this.setState({
        emailValid: true
      });
      this.setState({
        validateMsg: ''
      });
    };
    this.validatePassword = password => {
      let valid = password.length >= 8;
      this.setState({
        passwordValid: valid
      });
      !valid ? this.setState({
        validateMsg: 'Please make sure that your password is 8 characters or more'
      }) : true;
    };
    this.passwordVTrue = () => {
      this.setState({
        passwordValid: true
      });
      this.setState({
        validateMsg: ''
      });
    };
    this.validatePhone = phone => {
      let valid = phone.length > 15;
      this.setState({
        phoneValid: valid
      });
      !valid ? this.setState({
        validateMsg: 'Please Input a valid Phone Number, All Phone numbers must not exceed 15 digits'
      }) : true;
    };
    this.phoneVTrue = () => {
      this.setState({
        phoneValid: true
      });
      this.setState({
        validateMsg: ''
      });
    };
    this.onInputChange = newState => {
      this.setState(newState);
    };
    this.updateAuthState = payload => {
      this.setState({
        authOpen: payload
      });
    };
    this.updateOption = payload => {
      this.setState({
        isEmail: payload
      });
    };
    this.submitGoogle = () => {};
    this.submitManual = () => {
      this.validatePassword(this.state.password);
      this.state.isEmail ? this.validateEmail(this.state.email) : this.validatePhone(this.state.phone);
      let valid = (this.state.isEmail ? this.state.emailValid : this.state.phoneValid) && this.state.passwordValid;
      if (!valid) {
        return;
      }
      let data = {
        emailSignin: this.state.isEmail,
        email: this.state.email,
        username: this.state.email,
        phone: this.state.phone,
        password: this.state.password
      };
      this.props.sendLogin(data).then(res => {
        alert(res.data);
        console.log("response", res);
      }).catch(err => {
        alert(err);
      });
      console.log('submitting form', data);
    };
    this.state = {
      authOpen: false,
      email: '',
      phone: '',
      password: '',
      emailValid: true,
      phoneValid: true,
      passwordValid: true,
      validateMsg: '',
      isEmail: true
    };
    console.log(this.props);
  }
  render() {
    let vaildationMessage = /*#__PURE__*/React.createElement("div", null, this.state.validateMsg);
    let phoneInput = /*#__PURE__*/React.createElement("div", {
      className: styles.inputContainer
    }, /*#__PURE__*/React.createElement(BsTelephone, {
      style: {
        width: 40,
        height: 25
      }
    }), ' ', /*#__PURE__*/React.createElement("input", {
      type: "number",
      onFocus: () => {
        this.phoneVTrue();
      },
      onBlur: e => {
        this.validatePhone(e.target.value);
      },
      onChange: e => {
        this.onInputChange({
          phone: e.target.value
        });
      },
      value: this.state.phone,
      placeholder: "Input Your Phone Number"
    }));
    let emailInput = /*#__PURE__*/React.createElement("div", {
      className: styles.inputContainer
    }, /*#__PURE__*/React.createElement(BsEnvelopeAt, {
      style: {
        width: 40,
        height: 25
      }
    }), ' ', /*#__PURE__*/React.createElement("input", {
      type: "text",
      onFocus: () => {
        this.emailVTrue();
      },
      onBlur: e => {
        this.validateEmail(e.target.value);
      },
      onChange: e => {
        this.onInputChange({
          email: e.target.value
        });
      },
      value: this.state.email,
      placeholder: "Input a vaild Email Address"
    }));
    let auth_main = /*#__PURE__*/React.createElement("div", {
      className: styles.AuthContainer
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: styles.closeButtonContainer
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => this.updateAuthState(!this.state.authOpen),
      className: styles.closeButton
    }, "X"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(BsGlobe, null)), /*#__PURE__*/React.createElement("span", null, "English")), /*#__PURE__*/React.createElement("div", {
      className: styles.AuthContents
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Sign In To Shyn Tech"), /*#__PURE__*/React.createElement("p", null, "You are just a step away from something amazing, Sign in with either your Phone number or your email address"), /*#__PURE__*/React.createElement("p", {
      className: styles.signUpOptions
    }, /*#__PURE__*/React.createElement("span", {
      className: this.state.isEmail ? styles.currentOption : "",
      onClick: () => {
        this.updateOption(true);
      }
    }, "Email"), " ", /*#__PURE__*/React.createElement("span", {
      className: !this.state.isEmail ? styles.currentOption : "",
      onClick: () => {
        this.updateOption(false);
      }
    }, "Phone"))), /*#__PURE__*/React.createElement("div", {
      className: styles.vMessage
    }, vaildationMessage), this.state.isEmail ? emailInput : phoneInput, /*#__PURE__*/React.createElement("div", {
      className: styles.inputContainer
    }, /*#__PURE__*/React.createElement(BsLock, {
      style: {
        width: 40,
        height: 25
      }
    }), ' ', /*#__PURE__*/React.createElement("input", {
      type: "password",
      onFocus: () => {
        this.passwordVTrue();
      },
      onBlur: e => {
        this.validatePassword(e.target.value);
      },
      onChange: e => {
        this.onInputChange({
          password: e.target.value
        });
      },
      value: this.state.password,
      placeholder: "Input Your Password"
    }))), /*#__PURE__*/React.createElement("div", {
      className: styles.AuthButtons
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        this.submitManual();
      }
    }, "Sign In")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        this.submitGoogle();
      }
    }, "Or Continue With Google", /*#__PURE__*/React.createElement("i", null, " ", /*#__PURE__*/React.createElement(BsGoogle, null), " "))))));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, " ", this.state.authOpen ? auth_main : ''), /*#__PURE__*/React.createElement("button", {
      className: styles.AuthButton,
      onClick: () => this.updateAuthState(!this.state.authOpen)
    }, "Sign In"));
  }
}

async function sendLogin(data, baseURL, login) {
  let loginEndpoint = `${baseURL}${loginEndpoint}`;
  return axios.post(loginEndpoint, data);
}
function sendSignUp(data) {
  let signupEndpoint = "http://localhost:3000/auth/signup";
  return axios.post(signupEndpoint, data);
}

export default AuthPage;
export { sendLogin, sendSignUp };
//# sourceMappingURL=index.modern.js.map