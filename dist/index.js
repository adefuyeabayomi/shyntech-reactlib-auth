function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var bs = require('react-icons/bs');
var bgImage = _interopDefault(require('./REGISTRATION_LANDSCAPE_2~QAjlMDQZ.png'));
var googleLogo = _interopDefault(require('./google~VofglFVX.png'));
var axios = _interopDefault(require('axios'));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

var styles = {"AuthContainer":"_1khLk","AuthButton":"_OgU3-","closeButton":"_2bdd4","closeButtonContainer":"_2xCiX","AuthContents":"_3YIKh","inputContainer":"_3mJWk","AuthButtons":"_wIswV","vMessage":"_DaI33","signUpOptions":"_SLQi-","currentOption":"_2gFjC","offset15":"_1ptxK","offset15_google":"_23vOX","googleIcon":"_1MDL-"};

var AuthPage = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AuthPage, _Component);
  function AuthPage(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.validateEmail = function (email) {
      var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      var valid = emailRegex.test(email);
      _this.setState({
        emailValid: valid
      });
      !valid ? _this.setState({
        validateMsg: 'Please make sure you input a valid email address'
      }) : true;
    };
    _this.emailVTrue = function () {
      _this.setState({
        emailValid: true
      });
      _this.setState({
        validateMsg: ''
      });
    };
    _this.validatePassword = function (password) {
      var valid = password.length >= 8;
      _this.setState({
        passwordValid: valid
      });
      !valid ? _this.setState({
        validateMsg: 'Please make sure that your password is 8 characters or more'
      }) : true;
    };
    _this.passwordVTrue = function () {
      _this.setState({
        passwordValid: true
      });
      _this.setState({
        validateMsg: ''
      });
    };
    _this.validatePhone = function (phone) {
      var valid = phone.length > 15;
      _this.setState({
        phoneValid: valid
      });
      !valid ? _this.setState({
        validateMsg: 'Please Input a valid Phone Number, All Phone numbers must not exceed 15 digits'
      }) : true;
    };
    _this.phoneVTrue = function () {
      _this.setState({
        phoneValid: true
      });
      _this.setState({
        validateMsg: ''
      });
    };
    _this.onInputChange = function (newState) {
      _this.setState(newState);
    };
    _this.updateAuthState = function (payload) {
      _this.setState({
        authOpen: payload
      });
    };
    _this.updateOption = function (payload) {
      _this.setState({
        isEmail: payload
      });
    };
    _this.submitGoogle = function () {};
    _this.submitManual = function () {
      try {
        console.log("my props", _this.state.myProps);
        _this.validatePassword(_this.state.password);
        _this.state.isEmail ? _this.validateEmail(_this.state.email) : _this.validatePhone(_this.state.phone);
        var valid = (_this.state.isEmail ? _this.state.emailValid : _this.state.phoneValid) && _this.state.passwordValid;
        if (!valid) {
          return Promise.resolve();
        }
        var data = {
          emailSignin: _this.state.isEmail,
          email: _this.state.email,
          username: _this.state.email,
          phone: _this.state.phone,
          password: _this.state.password
        };
        _this.props.sendLogin(data, _this.state.myProps.baseURL, _this.state.myProps.loginEndpoint).then(function (res) {
          alert(JSON.stringify(res.data));
          console.log("response", res);
        })["catch"](function (err) {
          alert(err);
        });
        console.log('submitting form', data);
        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    };
    _this.state = {
      authOpen: _this.props.authOpen ? _this.props.authOpen : false,
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
    console.log(_this.state.myProps);
    return _this;
  }
  var _proto = AuthPage.prototype;
  _proto.render = function render() {
    var _this2 = this;
    var vaildationMessage = /*#__PURE__*/React__default.createElement("div", null, this.state.validateMsg);
    var phoneInput = /*#__PURE__*/React__default.createElement("div", {
      className: styles.inputContainer
    }, /*#__PURE__*/React__default.createElement(bs.BsTelephone, {
      style: {
        width: 40,
        height: 25
      }
    }), ' ', /*#__PURE__*/React__default.createElement("input", {
      type: "number",
      onFocus: function onFocus() {
        _this2.phoneVTrue();
      },
      onBlur: function onBlur(e) {
        _this2.validatePhone(e.target.value);
      },
      onChange: function onChange(e) {
        _this2.onInputChange({
          phone: e.target.value
        });
      },
      value: this.state.phone,
      placeholder: "Input Your Phone Number"
    }));
    var emailInput = /*#__PURE__*/React__default.createElement("div", {
      className: styles.inputContainer
    }, /*#__PURE__*/React__default.createElement(bs.BsEnvelopeAt, {
      style: {
        width: 40,
        height: 25
      }
    }), ' ', /*#__PURE__*/React__default.createElement("input", {
      type: "text",
      onFocus: function onFocus() {
        _this2.emailVTrue();
      },
      onBlur: function onBlur(e) {
        _this2.validateEmail(e.target.value);
      },
      onChange: function onChange(e) {
        _this2.onInputChange({
          email: e.target.value
        });
      },
      value: this.state.email,
      placeholder: "Input a vaild Email Address"
    }));
    var authContainerStyle = {
      backgroundImage: "url(" + bgImage + ")"
    };
    var auth_main = /*#__PURE__*/React__default.createElement("div", {
      className: styles.AuthContainer,
      style: authContainerStyle
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
      className: styles.closeButtonContainer
    }, /*#__PURE__*/React__default.createElement("button", {
      onClick: function onClick() {
        return _this2.updateAuthState(!_this2.state.authOpen);
      },
      className: styles.closeButton
    }, /*#__PURE__*/React__default.createElement(bs.BsArrowLeft, null)), /*#__PURE__*/React__default.createElement("span", null, "English"), /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement(bs.BsGlobe, null))), /*#__PURE__*/React__default.createElement("div", {
      className: styles.AuthContents
    }, /*#__PURE__*/React__default.createElement("div", {
      className: styles.offset15
    }, /*#__PURE__*/React__default.createElement("h1", null, "Sign In To Shyn Tech"), /*#__PURE__*/React__default.createElement("p", {
      className: styles.offset15
    }, "You are just a step away from something amazing, Sign in with either your Phone number or your email address"), /*#__PURE__*/React__default.createElement("p", {
      className: styles.signUpOptions
    }, /*#__PURE__*/React__default.createElement("span", {
      className: this.state.isEmail ? styles.currentOption : "",
      onClick: function onClick() {
        _this2.updateOption(true);
      }
    }, "Email"), " ", /*#__PURE__*/React__default.createElement("span", {
      className: !this.state.isEmail ? styles.currentOption : "",
      onClick: function onClick() {
        _this2.updateOption(false);
      }
    }, "Phone"))), /*#__PURE__*/React__default.createElement("div", {
      className: styles.vMessage
    }, vaildationMessage), this.state.isEmail ? emailInput : phoneInput, /*#__PURE__*/React__default.createElement("div", {
      className: styles.inputContainer
    }, /*#__PURE__*/React__default.createElement(bs.BsLock, {
      style: {
        width: 40,
        height: 25
      }
    }), ' ', /*#__PURE__*/React__default.createElement("input", {
      type: "password",
      onFocus: function onFocus() {
        _this2.passwordVTrue();
      },
      onBlur: function onBlur(e) {
        _this2.validatePassword(e.target.value);
      },
      onChange: function onChange(e) {
        _this2.onInputChange({
          password: e.target.value
        });
      },
      value: this.state.password,
      placeholder: "Input Your Password"
    }))), /*#__PURE__*/React__default.createElement("div", {
      className: styles.AuthButtons
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("button", {
      onClick: function onClick() {
        _this2.submitManual();
      }
    }, "Sign In")), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
      className: styles.offset15_google
    }, "Or Sign in with Google")), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("button", {
      onClick: function onClick() {
        _this2.submitGoogle();
      }
    }, " ", /*#__PURE__*/React__default.createElement("span", null, /*#__PURE__*/React__default.createElement("img", {
      className: styles.googleIcon,
      src: googleLogo
    })), /*#__PURE__*/React__default.createElement("span", {
      style: {
        display: 'inline-block',
        paddingLeft: 10,
        position: 'relative',
        bottom: 8
      }
    }, "Continue With Google"))))));
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", null, " ", this.state.authOpen ? auth_main : ''), /*#__PURE__*/React__default.createElement("button", {
      className: styles.AuthButton,
      onClick: function onClick() {
        return _this2.updateAuthState(!_this2.state.authOpen);
      }
    }, "Sign In"));
  };
  return AuthPage;
}(React.Component);

var sendLogin = function sendLogin(data, baseURL, endpoint) {
  try {
    var fullURL = "" + baseURL + endpoint;
    return Promise.resolve(axios.post(fullURL, data));
  } catch (e) {
    return Promise.reject(e);
  }
};

exports.default = AuthPage;
exports.sendLogin = sendLogin;
//# sourceMappingURL=index.js.map
