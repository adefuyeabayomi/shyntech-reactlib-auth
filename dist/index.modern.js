import React, { Component } from 'react';
import { BsArrowLeft, BsGlobe, BsLock, BsTelephone, BsEnvelopeAt } from 'react-icons/bs';
import bgImage from './REGISTRATION_LANDSCAPE_2~QAjlMDQZ.png';
import googleLogo from './google~VofglFVX.png';
import axios from 'axios';

var styles = {"AuthContainer":"_AuthPage__AuthContainer__1khLk","AuthButton":"_AuthPage__AuthButton__OgU3-","closeButton":"_AuthPage__closeButton__2bdd4","closeButtonContainer":"_AuthPage__closeButtonContainer__2xCiX","AuthContents":"_AuthPage__AuthContents__3YIKh","inputContainer":"_AuthPage__inputContainer__3mJWk","AuthButtons":"_AuthPage__AuthButtons__wIswV","vMessage":"_AuthPage__vMessage__DaI33","signUpOptions":"_AuthPage__signUpOptions__SLQi-","currentOption":"_AuthPage__currentOption__2gFjC","offset15":"_AuthPage__offset15__1ptxK","offset15_google":"_AuthPage__offset15_google__23vOX","googleIcon":"_AuthPage__googleIcon__1MDL-"};

class AuthPage extends Component {
  constructor(props) {
    var _this;
    super(props);
    _this = this;
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
    this.submitManual = async function () {
      console.log("my props", _this.state.myProps);
      _this.validatePassword(_this.state.password);
      _this.state.isEmail ? _this.validateEmail(_this.state.email) : _this.validatePhone(_this.state.phone);
      let valid = (_this.state.isEmail ? _this.state.emailValid : _this.state.phoneValid) && _this.state.passwordValid;
      if (!valid) {
        return;
      }
      let data = {
        emailSignin: _this.state.isEmail,
        email: _this.state.email,
        username: _this.state.email,
        phone: _this.state.phone,
        password: _this.state.password
      };
      _this.props.sendLogin(data, _this.state.myProps.baseURL, _this.state.myProps.loginEndpoint).then(res => {
        alert(JSON.stringify(res.data));
        console.log("response", res);
      }).catch(err => {
        alert(err);
      });
      console.log('submitting form', data);
    };
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
    };
    console.log(this.state.myProps);
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
    let authContainerStyle = {
      backgroundImage: `url(${bgImage})`
    };
    let auth_main = /*#__PURE__*/React.createElement("div", {
      className: styles.AuthContainer,
      style: authContainerStyle
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: styles.closeButtonContainer
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => this.updateAuthState(!this.state.authOpen),
      className: styles.closeButton
    }, /*#__PURE__*/React.createElement(BsArrowLeft, null)), /*#__PURE__*/React.createElement("span", null, "English"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(BsGlobe, null))), /*#__PURE__*/React.createElement("div", {
      className: styles.AuthContents
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.offset15
    }, /*#__PURE__*/React.createElement("h1", null, "Sign In To Shyn Tech"), /*#__PURE__*/React.createElement("p", {
      className: styles.offset15
    }, "You are just a step away from something amazing, Sign in with either your Phone number or your email address"), /*#__PURE__*/React.createElement("p", {
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
    }, "Sign In")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: styles.offset15_google
    }, "Or Sign in with Google")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        this.submitGoogle();
      }
    }, " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("img", {
      className: styles.googleIcon,
      src: googleLogo
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        paddingLeft: 10,
        position: 'relative',
        bottom: 8
      }
    }, "Continue With Google"))))));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, " ", this.state.authOpen ? auth_main : ''), /*#__PURE__*/React.createElement("button", {
      className: styles.AuthButton,
      onClick: () => this.updateAuthState(!this.state.authOpen)
    }, "Sign In"));
  }
}

async function sendLogin(data, baseURL, endpoint) {
  let fullURL = `${baseURL}${endpoint}`;
  return axios.post(fullURL, data);
}

export default AuthPage;
export { sendLogin };
//# sourceMappingURL=index.modern.js.map
