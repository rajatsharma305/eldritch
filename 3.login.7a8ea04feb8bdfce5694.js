webpackJsonp([3],{

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(820);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _reactReduxFirebase = __webpack_require__(223);
	
	var _reactRedux = __webpack_require__(695);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (component, path, key) {
	  return (0, _reactRedux.connect)(function (_ref) {
	    var firebase = _ref.firebase;
	    return (0, _defineProperty3.default)({}, key, (0, _reactReduxFirebase.dataToJS)(firebase, key));
	  })((0, _reactReduxFirebase.firebaseConnect)([path])(component));
	};

/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(646);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames3 = __webpack_require__(721);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	var _Box = __webpack_require__(765);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _Label = __webpack_require__(823);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Heading = __webpack_require__(824);
	
	var _Heading2 = _interopRequireDefault(_Heading);
	
	var _Headline = __webpack_require__(825);
	
	var _Headline2 = _interopRequireDefault(_Headline);
	
	var _Markdown = __webpack_require__(826);
	
	var _Markdown2 = _interopRequireDefault(_Markdown);
	
	var _Anchor = __webpack_require__(808);
	
	var _Anchor2 = _interopRequireDefault(_Anchor);
	
	var _Layer = __webpack_require__(773);
	
	var _Layer2 = _interopRequireDefault(_Layer);
	
	var _Video = __webpack_require__(922);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	var _CirclePlay = __webpack_require__(932);
	
	var _CirclePlay2 = _interopRequireDefault(_CirclePlay);
	
	var _Responsive = __webpack_require__(778);
	
	var _Responsive2 = _interopRequireDefault(_Responsive);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CARD;
	
	var LABEL_SIZES = {
	  xlarge: 'medium',
	  large: 'medium',
	  medium: 'medium',
	  small: 'medium',
	  xsmall: 'small'
	};
	
	var HEADLINE_SIZES = {
	  xlarge: 'medium',
	  large: 'medium'
	};
	
	var HEADING_TAGS = {
	  medium: 'h1',
	  small: 'h2',
	  xsmall: 'h3'
	};
	
	var PARAGRAPH_SIZES = {
	  xlarge: 'xlarge',
	  large: 'xlarge',
	  medium: 'large',
	  small: 'large',
	  xsmall: 'medium'
	};
	
	var PARAGRAPH_MARGINS = {
	  xlarge: 'large',
	  large: 'large',
	  medium: 'medium',
	  small: 'medium',
	  xsmall: 'small'
	};
	
	var Card = function (_Component) {
	  _inherits(Card, _Component);
	
	  function Card(props) {
	    _classCallCheck(this, Card);
	
	    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
	
	    _this._onClick = _this._onClick.bind(_this);
	    _this._onResponsive = _this._onResponsive.bind(_this);
	    _this.state = { activeVideo: false, small: false };
	    return _this;
	  }
	
	  _createClass(Card, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._responsive = _Responsive2.default.start(this._onResponsive);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._responsive) {
	        this._responsive.stop();
	      }
	    }
	  }, {
	    key: '_onResponsive',
	    value: function _onResponsive(small) {
	      this.setState({ small: !!small });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(event) {
	      var video = this.props.video;
	
	      if (video) {
	        event.preventDefault();
	        this.setState({ activeVideo: !this.state.activeVideo });
	      }
	    }
	  }, {
	    key: '_renderLabel',
	    value: function _renderLabel() {
	      var _props = this.props,
	          label = _props.label,
	          textSize = _props.textSize;
	
	      var result = label;
	      if (typeof label === 'string') {
	        result = _react2.default.createElement(
	          _Label2.default,
	          { size: LABEL_SIZES[textSize], margin: 'none', uppercase: true },
	          label
	        );
	      }
	      return result;
	    }
	  }, {
	    key: '_renderHeading',
	    value: function _renderHeading() {
	      var _props2 = this.props,
	          heading = _props2.heading,
	          headingStrong = _props2.headingStrong,
	          textSize = _props2.textSize;
	
	      var result = heading;
	      if (typeof heading === 'string') {
	        if (HEADLINE_SIZES[textSize]) {
	          result = _react2.default.createElement(
	            _Headline2.default,
	            { size: HEADLINE_SIZES[textSize], strong: headingStrong },
	            heading
	          );
	        } else {
	          result = _react2.default.createElement(
	            _Heading2.default,
	            { tag: HEADING_TAGS[textSize], strong: headingStrong },
	            heading
	          );
	        }
	      }
	      return result;
	    }
	  }, {
	    key: '_renderLink',
	    value: function _renderLink() {
	      var link = this.props.link;
	
	      return link;
	    }
	  }, {
	    key: '_renderThumbnail',
	    value: function _renderThumbnail() {
	      var _props3 = this.props,
	          direction = _props3.direction,
	          thumbnail = _props3.thumbnail,
	          video = _props3.video;
	      var small = this.state.small;
	
	      var result = thumbnail;
	      if (typeof thumbnail === 'string') {
	        var size = small ? 'large' : 'xlarge';
	        var videoIcon = video ? _react2.default.createElement(_Anchor2.default, { icon: _react2.default.createElement(_CirclePlay2.default, { responsive: false,
	            colorIndex: 'brand', size: size }) }) : undefined;
	
	        var flex = 'row' === direction ? 'grow' : undefined;
	
	        result = _react2.default.createElement(
	          _Box2.default,
	          { className: CLASS_ROOT + '__thumbnail', flex: flex,
	            backgroundImage: 'url(' + thumbnail + ')', basis: 'small',
	            justify: 'center', align: 'center' },
	          videoIcon
	        );
	      }
	      return result;
	    }
	  }, {
	    key: '_renderVideoLayer',
	    value: function _renderVideoLayer() {
	      var video = this.props.video;
	      var activeVideo = this.state.activeVideo;
	
	      var result = void 0;
	
	      if (video && activeVideo) {
	        var layerContent = void 0;
	        if (video.source) {
	          layerContent = _react2.default.createElement(
	            _Video2.default,
	            null,
	            _react2.default.createElement('source', { src: video.source, type: 'video/' + video.type })
	          );
	        } else {
	          layerContent = video;
	        }
	
	        result = _react2.default.createElement(
	          _Layer2.default,
	          { onClose: this._onClick, closer: true, flush: true },
	          layerContent
	        );
	      }
	
	      return result;
	    }
	  }, {
	    key: '_renderDescription',
	    value: function _renderDescription() {
	      var _props4 = this.props,
	          description = _props4.description,
	          textSize = _props4.textSize;
	
	      var result = description;
	      if (typeof description === 'string') {
	        var components = {
	          p: { props: {
	              margin: PARAGRAPH_MARGINS[textSize],
	              size: PARAGRAPH_SIZES[textSize]
	            } }
	        };
	        result = _react2.default.createElement(_Markdown2.default, { components: components, content: description });
	      }
	      return result;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames2;
	
	      var _props5 = this.props,
	          a11yTitle = _props5.a11yTitle,
	          children = _props5.children,
	          className = _props5.className,
	          contentPad = _props5.contentPad,
	          onClick = _props5.onClick,
	          reverse = _props5.reverse,
	          truncate = _props5.truncate;
	
	      var boxProps = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
	      var restProps = _Props2.default.omit(this.props, Object.keys(Card.propTypes));
	
	      var classes = (0, _classnames4.default)(CLASS_ROOT, _defineProperty({}, CLASS_ROOT + '--selectable', onClick), className);
	
	      var thumbnail = this._renderThumbnail();
	      var label = this._renderLabel();
	      var heading = this._renderHeading();
	      var description = this._renderDescription();
	      var link = this._renderLink();
	      var videoLayer = this._renderVideoLayer();
	
	      var contentClasses = (0, _classnames4.default)((_classnames2 = {}, _defineProperty(_classnames2, CLASS_ROOT + '__content', true), _defineProperty(_classnames2, CLASS_ROOT + '__content--truncate', truncate), _classnames2));
	
	      var basis = 'row' === this.props.direction ? '2/3' : undefined;
	      var text = _react2.default.createElement(
	        _Box2.default,
	        { className: contentClasses, pad: contentPad,
	          basis: basis },
	        label,
	        heading,
	        description,
	        children,
	        link
	      );
	
	      var cardJustify = void 0;
	      if (reverse) {
	        // align thumbnail to bottom/right of card for bottom cardPlacement
	        cardJustify = 'between';
	      }
	
	      if (!this.props.size) {
	        if (this.props.direction === 'row') {
	          boxProps.size = { width: 'xlarge' };
	        } else {
	          boxProps.size = { width: 'medium' };
	        }
	      }
	
	      return _react2.default.createElement(
	        _Box2.default,
	        _extends({}, boxProps, restProps, { className: classes, wrap: true,
	          justify: cardJustify, onClick: onClick, a11yTitle: a11yTitle }),
	        thumbnail,
	        text,
	        videoLayer
	      );
	    }
	  }]);
	
	  return Card;
	}(_react.Component);
	
	Card.displayName = 'Card';
	exports.default = Card;
	;
	
	Card.propTypes = _extends({
	  contentPad: _Box2.default.propTypes.pad,
	  description: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  heading: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  headingStrong: _react.PropTypes.bool,
	  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  link: _react.PropTypes.element,
	  textSize: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
	  thumbnail: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  truncate: _react.PropTypes.bool,
	  video: _react.PropTypes.oneOfType([_react.PropTypes.shape({
	    source: _react.PropTypes.string.isRequired,
	    type: _react.PropTypes.string
	  }), _react.PropTypes.element])
	}, _Box2.default.propTypes);
	
	Card.defaultProps = {
	  a11yTitle: 'Card',
	  contentPad: 'medium',
	  headingStrong: true,
	  textSize: 'small'
	};
	module.exports = exports['default'];

/***/ },

/***/ 823:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Announcer = __webpack_require__(772);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.LABEL;
	
	var Label = function (_Component) {
	  _inherits(Label, _Component);
	
	  function Label() {
	    _classCallCheck(this, Label);
	
	    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
	  }
	
	  _createClass(Label, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.announce) {
	        (0, _Announcer.announce)(this.labelRef.textContent);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames,
	          _this2 = this;
	
	      var _props = this.props,
	          align = _props.align,
	          children = _props.children,
	          className = _props.className,
	          labelFor = _props.labelFor,
	          margin = _props.margin,
	          size = _props.size,
	          truncate = _props.truncate,
	          uppercase = _props.uppercase,
	          props = _objectWithoutProperties(_props, ['align', 'children', 'className', 'labelFor', 'margin', 'size', 'truncate', 'uppercase']);
	
	      delete props.announce;
	      var labelMargin = margin ? margin : 'small' === size ? 'none' : 'medium';
	      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--truncate', truncate), _defineProperty(_classnames, CLASS_ROOT + '--uppercase', uppercase), _defineProperty(_classnames, CLASS_ROOT + '--margin-' + labelMargin, labelMargin), _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _classnames), className);
	
	      return _react2.default.createElement(
	        'label',
	        _extends({ ref: function ref(_ref) {
	            return _this2.labelRef = _ref;
	          } }, props, {
	          className: classes, htmlFor: labelFor }),
	        children
	      );
	    }
	  }]);
	
	  return Label;
	}(_react.Component);
	
	Label.displayName = 'Label';
	exports.default = Label;
	;
	
	Label.propTypes = {
	  align: _react.PropTypes.oneOf(['start', 'center', 'end']),
	  announce: _react.PropTypes.bool,
	  labelFor: _react.PropTypes.string,
	  margin: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  truncate: _react.PropTypes.bool,
	  uppercase: _react.PropTypes.bool
	};
	
	Label.defaultProps = {
	  size: 'medium'
	};
	module.exports = exports['default'];

/***/ },

/***/ 824:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.HEADING;
	
	var Heading = function (_Component) {
	  _inherits(Heading, _Component);
	
	  function Heading() {
	    _classCallCheck(this, Heading);
	
	    return _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).apply(this, arguments));
	  }
	
	  _createClass(Heading, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          align = _props.align,
	          children = _props.children,
	          className = _props.className,
	          margin = _props.margin,
	          size = _props.size,
	          strong = _props.strong,
	          Tag = _props.tag,
	          truncate = _props.truncate,
	          uppercase = _props.uppercase,
	          props = _objectWithoutProperties(_props, ['align', 'children', 'className', 'margin', 'size', 'strong', 'tag', 'truncate', 'uppercase']);
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--strong', strong), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _defineProperty(_classnames, CLASS_ROOT + '--margin-' + margin, margin), _defineProperty(_classnames, CLASS_ROOT + '--truncate', truncate), _defineProperty(_classnames, CLASS_ROOT + '--uppercase', uppercase), _classnames), className);
	
	      return _react2.default.createElement(
	        Tag,
	        _extends({}, props, { className: classes }),
	        children
	      );
	    }
	  }]);
	
	  return Heading;
	}(_react.Component);
	
	Heading.displayName = 'Heading';
	exports.default = Heading;
	
	
	Heading.propTypes = {
	  align: _react.PropTypes.oneOf(['start', 'center', 'end']),
	  margin: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
	  strong: _react.PropTypes.bool,
	  tag: _react.PropTypes.string,
	  truncate: _react.PropTypes.bool,
	  uppercase: _react.PropTypes.bool
	};
	
	Heading.defaultProps = {
	  tag: 'h1'
	};
	module.exports = exports['default'];

/***/ },

/***/ 825:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.HEADLINE;
	
	var Headline = function (_Component) {
	  _inherits(Headline, _Component);
	
	  function Headline() {
	    _classCallCheck(this, Headline);
	
	    return _possibleConstructorReturn(this, (Headline.__proto__ || Object.getPrototypeOf(Headline)).apply(this, arguments));
	  }
	
	  _createClass(Headline, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          align = _props.align,
	          children = _props.children,
	          className = _props.className,
	          margin = _props.margin,
	          size = _props.size,
	          strong = _props.strong,
	          props = _objectWithoutProperties(_props, ['align', 'children', 'className', 'margin', 'size', 'strong']);
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _defineProperty(_classnames, CLASS_ROOT + '--margin-' + margin, margin), _defineProperty(_classnames, CLASS_ROOT + '--strong', strong), _classnames), className);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({}, props, { className: classes }),
	        children
	      );
	    }
	  }]);
	
	  return Headline;
	}(_react.Component);
	
	Headline.displayName = 'Headline';
	exports.default = Headline;
	;
	
	Headline.propTypes = {
	  align: _react.PropTypes.oneOf(['start', 'center', 'end']),
	  margin: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
	  strong: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 826:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _markdownToJsx = __webpack_require__(827);
	
	var _markdownToJsx2 = _interopRequireDefault(_markdownToJsx);
	
	var _deepAssign = __webpack_require__(916);
	
	var _deepAssign2 = _interopRequireDefault(_deepAssign);
	
	var _Paragraph = __webpack_require__(807);
	
	var _Paragraph2 = _interopRequireDefault(_Paragraph);
	
	var _Table = __webpack_require__(918);
	
	var _Table2 = _interopRequireDefault(_Table);
	
	var _Heading = __webpack_require__(824);
	
	var _Heading2 = _interopRequireDefault(_Heading);
	
	var _Anchor = __webpack_require__(808);
	
	var _Anchor2 = _interopRequireDefault(_Anchor);
	
	var _Image = __webpack_require__(921);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// (C) Copyright 2016 Hewlett Packard Enterprise Development LP
	
	var GrommetMarkdown = function GrommetMarkdown(props) {
	  var content = props.content,
	      components = props.components;
	
	
	  var heading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce(function (heading, current) {
	    heading[current] = {
	      component: _Heading2.default,
	      props: {
	        tag: current
	      }
	    };
	
	    return heading;
	  }, {});
	
	  var options = (0, _deepAssign2.default)({
	    a: {
	      component: _Anchor2.default
	    },
	    img: {
	      component: _Image2.default,
	      props: {
	        caption: true
	      }
	    },
	    p: {
	      component: _Paragraph2.default
	    },
	    table: {
	      component: _Table2.default
	    }
	  }, heading, components);
	
	  return _react2.default.createElement(
	    _markdownToJsx2.default,
	    { options: { overrides: options } },
	    content
	  );
	};
	
	GrommetMarkdown.propTypes = {
	  content: _react.PropTypes.string,
	  components: _react.PropTypes.shape({
	    props: _react.PropTypes.object
	  })
	};
	
	GrommetMarkdown.defaultProps = {
	  components: {},
	  content: ''
	};
	
	exports.default = GrommetMarkdown;
	module.exports = exports['default'];

/***/ },

/***/ 827:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.compiler = compiler;
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(691);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _lodash = __webpack_require__(828);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _unified = __webpack_require__(829);
	
	var _unified2 = _interopRequireDefault(_unified);
	
	var _remarkParse = __webpack_require__(845);
	
	var _remarkParse2 = _interopRequireDefault(_remarkParse);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }
	
	var BLOCK_ELEMENT_TAGS = ['article', 'header', 'aside', 'hgroup', 'blockquote', 'hr', 'iframe', 'body', 'li', 'map', 'button', 'object', 'canvas', 'ol', 'caption', 'output', 'col', 'p', 'colgroup', 'pre', 'dd', 'progress', 'div', 'section', 'dl', 'table', 'td', 'dt', 'tbody', 'embed', 'textarea', 'fieldset', 'tfoot', 'figcaption', 'th', 'figure', 'thead', 'footer', 'tr', 'form', 'ul', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'video', 'script', 'style'];
	var BLOCK_ELEMENT_REGEX = new RegExp('^<(' + BLOCK_ELEMENT_TAGS.join('|') + ')', 'i');
	
	// [0] === tag, [...] = attribute pairs
	var HTML_EXTRACTOR_REGEX = /([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
	var SELF_CLOSING_ELEMENT_TAGS = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
	var SELF_CLOSING_ELEMENT_REGEX = new RegExp('^<(' + SELF_CLOSING_ELEMENT_TAGS.join('|') + ')', 'i');
	var TEXT_AST_TYPES = ['text', 'textNode'];
	
	var ATTRIBUTE_TO_JSX_PROP_MAP = {
	    'accept-charset': 'acceptCharset',
	    'accesskey': 'accessKey',
	    'allowfullscreen': 'allowFullScreen',
	    'allowtransparency': 'allowTransparency',
	    'autocomplete': 'autoComplete',
	    'autofocus': 'autoFocus',
	    'autoplay': 'autoPlay',
	    'cellpadding': 'cellPadding',
	    'cellspacing': 'cellSpacing',
	    'charset': 'charSet',
	    'class': 'className',
	    'classid': 'classId',
	    'colspan': 'colSpan',
	    'contenteditable': 'contentEditable',
	    'contextmenu': 'contextMenu',
	    'crossorigin': 'crossOrigin',
	    'enctype': 'encType',
	    'for': 'htmlFor',
	    'formaction': 'formAction',
	    'formenctype': 'formEncType',
	    'formmethod': 'formMethod',
	    'formnovalidate': 'formNoValidate',
	    'formtarget': 'formTarget',
	    'frameborder': 'frameBorder',
	    'hreflang': 'hrefLang',
	    'http-equiv': 'httpEquiv',
	    'inputmode': 'inputMode',
	    'keyparams': 'keyParams',
	    'keytype': 'keyType',
	    'marginheight': 'marginHeight',
	    'marginwidth': 'marginWidth',
	    'maxlength': 'maxLength',
	    'mediagroup': 'mediaGroup',
	    'minlength': 'minLength',
	    'novalidate': 'noValidate',
	    'radiogroup': 'radioGroup',
	    'readonly': 'readOnly',
	    'rowspan': 'rowSpan',
	    'spellcheck': 'spellCheck',
	    'srcdoc': 'srcDoc',
	    'srclang': 'srcLang',
	    'srcset': 'srcSet',
	    'tabindex': 'tabIndex',
	    'usemap': 'useMap'
	};
	
	var getType = Object.prototype.toString;
	
	function extractDefinitionsFromASTTree(ast, parser) {
	    function reducer(aggregator, node) {
	        if (node.type === 'definition' || node.type === 'footnoteDefinition') {
	            aggregator.definitions[node.identifier] = node;
	
	            if (node.type === 'footnoteDefinition') {
	                if (node.children && node.children.length === 1 && node.children[0].type === 'paragraph') {
	                    node.children[0].children.unshift({
	                        type: 'textNode',
	                        value: '[' + node.identifier + ']: '
	                    });
	                } /* package the prefix inside the first child */
	
	                aggregator.footnotes.push(_react2.default.createElement(
	                    'div',
	                    { key: node.identifier, id: node.identifier },
	                    node.value || node.children.map(parser)
	                ));
	            }
	        }
	
	        return Array.isArray(node.children) ? node.children.reduce(reducer, aggregator) : aggregator;
	    };
	
	    return [ast].reduce(reducer, {
	        definitions: {},
	        footnotes: []
	    });
	}
	
	function formExtraPropsForHTMLNodeType() {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var ast = arguments[1];
	    var definitions = arguments[2];
	
	    switch (ast.type) {
	        case 'footnoteReference':
	            return _extends({}, props, {
	                href: '#' + ast.identifier
	            });
	
	        case 'image':
	            return _extends({}, props, {
	                title: ast.title,
	                alt: ast.alt,
	                src: ast.url
	            });
	
	        case 'imageReference':
	            return _extends({}, props, {
	                title: (0, _lodash2.default)(definitions, '[\'' + ast.identifier + '\'].title'),
	                alt: ast.alt,
	                src: (0, _lodash2.default)(definitions, '[\'' + ast.identifier + '\'].url')
	            });
	
	        case 'link':
	            return _extends({}, props, {
	                title: ast.title,
	                href: ast.url
	            });
	
	        case 'linkReference':
	            return _extends({}, props, {
	                title: (0, _lodash2.default)(definitions, '[\'' + ast.identifier + '\'].title'),
	                href: (0, _lodash2.default)(definitions, '[\'' + ast.identifier + '\'].url')
	            });
	
	        case 'list':
	            return _extends({}, props, {
	                start: ast.start
	            });
	
	        case 'tableCell':
	        case 'th':
	            return _extends({}, props, {
	                style: { textAlign: ast.align }
	            });
	    }
	
	    return props;
	}
	
	function getHTMLNodeTypeFromASTNodeType(node) {
	    switch (node.type) {
	        case 'break':
	            return 'br';
	
	        case 'delete':
	            return 'del';
	
	        case 'emphasis':
	            return 'em';
	
	        case 'footnoteReference':
	            return 'a';
	
	        case 'heading':
	            return 'h' + node.depth;
	
	        case 'image':
	        case 'imageReference':
	            return 'img';
	
	        case 'inlineCode':
	            return 'code';
	
	        case 'link':
	        case 'linkReference':
	            return 'a';
	
	        case 'list':
	            return node.ordered ? 'ol' : 'ul';
	
	        case 'listItem':
	            return 'li';
	
	        case 'paragraph':
	            return 'p';
	
	        case 'root':
	            return 'div';
	
	        case 'tableHeader':
	            return 'thead';
	
	        case 'tableRow':
	            return 'tr';
	
	        case 'tableCell':
	            return 'td';
	
	        case 'thematicBreak':
	            return 'hr';
	
	        case 'definition':
	        case 'footnoteDefinition':
	        case 'yaml':
	            return null;
	
	        default:
	            return node.type;
	    }
	}
	
	function seekCellsAndAlignThemIfNecessary(root, alignmentValues) {
	    var mapper = function mapper(child, index) {
	        if (child.type === 'tableCell') {
	            return _extends({}, child, {
	                align: alignmentValues[index]
	            });
	        } else if (Array.isArray(child.children) && child.children.length) {
	            return child.children.map(mapper);
	        }
	
	        return child;
	    };
	
	    if (Array.isArray(root.children) && root.children.length) {
	        root.children = root.children.map(mapper);
	    }
	
	    return root;
	}
	
	function attributeValueToJSXPropValue(key, value) {
	    if (key === 'style') {
	        return value.split(/;\s?/).reduce(function (styles, kvPair) {
	
	            var key = kvPair.slice(0, kvPair.indexOf(':'));
	
	            // snake-case to camelCase
	            // also handles PascalCasing vendor prefixes
	            var camelCasedKey = key.replace(/(\-[a-z])/g, function (substr) {
	                return substr[1].toUpperCase();
	            });
	
	            // key.length + 1 to skip over the colon
	            styles[camelCasedKey] = kvPair.slice(key.length + 1).trim();
	
	            return styles;
	        }, {});
	    }
	
	    return value;
	}
	
	function coalesceInlineHTML(ast) {
	    function coalescer(node, index, siblings) {
	        if (node.type === 'html') {
	            // ignore block-level elements
	            if (BLOCK_ELEMENT_REGEX.test(node.value)) {
	                return;
	            }
	
	            // ignore self-closing or non-content-bearing elements
	            if (SELF_CLOSING_ELEMENT_REGEX.test(node.value)) {
	                return;
	            }
	
	            // are there more html nodes directly after? if so, fold them into the current node
	            if (index < siblings.length - 1 && siblings[index + 1].type === 'html') {
	                // create a new coalescer context
	                coalescer(siblings[index + 1], index + 1, siblings);
	            }
	
	            var i = index + 1;
	            var end = void 0;
	
	            // where's the end tag?
	            while (end === undefined && i < siblings.length) {
	                if (siblings[i].type !== 'html') {
	                    i += 1;
	                    continue;
	                }
	
	                end = siblings[i];
	            }
	
	            /* all interim elements now become children of the current node, and we splice them (including end tag)
	               out of the sibling array so they will not be iterated-over by forEach */
	
	            node.children = siblings.slice(index + 1, i);
	            siblings.splice(index + 1, i - index);
	
	            var _node$value$match = node.value.match(HTML_EXTRACTOR_REGEX),
	                _node$value$match2 = _toArray(_node$value$match),
	                tag = _node$value$match2[0],
	                attributePairs = _node$value$match2.slice(1);
	
	            // reassign the current node to whatever its tag is
	
	
	            node.type = tag.toLowerCase();
	
	            // make a best-effort conversion to JSX props
	            node.props = attributePairs.reduce(function (props, kvPair) {
	                var valueIndex = kvPair.indexOf('=');
	                var key = kvPair.slice(0, valueIndex === -1 ? undefined : valueIndex);
	
	                // ignoring inline event handlers at this time - they pose enough of a security risk that they're
	                // not worth preserving; there's a reason React calls it "dangerouslySetInnerHTML"!
	
	                if (key.indexOf('on') !== 0) {
	                    var value = kvPair.slice(key.length + 1);
	
	                    // strip the outermost single/double quote if it exists
	                    if (value[0] === '"' || value[0] === '\'') {
	                        value = value.slice(1, value.length - 1);
	                    }
	
	                    props[ATTRIBUTE_TO_JSX_PROP_MAP[key] || key] = attributeValueToJSXPropValue(key, value) || true;
	                }
	
	                return props;
	            }, {});
	
	            // null out .value or astToJSX() will set it as the child
	            node.value = null;
	        }
	
	        if (node.children) {
	            node.children.forEach(coalescer);
	        }
	    };
	
	    return ast.children.forEach(coalescer);
	}
	
	function compiler(markdown) {
	    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	        _ref$overrides = _ref.overrides,
	        overrides = _ref$overrides === undefined ? {} : _ref$overrides;
	
	    var definitions = void 0;
	    var footnotes = void 0;
	
	    function astToJSX(ast, index) {
	        /* `this` is the dictionary of definitions */
	        if (TEXT_AST_TYPES.indexOf(ast.type) !== -1) {
	            return ast.value;
	        }
	
	        var key = index || '0';
	
	        if (ast.type === 'code' && ast.value) {
	            var preProps = _extends({}, (0, _lodash2.default)(overrides, 'pre.props', {}), {
	                key: key
	            });
	
	            var langClassName = 'lang-' + ast.lang;
	            var codeBaseProps = (0, _lodash2.default)(overrides, 'code.props', {});
	            var codeProps = _extends({}, codeBaseProps, {
	                className: codeBaseProps.className ? codeBaseProps.className + ' ' + langClassName : langClassName
	            });
	
	            return _react2.default.createElement((0, _lodash2.default)(overrides, 'pre.component', 'pre'), preProps, _react2.default.createElement((0, _lodash2.default)(overrides, 'code.component', 'code'), codeProps, ast.value));
	        } /* Refers to fenced blocks, need to create a pre:code nested structure */
	
	        if (ast.type === 'list' && ast.loose === false) {
	            ast.children = ast.children.map(function (item) {
	                if (item.children.length === 1 && item.children[0].type === 'paragraph') {
	                    return _extends({}, item, {
	                        children: item.children[0].children
	                    });
	                }
	
	                return item;
	            });
	        } /* tight list, remove the paragraph wrapper just inside the listItem */
	
	        if (ast.type === 'listItem') {
	            if (ast.checked === true || ast.checked === false) {
	                var liProps = _extends({}, (0, _lodash2.default)(overrides, 'li.props', {}), {
	                    key: key
	                });
	
	                var inputProps = _extends({}, (0, _lodash2.default)(overrides, 'input.props', {}), {
	                    key: 'checkbox',
	                    type: 'checkbox',
	                    checked: ast.checked,
	                    readOnly: true
	                });
	
	                return _react2.default.createElement((0, _lodash2.default)(overrides, 'li.component', 'li'), liProps, [_react2.default.createElement((0, _lodash2.default)(overrides, 'input.component', 'input'), inputProps), ast.children.map(astToJSX)]);
	            } /* gfm task list, need to add a checkbox */
	        }
	
	        if (ast.type === 'html') {
	            return _react2.default.createElement('div', { key: key, dangerouslySetInnerHTML: { __html: ast.value } });
	        } /* arbitrary HTML, do the gross thing for now */
	
	        if (ast.type === 'table') {
	            var tbody = { type: 'tbody', children: [] };
	
	            ast.children = ast.children.reduce(function (children, child, index) {
	                if (index === 0) {
	                    /* manually marking the first row as tableHeader since that was removed in remark@4.x; it's important semantically. */
	                    child.type = 'tableHeader';
	                    children.unshift(seekCellsAndAlignThemIfNecessary(child, ast.align));
	                } else if (child.type === 'tableRow') {
	                    tbody.children.push(seekCellsAndAlignThemIfNecessary(child, ast.align));
	                } else if (child.type === 'tableFooter') {
	                    children.push(seekCellsAndAlignThemIfNecessary(child, ast.align));
	                }
	
	                return children;
	            }, [tbody]);
	        } /* React yells if things aren't in the proper structure, so need to
	            delve into the immediate children and wrap tablerow(s) in a tbody */
	
	        if (ast.type === 'tableFooter') {
	            ast.children = [{
	                type: 'tr',
	                children: ast.children
	            }];
	        } /* React yells if things aren't in the proper structure, so need to
	            delve into the immediate children and wrap the cells in a tablerow */
	
	        if (ast.type === 'tableHeader') {
	            ast.children = [{
	                type: 'tr',
	                children: ast.children.map(function (child) {
	                    if (child.type === 'tableCell') {
	                        child.type = 'th';
	                    } /* et voila, a proper table header */
	
	                    return child;
	                })
	            }];
	        } /* React yells if things aren't in the proper structure, so need to
	            delve into the immediate children and wrap the cells in a tablerow */
	
	        if (ast.type === 'footnoteReference') {
	            ast.children = [{ type: 'sup', value: ast.identifier }];
	        } /* place the identifier inside a superscript tag for the link */
	
	        var htmlNodeType = getHTMLNodeTypeFromASTNodeType(ast);
	        if (htmlNodeType === null) {
	            return null;
	        } /* bail out, not convertable to any HTML representation */
	
	        var props = _extends({ key: key }, ast.props);
	
	        var override = overrides[htmlNodeType];
	        if (override) {
	            if (override.component) {
	                htmlNodeType = override.component;
	            } /* sub out the normal html tag name for the JSX / ReactFactory
	                 passed in by the caller */
	
	            if (override.props) {
	                props = _extends({}, override.props, props);
	            } /* apply the prop overrides beneath the minimal set that are necessary
	                 to have the markdown conversion work as expected */
	        }
	
	        /* their props + our props, with any duplicate keys overwritten by us
	           (necessary evil, file an issue if something comes up that needs
	           extra attention, only props specified in `formExtraPropsForHTMLNodeType`
	           will be overwritten on a key collision) */
	        var finalProps = formExtraPropsForHTMLNodeType(props, ast, definitions);
	
	        if (ast.children && ast.children.length === 1) {
	            if (TEXT_AST_TYPES.indexOf(ast.children[0].type) !== -1) {
	                ast.children = ast.children[0].value;
	            }
	        } /* solitary text children don't need full parsing or React will add a wrapper */
	
	        var children = Array.isArray(ast.children) ? ast.children.map(astToJSX) : ast.children;
	
	        return _react2.default.createElement(htmlNodeType, finalProps, ast.value || children);
	    }
	
	    if (typeof markdown !== 'string') {
	        throw new Error('markdown-to-jsx: the first argument must be\n                         a string');
	    }
	
	    if (getType.call(overrides) !== '[object Object]') {
	        throw new Error('markdown-to-jsx: options.overrides (second argument property) must be\n                         undefined or an object literal with shape:\n                         {\n                            htmltagname: {\n                                component: string|ReactComponent(optional),\n                                props: object(optional)\n                            }\n                         }');
	    }
	
	    var remarkAST = (0, _unified2.default)().data('settings', {
	        footnotes: true,
	        gfm: true,
	        position: false
	    }).use(_remarkParse2.default).parse(markdown);
	
	    var extracted = extractDefinitionsFromASTTree(remarkAST, astToJSX);
	
	    definitions = extracted.definitions;
	    footnotes = extracted.footnotes;
	
	    coalesceInlineHTML(remarkAST);
	
	    var jsx = astToJSX(remarkAST);
	
	    // discard the root <div> node if there is only one valid initial child
	    // generally this is a paragraph
	    if (jsx.props.children.length === 1) {
	        jsx = jsx.props.children[0];
	    }
	
	    if (footnotes.length) {
	        jsx.props.children.push(_react2.default.createElement(
	            'footer',
	            { key: 'footnotes' },
	            footnotes
	        ));
	    }
	
	    return jsx;
	};
	
	/**
	 * A simple HOC for easy React use. Feed the markdown content as a direct child
	 * and the rest is taken care of automatically.
	 *
	 * @param  {String}   options.children   must be a string
	 * @param  {Object}   options.options    markdown-to-jsx options (arg 2 of the compiler)
	 *
	 * @return {ReactElement} the compiled JSX
	 */
	var Component = function Component(_ref2) {
	    var children = _ref2.children,
	        options = _ref2.options,
	        props = _objectWithoutProperties(_ref2, ['children', 'options']);
	
	    return compiler(children, options);
	};
	
	Component.propTypes = {
	    children: _propTypes2.default.string.isRequired,
	    options: _propTypes2.default.object
	};
	
	exports.default = Component;


/***/ },

/***/ 828:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Symbol = root.Symbol,
	    splice = arrayProto.splice;
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map'),
	    nativeCreate = getNative(Object, 'create');
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);
	
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/* Dependencies. */
	var has = __webpack_require__(830);
	var extend = __webpack_require__(833);
	var bail = __webpack_require__(834);
	var vfile = __webpack_require__(835);
	var trough = __webpack_require__(841);
	var string = __webpack_require__(840);
	var func = __webpack_require__(842);
	var array = __webpack_require__(843);
	var plain = __webpack_require__(844);
	
	/* Expose a frozen processor. */
	module.exports = unified().freeze();
	
	var slice = [].slice;
	
	/* Process pipeline. */
	var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);
	
	function pipelineParse(p, ctx) {
	  ctx.tree = p.parse(ctx.file);
	}
	
	function pipelineRun(p, ctx, next) {
	  p.run(ctx.tree, ctx.file, done);
	
	  function done(err, tree, file) {
	    if (err) {
	      next(err);
	    } else {
	      ctx.tree = tree;
	      ctx.file = file;
	      next();
	    }
	  }
	}
	
	function pipelineStringify(p, ctx) {
	  ctx.file.contents = p.stringify(ctx.tree, ctx.file);
	}
	
	/* Function to create the first processor. */
	function unified() {
	  var attachers = [];
	  var transformers = trough();
	  var namespace = {};
	  var frozen = false;
	  var freezeIndex = -1;
	
	  /* Data management. */
	  processor.data = data;
	
	  /* Lock. */
	  processor.freeze = freeze;
	
	  /* Plug-ins. */
	  processor.attachers = attachers;
	  processor.use = use;
	
	  /* API. */
	  processor.parse = parse;
	  processor.stringify = stringify;
	  processor.run = run;
	  processor.runSync = runSync;
	  processor.process = process;
	  processor.processSync = processSync;
	
	  /* Expose. */
	  return processor;
	
	  /* Create a new processor based on the processor
	   * in the current scope. */
	  function processor() {
	    var destination = unified();
	    var length = attachers.length;
	    var index = -1;
	
	    while (++index < length) {
	      destination.use.apply(null, attachers[index]);
	    }
	
	    destination.data(extend(true, {}, namespace));
	
	    return destination;
	  }
	
	  /* Freeze: used to signal a processor that has finished
	   * configuration.
	   *
	   * For example, take unified itself.  It’s frozen.
	   * Plug-ins should not be added to it.  Rather, it should
	   * be extended, by invoking it, before modifying it.
	   *
	   * In essence, always invoke this when exporting a
	   * processor. */
	  function freeze() {
	    var values;
	    var plugin;
	    var options;
	    var transformer;
	
	    if (frozen) {
	      return processor;
	    }
	
	    while (++freezeIndex < attachers.length) {
	      values = attachers[freezeIndex];
	      plugin = values[0];
	      options = values[1];
	      transformer = null;
	
	      if (options === false) {
	        continue;
	      }
	
	      if (options === true) {
	        values[1] = undefined;
	      }
	
	      transformer = plugin.apply(processor, values.slice(1));
	
	      if (func(transformer)) {
	        transformers.use(transformer);
	      }
	    }
	
	    frozen = true;
	    freezeIndex = Infinity;
	
	    return processor;
	  }
	
	  /* Data management.
	   * Getter / setter for processor-specific informtion. */
	  function data(key, value) {
	    if (string(key)) {
	      /* Set `key`. */
	      if (arguments.length === 2) {
	        assertUnfrozen('data', frozen);
	
	        namespace[key] = value;
	
	        return processor;
	      }
	
	      /* Get `key`. */
	      return (has(namespace, key) && namespace[key]) || null;
	    }
	
	    /* Set space. */
	    if (key) {
	      assertUnfrozen('data', frozen);
	      namespace = key;
	      return processor;
	    }
	
	    /* Get space. */
	    return namespace;
	  }
	
	  /* Plug-in management.
	   *
	   * Pass it:
	   * *   an attacher and options,
	   * *   a preset,
	   * *   a list of presets, attachers, and arguments (list
	   *     of attachers and options). */
	  function use(value) {
	    var settings;
	
	    assertUnfrozen('use', frozen);
	
	    if (value === null || value === undefined) {
	      /* Empty */
	    } else if (func(value)) {
	      addPlugin.apply(null, arguments);
	    } else if (typeof value === 'object') {
	      if ('length' in value) {
	        addList(value);
	      } else {
	        addPreset(value);
	      }
	    } else {
	      throw new Error('Expected usable value, not `' + value + '`');
	    }
	
	    if (settings) {
	      namespace.settings = extend(namespace.settings || {}, settings);
	    }
	
	    return processor;
	
	    function addPreset(result) {
	      addList(result.plugins);
	
	      if (result.settings) {
	        settings = extend(settings || {}, result.settings);
	      }
	    }
	
	    function add(value) {
	      if (func(value)) {
	        addPlugin(value);
	      } else if (typeof value === 'object') {
	        if ('length' in value) {
	          addPlugin.apply(null, value);
	        } else {
	          addPreset(value);
	        }
	      } else {
	        throw new Error('Expected usable value, not `' + value + '`');
	      }
	    }
	
	    function addList(plugins) {
	      var length;
	      var index;
	
	      if (plugins === null || plugins === undefined) {
	        /* Empty */
	      } else if (array(plugins)) {
	        length = plugins.length;
	        index = -1;
	
	        while (++index < length) {
	          add(plugins[index]);
	        }
	      } else {
	        throw new Error('Expected a list of plugins, not `' + plugins + '`');
	      }
	    }
	
	    function addPlugin(plugin, value) {
	      var entry = find(plugin);
	
	      if (entry) {
	        if (plain(entry[1]) && plain(value)) {
	          value = extend(entry[1], value);
	        }
	
	        entry[1] = value;
	      } else {
	        attachers.push(slice.call(arguments));
	      }
	    }
	  }
	
	  function find(plugin) {
	    var length = attachers.length;
	    var index = -1;
	    var entry;
	
	    while (++index < length) {
	      entry = attachers[index];
	
	      if (entry[0] === plugin) {
	        return entry;
	      }
	    }
	  }
	
	  /* Parse a file (in string or VFile representation)
	   * into a Unist node using the `Parser` on the
	   * processor. */
	  function parse(doc) {
	    var file = vfile(doc);
	    var Parser;
	
	    freeze();
	    Parser = processor.Parser;
	    assertParser('parse', Parser);
	
	    if (newable(Parser)) {
	      return new Parser(String(file), file).parse();
	    }
	
	    return Parser(String(file), file); // eslint-disable-line new-cap
	  }
	
	  /* Run transforms on a Unist node representation of a file
	   * (in string or VFile representation), async. */
	  function run(node, file, cb) {
	    assertNode(node);
	    freeze();
	
	    if (!cb && func(file)) {
	      cb = file;
	      file = null;
	    }
	
	    if (!cb) {
	      return new Promise(executor);
	    }
	
	    executor(null, cb);
	
	    function executor(resolve, reject) {
	      transformers.run(node, vfile(file), done);
	
	      function done(err, tree, file) {
	        tree = tree || node;
	        if (err) {
	          reject(err);
	        } else if (resolve) {
	          resolve(tree);
	        } else {
	          cb(null, tree, file);
	        }
	      }
	    }
	  }
	
	  /* Run transforms on a Unist node representation of a file
	   * (in string or VFile representation), sync. */
	  function runSync(node, file) {
	    var complete = false;
	    var result;
	
	    run(node, file, done);
	
	    assertDone('runSync', 'run', complete);
	
	    return result;
	
	    function done(err, tree) {
	      complete = true;
	      bail(err);
	      result = tree;
	    }
	  }
	
	  /* Stringify a Unist node representation of a file
	   * (in string or VFile representation) into a string
	   * using the `Compiler` on the processor. */
	  function stringify(node, doc) {
	    var file = vfile(doc);
	    var Compiler;
	
	    freeze();
	    Compiler = processor.Compiler;
	    assertCompiler('stringify', Compiler);
	    assertNode(node);
	
	    if (newable(Compiler)) {
	      return new Compiler(node, file).compile();
	    }
	
	    return Compiler(node, file); // eslint-disable-line new-cap
	  }
	
	  /* Parse a file (in string or VFile representation)
	   * into a Unist node using the `Parser` on the processor,
	   * then run transforms on that node, and compile the
	   * resulting node using the `Compiler` on the processor,
	   * and store that result on the VFile. */
	  function process(doc, cb) {
	    freeze();
	    assertParser('process', processor.Parser);
	    assertCompiler('process', processor.Compiler);
	
	    if (!cb) {
	      return new Promise(executor);
	    }
	
	    executor(null, cb);
	
	    function executor(resolve, reject) {
	      var file = vfile(doc);
	
	      pipeline.run(processor, {file: file}, done);
	
	      function done(err) {
	        if (err) {
	          reject(err);
	        } else if (resolve) {
	          resolve(file);
	        } else {
	          cb(null, file);
	        }
	      }
	    }
	  }
	
	  /* Process the given document (in string or VFile
	   * representation), sync. */
	  function processSync(doc) {
	    var complete = false;
	    var file;
	
	    freeze();
	    assertParser('processSync', processor.Parser);
	    assertCompiler('processSync', processor.Compiler);
	    file = vfile(doc);
	
	    process(file, done);
	
	    assertDone('processSync', 'process', complete);
	
	    return file;
	
	    function done(err) {
	      complete = true;
	      bail(err);
	    }
	  }
	}
	
	/* Check if `func` is a constructor. */
	function newable(value) {
	  return func(value) && keys(value.prototype);
	}
	
	/* Check if `value` is an object with keys. */
	function keys(value) {
	  var key;
	  for (key in value) {
	    return true;
	  }
	  return false;
	}
	
	/* Assert a parser is available. */
	function assertParser(name, Parser) {
	  if (!func(Parser)) {
	    throw new Error('Cannot `' + name + '` without `Parser`');
	  }
	}
	
	/* Assert a compiler is available. */
	function assertCompiler(name, Compiler) {
	  if (!func(Compiler)) {
	    throw new Error('Cannot `' + name + '` without `Compiler`');
	  }
	}
	
	/* Assert the processor is not frozen. */
	function assertUnfrozen(name, frozen) {
	  if (frozen) {
	    throw new Error(
	      'Cannot invoke `' + name + '` on a frozen processor.\n' +
	      'Create a new processor first, by invoking it: ' +
	      'use `processor()` instead of `processor`.'
	    );
	  }
	}
	
	/* Assert `node` is a Unist node. */
	function assertNode(node) {
	  if (!node || !string(node.type)) {
	    throw new Error('Expected node, got `' + node + '`');
	  }
	}
	
	/* Assert that `complete` is `true`. */
	function assertDone(name, asyncName, complete) {
	  if (!complete) {
	    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(831);
	
	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

	var implementation = __webpack_require__(832);
	
	module.exports = Function.prototype.bind || implementation;


/***/ },

/***/ 832:
/***/ function(module, exports) {

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';
	
	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);
	
	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };
	
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	
	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	
	    return bound;
	};


/***/ },

/***/ 833:
/***/ function(module, exports) {

	'use strict';
	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	
	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}
	
		return toStr.call(arr) === '[object Array]';
	};
	
	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}
	
		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}
	
		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}
	
		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};
	
	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}
	
		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];
	
					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);
	
						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	


/***/ },

/***/ 834:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module bail
	 * @fileoverview Throw a given error.
	 */
	
	'use strict';
	
	/* Expose. */
	module.exports = bail;
	
	/**
	 * Throw a given error.
	 *
	 * @example
	 *   bail();
	 *
	 * @example
	 *   bail(new Error('failure'));
	 *   // Error: failure
	 *   //     at repl:1:6
	 *   //     at REPLServer.defaultEval (repl.js:154:27)
	 *   //     ...
	 *
	 * @param {Error?} [err] - Optional error.
	 * @throws {Error} - `err`, when given.
	 */
	function bail(err) {
	  if (err) {
	    throw err;
	  }
	}


/***/ },

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var path = __webpack_require__(836);
	var has = __webpack_require__(830);
	var replace = __webpack_require__(837);
	var stringify = __webpack_require__(838);
	var buffer = __webpack_require__(839);
	var string = __webpack_require__(840);
	
	module.exports = VFile;
	
	var proto = VFile.prototype;
	
	proto.toString = toString;
	proto.message = message;
	proto.fail = fail;
	
	/* Slight backwards compatibility.  Remove in the future. */
	proto.warn = message;
	
	/* Order of setting (least specific to most), we need this because
	 * otherwise `{stem: 'a', path: '~/b.js'}` would throw, as a path
	 * is needed before a stem can be set. */
	var order = [
	  'history',
	  'path',
	  'basename',
	  'stem',
	  'extname',
	  'dirname'
	];
	
	/* Construct a new file. */
	function VFile(options) {
	  var prop;
	  var index;
	  var length;
	
	  if (!options) {
	    options = {};
	  } else if (string(options) || buffer(options)) {
	    options = {contents: options};
	  } else if ('message' in options && 'messages' in options) {
	    return options;
	  }
	
	  if (!(this instanceof VFile)) {
	    return new VFile(options);
	  }
	
	  this.data = {};
	  this.messages = [];
	  this.history = [];
	  this.cwd = process.cwd();
	
	  /* Set path related properties in the correct order. */
	  index = -1;
	  length = order.length;
	
	  while (++index < length) {
	    prop = order[index];
	
	    if (has(options, prop)) {
	      this[prop] = options[prop];
	    }
	  }
	
	  /* Set non-path related properties. */
	  for (prop in options) {
	    if (order.indexOf(prop) === -1) {
	      this[prop] = options[prop];
	    }
	  }
	}
	
	/* Access full path (`~/index.min.js`). */
	Object.defineProperty(proto, 'path', {
	  get: function () {
	    return this.history[this.history.length - 1];
	  },
	  set: function (path) {
	    assertNonEmpty(path, 'path');
	
	    if (path !== this.path) {
	      this.history.push(path);
	    }
	  }
	});
	
	/* Access parent path (`~`). */
	Object.defineProperty(proto, 'dirname', {
	  get: function () {
	    return string(this.path) ? path.dirname(this.path) : undefined;
	  },
	  set: function (dirname) {
	    assertPath(this.path, 'dirname');
	    this.path = path.join(dirname || '', this.basename);
	  }
	});
	
	/* Access basename (`index.min.js`). */
	Object.defineProperty(proto, 'basename', {
	  get: function () {
	    return string(this.path) ? path.basename(this.path) : undefined;
	  },
	  set: function (basename) {
	    assertNonEmpty(basename, 'basename');
	    assertPart(basename, 'basename');
	    this.path = path.join(this.dirname || '', basename);
	  }
	});
	
	/* Access extname (`.js`). */
	Object.defineProperty(proto, 'extname', {
	  get: function () {
	    return string(this.path) ? path.extname(this.path) : undefined;
	  },
	  set: function (extname) {
	    var ext = extname || '';
	
	    assertPart(ext, 'extname');
	    assertPath(this.path, 'extname');
	
	    if (ext) {
	      if (ext.charAt(0) !== '.') {
	        throw new Error('`extname` must start with `.`');
	      }
	
	      if (ext.indexOf('.', 1) !== -1) {
	        throw new Error('`extname` cannot contain multiple dots');
	      }
	    }
	
	    this.path = replace(this.path, ext);
	  }
	});
	
	/* Access stem (`index.min`). */
	Object.defineProperty(proto, 'stem', {
	  get: function () {
	    return string(this.path) ? path.basename(this.path, this.extname) : undefined;
	  },
	  set: function (stem) {
	    assertNonEmpty(stem, 'stem');
	    assertPart(stem, 'stem');
	    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
	  }
	});
	
	/* Get the value of the file. */
	function toString(encoding) {
	  var value = this.contents || '';
	  return buffer(value) ? value.toString(encoding) : String(value);
	}
	
	/* Create a message with `reason` at `position`.
	 * When an error is passed in as `reason`, copies the
	 * stack.  This does not add a message to `messages`. */
	function message(reason, position, ruleId) {
	  var filePath = this.path;
	  var range = stringify(position) || '1:1';
	  var location;
	  var err;
	
	  location = {
	    start: {line: null, column: null},
	    end: {line: null, column: null}
	  };
	
	  if (position && position.position) {
	    position = position.position;
	  }
	
	  if (position) {
	    /* Location. */
	    if (position.start) {
	      location = position;
	      position = position.start;
	    } else {
	      /* Position. */
	      location.start = position;
	    }
	  }
	
	  err = new VMessage(reason.message || reason);
	
	  err.name = (filePath ? filePath + ':' : '') + range;
	  err.file = filePath || '';
	  err.reason = reason.message || reason;
	  err.line = position ? position.line : null;
	  err.column = position ? position.column : null;
	  err.location = location;
	  err.ruleId = ruleId || null;
	  err.source = null;
	  err.fatal = false;
	
	  if (reason.stack) {
	    err.stack = reason.stack;
	  }
	
	  this.messages.push(err);
	
	  return err;
	}
	
	/* Fail. Creates a vmessage, associates it with the file,
	 * and throws it. */
	function fail() {
	  var message = this.message.apply(this, arguments);
	
	  message.fatal = true;
	
	  throw message;
	}
	
	/* Inherit from `Error#`. */
	function VMessagePrototype() {}
	VMessagePrototype.prototype = Error.prototype;
	VMessage.prototype = new VMessagePrototype();
	
	/* Message properties. */
	proto = VMessage.prototype;
	
	proto.file = proto.name = proto.reason = proto.message = proto.stack = '';
	proto.fatal = proto.column = proto.line = null;
	
	/* Construct a new file message.
	 *
	 * Note: We cannot invoke `Error` on the created context,
	 * as that adds readonly `line` and `column` attributes on
	 * Safari 9, thus throwing and failing the data. */
	function VMessage(reason) {
	  this.message = reason;
	}
	
	/* Assert that `part` is not a path (i.e., does
	 * not contain `path.sep`). */
	function assertPart(part, name) {
	  if (part.indexOf(path.sep) !== -1) {
	    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
	  }
	}
	
	/* Assert that `part` is not empty. */
	function assertNonEmpty(part, name) {
	  if (!part) {
	    throw new Error('`' + name + '` cannot be empty');
	  }
	}
	
	/* Assert `path` exists. */
	function assertPath(path, name) {
	  if (!path) {
	    throw new Error('Setting `' + name + '` requires `path` to be set too');
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }
	
	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }
	
	  return parts;
	}
	
	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};
	
	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;
	
	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();
	
	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }
	
	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }
	
	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)
	
	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');
	
	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};
	
	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';
	
	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');
	
	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }
	
	  return (isAbsolute ? '/' : '') + path;
	};
	
	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};
	
	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};
	
	
	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);
	
	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }
	
	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }
	
	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }
	
	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));
	
	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }
	
	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }
	
	  outputParts = outputParts.concat(toParts.slice(samePartsLength));
	
	  return outputParts.join('/');
	};
	
	exports.sep = '/';
	exports.delimiter = ':';
	
	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];
	
	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }
	
	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }
	
	  return root + dir;
	};
	
	
	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};
	
	
	exports.extname = function(path) {
	  return splitPath(path)[3];
	};
	
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}
	
	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ },

/***/ 837:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var path = __webpack_require__(836);
	
	function replaceExt(npath, ext) {
	  if (typeof npath !== 'string') {
	    return npath;
	  }
	
	  if (npath.length === 0) {
	    return npath;
	  }
	
	  var nFileName = path.basename(npath, path.extname(npath)) + ext;
	  return path.join(path.dirname(npath), nFileName);
	}
	
	module.exports = replaceExt;


/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var has = __webpack_require__(830);
	
	module.exports = stringify;
	
	function stringify(value) {
	  /* Nothing. */
	  if (!value || typeof value !== 'object') {
	    return null;
	  }
	
	  /* Node. */
	  if (has(value, 'position') || has(value, 'type')) {
	    return location(value.position);
	  }
	
	  /* Location. */
	  if (has(value, 'start') || has(value, 'end')) {
	    return location(value);
	  }
	
	  /* Position. */
	  if (has(value, 'line') || has(value, 'column')) {
	    return position(value);
	  }
	
	  /* ? */
	  return null;
	}
	
	function position(pos) {
	  if (!pos || typeof pos !== 'object') {
	    pos = {};
	  }
	
	  return index(pos.line) + ':' + index(pos.column);
	}
	
	function location(loc) {
	  if (!loc || typeof loc !== 'object') {
	    loc = {};
	  }
	
	  return position(loc.start) + '-' + position(loc.end);
	}
	
	function index(value) {
	  return value && typeof value === 'number' ? value : 1;
	}


/***/ },

/***/ 839:
/***/ function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ },

/***/ 840:
/***/ function(module, exports) {

	var toString = Object.prototype.toString
	
	module.exports = isString
	
	function isString(obj) {
	    return toString.call(obj) === "[object String]"
	}


/***/ },

/***/ 841:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module trough
	 * @fileoverview Middleware.  Inspired by `segmentio/ware`,
	 *   but able to change the values from transformer to
	 *   transformer.
	 */
	
	'use strict';
	
	/* Expose. */
	module.exports = trough;
	
	/* Methods. */
	var slice = [].slice;
	
	/**
	 * Create new middleware.
	 *
	 * @return {Object} - Middlewre.
	 */
	function trough() {
	  var fns = [];
	  var middleware = {};
	
	  middleware.run = run;
	  middleware.use = use;
	
	  return middleware;
	
	  /**
	   * Run `fns`.  Last argument must be
	   * a completion handler.
	   *
	   * @param {...*} input - Parameters
	   */
	  function run() {
	    var index = -1;
	    var input = slice.call(arguments, 0, -1);
	    var done = arguments[arguments.length - 1];
	
	    if (typeof done !== 'function') {
	      throw new Error('Expected function as last argument, not ' + done);
	    }
	
	    next.apply(null, [null].concat(input));
	
	    return;
	
	    /**
	     * Run the next `fn`, if any.
	     *
	     * @param {Error?} err - Failure.
	     * @param {...*} values - Other input.
	     */
	    function next(err) {
	      var fn = fns[++index];
	      var params = slice.call(arguments, 0);
	      var values = params.slice(1);
	      var length = input.length;
	      var pos = -1;
	
	      if (err) {
	        done(err);
	        return;
	      }
	
	      /* Copy non-nully input into values. */
	      while (++pos < length) {
	        if (values[pos] === null || values[pos] === undefined) {
	          values[pos] = input[pos];
	        }
	      }
	
	      input = values;
	
	      /* Next or done. */
	      if (fn) {
	        wrap(fn, next).apply(null, input);
	      } else {
	        done.apply(null, [null].concat(input));
	      }
	    }
	  }
	
	  /**
	   * Add `fn` to the list.
	   *
	   * @param {Function} fn - Anything `wrap` accepts.
	   */
	  function use(fn) {
	    if (typeof fn !== 'function') {
	      throw new Error('Expected `fn` to be a function, not ' + fn);
	    }
	
	    fns.push(fn);
	
	    return middleware;
	  }
	}
	
	/**
	 * Wrap `fn`.  Can be sync or async; return a promise,
	 * receive a completion handler, return new values and
	 * errors.
	 *
	 * @param {Function} fn - Thing to wrap.
	 * @param {Function} next - Completion handler.
	 * @return {Function} - Wrapped `fn`.
	 */
	function wrap(fn, next) {
	  var invoked;
	
	  return wrapped;
	
	  function wrapped() {
	    var params = slice.call(arguments, 0);
	    var callback = fn.length > params.length;
	    var result;
	
	    if (callback) {
	      params.push(done);
	    }
	
	    try {
	      result = fn.apply(null, params);
	    } catch (err) {
	      /* Well, this is quite the pickle.  `fn` received
	       * a callback and invoked it (thus continuing the
	       * pipeline), but later also threw an error.
	       * We’re not about to restart the pipeline again,
	       * so the only thing left to do is to throw the
	       * thing instea. */
	      if (callback && invoked) {
	        throw err;
	      }
	
	      return done(err);
	    }
	
	    if (!callback) {
	      if (result && typeof result.then === 'function') {
	        result.then(then, done);
	      } else if (result instanceof Error) {
	        done(result);
	      } else {
	        then(result);
	      }
	    }
	  }
	
	  /**
	   * Invoke `next`, only once.
	   *
	   * @param {Error?} err - Optional error.
	   */
	  function done() {
	    if (!invoked) {
	      invoked = true;
	
	      next.apply(null, arguments);
	    }
	  }
	
	  /**
	   * Invoke `done` with one value.
	   * Tracks if an error is passed, too.
	   *
	   * @param {*} value - Optional value.
	   */
	  function then(value) {
	    done(null, value);
	  }
	}


/***/ },

/***/ 842:
/***/ function(module, exports) {

	module.exports = function isFunction (fn) {
	  return Object.prototype.toString.call(fn) === '[object Function]'
	}


/***/ },

/***/ 843:
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },

/***/ 844:
/***/ function(module, exports) {

	'use strict';
	var toString = Object.prototype.toString;
	
	module.exports = function (x) {
		var prototype;
		return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
	};


/***/ },

/***/ 845:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var unherit = __webpack_require__(846);
	var xtend = __webpack_require__(847);
	var Parser = __webpack_require__(849);
	
	module.exports = parse;
	parse.Parser = Parser;
	
	function parse(options) {
	  var Local = unherit(Parser);
	  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
	  this.Parser = Local;
	}


/***/ },

/***/ 846:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module unherit
	 * @fileoverview Create a custom constructor which can be modified
	 *   without affecting the original class.
	 */
	
	'use strict';
	
	/* Dependencies. */
	var xtend = __webpack_require__(847);
	var inherits = __webpack_require__(848);
	
	/* Expose. */
	module.exports = unherit;
	
	/**
	 * Create a custom constructor which can be modified
	 * without affecting the original class.
	 *
	 * @param {Function} Super - Super-class.
	 * @return {Function} - Constructor acting like `Super`,
	 *   which can be modified without affecting the original
	 *   class.
	 */
	function unherit(Super) {
	  var result;
	  var key;
	  var value;
	
	  inherits(Of, Super);
	  inherits(From, Of);
	
	  /* Clone values. */
	  result = Of.prototype;
	
	  for (key in result) {
	    value = result[key];
	
	    if (value && typeof value === 'object') {
	      result[key] = 'concat' in value ? value.concat() : xtend(value);
	    }
	  }
	
	  return Of;
	
	  /**
	   * Constructor accepting a single argument,
	   * which itself is an `arguments` object.
	   */
	  function From(parameters) {
	    return Super.apply(this, parameters);
	  }
	
	  /**
	   * Constructor accepting variadic arguments.
	   */
	  function Of() {
	    if (!(this instanceof Of)) {
	      return new From(arguments);
	    }
	
	    return Super.apply(this, arguments);
	  }
	}


/***/ },

/***/ 847:
/***/ function(module, exports) {

	module.exports = extend
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	function extend() {
	    var target = {}
	
	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]
	
	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }
	
	    return target
	}


/***/ },

/***/ 848:
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },

/***/ 849:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse
	 * @fileoverview Markdown parser.
	 */
	
	'use strict';
	
	var xtend = __webpack_require__(847);
	var toggle = __webpack_require__(850);
	var vfileLocation = __webpack_require__(851);
	var unescape = __webpack_require__(852);
	var decode = __webpack_require__(853);
	var tokenizer = __webpack_require__(862);
	
	module.exports = Parser;
	
	/* Construct a new parser. */
	function Parser(doc, file) {
	  this.file = file;
	  this.offset = {};
	  this.options = xtend(this.options);
	  this.setOptions({});
	
	  this.inList = this.inBlock = this.inLink = false;
	  this.atStart = true;
	
	  this.toOffset = vfileLocation(file).toOffset;
	  this.unescape = unescape(this, 'escape');
	  this.decode = decode(this);
	}
	
	/* Prototype. */
	var proto = Parser.prototype;
	
	/* Expose core. */
	proto.setOptions = __webpack_require__(863);
	proto.parse = __webpack_require__(867);
	
	/* Expose `defaults`. */
	proto.options = __webpack_require__(865);
	
	/* Enter and exit helpers. */
	proto.exitStart = toggle('atStart', true);
	proto.enterList = toggle('inList', false);
	proto.enterLink = toggle('inLink', false);
	proto.enterBlock = toggle('inBlock', false);
	
	/* Nodes that can interupt a paragraph:
	 *
	 * ```markdown
	 * A paragraph, followed by a thematic break.
	 * ___
	 * ```
	 *
	 * In the above example, the thematic break “interupts”
	 * the paragraph. */
	proto.interruptParagraph = [
	  ['thematicBreak'],
	  ['atxHeading'],
	  ['fencedCode'],
	  ['blockquote'],
	  ['html'],
	  ['setextHeading', {commonmark: false}],
	  ['definition', {commonmark: false}],
	  ['footnote', {commonmark: false}]
	];
	
	/* Nodes that can interupt a list:
	 *
	 * ```markdown
	 * - One
	 * ___
	 * ```
	 *
	 * In the above example, the thematic break “interupts”
	 * the list. */
	proto.interruptList = [
	  ['fencedCode', {pedantic: false}],
	  ['thematicBreak', {pedantic: false}],
	  ['definition', {commonmark: false}],
	  ['footnote', {commonmark: false}]
	];
	
	/* Nodes that can interupt a blockquote:
	 *
	 * ```markdown
	 * > A paragraph.
	 * ___
	 * ```
	 *
	 * In the above example, the thematic break “interupts”
	 * the blockquote. */
	proto.interruptBlockquote = [
	  ['indentedCode', {commonmark: true}],
	  ['fencedCode', {commonmark: true}],
	  ['atxHeading', {commonmark: true}],
	  ['setextHeading', {commonmark: true}],
	  ['thematicBreak', {commonmark: true}],
	  ['html', {commonmark: true}],
	  ['list', {commonmark: true}],
	  ['definition', {commonmark: false}],
	  ['footnote', {commonmark: false}]
	];
	
	/* Handlers. */
	proto.blockTokenizers = {
	  yamlFrontMatter: __webpack_require__(870),
	  newline: __webpack_require__(871),
	  indentedCode: __webpack_require__(873),
	  fencedCode: __webpack_require__(876),
	  blockquote: __webpack_require__(877),
	  atxHeading: __webpack_require__(880),
	  thematicBreak: __webpack_require__(881),
	  list: __webpack_require__(882),
	  setextHeading: __webpack_require__(885),
	  html: __webpack_require__(886),
	  footnote: __webpack_require__(888),
	  definition: __webpack_require__(891),
	  table: __webpack_require__(892),
	  paragraph: __webpack_require__(893)
	};
	
	proto.inlineTokenizers = {
	  escape: __webpack_require__(894),
	  autoLink: __webpack_require__(896),
	  url: __webpack_require__(898),
	  html: __webpack_require__(900),
	  link: __webpack_require__(901),
	  reference: __webpack_require__(903),
	  strong: __webpack_require__(904),
	  emphasis: __webpack_require__(906),
	  deletion: __webpack_require__(909),
	  code: __webpack_require__(911),
	  break: __webpack_require__(913),
	  text: __webpack_require__(915)
	};
	
	/* Expose precedence. */
	proto.blockMethods = keys(proto.blockTokenizers);
	proto.inlineMethods = keys(proto.inlineTokenizers);
	
	/* Tokenizers. */
	proto.tokenizeBlock = tokenizer('block');
	proto.tokenizeInline = tokenizer('inline');
	proto.tokenizeFactory = tokenizer;
	
	/* Get all keys in `value`. */
	function keys(value) {
	  var result = [];
	  var key;
	
	  for (key in value) {
	    result.push(key);
	  }
	
	  return result;
	}


/***/ },

/***/ 850:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module state-toggle
	 * @fileoverview Enter/exit a state.
	 */
	
	'use strict';
	
	/* eslint-env commonjs */
	
	/* Expose. */
	module.exports = factory;
	
	/**
	 * Construct a state `toggler`: a function which inverses
	 * `property` in context based on its current value.
	 * The by `toggler` returned function restores that value.
	 *
	 * @param {string} key - Property to toggle.
	 * @param {boolean} state - Default state.
	 * @param {Object?} [ctx] - Context object.
	 * @return {Function} - Enter.
	 */
	function factory(key, state, ctx) {
	  /**
	   * Enter a state.
	   *
	   * @return {Function} - Exit state.
	   */
	  return function () {
	    var context = ctx || this;
	    var current = context[key];
	
	    context[key] = !state;
	
	    /**
	     * Cancel state to its value before entering.
	     */
	    return function () {
	      context[key] = current;
	    };
	  };
	}


/***/ },

/***/ 851:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module vfile-location
	 * @fileoverview Convert between positions (line and column-based)
	 *   and offsets (range-based) locations in a virtual file.
	 */
	
	'use strict';
	
	/* Expose. */
	module.exports = factory;
	
	/**
	 * Factory.
	 *
	 * @param {VFile|string|Buffer} file - Virtual file or document.
	 */
	function factory(file) {
	  var contents = indices(String(file));
	
	  return {
	    toPosition: offsetToPositionFactory(contents),
	    toOffset: positionToOffsetFactory(contents)
	  };
	}
	
	/**
	 * Factory to get the line and column-based `position` for
	 * `offset` in the bound indices.
	 *
	 * @param {Array.<number>} indices - Indices of
	 *   line-breaks in `value`.
	 * @return {Function} - Bound method.
	 */
	function offsetToPositionFactory(indices) {
	  return offsetToPosition;
	
	  /**
	   * Get the line and column-based `position` for
	   * `offset` in the bound indices.
	   *
	   * @param {number} offset - Offset.
	   * @return {Position} - Object with `line`, `column`,
	   *   and `offset` properties based on the bound
	   *   `indices`.  An empty object when given invalid
	   *   or out of bounds input.
	   */
	  function offsetToPosition(offset) {
	    var index = -1;
	    var length = indices.length;
	
	    if (offset < 0) {
	      return {};
	    }
	
	    while (++index < length) {
	      if (indices[index] > offset) {
	        return {
	          line: index + 1,
	          column: (offset - (indices[index - 1] || 0)) + 1,
	          offset: offset
	        };
	      }
	    }
	
	    return {};
	  }
	}
	
	/**
	 * Factory to get the `offset` for a line and column-based
	 * `position` in the bound indices.
	 *
	 * @param {Array.<number>} indices - Indices of
	 *   line-breaks in `value`.
	 * @return {Function} - Bound method.
	 */
	function positionToOffsetFactory(indices) {
	  return positionToOffset;
	
	  /**
	   * Get the `offset` for a line and column-based
	   * `position` in the bound indices.
	   *
	   * @param {Position} position - Object with `line` and
	   *   `column` properties.
	   * @return {number} - Offset. `-1` when given invalid
	   *   or out of bounds input.
	   */
	  function positionToOffset(position) {
	    var line = position && position.line;
	    var column = position && position.column;
	
	    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
	      return ((indices[line - 2] || 0) + column - 1) || 0;
	    }
	
	    return -1;
	  }
	}
	
	/**
	 * Get indices of line-breaks in `value`.
	 *
	 * @param {string} value - Value.
	 * @return {Array.<number>} - List of indices of
	 *   line-breaks.
	 */
	function indices(value) {
	  var result = [];
	  var index = value.indexOf('\n');
	
	  while (index !== -1) {
	    result.push(index + 1);
	    index = value.indexOf('\n', index + 1);
	  }
	
	  result.push(value.length + 1);
	
	  return result;
	}


/***/ },

/***/ 852:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:unescape
	 * @fileoverview Unescape escapes.
	 */
	
	'use strict';
	
	/* Expose. */
	module.exports = factory;
	
	/* Factory to de-escape a value, based on a list at `key`
	 * in `ctx`. */
	function factory(ctx, key) {
	  return unescape;
	
	  /* De-escape a string using the expression at `key`
	   * in `ctx`. */
	  function unescape(value) {
	    var prev = 0;
	    var index = value.indexOf('\\');
	    var escape = ctx[key];
	    var queue = [];
	    var character;
	
	    while (index !== -1) {
	      queue.push(value.slice(prev, index));
	      prev = index + 1;
	      character = value.charAt(prev);
	
	      /* If the following character is not a valid escape,
	       * add the slash. */
	      if (!character || escape.indexOf(character) === -1) {
	        queue.push('\\');
	      }
	
	      index = value.indexOf('\\', prev);
	    }
	
	    queue.push(value.slice(prev));
	
	    return queue.join('');
	  }
	}


/***/ },

/***/ 853:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:decode
	 * @fileoverview Decode entities.
	 */
	
	'use strict';
	
	var entities = __webpack_require__(854);
	
	module.exports = factory;
	
	/* Factory to create an entity decoder. */
	function factory(ctx) {
	  decoder.raw = decodeRaw;
	
	  return decoder;
	
	  /* Normalize `position` to add an `indent`. */
	  function normalize(position) {
	    var offsets = ctx.offset;
	    var line = position.line;
	    var result = [];
	
	    while (++line) {
	      if (!(line in offsets)) {
	        break;
	      }
	
	      result.push((offsets[line] || 0) + 1);
	    }
	
	    return {
	      start: position,
	      indent: result
	    };
	  }
	
	  /* Handle a warning.
	   * See https://github.com/wooorm/parse-entities
	   * for the warnings. */
	  function handleWarning(reason, position, code) {
	    if (code === 3) {
	      return;
	    }
	
	    ctx.file.message(reason, position);
	  }
	
	  /* Decode `value` (at `position`) into text-nodes. */
	  function decoder(value, position, handler) {
	    entities(value, {
	      position: normalize(position),
	      warning: handleWarning,
	      text: handler,
	      reference: handler,
	      textContext: ctx,
	      referenceContext: ctx
	    });
	  }
	
	  /* Decode `value` (at `position`) into a string. */
	  function decodeRaw(value, position) {
	    return entities(value, {
	      position: normalize(position),
	      warning: handleWarning
	    });
	  }
	}


/***/ },

/***/ 854:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module parse-entities
	 * @fileoverview Parse HTML character references: fast, spec-compliant,
	 *   positional information.
	 */
	
	'use strict';
	
	/* Dependencies. */
	var has = __webpack_require__(830);
	var characterEntities = __webpack_require__(855);
	var legacy = __webpack_require__(856);
	var invalid = __webpack_require__(857);
	var decimal = __webpack_require__(858);
	var hexadecimal = __webpack_require__(859);
	var alphanumerical = __webpack_require__(860);
	
	/* Expose. */
	module.exports = wrapper;
	
	/* Methods. */
	var fromCharCode = String.fromCharCode;
	var noop = Function.prototype;
	
	/* Characters. */
	var REPLACEMENT = '\uFFFD';
	var FORM_FEED = '\f';
	var AMPERSAND = '&';
	var OCTOTHORP = '#';
	var SEMICOLON = ';';
	var NEWLINE = '\n';
	var X_LOWER = 'x';
	var X_UPPER = 'X';
	var SPACE = ' ';
	var LESS_THAN = '<';
	var EQUAL = '=';
	var EMPTY = '';
	var TAB = '\t';
	
	/* Default settings. */
	var defaults = {
	  warning: null,
	  reference: null,
	  text: null,
	  warningContext: null,
	  referenceContext: null,
	  textContext: null,
	  position: {},
	  additional: null,
	  attribute: false,
	  nonTerminated: true
	};
	
	/* Reference types. */
	var NAMED = 'named';
	var HEXADECIMAL = 'hexadecimal';
	var DECIMAL = 'decimal';
	
	/* Map of bases. */
	var BASE = {};
	
	BASE[HEXADECIMAL] = 16;
	BASE[DECIMAL] = 10;
	
	/* Map of types to tests. Each type of character reference
	 * accepts different characters. This test is used to
	 * detect whether a reference has ended (as the semicolon
	 * is not strictly needed). */
	var TESTS = {};
	
	TESTS[NAMED] = alphanumerical;
	TESTS[DECIMAL] = decimal;
	TESTS[HEXADECIMAL] = hexadecimal;
	
	/* Warning messages. */
	var NAMED_NOT_TERMINATED = 1;
	var NUMERIC_NOT_TERMINATED = 2;
	var NAMED_EMPTY = 3;
	var NUMERIC_EMPTY = 4;
	var NAMED_UNKNOWN = 5;
	var NUMERIC_DISALLOWED = 6;
	var NUMERIC_PROHIBITED = 7;
	
	var NUMERIC_REFERENCE = 'Numeric character references';
	var NAMED_REFERENCE = 'Named character references';
	var TERMINATED = ' must be terminated by a semicolon';
	var VOID = ' cannot be empty';
	
	var MESSAGES = {};
	
	MESSAGES[NAMED_NOT_TERMINATED] = NAMED_REFERENCE + TERMINATED;
	MESSAGES[NUMERIC_NOT_TERMINATED] = NUMERIC_REFERENCE + TERMINATED;
	MESSAGES[NAMED_EMPTY] = NAMED_REFERENCE + VOID;
	MESSAGES[NUMERIC_EMPTY] = NUMERIC_REFERENCE + VOID;
	MESSAGES[NAMED_UNKNOWN] = NAMED_REFERENCE + ' must be known';
	MESSAGES[NUMERIC_DISALLOWED] = NUMERIC_REFERENCE + ' cannot be disallowed';
	MESSAGES[NUMERIC_PROHIBITED] = NUMERIC_REFERENCE + ' cannot be outside the ' +
	    'permissible Unicode range';
	
	/**
	 * Wrap to ensure clean parameters are given to `parse`.
	 *
	 * @param {string} value - Value with entities.
	 * @param {Object?} [options] - Configuration.
	 */
	function wrapper(value, options) {
	  var settings = {};
	  var key;
	
	  if (!options) {
	    options = {};
	  }
	
	  for (key in defaults) {
	    settings[key] = options[key] == null ? defaults[key] : options[key];
	  }
	
	  if (settings.position.indent || settings.position.start) {
	    settings.indent = settings.position.indent || [];
	    settings.position = settings.position.start;
	  }
	
	  return parse(value, settings);
	}
	
	/**
	 * Parse entities.
	 *
	 * @param {string} value - Value to tokenise.
	 * @param {Object?} [settings] - Configuration.
	 */
	function parse(value, settings) {
	  var additional = settings.additional;
	  var nonTerminated = settings.nonTerminated;
	  var handleText = settings.text;
	  var handleReference = settings.reference;
	  var handleWarning = settings.warning;
	  var textContext = settings.textContext;
	  var referenceContext = settings.referenceContext;
	  var warningContext = settings.warningContext;
	  var pos = settings.position;
	  var indent = settings.indent || [];
	  var length = value.length;
	  var index = 0;
	  var lines = -1;
	  var column = pos.column || 1;
	  var line = pos.line || 1;
	  var queue = EMPTY;
	  var result = [];
	  var entityCharacters;
	  var terminated;
	  var characters;
	  var character;
	  var reference;
	  var following;
	  var warning;
	  var reason;
	  var output;
	  var entity;
	  var begin;
	  var start;
	  var type;
	  var test;
	  var prev;
	  var next;
	  var diff;
	  var end;
	
	  /* Cache the current point. */
	  prev = now();
	
	  /* Wrap `handleWarning`. */
	  warning = handleWarning ? parseError : noop;
	
	  /* Ensure the algorithm walks over the first character
	   * and the end (inclusive). */
	  index--;
	  length++;
	
	  while (++index < length) {
	    /* If the previous character was a newline. */
	    if (character === NEWLINE) {
	      column = indent[lines] || 1;
	    }
	
	    character = at(index);
	
	    /* Handle anything other than an ampersand,
	     * including newlines and EOF. */
	    if (character !== AMPERSAND) {
	      if (character === NEWLINE) {
	        line++;
	        lines++;
	        column = 0;
	      }
	
	      if (character) {
	        queue += character;
	        column++;
	      } else {
	        flush();
	      }
	    } else {
	      following = at(index + 1);
	
	      /* The behaviour depends on the identity of the next
	       * character. */
	      if (
	        following === TAB ||
	        following === NEWLINE ||
	        following === FORM_FEED ||
	        following === SPACE ||
	        following === LESS_THAN ||
	        following === AMPERSAND ||
	        following === EMPTY ||
	        (additional && following === additional)
	      ) {
	        /* Not a character reference. No characters
	         * are consumed, and nothing is returned.
	         * This is not an error, either. */
	        queue += character;
	        column++;
	
	        continue;
	      }
	
	      start = begin = end = index + 1;
	
	      /* Numerical entity. */
	      if (following !== OCTOTHORP) {
	        type = NAMED;
	      } else {
	        end = ++begin;
	
	        /* The behaviour further depends on the
	         * character after the U+0023 NUMBER SIGN. */
	        following = at(end);
	
	        if (following === X_LOWER || following === X_UPPER) {
	          /* ASCII hex digits. */
	          type = HEXADECIMAL;
	          end = ++begin;
	        } else {
	          /* ASCII digits. */
	          type = DECIMAL;
	        }
	      }
	
	      entityCharacters = entity = characters = EMPTY;
	      test = TESTS[type];
	      end--;
	
	      while (++end < length) {
	        following = at(end);
	
	        if (!test(following)) {
	          break;
	        }
	
	        characters += following;
	
	        /* Check if we can match a legacy named
	         * reference.  If so, we cache that as the
	         * last viable named reference.  This
	         * ensures we do not need to walk backwards
	         * later. */
	        if (type === NAMED && has(legacy, characters)) {
	          entityCharacters = characters;
	          entity = legacy[characters];
	        }
	      }
	
	      terminated = at(end) === SEMICOLON;
	
	      if (terminated) {
	        end++;
	
	        if (type === NAMED && has(characterEntities, characters)) {
	          entityCharacters = characters;
	          entity = characterEntities[characters];
	        }
	      }
	
	      diff = 1 + end - start;
	
	      if (!terminated && !nonTerminated) {
	        /* Empty. */
	      } else if (!characters) {
	        /* An empty (possible) entity is valid, unless
	         * its numeric (thus an ampersand followed by
	         * an octothorp). */
	        if (type !== NAMED) {
	          warning(NUMERIC_EMPTY, diff);
	        }
	      } else if (type === NAMED) {
	        /* An ampersand followed by anything
	         * unknown, and not terminated, is invalid. */
	        if (terminated && !entity) {
	          warning(NAMED_UNKNOWN, 1);
	        } else {
	          /* If theres something after an entity
	           * name which is not known, cap the
	           * reference. */
	          if (entityCharacters !== characters) {
	            end = begin + entityCharacters.length;
	            diff = 1 + end - begin;
	            terminated = false;
	          }
	
	          /* If the reference is not terminated,
	           * warn. */
	          if (!terminated) {
	            reason = entityCharacters ?
	              NAMED_NOT_TERMINATED :
	              NAMED_EMPTY;
	
	            if (!settings.attribute) {
	              warning(reason, diff);
	            } else {
	              following = at(end);
	
	              if (following === EQUAL) {
	                warning(reason, diff);
	                entity = null;
	              } else if (alphanumerical(following)) {
	                entity = null;
	              } else {
	                warning(reason, diff);
	              }
	            }
	          }
	        }
	
	        reference = entity;
	      } else {
	        if (!terminated) {
	          /* All non-terminated numeric entities are
	           * not rendered, and trigger a warning. */
	          warning(NUMERIC_NOT_TERMINATED, diff);
	        }
	
	        /* When terminated and number, parse as
	         * either hexadecimal or decimal. */
	        reference = parseInt(characters, BASE[type]);
	
	        /* Trigger a warning when the parsed number
	         * is prohibited, and replace with
	         * replacement character. */
	        if (isProhibited(reference)) {
	          warning(NUMERIC_PROHIBITED, diff);
	
	          reference = REPLACEMENT;
	        } else if (reference in invalid) {
	          /* Trigger a warning when the parsed number
	           * is disallowed, and replace by an
	           * alternative. */
	          warning(NUMERIC_DISALLOWED, diff);
	
	          reference = invalid[reference];
	        } else {
	          /* Parse the number. */
	          output = EMPTY;
	
	          /* Trigger a warning when the parsed
	           * number should not be used. */
	          if (isWarning(reference)) {
	            warning(NUMERIC_DISALLOWED, diff);
	          }
	
	          /* Stringify the number. */
	          if (reference > 0xFFFF) {
	            reference -= 0x10000;
	            output += fromCharCode((reference >>> (10 & 0x3FF)) | 0xD800);
	            reference = 0xDC00 | (reference & 0x3FF);
	          }
	
	          reference = output + fromCharCode(reference);
	        }
	      }
	
	      /* If we could not find a reference, queue the
	       * checked characters (as normal characters),
	       * and move the pointer to their end. This is
	       * possible because we can be certain neither
	       * newlines nor ampersands are included. */
	      if (!reference) {
	        characters = value.slice(start - 1, end);
	        queue += characters;
	        column += characters.length;
	        index = end - 1;
	      } else {
	        /* Found it! First eat the queued
	         * characters as normal text, then eat
	         * an entity. */
	        flush();
	
	        prev = now();
	        index = end - 1;
	        column += end - start + 1;
	        result.push(reference);
	        next = now();
	        next.offset++;
	
	        if (handleReference) {
	          handleReference.call(referenceContext, reference, {
	            start: prev,
	            end: next
	          }, value.slice(start - 1, end));
	        }
	
	        prev = next;
	      }
	    }
	  }
	
	  /* Return the reduced nodes, and any possible warnings. */
	  return result.join(EMPTY);
	
	  /**
	   * Get current position.
	   *
	   * @return {Object} - Positional information of a
	   *   single point.
	   */
	  function now() {
	    return {
	      line: line,
	      column: column,
	      offset: index + (pos.offset || 0)
	    };
	  }
	
	  /**
	   * “Throw” a parse-error: a warning.
	   *
	   * @param {number} code - Identifier of reason for
	   *   failing.
	   * @param {number} offset - Offset in characters from
	   *   the current position point at which the
	   *   parse-error ocurred, cannot point past newlines.
	   */
	  function parseError(code, offset) {
	    var position = now();
	
	    position.column += offset;
	    position.offset += offset;
	
	    handleWarning.call(warningContext, MESSAGES[code], position, code);
	  }
	
	  /**
	   * Get character at position.
	   *
	   * @param {number} position - Indice of character in `value`.
	   * @return {string} - Character at `position` in
	   *   `value`.
	   */
	  function at(position) {
	    return value.charAt(position);
	  }
	
	  /**
	   * Flush `queue` (normal text). Macro invoked before
	   * each entity and at the end of `value`.
	   *
	   * Does nothing when `queue` is empty.
	   */
	  function flush() {
	    if (queue) {
	      result.push(queue);
	
	      if (handleText) {
	        handleText.call(textContext, queue, {
	          start: prev,
	          end: now()
	        });
	      }
	
	      queue = EMPTY;
	    }
	  }
	}
	
	/**
	 * Check whether `character` is outside the permissible
	 * unicode range.
	 *
	 * @param {number} code - Value.
	 * @return {boolean} - Whether `character` is an
	 *   outside the permissible unicode range.
	 */
	function isProhibited(code) {
	  return (code >= 0xD800 && code <= 0xDFFF) || (code > 0x10FFFF);
	}
	
	/**
	 * Check whether `character` is disallowed.
	 *
	 * @param {number} code - Value.
	 * @return {boolean} - Whether `character` is disallowed.
	 */
	function isWarning(code) {
	  if (
	    (code >= 0x0001 && code <= 0x0008) ||
	    code === 0x000B ||
	    (code >= 0x000D && code <= 0x001F) ||
	    (code >= 0x007F && code <= 0x009F) ||
	    (code >= 0xFDD0 && code <= 0xFDEF) ||
	    (code & 0xFFFF) === 0xFFFF ||
	    (code & 0xFFFF) === 0xFFFE
	  ) {
	    return true;
	  }
	
	  return false;
	}


/***/ },

/***/ 855:
/***/ function(module, exports) {

	module.exports = {
		"AEli": "Æ",
		"AElig": "Æ",
		"AM": "&",
		"AMP": "&",
		"Aacut": "Á",
		"Aacute": "Á",
		"Abreve": "Ă",
		"Acir": "Â",
		"Acirc": "Â",
		"Acy": "А",
		"Afr": "𝔄",
		"Agrav": "À",
		"Agrave": "À",
		"Alpha": "Α",
		"Amacr": "Ā",
		"And": "⩓",
		"Aogon": "Ą",
		"Aopf": "𝔸",
		"ApplyFunction": "⁡",
		"Arin": "Å",
		"Aring": "Å",
		"Ascr": "𝒜",
		"Assign": "≔",
		"Atild": "Ã",
		"Atilde": "Ã",
		"Aum": "Ä",
		"Auml": "Ä",
		"Backslash": "∖",
		"Barv": "⫧",
		"Barwed": "⌆",
		"Bcy": "Б",
		"Because": "∵",
		"Bernoullis": "ℬ",
		"Beta": "Β",
		"Bfr": "𝔅",
		"Bopf": "𝔹",
		"Breve": "˘",
		"Bscr": "ℬ",
		"Bumpeq": "≎",
		"CHcy": "Ч",
		"COP": "©",
		"COPY": "©",
		"Cacute": "Ć",
		"Cap": "⋒",
		"CapitalDifferentialD": "ⅅ",
		"Cayleys": "ℭ",
		"Ccaron": "Č",
		"Ccedi": "Ç",
		"Ccedil": "Ç",
		"Ccirc": "Ĉ",
		"Cconint": "∰",
		"Cdot": "Ċ",
		"Cedilla": "¸",
		"CenterDot": "·",
		"Cfr": "ℭ",
		"Chi": "Χ",
		"CircleDot": "⊙",
		"CircleMinus": "⊖",
		"CirclePlus": "⊕",
		"CircleTimes": "⊗",
		"ClockwiseContourIntegral": "∲",
		"CloseCurlyDoubleQuote": "”",
		"CloseCurlyQuote": "’",
		"Colon": "∷",
		"Colone": "⩴",
		"Congruent": "≡",
		"Conint": "∯",
		"ContourIntegral": "∮",
		"Copf": "ℂ",
		"Coproduct": "∐",
		"CounterClockwiseContourIntegral": "∳",
		"Cross": "⨯",
		"Cscr": "𝒞",
		"Cup": "⋓",
		"CupCap": "≍",
		"DD": "ⅅ",
		"DDotrahd": "⤑",
		"DJcy": "Ђ",
		"DScy": "Ѕ",
		"DZcy": "Џ",
		"Dagger": "‡",
		"Darr": "↡",
		"Dashv": "⫤",
		"Dcaron": "Ď",
		"Dcy": "Д",
		"Del": "∇",
		"Delta": "Δ",
		"Dfr": "𝔇",
		"DiacriticalAcute": "´",
		"DiacriticalDot": "˙",
		"DiacriticalDoubleAcute": "˝",
		"DiacriticalGrave": "`",
		"DiacriticalTilde": "˜",
		"Diamond": "⋄",
		"DifferentialD": "ⅆ",
		"Dopf": "𝔻",
		"Dot": "¨",
		"DotDot": "⃜",
		"DotEqual": "≐",
		"DoubleContourIntegral": "∯",
		"DoubleDot": "¨",
		"DoubleDownArrow": "⇓",
		"DoubleLeftArrow": "⇐",
		"DoubleLeftRightArrow": "⇔",
		"DoubleLeftTee": "⫤",
		"DoubleLongLeftArrow": "⟸",
		"DoubleLongLeftRightArrow": "⟺",
		"DoubleLongRightArrow": "⟹",
		"DoubleRightArrow": "⇒",
		"DoubleRightTee": "⊨",
		"DoubleUpArrow": "⇑",
		"DoubleUpDownArrow": "⇕",
		"DoubleVerticalBar": "∥",
		"DownArrow": "↓",
		"DownArrowBar": "⤓",
		"DownArrowUpArrow": "⇵",
		"DownBreve": "̑",
		"DownLeftRightVector": "⥐",
		"DownLeftTeeVector": "⥞",
		"DownLeftVector": "↽",
		"DownLeftVectorBar": "⥖",
		"DownRightTeeVector": "⥟",
		"DownRightVector": "⇁",
		"DownRightVectorBar": "⥗",
		"DownTee": "⊤",
		"DownTeeArrow": "↧",
		"Downarrow": "⇓",
		"Dscr": "𝒟",
		"Dstrok": "Đ",
		"ENG": "Ŋ",
		"ET": "Ð",
		"ETH": "Ð",
		"Eacut": "É",
		"Eacute": "É",
		"Ecaron": "Ě",
		"Ecir": "Ê",
		"Ecirc": "Ê",
		"Ecy": "Э",
		"Edot": "Ė",
		"Efr": "𝔈",
		"Egrav": "È",
		"Egrave": "È",
		"Element": "∈",
		"Emacr": "Ē",
		"EmptySmallSquare": "◻",
		"EmptyVerySmallSquare": "▫",
		"Eogon": "Ę",
		"Eopf": "𝔼",
		"Epsilon": "Ε",
		"Equal": "⩵",
		"EqualTilde": "≂",
		"Equilibrium": "⇌",
		"Escr": "ℰ",
		"Esim": "⩳",
		"Eta": "Η",
		"Eum": "Ë",
		"Euml": "Ë",
		"Exists": "∃",
		"ExponentialE": "ⅇ",
		"Fcy": "Ф",
		"Ffr": "𝔉",
		"FilledSmallSquare": "◼",
		"FilledVerySmallSquare": "▪",
		"Fopf": "𝔽",
		"ForAll": "∀",
		"Fouriertrf": "ℱ",
		"Fscr": "ℱ",
		"GJcy": "Ѓ",
		"G": ">",
		"GT": ">",
		"Gamma": "Γ",
		"Gammad": "Ϝ",
		"Gbreve": "Ğ",
		"Gcedil": "Ģ",
		"Gcirc": "Ĝ",
		"Gcy": "Г",
		"Gdot": "Ġ",
		"Gfr": "𝔊",
		"Gg": "⋙",
		"Gopf": "𝔾",
		"GreaterEqual": "≥",
		"GreaterEqualLess": "⋛",
		"GreaterFullEqual": "≧",
		"GreaterGreater": "⪢",
		"GreaterLess": "≷",
		"GreaterSlantEqual": "⩾",
		"GreaterTilde": "≳",
		"Gscr": "𝒢",
		"Gt": "≫",
		"HARDcy": "Ъ",
		"Hacek": "ˇ",
		"Hat": "^",
		"Hcirc": "Ĥ",
		"Hfr": "ℌ",
		"HilbertSpace": "ℋ",
		"Hopf": "ℍ",
		"HorizontalLine": "─",
		"Hscr": "ℋ",
		"Hstrok": "Ħ",
		"HumpDownHump": "≎",
		"HumpEqual": "≏",
		"IEcy": "Е",
		"IJlig": "Ĳ",
		"IOcy": "Ё",
		"Iacut": "Í",
		"Iacute": "Í",
		"Icir": "Î",
		"Icirc": "Î",
		"Icy": "И",
		"Idot": "İ",
		"Ifr": "ℑ",
		"Igrav": "Ì",
		"Igrave": "Ì",
		"Im": "ℑ",
		"Imacr": "Ī",
		"ImaginaryI": "ⅈ",
		"Implies": "⇒",
		"Int": "∬",
		"Integral": "∫",
		"Intersection": "⋂",
		"InvisibleComma": "⁣",
		"InvisibleTimes": "⁢",
		"Iogon": "Į",
		"Iopf": "𝕀",
		"Iota": "Ι",
		"Iscr": "ℐ",
		"Itilde": "Ĩ",
		"Iukcy": "І",
		"Ium": "Ï",
		"Iuml": "Ï",
		"Jcirc": "Ĵ",
		"Jcy": "Й",
		"Jfr": "𝔍",
		"Jopf": "𝕁",
		"Jscr": "𝒥",
		"Jsercy": "Ј",
		"Jukcy": "Є",
		"KHcy": "Х",
		"KJcy": "Ќ",
		"Kappa": "Κ",
		"Kcedil": "Ķ",
		"Kcy": "К",
		"Kfr": "𝔎",
		"Kopf": "𝕂",
		"Kscr": "𝒦",
		"LJcy": "Љ",
		"L": "<",
		"LT": "<",
		"Lacute": "Ĺ",
		"Lambda": "Λ",
		"Lang": "⟪",
		"Laplacetrf": "ℒ",
		"Larr": "↞",
		"Lcaron": "Ľ",
		"Lcedil": "Ļ",
		"Lcy": "Л",
		"LeftAngleBracket": "⟨",
		"LeftArrow": "←",
		"LeftArrowBar": "⇤",
		"LeftArrowRightArrow": "⇆",
		"LeftCeiling": "⌈",
		"LeftDoubleBracket": "⟦",
		"LeftDownTeeVector": "⥡",
		"LeftDownVector": "⇃",
		"LeftDownVectorBar": "⥙",
		"LeftFloor": "⌊",
		"LeftRightArrow": "↔",
		"LeftRightVector": "⥎",
		"LeftTee": "⊣",
		"LeftTeeArrow": "↤",
		"LeftTeeVector": "⥚",
		"LeftTriangle": "⊲",
		"LeftTriangleBar": "⧏",
		"LeftTriangleEqual": "⊴",
		"LeftUpDownVector": "⥑",
		"LeftUpTeeVector": "⥠",
		"LeftUpVector": "↿",
		"LeftUpVectorBar": "⥘",
		"LeftVector": "↼",
		"LeftVectorBar": "⥒",
		"Leftarrow": "⇐",
		"Leftrightarrow": "⇔",
		"LessEqualGreater": "⋚",
		"LessFullEqual": "≦",
		"LessGreater": "≶",
		"LessLess": "⪡",
		"LessSlantEqual": "⩽",
		"LessTilde": "≲",
		"Lfr": "𝔏",
		"Ll": "⋘",
		"Lleftarrow": "⇚",
		"Lmidot": "Ŀ",
		"LongLeftArrow": "⟵",
		"LongLeftRightArrow": "⟷",
		"LongRightArrow": "⟶",
		"Longleftarrow": "⟸",
		"Longleftrightarrow": "⟺",
		"Longrightarrow": "⟹",
		"Lopf": "𝕃",
		"LowerLeftArrow": "↙",
		"LowerRightArrow": "↘",
		"Lscr": "ℒ",
		"Lsh": "↰",
		"Lstrok": "Ł",
		"Lt": "≪",
		"Map": "⤅",
		"Mcy": "М",
		"MediumSpace": " ",
		"Mellintrf": "ℳ",
		"Mfr": "𝔐",
		"MinusPlus": "∓",
		"Mopf": "𝕄",
		"Mscr": "ℳ",
		"Mu": "Μ",
		"NJcy": "Њ",
		"Nacute": "Ń",
		"Ncaron": "Ň",
		"Ncedil": "Ņ",
		"Ncy": "Н",
		"NegativeMediumSpace": "​",
		"NegativeThickSpace": "​",
		"NegativeThinSpace": "​",
		"NegativeVeryThinSpace": "​",
		"NestedGreaterGreater": "≫",
		"NestedLessLess": "≪",
		"NewLine": "\n",
		"Nfr": "𝔑",
		"NoBreak": "⁠",
		"NonBreakingSpace": " ",
		"Nopf": "ℕ",
		"Not": "⫬",
		"NotCongruent": "≢",
		"NotCupCap": "≭",
		"NotDoubleVerticalBar": "∦",
		"NotElement": "∉",
		"NotEqual": "≠",
		"NotEqualTilde": "≂̸",
		"NotExists": "∄",
		"NotGreater": "≯",
		"NotGreaterEqual": "≱",
		"NotGreaterFullEqual": "≧̸",
		"NotGreaterGreater": "≫̸",
		"NotGreaterLess": "≹",
		"NotGreaterSlantEqual": "⩾̸",
		"NotGreaterTilde": "≵",
		"NotHumpDownHump": "≎̸",
		"NotHumpEqual": "≏̸",
		"NotLeftTriangle": "⋪",
		"NotLeftTriangleBar": "⧏̸",
		"NotLeftTriangleEqual": "⋬",
		"NotLess": "≮",
		"NotLessEqual": "≰",
		"NotLessGreater": "≸",
		"NotLessLess": "≪̸",
		"NotLessSlantEqual": "⩽̸",
		"NotLessTilde": "≴",
		"NotNestedGreaterGreater": "⪢̸",
		"NotNestedLessLess": "⪡̸",
		"NotPrecedes": "⊀",
		"NotPrecedesEqual": "⪯̸",
		"NotPrecedesSlantEqual": "⋠",
		"NotReverseElement": "∌",
		"NotRightTriangle": "⋫",
		"NotRightTriangleBar": "⧐̸",
		"NotRightTriangleEqual": "⋭",
		"NotSquareSubset": "⊏̸",
		"NotSquareSubsetEqual": "⋢",
		"NotSquareSuperset": "⊐̸",
		"NotSquareSupersetEqual": "⋣",
		"NotSubset": "⊂⃒",
		"NotSubsetEqual": "⊈",
		"NotSucceeds": "⊁",
		"NotSucceedsEqual": "⪰̸",
		"NotSucceedsSlantEqual": "⋡",
		"NotSucceedsTilde": "≿̸",
		"NotSuperset": "⊃⃒",
		"NotSupersetEqual": "⊉",
		"NotTilde": "≁",
		"NotTildeEqual": "≄",
		"NotTildeFullEqual": "≇",
		"NotTildeTilde": "≉",
		"NotVerticalBar": "∤",
		"Nscr": "𝒩",
		"Ntild": "Ñ",
		"Ntilde": "Ñ",
		"Nu": "Ν",
		"OElig": "Œ",
		"Oacut": "Ó",
		"Oacute": "Ó",
		"Ocir": "Ô",
		"Ocirc": "Ô",
		"Ocy": "О",
		"Odblac": "Ő",
		"Ofr": "𝔒",
		"Ograv": "Ò",
		"Ograve": "Ò",
		"Omacr": "Ō",
		"Omega": "Ω",
		"Omicron": "Ο",
		"Oopf": "𝕆",
		"OpenCurlyDoubleQuote": "“",
		"OpenCurlyQuote": "‘",
		"Or": "⩔",
		"Oscr": "𝒪",
		"Oslas": "Ø",
		"Oslash": "Ø",
		"Otild": "Õ",
		"Otilde": "Õ",
		"Otimes": "⨷",
		"Oum": "Ö",
		"Ouml": "Ö",
		"OverBar": "‾",
		"OverBrace": "⏞",
		"OverBracket": "⎴",
		"OverParenthesis": "⏜",
		"PartialD": "∂",
		"Pcy": "П",
		"Pfr": "𝔓",
		"Phi": "Φ",
		"Pi": "Π",
		"PlusMinus": "±",
		"Poincareplane": "ℌ",
		"Popf": "ℙ",
		"Pr": "⪻",
		"Precedes": "≺",
		"PrecedesEqual": "⪯",
		"PrecedesSlantEqual": "≼",
		"PrecedesTilde": "≾",
		"Prime": "″",
		"Product": "∏",
		"Proportion": "∷",
		"Proportional": "∝",
		"Pscr": "𝒫",
		"Psi": "Ψ",
		"QUO": "\"",
		"QUOT": "\"",
		"Qfr": "𝔔",
		"Qopf": "ℚ",
		"Qscr": "𝒬",
		"RBarr": "⤐",
		"RE": "®",
		"REG": "®",
		"Racute": "Ŕ",
		"Rang": "⟫",
		"Rarr": "↠",
		"Rarrtl": "⤖",
		"Rcaron": "Ř",
		"Rcedil": "Ŗ",
		"Rcy": "Р",
		"Re": "ℜ",
		"ReverseElement": "∋",
		"ReverseEquilibrium": "⇋",
		"ReverseUpEquilibrium": "⥯",
		"Rfr": "ℜ",
		"Rho": "Ρ",
		"RightAngleBracket": "⟩",
		"RightArrow": "→",
		"RightArrowBar": "⇥",
		"RightArrowLeftArrow": "⇄",
		"RightCeiling": "⌉",
		"RightDoubleBracket": "⟧",
		"RightDownTeeVector": "⥝",
		"RightDownVector": "⇂",
		"RightDownVectorBar": "⥕",
		"RightFloor": "⌋",
		"RightTee": "⊢",
		"RightTeeArrow": "↦",
		"RightTeeVector": "⥛",
		"RightTriangle": "⊳",
		"RightTriangleBar": "⧐",
		"RightTriangleEqual": "⊵",
		"RightUpDownVector": "⥏",
		"RightUpTeeVector": "⥜",
		"RightUpVector": "↾",
		"RightUpVectorBar": "⥔",
		"RightVector": "⇀",
		"RightVectorBar": "⥓",
		"Rightarrow": "⇒",
		"Ropf": "ℝ",
		"RoundImplies": "⥰",
		"Rrightarrow": "⇛",
		"Rscr": "ℛ",
		"Rsh": "↱",
		"RuleDelayed": "⧴",
		"SHCHcy": "Щ",
		"SHcy": "Ш",
		"SOFTcy": "Ь",
		"Sacute": "Ś",
		"Sc": "⪼",
		"Scaron": "Š",
		"Scedil": "Ş",
		"Scirc": "Ŝ",
		"Scy": "С",
		"Sfr": "𝔖",
		"ShortDownArrow": "↓",
		"ShortLeftArrow": "←",
		"ShortRightArrow": "→",
		"ShortUpArrow": "↑",
		"Sigma": "Σ",
		"SmallCircle": "∘",
		"Sopf": "𝕊",
		"Sqrt": "√",
		"Square": "□",
		"SquareIntersection": "⊓",
		"SquareSubset": "⊏",
		"SquareSubsetEqual": "⊑",
		"SquareSuperset": "⊐",
		"SquareSupersetEqual": "⊒",
		"SquareUnion": "⊔",
		"Sscr": "𝒮",
		"Star": "⋆",
		"Sub": "⋐",
		"Subset": "⋐",
		"SubsetEqual": "⊆",
		"Succeeds": "≻",
		"SucceedsEqual": "⪰",
		"SucceedsSlantEqual": "≽",
		"SucceedsTilde": "≿",
		"SuchThat": "∋",
		"Sum": "∑",
		"Sup": "⋑",
		"Superset": "⊃",
		"SupersetEqual": "⊇",
		"Supset": "⋑",
		"THOR": "Þ",
		"THORN": "Þ",
		"TRADE": "™",
		"TSHcy": "Ћ",
		"TScy": "Ц",
		"Tab": "\t",
		"Tau": "Τ",
		"Tcaron": "Ť",
		"Tcedil": "Ţ",
		"Tcy": "Т",
		"Tfr": "𝔗",
		"Therefore": "∴",
		"Theta": "Θ",
		"ThickSpace": "  ",
		"ThinSpace": " ",
		"Tilde": "∼",
		"TildeEqual": "≃",
		"TildeFullEqual": "≅",
		"TildeTilde": "≈",
		"Topf": "𝕋",
		"TripleDot": "⃛",
		"Tscr": "𝒯",
		"Tstrok": "Ŧ",
		"Uacut": "Ú",
		"Uacute": "Ú",
		"Uarr": "↟",
		"Uarrocir": "⥉",
		"Ubrcy": "Ў",
		"Ubreve": "Ŭ",
		"Ucir": "Û",
		"Ucirc": "Û",
		"Ucy": "У",
		"Udblac": "Ű",
		"Ufr": "𝔘",
		"Ugrav": "Ù",
		"Ugrave": "Ù",
		"Umacr": "Ū",
		"UnderBar": "_",
		"UnderBrace": "⏟",
		"UnderBracket": "⎵",
		"UnderParenthesis": "⏝",
		"Union": "⋃",
		"UnionPlus": "⊎",
		"Uogon": "Ų",
		"Uopf": "𝕌",
		"UpArrow": "↑",
		"UpArrowBar": "⤒",
		"UpArrowDownArrow": "⇅",
		"UpDownArrow": "↕",
		"UpEquilibrium": "⥮",
		"UpTee": "⊥",
		"UpTeeArrow": "↥",
		"Uparrow": "⇑",
		"Updownarrow": "⇕",
		"UpperLeftArrow": "↖",
		"UpperRightArrow": "↗",
		"Upsi": "ϒ",
		"Upsilon": "Υ",
		"Uring": "Ů",
		"Uscr": "𝒰",
		"Utilde": "Ũ",
		"Uum": "Ü",
		"Uuml": "Ü",
		"VDash": "⊫",
		"Vbar": "⫫",
		"Vcy": "В",
		"Vdash": "⊩",
		"Vdashl": "⫦",
		"Vee": "⋁",
		"Verbar": "‖",
		"Vert": "‖",
		"VerticalBar": "∣",
		"VerticalLine": "|",
		"VerticalSeparator": "❘",
		"VerticalTilde": "≀",
		"VeryThinSpace": " ",
		"Vfr": "𝔙",
		"Vopf": "𝕍",
		"Vscr": "𝒱",
		"Vvdash": "⊪",
		"Wcirc": "Ŵ",
		"Wedge": "⋀",
		"Wfr": "𝔚",
		"Wopf": "𝕎",
		"Wscr": "𝒲",
		"Xfr": "𝔛",
		"Xi": "Ξ",
		"Xopf": "𝕏",
		"Xscr": "𝒳",
		"YAcy": "Я",
		"YIcy": "Ї",
		"YUcy": "Ю",
		"Yacut": "Ý",
		"Yacute": "Ý",
		"Ycirc": "Ŷ",
		"Ycy": "Ы",
		"Yfr": "𝔜",
		"Yopf": "𝕐",
		"Yscr": "𝒴",
		"Yuml": "Ÿ",
		"ZHcy": "Ж",
		"Zacute": "Ź",
		"Zcaron": "Ž",
		"Zcy": "З",
		"Zdot": "Ż",
		"ZeroWidthSpace": "​",
		"Zeta": "Ζ",
		"Zfr": "ℨ",
		"Zopf": "ℤ",
		"Zscr": "𝒵",
		"aacut": "á",
		"aacute": "á",
		"abreve": "ă",
		"ac": "∾",
		"acE": "∾̳",
		"acd": "∿",
		"acir": "â",
		"acirc": "â",
		"acut": "´",
		"acute": "´",
		"acy": "а",
		"aeli": "æ",
		"aelig": "æ",
		"af": "⁡",
		"afr": "𝔞",
		"agrav": "à",
		"agrave": "à",
		"alefsym": "ℵ",
		"aleph": "ℵ",
		"alpha": "α",
		"amacr": "ā",
		"amalg": "⨿",
		"am": "&",
		"amp": "&",
		"and": "∧",
		"andand": "⩕",
		"andd": "⩜",
		"andslope": "⩘",
		"andv": "⩚",
		"ang": "∠",
		"ange": "⦤",
		"angle": "∠",
		"angmsd": "∡",
		"angmsdaa": "⦨",
		"angmsdab": "⦩",
		"angmsdac": "⦪",
		"angmsdad": "⦫",
		"angmsdae": "⦬",
		"angmsdaf": "⦭",
		"angmsdag": "⦮",
		"angmsdah": "⦯",
		"angrt": "∟",
		"angrtvb": "⊾",
		"angrtvbd": "⦝",
		"angsph": "∢",
		"angst": "Å",
		"angzarr": "⍼",
		"aogon": "ą",
		"aopf": "𝕒",
		"ap": "≈",
		"apE": "⩰",
		"apacir": "⩯",
		"ape": "≊",
		"apid": "≋",
		"apos": "'",
		"approx": "≈",
		"approxeq": "≊",
		"arin": "å",
		"aring": "å",
		"ascr": "𝒶",
		"ast": "*",
		"asymp": "≈",
		"asympeq": "≍",
		"atild": "ã",
		"atilde": "ã",
		"aum": "ä",
		"auml": "ä",
		"awconint": "∳",
		"awint": "⨑",
		"bNot": "⫭",
		"backcong": "≌",
		"backepsilon": "϶",
		"backprime": "‵",
		"backsim": "∽",
		"backsimeq": "⋍",
		"barvee": "⊽",
		"barwed": "⌅",
		"barwedge": "⌅",
		"bbrk": "⎵",
		"bbrktbrk": "⎶",
		"bcong": "≌",
		"bcy": "б",
		"bdquo": "„",
		"becaus": "∵",
		"because": "∵",
		"bemptyv": "⦰",
		"bepsi": "϶",
		"bernou": "ℬ",
		"beta": "β",
		"beth": "ℶ",
		"between": "≬",
		"bfr": "𝔟",
		"bigcap": "⋂",
		"bigcirc": "◯",
		"bigcup": "⋃",
		"bigodot": "⨀",
		"bigoplus": "⨁",
		"bigotimes": "⨂",
		"bigsqcup": "⨆",
		"bigstar": "★",
		"bigtriangledown": "▽",
		"bigtriangleup": "△",
		"biguplus": "⨄",
		"bigvee": "⋁",
		"bigwedge": "⋀",
		"bkarow": "⤍",
		"blacklozenge": "⧫",
		"blacksquare": "▪",
		"blacktriangle": "▴",
		"blacktriangledown": "▾",
		"blacktriangleleft": "◂",
		"blacktriangleright": "▸",
		"blank": "␣",
		"blk12": "▒",
		"blk14": "░",
		"blk34": "▓",
		"block": "█",
		"bne": "=⃥",
		"bnequiv": "≡⃥",
		"bnot": "⌐",
		"bopf": "𝕓",
		"bot": "⊥",
		"bottom": "⊥",
		"bowtie": "⋈",
		"boxDL": "╗",
		"boxDR": "╔",
		"boxDl": "╖",
		"boxDr": "╓",
		"boxH": "═",
		"boxHD": "╦",
		"boxHU": "╩",
		"boxHd": "╤",
		"boxHu": "╧",
		"boxUL": "╝",
		"boxUR": "╚",
		"boxUl": "╜",
		"boxUr": "╙",
		"boxV": "║",
		"boxVH": "╬",
		"boxVL": "╣",
		"boxVR": "╠",
		"boxVh": "╫",
		"boxVl": "╢",
		"boxVr": "╟",
		"boxbox": "⧉",
		"boxdL": "╕",
		"boxdR": "╒",
		"boxdl": "┐",
		"boxdr": "┌",
		"boxh": "─",
		"boxhD": "╥",
		"boxhU": "╨",
		"boxhd": "┬",
		"boxhu": "┴",
		"boxminus": "⊟",
		"boxplus": "⊞",
		"boxtimes": "⊠",
		"boxuL": "╛",
		"boxuR": "╘",
		"boxul": "┘",
		"boxur": "└",
		"boxv": "│",
		"boxvH": "╪",
		"boxvL": "╡",
		"boxvR": "╞",
		"boxvh": "┼",
		"boxvl": "┤",
		"boxvr": "├",
		"bprime": "‵",
		"breve": "˘",
		"brvba": "¦",
		"brvbar": "¦",
		"bscr": "𝒷",
		"bsemi": "⁏",
		"bsim": "∽",
		"bsime": "⋍",
		"bsol": "\\",
		"bsolb": "⧅",
		"bsolhsub": "⟈",
		"bull": "•",
		"bullet": "•",
		"bump": "≎",
		"bumpE": "⪮",
		"bumpe": "≏",
		"bumpeq": "≏",
		"cacute": "ć",
		"cap": "∩",
		"capand": "⩄",
		"capbrcup": "⩉",
		"capcap": "⩋",
		"capcup": "⩇",
		"capdot": "⩀",
		"caps": "∩︀",
		"caret": "⁁",
		"caron": "ˇ",
		"ccaps": "⩍",
		"ccaron": "č",
		"ccedi": "ç",
		"ccedil": "ç",
		"ccirc": "ĉ",
		"ccups": "⩌",
		"ccupssm": "⩐",
		"cdot": "ċ",
		"cedi": "¸",
		"cedil": "¸",
		"cemptyv": "⦲",
		"cen": "¢",
		"cent": "¢",
		"centerdot": "·",
		"cfr": "𝔠",
		"chcy": "ч",
		"check": "✓",
		"checkmark": "✓",
		"chi": "χ",
		"cir": "○",
		"cirE": "⧃",
		"circ": "ˆ",
		"circeq": "≗",
		"circlearrowleft": "↺",
		"circlearrowright": "↻",
		"circledR": "®",
		"circledS": "Ⓢ",
		"circledast": "⊛",
		"circledcirc": "⊚",
		"circleddash": "⊝",
		"cire": "≗",
		"cirfnint": "⨐",
		"cirmid": "⫯",
		"cirscir": "⧂",
		"clubs": "♣",
		"clubsuit": "♣",
		"colon": ":",
		"colone": "≔",
		"coloneq": "≔",
		"comma": ",",
		"commat": "@",
		"comp": "∁",
		"compfn": "∘",
		"complement": "∁",
		"complexes": "ℂ",
		"cong": "≅",
		"congdot": "⩭",
		"conint": "∮",
		"copf": "𝕔",
		"coprod": "∐",
		"cop": "©",
		"copy": "©",
		"copysr": "℗",
		"crarr": "↵",
		"cross": "✗",
		"cscr": "𝒸",
		"csub": "⫏",
		"csube": "⫑",
		"csup": "⫐",
		"csupe": "⫒",
		"ctdot": "⋯",
		"cudarrl": "⤸",
		"cudarrr": "⤵",
		"cuepr": "⋞",
		"cuesc": "⋟",
		"cularr": "↶",
		"cularrp": "⤽",
		"cup": "∪",
		"cupbrcap": "⩈",
		"cupcap": "⩆",
		"cupcup": "⩊",
		"cupdot": "⊍",
		"cupor": "⩅",
		"cups": "∪︀",
		"curarr": "↷",
		"curarrm": "⤼",
		"curlyeqprec": "⋞",
		"curlyeqsucc": "⋟",
		"curlyvee": "⋎",
		"curlywedge": "⋏",
		"curre": "¤",
		"curren": "¤",
		"curvearrowleft": "↶",
		"curvearrowright": "↷",
		"cuvee": "⋎",
		"cuwed": "⋏",
		"cwconint": "∲",
		"cwint": "∱",
		"cylcty": "⌭",
		"dArr": "⇓",
		"dHar": "⥥",
		"dagger": "†",
		"daleth": "ℸ",
		"darr": "↓",
		"dash": "‐",
		"dashv": "⊣",
		"dbkarow": "⤏",
		"dblac": "˝",
		"dcaron": "ď",
		"dcy": "д",
		"dd": "ⅆ",
		"ddagger": "‡",
		"ddarr": "⇊",
		"ddotseq": "⩷",
		"de": "°",
		"deg": "°",
		"delta": "δ",
		"demptyv": "⦱",
		"dfisht": "⥿",
		"dfr": "𝔡",
		"dharl": "⇃",
		"dharr": "⇂",
		"diam": "⋄",
		"diamond": "⋄",
		"diamondsuit": "♦",
		"diams": "♦",
		"die": "¨",
		"digamma": "ϝ",
		"disin": "⋲",
		"div": "÷",
		"divid": "÷",
		"divide": "÷",
		"divideontimes": "⋇",
		"divonx": "⋇",
		"djcy": "ђ",
		"dlcorn": "⌞",
		"dlcrop": "⌍",
		"dollar": "$",
		"dopf": "𝕕",
		"dot": "˙",
		"doteq": "≐",
		"doteqdot": "≑",
		"dotminus": "∸",
		"dotplus": "∔",
		"dotsquare": "⊡",
		"doublebarwedge": "⌆",
		"downarrow": "↓",
		"downdownarrows": "⇊",
		"downharpoonleft": "⇃",
		"downharpoonright": "⇂",
		"drbkarow": "⤐",
		"drcorn": "⌟",
		"drcrop": "⌌",
		"dscr": "𝒹",
		"dscy": "ѕ",
		"dsol": "⧶",
		"dstrok": "đ",
		"dtdot": "⋱",
		"dtri": "▿",
		"dtrif": "▾",
		"duarr": "⇵",
		"duhar": "⥯",
		"dwangle": "⦦",
		"dzcy": "џ",
		"dzigrarr": "⟿",
		"eDDot": "⩷",
		"eDot": "≑",
		"eacut": "é",
		"eacute": "é",
		"easter": "⩮",
		"ecaron": "ě",
		"ecir": "ê",
		"ecirc": "ê",
		"ecolon": "≕",
		"ecy": "э",
		"edot": "ė",
		"ee": "ⅇ",
		"efDot": "≒",
		"efr": "𝔢",
		"eg": "⪚",
		"egrav": "è",
		"egrave": "è",
		"egs": "⪖",
		"egsdot": "⪘",
		"el": "⪙",
		"elinters": "⏧",
		"ell": "ℓ",
		"els": "⪕",
		"elsdot": "⪗",
		"emacr": "ē",
		"empty": "∅",
		"emptyset": "∅",
		"emptyv": "∅",
		"emsp13": " ",
		"emsp14": " ",
		"emsp": " ",
		"eng": "ŋ",
		"ensp": " ",
		"eogon": "ę",
		"eopf": "𝕖",
		"epar": "⋕",
		"eparsl": "⧣",
		"eplus": "⩱",
		"epsi": "ε",
		"epsilon": "ε",
		"epsiv": "ϵ",
		"eqcirc": "≖",
		"eqcolon": "≕",
		"eqsim": "≂",
		"eqslantgtr": "⪖",
		"eqslantless": "⪕",
		"equals": "=",
		"equest": "≟",
		"equiv": "≡",
		"equivDD": "⩸",
		"eqvparsl": "⧥",
		"erDot": "≓",
		"erarr": "⥱",
		"escr": "ℯ",
		"esdot": "≐",
		"esim": "≂",
		"eta": "η",
		"et": "ð",
		"eth": "ð",
		"eum": "ë",
		"euml": "ë",
		"euro": "€",
		"excl": "!",
		"exist": "∃",
		"expectation": "ℰ",
		"exponentiale": "ⅇ",
		"fallingdotseq": "≒",
		"fcy": "ф",
		"female": "♀",
		"ffilig": "ﬃ",
		"fflig": "ﬀ",
		"ffllig": "ﬄ",
		"ffr": "𝔣",
		"filig": "ﬁ",
		"fjlig": "fj",
		"flat": "♭",
		"fllig": "ﬂ",
		"fltns": "▱",
		"fnof": "ƒ",
		"fopf": "𝕗",
		"forall": "∀",
		"fork": "⋔",
		"forkv": "⫙",
		"fpartint": "⨍",
		"frac1": "¼",
		"frac12": "½",
		"frac13": "⅓",
		"frac14": "¼",
		"frac15": "⅕",
		"frac16": "⅙",
		"frac18": "⅛",
		"frac23": "⅔",
		"frac25": "⅖",
		"frac3": "¾",
		"frac34": "¾",
		"frac35": "⅗",
		"frac38": "⅜",
		"frac45": "⅘",
		"frac56": "⅚",
		"frac58": "⅝",
		"frac78": "⅞",
		"frasl": "⁄",
		"frown": "⌢",
		"fscr": "𝒻",
		"gE": "≧",
		"gEl": "⪌",
		"gacute": "ǵ",
		"gamma": "γ",
		"gammad": "ϝ",
		"gap": "⪆",
		"gbreve": "ğ",
		"gcirc": "ĝ",
		"gcy": "г",
		"gdot": "ġ",
		"ge": "≥",
		"gel": "⋛",
		"geq": "≥",
		"geqq": "≧",
		"geqslant": "⩾",
		"ges": "⩾",
		"gescc": "⪩",
		"gesdot": "⪀",
		"gesdoto": "⪂",
		"gesdotol": "⪄",
		"gesl": "⋛︀",
		"gesles": "⪔",
		"gfr": "𝔤",
		"gg": "≫",
		"ggg": "⋙",
		"gimel": "ℷ",
		"gjcy": "ѓ",
		"gl": "≷",
		"glE": "⪒",
		"gla": "⪥",
		"glj": "⪤",
		"gnE": "≩",
		"gnap": "⪊",
		"gnapprox": "⪊",
		"gne": "⪈",
		"gneq": "⪈",
		"gneqq": "≩",
		"gnsim": "⋧",
		"gopf": "𝕘",
		"grave": "`",
		"gscr": "ℊ",
		"gsim": "≳",
		"gsime": "⪎",
		"gsiml": "⪐",
		"g": ">",
		"gt": ">",
		"gtcc": "⪧",
		"gtcir": "⩺",
		"gtdot": "⋗",
		"gtlPar": "⦕",
		"gtquest": "⩼",
		"gtrapprox": "⪆",
		"gtrarr": "⥸",
		"gtrdot": "⋗",
		"gtreqless": "⋛",
		"gtreqqless": "⪌",
		"gtrless": "≷",
		"gtrsim": "≳",
		"gvertneqq": "≩︀",
		"gvnE": "≩︀",
		"hArr": "⇔",
		"hairsp": " ",
		"half": "½",
		"hamilt": "ℋ",
		"hardcy": "ъ",
		"harr": "↔",
		"harrcir": "⥈",
		"harrw": "↭",
		"hbar": "ℏ",
		"hcirc": "ĥ",
		"hearts": "♥",
		"heartsuit": "♥",
		"hellip": "…",
		"hercon": "⊹",
		"hfr": "𝔥",
		"hksearow": "⤥",
		"hkswarow": "⤦",
		"hoarr": "⇿",
		"homtht": "∻",
		"hookleftarrow": "↩",
		"hookrightarrow": "↪",
		"hopf": "𝕙",
		"horbar": "―",
		"hscr": "𝒽",
		"hslash": "ℏ",
		"hstrok": "ħ",
		"hybull": "⁃",
		"hyphen": "‐",
		"iacut": "í",
		"iacute": "í",
		"ic": "⁣",
		"icir": "î",
		"icirc": "î",
		"icy": "и",
		"iecy": "е",
		"iexc": "¡",
		"iexcl": "¡",
		"iff": "⇔",
		"ifr": "𝔦",
		"igrav": "ì",
		"igrave": "ì",
		"ii": "ⅈ",
		"iiiint": "⨌",
		"iiint": "∭",
		"iinfin": "⧜",
		"iiota": "℩",
		"ijlig": "ĳ",
		"imacr": "ī",
		"image": "ℑ",
		"imagline": "ℐ",
		"imagpart": "ℑ",
		"imath": "ı",
		"imof": "⊷",
		"imped": "Ƶ",
		"in": "∈",
		"incare": "℅",
		"infin": "∞",
		"infintie": "⧝",
		"inodot": "ı",
		"int": "∫",
		"intcal": "⊺",
		"integers": "ℤ",
		"intercal": "⊺",
		"intlarhk": "⨗",
		"intprod": "⨼",
		"iocy": "ё",
		"iogon": "į",
		"iopf": "𝕚",
		"iota": "ι",
		"iprod": "⨼",
		"iques": "¿",
		"iquest": "¿",
		"iscr": "𝒾",
		"isin": "∈",
		"isinE": "⋹",
		"isindot": "⋵",
		"isins": "⋴",
		"isinsv": "⋳",
		"isinv": "∈",
		"it": "⁢",
		"itilde": "ĩ",
		"iukcy": "і",
		"ium": "ï",
		"iuml": "ï",
		"jcirc": "ĵ",
		"jcy": "й",
		"jfr": "𝔧",
		"jmath": "ȷ",
		"jopf": "𝕛",
		"jscr": "𝒿",
		"jsercy": "ј",
		"jukcy": "є",
		"kappa": "κ",
		"kappav": "ϰ",
		"kcedil": "ķ",
		"kcy": "к",
		"kfr": "𝔨",
		"kgreen": "ĸ",
		"khcy": "х",
		"kjcy": "ќ",
		"kopf": "𝕜",
		"kscr": "𝓀",
		"lAarr": "⇚",
		"lArr": "⇐",
		"lAtail": "⤛",
		"lBarr": "⤎",
		"lE": "≦",
		"lEg": "⪋",
		"lHar": "⥢",
		"lacute": "ĺ",
		"laemptyv": "⦴",
		"lagran": "ℒ",
		"lambda": "λ",
		"lang": "⟨",
		"langd": "⦑",
		"langle": "⟨",
		"lap": "⪅",
		"laqu": "«",
		"laquo": "«",
		"larr": "←",
		"larrb": "⇤",
		"larrbfs": "⤟",
		"larrfs": "⤝",
		"larrhk": "↩",
		"larrlp": "↫",
		"larrpl": "⤹",
		"larrsim": "⥳",
		"larrtl": "↢",
		"lat": "⪫",
		"latail": "⤙",
		"late": "⪭",
		"lates": "⪭︀",
		"lbarr": "⤌",
		"lbbrk": "❲",
		"lbrace": "{",
		"lbrack": "[",
		"lbrke": "⦋",
		"lbrksld": "⦏",
		"lbrkslu": "⦍",
		"lcaron": "ľ",
		"lcedil": "ļ",
		"lceil": "⌈",
		"lcub": "{",
		"lcy": "л",
		"ldca": "⤶",
		"ldquo": "“",
		"ldquor": "„",
		"ldrdhar": "⥧",
		"ldrushar": "⥋",
		"ldsh": "↲",
		"le": "≤",
		"leftarrow": "←",
		"leftarrowtail": "↢",
		"leftharpoondown": "↽",
		"leftharpoonup": "↼",
		"leftleftarrows": "⇇",
		"leftrightarrow": "↔",
		"leftrightarrows": "⇆",
		"leftrightharpoons": "⇋",
		"leftrightsquigarrow": "↭",
		"leftthreetimes": "⋋",
		"leg": "⋚",
		"leq": "≤",
		"leqq": "≦",
		"leqslant": "⩽",
		"les": "⩽",
		"lescc": "⪨",
		"lesdot": "⩿",
		"lesdoto": "⪁",
		"lesdotor": "⪃",
		"lesg": "⋚︀",
		"lesges": "⪓",
		"lessapprox": "⪅",
		"lessdot": "⋖",
		"lesseqgtr": "⋚",
		"lesseqqgtr": "⪋",
		"lessgtr": "≶",
		"lesssim": "≲",
		"lfisht": "⥼",
		"lfloor": "⌊",
		"lfr": "𝔩",
		"lg": "≶",
		"lgE": "⪑",
		"lhard": "↽",
		"lharu": "↼",
		"lharul": "⥪",
		"lhblk": "▄",
		"ljcy": "љ",
		"ll": "≪",
		"llarr": "⇇",
		"llcorner": "⌞",
		"llhard": "⥫",
		"lltri": "◺",
		"lmidot": "ŀ",
		"lmoust": "⎰",
		"lmoustache": "⎰",
		"lnE": "≨",
		"lnap": "⪉",
		"lnapprox": "⪉",
		"lne": "⪇",
		"lneq": "⪇",
		"lneqq": "≨",
		"lnsim": "⋦",
		"loang": "⟬",
		"loarr": "⇽",
		"lobrk": "⟦",
		"longleftarrow": "⟵",
		"longleftrightarrow": "⟷",
		"longmapsto": "⟼",
		"longrightarrow": "⟶",
		"looparrowleft": "↫",
		"looparrowright": "↬",
		"lopar": "⦅",
		"lopf": "𝕝",
		"loplus": "⨭",
		"lotimes": "⨴",
		"lowast": "∗",
		"lowbar": "_",
		"loz": "◊",
		"lozenge": "◊",
		"lozf": "⧫",
		"lpar": "(",
		"lparlt": "⦓",
		"lrarr": "⇆",
		"lrcorner": "⌟",
		"lrhar": "⇋",
		"lrhard": "⥭",
		"lrm": "‎",
		"lrtri": "⊿",
		"lsaquo": "‹",
		"lscr": "𝓁",
		"lsh": "↰",
		"lsim": "≲",
		"lsime": "⪍",
		"lsimg": "⪏",
		"lsqb": "[",
		"lsquo": "‘",
		"lsquor": "‚",
		"lstrok": "ł",
		"l": "<",
		"lt": "<",
		"ltcc": "⪦",
		"ltcir": "⩹",
		"ltdot": "⋖",
		"lthree": "⋋",
		"ltimes": "⋉",
		"ltlarr": "⥶",
		"ltquest": "⩻",
		"ltrPar": "⦖",
		"ltri": "◃",
		"ltrie": "⊴",
		"ltrif": "◂",
		"lurdshar": "⥊",
		"luruhar": "⥦",
		"lvertneqq": "≨︀",
		"lvnE": "≨︀",
		"mDDot": "∺",
		"mac": "¯",
		"macr": "¯",
		"male": "♂",
		"malt": "✠",
		"maltese": "✠",
		"map": "↦",
		"mapsto": "↦",
		"mapstodown": "↧",
		"mapstoleft": "↤",
		"mapstoup": "↥",
		"marker": "▮",
		"mcomma": "⨩",
		"mcy": "м",
		"mdash": "—",
		"measuredangle": "∡",
		"mfr": "𝔪",
		"mho": "℧",
		"micr": "µ",
		"micro": "µ",
		"mid": "∣",
		"midast": "*",
		"midcir": "⫰",
		"middo": "·",
		"middot": "·",
		"minus": "−",
		"minusb": "⊟",
		"minusd": "∸",
		"minusdu": "⨪",
		"mlcp": "⫛",
		"mldr": "…",
		"mnplus": "∓",
		"models": "⊧",
		"mopf": "𝕞",
		"mp": "∓",
		"mscr": "𝓂",
		"mstpos": "∾",
		"mu": "μ",
		"multimap": "⊸",
		"mumap": "⊸",
		"nGg": "⋙̸",
		"nGt": "≫⃒",
		"nGtv": "≫̸",
		"nLeftarrow": "⇍",
		"nLeftrightarrow": "⇎",
		"nLl": "⋘̸",
		"nLt": "≪⃒",
		"nLtv": "≪̸",
		"nRightarrow": "⇏",
		"nVDash": "⊯",
		"nVdash": "⊮",
		"nabla": "∇",
		"nacute": "ń",
		"nang": "∠⃒",
		"nap": "≉",
		"napE": "⩰̸",
		"napid": "≋̸",
		"napos": "ŉ",
		"napprox": "≉",
		"natur": "♮",
		"natural": "♮",
		"naturals": "ℕ",
		"nbs": " ",
		"nbsp": " ",
		"nbump": "≎̸",
		"nbumpe": "≏̸",
		"ncap": "⩃",
		"ncaron": "ň",
		"ncedil": "ņ",
		"ncong": "≇",
		"ncongdot": "⩭̸",
		"ncup": "⩂",
		"ncy": "н",
		"ndash": "–",
		"ne": "≠",
		"neArr": "⇗",
		"nearhk": "⤤",
		"nearr": "↗",
		"nearrow": "↗",
		"nedot": "≐̸",
		"nequiv": "≢",
		"nesear": "⤨",
		"nesim": "≂̸",
		"nexist": "∄",
		"nexists": "∄",
		"nfr": "𝔫",
		"ngE": "≧̸",
		"nge": "≱",
		"ngeq": "≱",
		"ngeqq": "≧̸",
		"ngeqslant": "⩾̸",
		"nges": "⩾̸",
		"ngsim": "≵",
		"ngt": "≯",
		"ngtr": "≯",
		"nhArr": "⇎",
		"nharr": "↮",
		"nhpar": "⫲",
		"ni": "∋",
		"nis": "⋼",
		"nisd": "⋺",
		"niv": "∋",
		"njcy": "њ",
		"nlArr": "⇍",
		"nlE": "≦̸",
		"nlarr": "↚",
		"nldr": "‥",
		"nle": "≰",
		"nleftarrow": "↚",
		"nleftrightarrow": "↮",
		"nleq": "≰",
		"nleqq": "≦̸",
		"nleqslant": "⩽̸",
		"nles": "⩽̸",
		"nless": "≮",
		"nlsim": "≴",
		"nlt": "≮",
		"nltri": "⋪",
		"nltrie": "⋬",
		"nmid": "∤",
		"nopf": "𝕟",
		"no": "¬",
		"not": "¬",
		"notin": "∉",
		"notinE": "⋹̸",
		"notindot": "⋵̸",
		"notinva": "∉",
		"notinvb": "⋷",
		"notinvc": "⋶",
		"notni": "∌",
		"notniva": "∌",
		"notnivb": "⋾",
		"notnivc": "⋽",
		"npar": "∦",
		"nparallel": "∦",
		"nparsl": "⫽⃥",
		"npart": "∂̸",
		"npolint": "⨔",
		"npr": "⊀",
		"nprcue": "⋠",
		"npre": "⪯̸",
		"nprec": "⊀",
		"npreceq": "⪯̸",
		"nrArr": "⇏",
		"nrarr": "↛",
		"nrarrc": "⤳̸",
		"nrarrw": "↝̸",
		"nrightarrow": "↛",
		"nrtri": "⋫",
		"nrtrie": "⋭",
		"nsc": "⊁",
		"nsccue": "⋡",
		"nsce": "⪰̸",
		"nscr": "𝓃",
		"nshortmid": "∤",
		"nshortparallel": "∦",
		"nsim": "≁",
		"nsime": "≄",
		"nsimeq": "≄",
		"nsmid": "∤",
		"nspar": "∦",
		"nsqsube": "⋢",
		"nsqsupe": "⋣",
		"nsub": "⊄",
		"nsubE": "⫅̸",
		"nsube": "⊈",
		"nsubset": "⊂⃒",
		"nsubseteq": "⊈",
		"nsubseteqq": "⫅̸",
		"nsucc": "⊁",
		"nsucceq": "⪰̸",
		"nsup": "⊅",
		"nsupE": "⫆̸",
		"nsupe": "⊉",
		"nsupset": "⊃⃒",
		"nsupseteq": "⊉",
		"nsupseteqq": "⫆̸",
		"ntgl": "≹",
		"ntild": "ñ",
		"ntilde": "ñ",
		"ntlg": "≸",
		"ntriangleleft": "⋪",
		"ntrianglelefteq": "⋬",
		"ntriangleright": "⋫",
		"ntrianglerighteq": "⋭",
		"nu": "ν",
		"num": "#",
		"numero": "№",
		"numsp": " ",
		"nvDash": "⊭",
		"nvHarr": "⤄",
		"nvap": "≍⃒",
		"nvdash": "⊬",
		"nvge": "≥⃒",
		"nvgt": ">⃒",
		"nvinfin": "⧞",
		"nvlArr": "⤂",
		"nvle": "≤⃒",
		"nvlt": "<⃒",
		"nvltrie": "⊴⃒",
		"nvrArr": "⤃",
		"nvrtrie": "⊵⃒",
		"nvsim": "∼⃒",
		"nwArr": "⇖",
		"nwarhk": "⤣",
		"nwarr": "↖",
		"nwarrow": "↖",
		"nwnear": "⤧",
		"oS": "Ⓢ",
		"oacut": "ó",
		"oacute": "ó",
		"oast": "⊛",
		"ocir": "ô",
		"ocirc": "ô",
		"ocy": "о",
		"odash": "⊝",
		"odblac": "ő",
		"odiv": "⨸",
		"odot": "⊙",
		"odsold": "⦼",
		"oelig": "œ",
		"ofcir": "⦿",
		"ofr": "𝔬",
		"ogon": "˛",
		"ograv": "ò",
		"ograve": "ò",
		"ogt": "⧁",
		"ohbar": "⦵",
		"ohm": "Ω",
		"oint": "∮",
		"olarr": "↺",
		"olcir": "⦾",
		"olcross": "⦻",
		"oline": "‾",
		"olt": "⧀",
		"omacr": "ō",
		"omega": "ω",
		"omicron": "ο",
		"omid": "⦶",
		"ominus": "⊖",
		"oopf": "𝕠",
		"opar": "⦷",
		"operp": "⦹",
		"oplus": "⊕",
		"or": "∨",
		"orarr": "↻",
		"ord": "º",
		"order": "ℴ",
		"orderof": "ℴ",
		"ordf": "ª",
		"ordm": "º",
		"origof": "⊶",
		"oror": "⩖",
		"orslope": "⩗",
		"orv": "⩛",
		"oscr": "ℴ",
		"oslas": "ø",
		"oslash": "ø",
		"osol": "⊘",
		"otild": "õ",
		"otilde": "õ",
		"otimes": "⊗",
		"otimesas": "⨶",
		"oum": "ö",
		"ouml": "ö",
		"ovbar": "⌽",
		"par": "¶",
		"para": "¶",
		"parallel": "∥",
		"parsim": "⫳",
		"parsl": "⫽",
		"part": "∂",
		"pcy": "п",
		"percnt": "%",
		"period": ".",
		"permil": "‰",
		"perp": "⊥",
		"pertenk": "‱",
		"pfr": "𝔭",
		"phi": "φ",
		"phiv": "ϕ",
		"phmmat": "ℳ",
		"phone": "☎",
		"pi": "π",
		"pitchfork": "⋔",
		"piv": "ϖ",
		"planck": "ℏ",
		"planckh": "ℎ",
		"plankv": "ℏ",
		"plus": "+",
		"plusacir": "⨣",
		"plusb": "⊞",
		"pluscir": "⨢",
		"plusdo": "∔",
		"plusdu": "⨥",
		"pluse": "⩲",
		"plusm": "±",
		"plusmn": "±",
		"plussim": "⨦",
		"plustwo": "⨧",
		"pm": "±",
		"pointint": "⨕",
		"popf": "𝕡",
		"poun": "£",
		"pound": "£",
		"pr": "≺",
		"prE": "⪳",
		"prap": "⪷",
		"prcue": "≼",
		"pre": "⪯",
		"prec": "≺",
		"precapprox": "⪷",
		"preccurlyeq": "≼",
		"preceq": "⪯",
		"precnapprox": "⪹",
		"precneqq": "⪵",
		"precnsim": "⋨",
		"precsim": "≾",
		"prime": "′",
		"primes": "ℙ",
		"prnE": "⪵",
		"prnap": "⪹",
		"prnsim": "⋨",
		"prod": "∏",
		"profalar": "⌮",
		"profline": "⌒",
		"profsurf": "⌓",
		"prop": "∝",
		"propto": "∝",
		"prsim": "≾",
		"prurel": "⊰",
		"pscr": "𝓅",
		"psi": "ψ",
		"puncsp": " ",
		"qfr": "𝔮",
		"qint": "⨌",
		"qopf": "𝕢",
		"qprime": "⁗",
		"qscr": "𝓆",
		"quaternions": "ℍ",
		"quatint": "⨖",
		"quest": "?",
		"questeq": "≟",
		"quo": "\"",
		"quot": "\"",
		"rAarr": "⇛",
		"rArr": "⇒",
		"rAtail": "⤜",
		"rBarr": "⤏",
		"rHar": "⥤",
		"race": "∽̱",
		"racute": "ŕ",
		"radic": "√",
		"raemptyv": "⦳",
		"rang": "⟩",
		"rangd": "⦒",
		"range": "⦥",
		"rangle": "⟩",
		"raqu": "»",
		"raquo": "»",
		"rarr": "→",
		"rarrap": "⥵",
		"rarrb": "⇥",
		"rarrbfs": "⤠",
		"rarrc": "⤳",
		"rarrfs": "⤞",
		"rarrhk": "↪",
		"rarrlp": "↬",
		"rarrpl": "⥅",
		"rarrsim": "⥴",
		"rarrtl": "↣",
		"rarrw": "↝",
		"ratail": "⤚",
		"ratio": "∶",
		"rationals": "ℚ",
		"rbarr": "⤍",
		"rbbrk": "❳",
		"rbrace": "}",
		"rbrack": "]",
		"rbrke": "⦌",
		"rbrksld": "⦎",
		"rbrkslu": "⦐",
		"rcaron": "ř",
		"rcedil": "ŗ",
		"rceil": "⌉",
		"rcub": "}",
		"rcy": "р",
		"rdca": "⤷",
		"rdldhar": "⥩",
		"rdquo": "”",
		"rdquor": "”",
		"rdsh": "↳",
		"real": "ℜ",
		"realine": "ℛ",
		"realpart": "ℜ",
		"reals": "ℝ",
		"rect": "▭",
		"re": "®",
		"reg": "®",
		"rfisht": "⥽",
		"rfloor": "⌋",
		"rfr": "𝔯",
		"rhard": "⇁",
		"rharu": "⇀",
		"rharul": "⥬",
		"rho": "ρ",
		"rhov": "ϱ",
		"rightarrow": "→",
		"rightarrowtail": "↣",
		"rightharpoondown": "⇁",
		"rightharpoonup": "⇀",
		"rightleftarrows": "⇄",
		"rightleftharpoons": "⇌",
		"rightrightarrows": "⇉",
		"rightsquigarrow": "↝",
		"rightthreetimes": "⋌",
		"ring": "˚",
		"risingdotseq": "≓",
		"rlarr": "⇄",
		"rlhar": "⇌",
		"rlm": "‏",
		"rmoust": "⎱",
		"rmoustache": "⎱",
		"rnmid": "⫮",
		"roang": "⟭",
		"roarr": "⇾",
		"robrk": "⟧",
		"ropar": "⦆",
		"ropf": "𝕣",
		"roplus": "⨮",
		"rotimes": "⨵",
		"rpar": ")",
		"rpargt": "⦔",
		"rppolint": "⨒",
		"rrarr": "⇉",
		"rsaquo": "›",
		"rscr": "𝓇",
		"rsh": "↱",
		"rsqb": "]",
		"rsquo": "’",
		"rsquor": "’",
		"rthree": "⋌",
		"rtimes": "⋊",
		"rtri": "▹",
		"rtrie": "⊵",
		"rtrif": "▸",
		"rtriltri": "⧎",
		"ruluhar": "⥨",
		"rx": "℞",
		"sacute": "ś",
		"sbquo": "‚",
		"sc": "≻",
		"scE": "⪴",
		"scap": "⪸",
		"scaron": "š",
		"sccue": "≽",
		"sce": "⪰",
		"scedil": "ş",
		"scirc": "ŝ",
		"scnE": "⪶",
		"scnap": "⪺",
		"scnsim": "⋩",
		"scpolint": "⨓",
		"scsim": "≿",
		"scy": "с",
		"sdot": "⋅",
		"sdotb": "⊡",
		"sdote": "⩦",
		"seArr": "⇘",
		"searhk": "⤥",
		"searr": "↘",
		"searrow": "↘",
		"sec": "§",
		"sect": "§",
		"semi": ";",
		"seswar": "⤩",
		"setminus": "∖",
		"setmn": "∖",
		"sext": "✶",
		"sfr": "𝔰",
		"sfrown": "⌢",
		"sharp": "♯",
		"shchcy": "щ",
		"shcy": "ш",
		"shortmid": "∣",
		"shortparallel": "∥",
		"sh": "­",
		"shy": "­",
		"sigma": "σ",
		"sigmaf": "ς",
		"sigmav": "ς",
		"sim": "∼",
		"simdot": "⩪",
		"sime": "≃",
		"simeq": "≃",
		"simg": "⪞",
		"simgE": "⪠",
		"siml": "⪝",
		"simlE": "⪟",
		"simne": "≆",
		"simplus": "⨤",
		"simrarr": "⥲",
		"slarr": "←",
		"smallsetminus": "∖",
		"smashp": "⨳",
		"smeparsl": "⧤",
		"smid": "∣",
		"smile": "⌣",
		"smt": "⪪",
		"smte": "⪬",
		"smtes": "⪬︀",
		"softcy": "ь",
		"sol": "/",
		"solb": "⧄",
		"solbar": "⌿",
		"sopf": "𝕤",
		"spades": "♠",
		"spadesuit": "♠",
		"spar": "∥",
		"sqcap": "⊓",
		"sqcaps": "⊓︀",
		"sqcup": "⊔",
		"sqcups": "⊔︀",
		"sqsub": "⊏",
		"sqsube": "⊑",
		"sqsubset": "⊏",
		"sqsubseteq": "⊑",
		"sqsup": "⊐",
		"sqsupe": "⊒",
		"sqsupset": "⊐",
		"sqsupseteq": "⊒",
		"squ": "□",
		"square": "□",
		"squarf": "▪",
		"squf": "▪",
		"srarr": "→",
		"sscr": "𝓈",
		"ssetmn": "∖",
		"ssmile": "⌣",
		"sstarf": "⋆",
		"star": "☆",
		"starf": "★",
		"straightepsilon": "ϵ",
		"straightphi": "ϕ",
		"strns": "¯",
		"sub": "⊂",
		"subE": "⫅",
		"subdot": "⪽",
		"sube": "⊆",
		"subedot": "⫃",
		"submult": "⫁",
		"subnE": "⫋",
		"subne": "⊊",
		"subplus": "⪿",
		"subrarr": "⥹",
		"subset": "⊂",
		"subseteq": "⊆",
		"subseteqq": "⫅",
		"subsetneq": "⊊",
		"subsetneqq": "⫋",
		"subsim": "⫇",
		"subsub": "⫕",
		"subsup": "⫓",
		"succ": "≻",
		"succapprox": "⪸",
		"succcurlyeq": "≽",
		"succeq": "⪰",
		"succnapprox": "⪺",
		"succneqq": "⪶",
		"succnsim": "⋩",
		"succsim": "≿",
		"sum": "∑",
		"sung": "♪",
		"sup": "⊃",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"supE": "⫆",
		"supdot": "⪾",
		"supdsub": "⫘",
		"supe": "⊇",
		"supedot": "⫄",
		"suphsol": "⟉",
		"suphsub": "⫗",
		"suplarr": "⥻",
		"supmult": "⫂",
		"supnE": "⫌",
		"supne": "⊋",
		"supplus": "⫀",
		"supset": "⊃",
		"supseteq": "⊇",
		"supseteqq": "⫆",
		"supsetneq": "⊋",
		"supsetneqq": "⫌",
		"supsim": "⫈",
		"supsub": "⫔",
		"supsup": "⫖",
		"swArr": "⇙",
		"swarhk": "⤦",
		"swarr": "↙",
		"swarrow": "↙",
		"swnwar": "⤪",
		"szli": "ß",
		"szlig": "ß",
		"target": "⌖",
		"tau": "τ",
		"tbrk": "⎴",
		"tcaron": "ť",
		"tcedil": "ţ",
		"tcy": "т",
		"tdot": "⃛",
		"telrec": "⌕",
		"tfr": "𝔱",
		"there4": "∴",
		"therefore": "∴",
		"theta": "θ",
		"thetasym": "ϑ",
		"thetav": "ϑ",
		"thickapprox": "≈",
		"thicksim": "∼",
		"thinsp": " ",
		"thkap": "≈",
		"thksim": "∼",
		"thor": "þ",
		"thorn": "þ",
		"tilde": "˜",
		"time": "×",
		"times": "×",
		"timesb": "⊠",
		"timesbar": "⨱",
		"timesd": "⨰",
		"tint": "∭",
		"toea": "⤨",
		"top": "⊤",
		"topbot": "⌶",
		"topcir": "⫱",
		"topf": "𝕥",
		"topfork": "⫚",
		"tosa": "⤩",
		"tprime": "‴",
		"trade": "™",
		"triangle": "▵",
		"triangledown": "▿",
		"triangleleft": "◃",
		"trianglelefteq": "⊴",
		"triangleq": "≜",
		"triangleright": "▹",
		"trianglerighteq": "⊵",
		"tridot": "◬",
		"trie": "≜",
		"triminus": "⨺",
		"triplus": "⨹",
		"trisb": "⧍",
		"tritime": "⨻",
		"trpezium": "⏢",
		"tscr": "𝓉",
		"tscy": "ц",
		"tshcy": "ћ",
		"tstrok": "ŧ",
		"twixt": "≬",
		"twoheadleftarrow": "↞",
		"twoheadrightarrow": "↠",
		"uArr": "⇑",
		"uHar": "⥣",
		"uacut": "ú",
		"uacute": "ú",
		"uarr": "↑",
		"ubrcy": "ў",
		"ubreve": "ŭ",
		"ucir": "û",
		"ucirc": "û",
		"ucy": "у",
		"udarr": "⇅",
		"udblac": "ű",
		"udhar": "⥮",
		"ufisht": "⥾",
		"ufr": "𝔲",
		"ugrav": "ù",
		"ugrave": "ù",
		"uharl": "↿",
		"uharr": "↾",
		"uhblk": "▀",
		"ulcorn": "⌜",
		"ulcorner": "⌜",
		"ulcrop": "⌏",
		"ultri": "◸",
		"umacr": "ū",
		"um": "¨",
		"uml": "¨",
		"uogon": "ų",
		"uopf": "𝕦",
		"uparrow": "↑",
		"updownarrow": "↕",
		"upharpoonleft": "↿",
		"upharpoonright": "↾",
		"uplus": "⊎",
		"upsi": "υ",
		"upsih": "ϒ",
		"upsilon": "υ",
		"upuparrows": "⇈",
		"urcorn": "⌝",
		"urcorner": "⌝",
		"urcrop": "⌎",
		"uring": "ů",
		"urtri": "◹",
		"uscr": "𝓊",
		"utdot": "⋰",
		"utilde": "ũ",
		"utri": "▵",
		"utrif": "▴",
		"uuarr": "⇈",
		"uum": "ü",
		"uuml": "ü",
		"uwangle": "⦧",
		"vArr": "⇕",
		"vBar": "⫨",
		"vBarv": "⫩",
		"vDash": "⊨",
		"vangrt": "⦜",
		"varepsilon": "ϵ",
		"varkappa": "ϰ",
		"varnothing": "∅",
		"varphi": "ϕ",
		"varpi": "ϖ",
		"varpropto": "∝",
		"varr": "↕",
		"varrho": "ϱ",
		"varsigma": "ς",
		"varsubsetneq": "⊊︀",
		"varsubsetneqq": "⫋︀",
		"varsupsetneq": "⊋︀",
		"varsupsetneqq": "⫌︀",
		"vartheta": "ϑ",
		"vartriangleleft": "⊲",
		"vartriangleright": "⊳",
		"vcy": "в",
		"vdash": "⊢",
		"vee": "∨",
		"veebar": "⊻",
		"veeeq": "≚",
		"vellip": "⋮",
		"verbar": "|",
		"vert": "|",
		"vfr": "𝔳",
		"vltri": "⊲",
		"vnsub": "⊂⃒",
		"vnsup": "⊃⃒",
		"vopf": "𝕧",
		"vprop": "∝",
		"vrtri": "⊳",
		"vscr": "𝓋",
		"vsubnE": "⫋︀",
		"vsubne": "⊊︀",
		"vsupnE": "⫌︀",
		"vsupne": "⊋︀",
		"vzigzag": "⦚",
		"wcirc": "ŵ",
		"wedbar": "⩟",
		"wedge": "∧",
		"wedgeq": "≙",
		"weierp": "℘",
		"wfr": "𝔴",
		"wopf": "𝕨",
		"wp": "℘",
		"wr": "≀",
		"wreath": "≀",
		"wscr": "𝓌",
		"xcap": "⋂",
		"xcirc": "◯",
		"xcup": "⋃",
		"xdtri": "▽",
		"xfr": "𝔵",
		"xhArr": "⟺",
		"xharr": "⟷",
		"xi": "ξ",
		"xlArr": "⟸",
		"xlarr": "⟵",
		"xmap": "⟼",
		"xnis": "⋻",
		"xodot": "⨀",
		"xopf": "𝕩",
		"xoplus": "⨁",
		"xotime": "⨂",
		"xrArr": "⟹",
		"xrarr": "⟶",
		"xscr": "𝓍",
		"xsqcup": "⨆",
		"xuplus": "⨄",
		"xutri": "△",
		"xvee": "⋁",
		"xwedge": "⋀",
		"yacut": "ý",
		"yacute": "ý",
		"yacy": "я",
		"ycirc": "ŷ",
		"ycy": "ы",
		"ye": "¥",
		"yen": "¥",
		"yfr": "𝔶",
		"yicy": "ї",
		"yopf": "𝕪",
		"yscr": "𝓎",
		"yucy": "ю",
		"yum": "ÿ",
		"yuml": "ÿ",
		"zacute": "ź",
		"zcaron": "ž",
		"zcy": "з",
		"zdot": "ż",
		"zeetrf": "ℨ",
		"zeta": "ζ",
		"zfr": "𝔷",
		"zhcy": "ж",
		"zigrarr": "⇝",
		"zopf": "𝕫",
		"zscr": "𝓏",
		"zwj": "‍",
		"zwnj": "‌"
	};

/***/ },

/***/ 856:
/***/ function(module, exports) {

	module.exports = {
		"AElig": "Æ",
		"AMP": "&",
		"Aacute": "Á",
		"Acirc": "Â",
		"Agrave": "À",
		"Aring": "Å",
		"Atilde": "Ã",
		"Auml": "Ä",
		"COPY": "©",
		"Ccedil": "Ç",
		"ETH": "Ð",
		"Eacute": "É",
		"Ecirc": "Ê",
		"Egrave": "È",
		"Euml": "Ë",
		"GT": ">",
		"Iacute": "Í",
		"Icirc": "Î",
		"Igrave": "Ì",
		"Iuml": "Ï",
		"LT": "<",
		"Ntilde": "Ñ",
		"Oacute": "Ó",
		"Ocirc": "Ô",
		"Ograve": "Ò",
		"Oslash": "Ø",
		"Otilde": "Õ",
		"Ouml": "Ö",
		"QUOT": "\"",
		"REG": "®",
		"THORN": "Þ",
		"Uacute": "Ú",
		"Ucirc": "Û",
		"Ugrave": "Ù",
		"Uuml": "Ü",
		"Yacute": "Ý",
		"aacute": "á",
		"acirc": "â",
		"acute": "´",
		"aelig": "æ",
		"agrave": "à",
		"amp": "&",
		"aring": "å",
		"atilde": "ã",
		"auml": "ä",
		"brvbar": "¦",
		"ccedil": "ç",
		"cedil": "¸",
		"cent": "¢",
		"copy": "©",
		"curren": "¤",
		"deg": "°",
		"divide": "÷",
		"eacute": "é",
		"ecirc": "ê",
		"egrave": "è",
		"eth": "ð",
		"euml": "ë",
		"frac12": "½",
		"frac14": "¼",
		"frac34": "¾",
		"gt": ">",
		"iacute": "í",
		"icirc": "î",
		"iexcl": "¡",
		"igrave": "ì",
		"iquest": "¿",
		"iuml": "ï",
		"laquo": "«",
		"lt": "<",
		"macr": "¯",
		"micro": "µ",
		"middot": "·",
		"nbsp": " ",
		"not": "¬",
		"ntilde": "ñ",
		"oacute": "ó",
		"ocirc": "ô",
		"ograve": "ò",
		"ordf": "ª",
		"ordm": "º",
		"oslash": "ø",
		"otilde": "õ",
		"ouml": "ö",
		"para": "¶",
		"plusmn": "±",
		"pound": "£",
		"quot": "\"",
		"raquo": "»",
		"reg": "®",
		"sect": "§",
		"shy": "­",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"szlig": "ß",
		"thorn": "þ",
		"times": "×",
		"uacute": "ú",
		"ucirc": "û",
		"ugrave": "ù",
		"uml": "¨",
		"uuml": "ü",
		"yacute": "ý",
		"yen": "¥",
		"yuml": "ÿ"
	};

/***/ },

/***/ 857:
/***/ function(module, exports) {

	module.exports = {
		"0": "�",
		"128": "€",
		"130": "‚",
		"131": "ƒ",
		"132": "„",
		"133": "…",
		"134": "†",
		"135": "‡",
		"136": "ˆ",
		"137": "‰",
		"138": "Š",
		"139": "‹",
		"140": "Œ",
		"142": "Ž",
		"145": "‘",
		"146": "’",
		"147": "“",
		"148": "”",
		"149": "•",
		"150": "–",
		"151": "—",
		"152": "˜",
		"153": "™",
		"154": "š",
		"155": "›",
		"156": "œ",
		"158": "ž",
		"159": "Ÿ"
	};

/***/ },

/***/ 858:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module is-decimal
	 * @fileoverview Check if a character is decimal.
	 */
	
	'use strict';
	
	/* eslint-env commonjs */
	
	/* Expose. */
	module.exports = decimal;
	
	/**
	 * Check whether the given character code, or the character
	 * code at the first character, is decimal.
	 *
	 * @param {string|number} character
	 * @return {boolean} - Whether `character` is decimal.
	 */
	function decimal(character) {
	  var code = typeof character === 'string' ?
	    character.charCodeAt(0) : character;
	
	  return code >= 48 && code <= 57; /* 0-9 */
	}


/***/ },

/***/ 859:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module is-hexadecimal
	 * @fileoverview Check if a character is hexadecimal.
	 */
	
	'use strict';
	
	/* eslint-env commonjs */
	
	/* Expose. */
	module.exports = hexadecimal;
	
	/**
	 * Check whether the given character code, or the character
	 * code at the first character, is hexadecimal.
	 *
	 * @param {string|number} character
	 * @return {boolean} - Whether `character` is hexadecimal.
	 */
	function hexadecimal(character) {
	  var code = typeof character === 'string' ?
	    character.charCodeAt(0) : character;
	
	  return (code >= 97 /* a */ && code <= 102 /* z */) ||
	    (code >= 65 /* A */ && code <= 70 /* Z */) ||
	    (code >= 48 /* A */ && code <= 57 /* Z */);
	}


/***/ },

/***/ 860:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module is-alphanumerical
	 * @fileoverview Check if a character is alphanumerical.
	 */
	
	'use strict';
	
	/* eslint-env commonjs */
	
	/* Dependencies. */
	var alphabetical = __webpack_require__(861);
	var decimal = __webpack_require__(858);
	
	/* Expose. */
	module.exports = alphanumerical;
	
	/**
	 * Check whether the given character code, or the character
	 * code at the first character, is alphanumerical.
	 *
	 * @param {string|number} character
	 * @return {boolean} - Whether `character` is alphanumerical.
	 */
	function alphanumerical(character) {
	  return alphabetical(character) || decimal(character);
	}


/***/ },

/***/ 861:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module is-alphabetical
	 * @fileoverview Check if a character is alphabetical.
	 */
	
	'use strict';
	
	/* eslint-env commonjs */
	
	/* Expose. */
	module.exports = alphabetical;
	
	/**
	 * Check whether the given character code, or the character
	 * code at the first character, is alphabetical.
	 *
	 * @param {string|number} character
	 * @return {boolean} - Whether `character` is alphabetical.
	 */
	function alphabetical(character) {
	  var code = typeof character === 'string' ?
	    character.charCodeAt(0) : character;
	
	  return (code >= 97 && code <= 122) || /* a-z */
	    (code >= 65 && code <= 90); /* A-Z */
	}


/***/ },

/***/ 862:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenizer
	 * @fileoverview Markdown tokenizer.
	 */
	
	'use strict';
	
	module.exports = factory;
	
	var MERGEABLE_NODES = {
	  text: mergeText,
	  blockquote: mergeBlockquote
	};
	
	/* Check whether a node is mergeable with adjacent nodes. */
	function mergeable(node) {
	  var start;
	  var end;
	
	  if (node.type !== 'text' || !node.position) {
	    return true;
	  }
	
	  start = node.position.start;
	  end = node.position.end;
	
	  /* Only merge nodes which occupy the same size as their
	   * `value`. */
	  return start.line !== end.line ||
	      end.column - start.column === node.value.length;
	}
	
	/* Merge two text nodes: `node` into `prev`. */
	function mergeText(prev, node) {
	  prev.value += node.value;
	
	  return prev;
	}
	
	/* Merge two blockquotes: `node` into `prev`, unless in
	 * CommonMark mode. */
	function mergeBlockquote(prev, node) {
	  if (this.options.commonmark) {
	    return node;
	  }
	
	  prev.children = prev.children.concat(node.children);
	
	  return prev;
	}
	
	/* Construct a tokenizer.  This creates both
	 * `tokenizeInline` and `tokenizeBlock`. */
	function factory(type) {
	  return tokenize;
	
	  /* Tokenizer for a bound `type`. */
	  function tokenize(value, location) {
	    var self = this;
	    var offset = self.offset;
	    var tokens = [];
	    var methods = self[type + 'Methods'];
	    var tokenizers = self[type + 'Tokenizers'];
	    var line = location.line;
	    var column = location.column;
	    var index;
	    var length;
	    var method;
	    var name;
	    var matched;
	    var valueLength;
	
	    /* Trim white space only lines. */
	    if (!value) {
	      return tokens;
	    }
	
	    /* Expose on `eat`. */
	    eat.now = now;
	    eat.file = self.file;
	
	    /* Sync initial offset. */
	    updatePosition('');
	
	    /* Iterate over `value`, and iterate over all
	     * tokenizers.  When one eats something, re-iterate
	     * with the remaining value.  If no tokenizer eats,
	     * something failed (should not happen) and an
	     * exception is thrown. */
	    while (value) {
	      index = -1;
	      length = methods.length;
	      matched = false;
	
	      while (++index < length) {
	        name = methods[index];
	        method = tokenizers[name];
	
	        if (
	          method &&
	          (!method.onlyAtStart || self.atStart) &&
	          (!method.notInList || !self.inList) &&
	          (!method.notInBlock || !self.inBlock) &&
	          (!method.notInLink || !self.inLink)
	        ) {
	          valueLength = value.length;
	
	          method.apply(self, [eat, value]);
	
	          matched = valueLength !== value.length;
	
	          if (matched) {
	            break;
	          }
	        }
	      }
	
	      /* istanbul ignore if */
	      if (!matched) {
	        self.file.fail(new Error('Infinite loop'), eat.now());
	      }
	    }
	
	    self.eof = now();
	
	    return tokens;
	
	    /**
	     * Update line, column, and offset based on
	     * `value`.
	     *
	     * @example
	     *   updatePosition('foo');
	     *
	     * @param {string} subvalue - Subvalue to eat.
	     */
	    function updatePosition(subvalue) {
	      var lastIndex = -1;
	      var index = subvalue.indexOf('\n');
	
	      while (index !== -1) {
	        line++;
	        lastIndex = index;
	        index = subvalue.indexOf('\n', index + 1);
	      }
	
	      if (lastIndex === -1) {
	        column += subvalue.length;
	      } else {
	        column = subvalue.length - lastIndex;
	      }
	
	      if (line in offset) {
	        if (lastIndex !== -1) {
	          column += offset[line];
	        } else if (column <= offset[line]) {
	          column = offset[line] + 1;
	        }
	      }
	    }
	
	    /**
	     * Get offset.  Called before the first character is
	     * eaten to retrieve the range's offsets.
	     *
	     * @return {Function} - `done`, to be called when
	     *   the last character is eaten.
	     */
	    function getOffset() {
	      var indentation = [];
	      var pos = line + 1;
	
	      /**
	       * Done.  Called when the last character is
	       * eaten to retrieve the range’s offsets.
	       *
	       * @return {Array.<number>} - Offset.
	       */
	      return function () {
	        var last = line + 1;
	
	        while (pos < last) {
	          indentation.push((offset[pos] || 0) + 1);
	
	          pos++;
	        }
	
	        return indentation;
	      };
	    }
	
	    /**
	     * Get the current position.
	     *
	     * @example
	     *   position = now(); // {line: 1, column: 1, offset: 0}
	     *
	     * @return {Object} - Current Position.
	     */
	    function now() {
	      var pos = {line: line, column: column};
	
	      pos.offset = self.toOffset(pos);
	
	      return pos;
	    }
	
	    /**
	     * Store position information for a node.
	     *
	     * @example
	     *   start = now();
	     *   updatePosition('foo');
	     *   location = new Position(start);
	     *   // {
	     *   //   start: {line: 1, column: 1, offset: 0},
	     *   //   end: {line: 1, column: 3, offset: 2}
	     *   // }
	     *
	     * @param {Object} start - Starting position.
	     */
	    function Position(start) {
	      this.start = start;
	      this.end = now();
	    }
	
	    /**
	     * Throw when a value is incorrectly eaten.
	     * This shouldn’t happen but will throw on new,
	     * incorrect rules.
	     *
	     * @example
	     *   // When the current value is set to `foo bar`.
	     *   validateEat('foo');
	     *   eat('foo');
	     *
	     *   validateEat('bar');
	     *   // throws, because the space is not eaten.
	     *
	     * @param {string} subvalue - Value to be eaten.
	     * @throws {Error} - When `subvalue` cannot be eaten.
	     */
	    function validateEat(subvalue) {
	      /* istanbul ignore if */
	      if (value.substring(0, subvalue.length) !== subvalue) {
	        /* Capture stack-trace. */
	        self.file.fail(
	          new Error(
	            'Incorrectly eaten value: please report this ' +
	            'warning on http://git.io/vg5Ft'
	          ),
	          now()
	        );
	      }
	    }
	
	    /**
	     * Mark position and patch `node.position`.
	     *
	     * @example
	     *   var update = position();
	     *   updatePosition('foo');
	     *   update({});
	     *   // {
	     *   //   position: {
	     *   //     start: {line: 1, column: 1, offset: 0},
	     *   //     end: {line: 1, column: 3, offset: 2}
	     *   //   }
	     *   // }
	     *
	     * @returns {Function} - Updater.
	     */
	    function position() {
	      var before = now();
	
	      return update;
	
	      /**
	       * Add the position to a node.
	       *
	       * @example
	       *   update({type: 'text', value: 'foo'});
	       *
	       * @param {Node} node - Node to attach position
	       *   on.
	       * @param {Array} [indent] - Indentation for
	       *   `node`.
	       * @return {Node} - `node`.
	       */
	      function update(node, indent) {
	        var prev = node.position;
	        var start = prev ? prev.start : before;
	        var combined = [];
	        var n = prev && prev.end.line;
	        var l = before.line;
	
	        node.position = new Position(start);
	
	        /* If there was already a `position`, this
	         * node was merged.  Fixing `start` wasn’t
	         * hard, but the indent is different.
	         * Especially because some information, the
	         * indent between `n` and `l` wasn’t
	         * tracked.  Luckily, that space is
	         * (should be?) empty, so we can safely
	         * check for it now. */
	        if (prev && indent && prev.indent) {
	          combined = prev.indent;
	
	          if (n < l) {
	            while (++n < l) {
	              combined.push((offset[n] || 0) + 1);
	            }
	
	            combined.push(before.column);
	          }
	
	          indent = combined.concat(indent);
	        }
	
	        node.position.indent = indent || [];
	
	        return node;
	      }
	    }
	
	    /**
	     * Add `node` to `parent`s children or to `tokens`.
	     * Performs merges where possible.
	     *
	     * @example
	     *   add({});
	     *
	     *   add({}, {children: []});
	     *
	     * @param {Object} node - Node to add.
	     * @param {Object} [parent] - Parent to insert into.
	     * @return {Object} - Added or merged into node.
	     */
	    function add(node, parent) {
	      var children = parent ? parent.children : tokens;
	      var prev = children[children.length - 1];
	
	      if (
	        prev &&
	        node.type === prev.type &&
	        node.type in MERGEABLE_NODES &&
	        mergeable(prev) &&
	        mergeable(node)
	      ) {
	        node = MERGEABLE_NODES[node.type].call(self, prev, node);
	      }
	
	      if (node !== prev) {
	        children.push(node);
	      }
	
	      if (self.atStart && tokens.length !== 0) {
	        self.exitStart();
	      }
	
	      return node;
	    }
	
	    /**
	     * Remove `subvalue` from `value`.
	     * `subvalue` must be at the start of `value`.
	     *
	     * @example
	     *   eat('foo')({type: 'text', value: 'foo'});
	     *
	     * @param {string} subvalue - Removed from `value`,
	     *   and passed to `updatePosition`.
	     * @return {Function} - Wrapper around `add`, which
	     *   also adds `position` to node.
	     */
	    function eat(subvalue) {
	      var indent = getOffset();
	      var pos = position();
	      var current = now();
	
	      validateEat(subvalue);
	
	      apply.reset = reset;
	      apply.test = reset.test = test;
	
	      value = value.substring(subvalue.length);
	
	      updatePosition(subvalue);
	
	      indent = indent();
	
	      return apply;
	
	      /**
	       * Add the given arguments, add `position` to
	       * the returned node, and return the node.
	       *
	       * @param {Object} node - Node to add.
	       * @param {Object} [parent] - Node to insert into.
	       * @return {Node} - Added node.
	       */
	      function apply(node, parent) {
	        return pos(add(pos(node), parent), indent);
	      }
	
	      /**
	       * Functions just like apply, but resets the
	       * content:  the line and column are reversed,
	       * and the eaten value is re-added.
	       *
	       * This is useful for nodes with a single
	       * type of content, such as lists and tables.
	       *
	       * See `apply` above for what parameters are
	       * expected.
	       *
	       * @return {Node} - Added node.
	       */
	      function reset() {
	        var node = apply.apply(null, arguments);
	
	        line = current.line;
	        column = current.column;
	        value = subvalue + value;
	
	        return node;
	      }
	
	      /**
	       * Test the position, after eating, and reverse
	       * to a not-eaten state.
	       *
	       * @return {Position} - Position after eating `subvalue`.
	       */
	      function test() {
	        var result = pos({});
	
	        line = current.line;
	        column = current.column;
	        value = subvalue + value;
	
	        return result.position;
	      }
	    }
	  }
	}


/***/ },

/***/ 863:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse
	 * @fileoverview Markdown parser.
	 */
	
	'use strict';
	
	var xtend = __webpack_require__(847);
	var escapes = __webpack_require__(864);
	var defaults = __webpack_require__(865);
	
	module.exports = setOptions;
	
	/* Set options. */
	function setOptions(options) {
	  var self = this;
	  var current = self.options;
	  var key;
	  var value;
	
	  if (options == null) {
	    options = {};
	  } else if (typeof options === 'object') {
	    options = xtend(options);
	  } else {
	    throw new Error(
	      'Invalid value `' + options + '` ' +
	      'for setting `options`'
	    );
	  }
	
	  for (key in defaults) {
	    value = options[key];
	
	    if (value == null) {
	      value = current[key];
	    }
	
	    if (
	      (key !== 'blocks' && typeof value !== 'boolean') ||
	      (key === 'blocks' && typeof value !== 'object')
	    ) {
	      throw new Error(
	        'Invalid value `' + value + '` ' +
	        'for setting `options.' + key + '`'
	      );
	    }
	
	    options[key] = value;
	  }
	
	  self.options = options;
	  self.escape = escapes(options);
	
	  return self;
	}


/***/ },

/***/ 864:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module markdown-escapes
	 * @fileoverview List of escapable characters in markdown.
	 */
	
	'use strict';
	
	/* eslint-env commonjs */
	
	/* Expose. */
	module.exports = escapes;
	
	/* Characters. */
	var defaults = [
	  '\\',
	  '`',
	  '*',
	  '{',
	  '}',
	  '[',
	  ']',
	  '(',
	  ')',
	  '#',
	  '+',
	  '-',
	  '.',
	  '!',
	  '_',
	  '>'
	];
	
	var gfm = defaults.concat(['~', '|']);
	
	var commonmark = gfm.concat([
	  '\n',
	  '"',
	  '$',
	  '%',
	  '&',
	  '\'',
	  ',',
	  '/',
	  ':',
	  ';',
	  '<',
	  '=',
	  '?',
	  '@',
	  '^'
	]);
	
	/* Expose characters. */
	escapes.default = defaults;
	escapes.gfm = gfm;
	escapes.commonmark = commonmark;
	
	/**
	 * Get markdown escapes.
	 *
	 * @param {Object?} [options] - Configuration.
	 * @return {Array.<string>} - Escapes.
	 */
	function escapes(options) {
	  var settings = options || {};
	
	  if (settings.commonmark) {
	    return commonmark;
	  }
	
	  return settings.gfm ? gfm : defaults;
	}


/***/ },

/***/ 865:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:defaults
	 * @fileoverview Default options for `parse`.
	 */
	
	'use strict';
	
	/* Expose. */
	module.exports = {
	  position: true,
	  gfm: true,
	  yaml: true,
	  commonmark: false,
	  footnotes: false,
	  pedantic: false,
	  blocks: __webpack_require__(866),
	  breaks: false
	};


/***/ },

/***/ 866:
/***/ function(module, exports) {

	module.exports = [
		"address",
		"article",
		"aside",
		"base",
		"basefont",
		"blockquote",
		"body",
		"caption",
		"center",
		"col",
		"colgroup",
		"dd",
		"details",
		"dialog",
		"dir",
		"div",
		"dl",
		"dt",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"frame",
		"frameset",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"head",
		"header",
		"hgroup",
		"hr",
		"html",
		"iframe",
		"legend",
		"li",
		"link",
		"main",
		"menu",
		"menuitem",
		"meta",
		"nav",
		"noframes",
		"ol",
		"optgroup",
		"option",
		"p",
		"param",
		"pre",
		"section",
		"source",
		"title",
		"summary",
		"table",
		"tbody",
		"td",
		"tfoot",
		"th",
		"thead",
		"title",
		"tr",
		"track",
		"ul"
	];

/***/ },

/***/ 867:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:parse
	 * @fileoverview Parse the document
	 */
	
	'use strict';
	
	var xtend = __webpack_require__(847);
	var removePosition = __webpack_require__(868);
	
	module.exports = parse;
	
	var C_NEWLINE = '\n';
	var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;
	
	/* Parse the bound file. */
	function parse() {
	  var self = this;
	  var value = String(self.file);
	  var start = {line: 1, column: 1, offset: 0};
	  var content = xtend(start);
	  var node;
	
	  /* Clean non-unix newlines: `\r\n` and `\r` are all
	   * changed to `\n`.  This should not affect positional
	   * information. */
	  value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);
	
	  if (value.charCodeAt(0) === 0xFEFF) {
	    value = value.slice(1);
	
	    content.column++;
	    content.offset++;
	  }
	
	  node = {
	    type: 'root',
	    children: self.tokenizeBlock(value, content),
	    position: {
	      start: start,
	      end: self.eof || xtend(start)
	    }
	  };
	
	  if (!self.options.position) {
	    removePosition(node, true);
	  }
	
	  return node;
	}


/***/ },

/***/ 868:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module unist:util:remove-position
	 * @fileoverview Remove `position`s from a unist tree.
	 */
	
	'use strict';
	
	/* eslint-env commonjs */
	
	/* Dependencies. */
	var visit = __webpack_require__(869);
	
	/* Expose. */
	module.exports = removePosition;
	
	/**
	 * Remove `position`s from `tree`.
	 *
	 * @param {Node} tree - Node.
	 * @return {Node} - Node without `position`s.
	 */
	function removePosition(node, force) {
	  visit(node, force ? hard : soft);
	  return node;
	}
	
	/**
	 * Delete `position`.
	 */
	function hard(node) {
	  delete node.position;
	}
	
	/**
	 * Remove `position` softly.
	 */
	function soft(node) {
	  node.position = undefined;
	}


/***/ },

/***/ 869:
/***/ function(module, exports) {

	'use strict';
	
	/* Expose. */
	module.exports = visit;
	
	/* Visit. */
	function visit(tree, type, visitor, reverse) {
	  if (typeof type === 'function') {
	    reverse = visitor;
	    visitor = type;
	    type = null;
	  }
	
	  one(tree);
	
	  return;
	
	  /* Visit a single node. */
	  function one(node, index, parent) {
	    var result;
	
	    index = index || (parent ? 0 : null);
	
	    if (!type || node.type === type) {
	      result = visitor(node, index, parent || null);
	    }
	
	    if (node.children && result !== false) {
	      return all(node.children, node);
	    }
	
	    return result;
	  }
	
	  /* Visit children in `parent`. */
	  function all(children, parent) {
	    var step = reverse ? -1 : 1;
	    var max = children.length;
	    var min = -1;
	    var index = (reverse ? max : min) + step;
	    var child;
	
	    while (index > min && index < max) {
	      child = children[index];
	
	      if (child && one(child, index, parent) === false) {
	        return false;
	      }
	
	      index += step;
	    }
	
	    return true;
	  }
	}


/***/ },

/***/ 870:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:yaml
	 * @fileoverview Tokenise YAML.
	 */
	
	'use strict';
	
	module.exports = yaml;
	yaml.onlyAtStart = true;
	
	var FENCE = '---';
	var C_DASH = '-';
	var C_NEWLINE = '\n';
	
	/* Tokenise YAML. */
	function yaml(eat, value, silent) {
	  var self = this;
	  var subvalue;
	  var content;
	  var index;
	  var length;
	  var character;
	  var queue;
	
	  if (
	    !self.options.yaml ||
	    value.charAt(0) !== C_DASH ||
	    value.charAt(1) !== C_DASH ||
	    value.charAt(2) !== C_DASH ||
	    value.charAt(3) !== C_NEWLINE
	  ) {
	    return;
	  }
	
	  subvalue = FENCE + C_NEWLINE;
	  content = queue = '';
	  index = 3;
	  length = value.length;
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (
	      character === C_DASH &&
	      (queue || !content) &&
	      value.charAt(index + 1) === C_DASH &&
	      value.charAt(index + 2) === C_DASH
	    ) {
	      /* istanbul ignore if - never used (yet) */
	      if (silent) {
	        return true;
	      }
	
	      subvalue += queue + FENCE;
	
	      return eat(subvalue)({
	        type: 'yaml',
	        value: content
	      });
	    }
	
	    if (character === C_NEWLINE) {
	      queue += character;
	    } else {
	      subvalue += queue + character;
	      content += queue + character;
	      queue = '';
	    }
	  }
	}


/***/ },

/***/ 871:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:newline
	 * @fileoverview Tokenise a newline.
	 */
	
	'use strict';
	
	var whitespace = __webpack_require__(872);
	
	module.exports = newline;
	
	/* Tokenise newline. */
	function newline(eat, value, silent) {
	  var character = value.charAt(0);
	  var length;
	  var subvalue;
	  var queue;
	  var index;
	
	  if (character !== '\n') {
	    return;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  index = 1;
	  length = value.length;
	  subvalue = character;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (!whitespace(character)) {
	      break;
	    }
	
	    queue += character;
	
	    if (character === '\n') {
	      subvalue += queue;
	      queue = '';
	    }
	
	    index++;
	  }
	
	  eat(subvalue);
	}


/***/ },

/***/ 872:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module is-whitespace-character
	 * @fileoverview Check if a character is a whitespace character.
	 */
	
	'use strict';
	
	/* eslint-env commonjs */
	
	/* Expose. */
	module.exports = whitespace;
	
	/* Methods. */
	var fromCode = String.fromCharCode;
	
	/* Constants. */
	var re = /\s/;
	
	/**
	 * Check whether the given character code, or the character
	 * code at the first character, is a whitespace character.
	 *
	 * @param {string|number} character
	 * @return {boolean} - Whether `character` is a whitespaces character.
	 */
	function whitespace(character) {
	  return re.test(
	    typeof character === 'number' ? fromCode(character) : character.charAt(0)
	  );
	}


/***/ },

/***/ 873:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:code-indented
	 * @fileoverview Tokenise indented code.
	 */
	
	'use strict';
	
	var repeat = __webpack_require__(874);
	var trim = __webpack_require__(875);
	
	module.exports = indentedCode;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	
	var CODE_INDENT_COUNT = 4;
	var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);
	
	/* Tokenise indented code. */
	function indentedCode(eat, value, silent) {
	  var index = -1;
	  var length = value.length;
	  var subvalue = '';
	  var content = '';
	  var subvalueQueue = '';
	  var contentQueue = '';
	  var character;
	  var blankQueue;
	  var indent;
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (indent) {
	      indent = false;
	
	      subvalue += subvalueQueue;
	      content += contentQueue;
	      subvalueQueue = contentQueue = '';
	
	      if (character === C_NEWLINE) {
	        subvalueQueue = contentQueue = character;
	      } else {
	        subvalue += character;
	        content += character;
	
	        while (++index < length) {
	          character = value.charAt(index);
	
	          if (!character || character === C_NEWLINE) {
	            contentQueue = subvalueQueue = character;
	            break;
	          }
	
	          subvalue += character;
	          content += character;
	        }
	      }
	    } else if (
	      character === C_SPACE &&
	      value.charAt(index + 1) === character &&
	      value.charAt(index + 2) === character &&
	      value.charAt(index + 3) === character
	    ) {
	      subvalueQueue += CODE_INDENT;
	      index += 3;
	      indent = true;
	    } else if (character === C_TAB) {
	      subvalueQueue += character;
	      indent = true;
	    } else {
	      blankQueue = '';
	
	      while (character === C_TAB || character === C_SPACE) {
	        blankQueue += character;
	        character = value.charAt(++index);
	      }
	
	      if (character !== C_NEWLINE) {
	        break;
	      }
	
	      subvalueQueue += blankQueue + character;
	      contentQueue += character;
	    }
	  }
	
	  if (content) {
	    if (silent) {
	      return true;
	    }
	
	    return eat(subvalue)({
	      type: 'code',
	      lang: null,
	      value: trim(content)
	    });
	  }
	}


/***/ },

/***/ 874:
/***/ function(module, exports) {

	/*!
	 * repeat-string <https://github.com/jonschlinkert/repeat-string>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Results cache
	 */
	
	var res = '';
	var cache;
	
	/**
	 * Expose `repeat`
	 */
	
	module.exports = repeat;
	
	/**
	 * Repeat the given `string` the specified `number`
	 * of times.
	 *
	 * **Example:**
	 *
	 * ```js
	 * var repeat = require('repeat-string');
	 * repeat('A', 5);
	 * //=> AAAAA
	 * ```
	 *
	 * @param {String} `string` The string to repeat
	 * @param {Number} `number` The number of times to repeat the string
	 * @return {String} Repeated string
	 * @api public
	 */
	
	function repeat(str, num) {
	  if (typeof str !== 'string') {
	    throw new TypeError('expected a string');
	  }
	
	  // cover common, quick use cases
	  if (num === 1) return str;
	  if (num === 2) return str + str;
	
	  var max = str.length * num;
	  if (cache !== str || typeof cache === 'undefined') {
	    cache = str;
	    res = '';
	  } else if (res.length >= max) {
	    return res.substr(0, max);
	  }
	
	  while (max > res.length && num > 1) {
	    if (num & 1) {
	      res += str;
	    }
	
	    num >>= 1;
	    str += str;
	  }
	
	  res += str;
	  res = res.substr(0, max);
	  return res;
	}


/***/ },

/***/ 875:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = trimTrailingLines;
	
	var line = '\n';
	
	/* Remove final newline characters from `value`. */
	function trimTrailingLines(value) {
	  var val = String(value);
	  var index = val.length;
	
	  while (val.charAt(--index) === line) { /* empty */ }
	
	  return val.slice(0, index + 1);
	}


/***/ },

/***/ 876:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:code-fenced
	 * @fileoverview Tokenise fenced code.
	 */
	
	'use strict';
	
	var trim = __webpack_require__(875);
	
	module.exports = fencedCode;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_TILDE = '~';
	var C_TICK = '`';
	
	var MIN_FENCE_COUNT = 3;
	var CODE_INDENT_COUNT = 4;
	
	/* Tokenise fenced code. */
	function fencedCode(eat, value, silent) {
	  var self = this;
	  var settings = self.options;
	  var length = value.length + 1;
	  var index = 0;
	  var subvalue = '';
	  var fenceCount;
	  var marker;
	  var character;
	  var flag;
	  var queue;
	  var content;
	  var exdentedContent;
	  var closing;
	  var exdentedClosing;
	  var indent;
	  var now;
	
	  if (!settings.gfm) {
	    return;
	  }
	
	  /* Eat initial spacing. */
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  indent = index;
	
	  /* Eat the fence. */
	  character = value.charAt(index);
	
	  if (character !== C_TILDE && character !== C_TICK) {
	    return;
	  }
	
	  index++;
	  marker = character;
	  fenceCount = 1;
	  subvalue += character;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== marker) {
	      break;
	    }
	
	    subvalue += character;
	    fenceCount++;
	    index++;
	  }
	
	  if (fenceCount < MIN_FENCE_COUNT) {
	    return;
	  }
	
	  /* Eat spacing before flag. */
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  /* Eat flag. */
	  flag = queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (
	      character === C_NEWLINE ||
	      character === C_TILDE ||
	      character === C_TICK
	    ) {
	      break;
	    }
	
	    if (character === C_SPACE || character === C_TAB) {
	      queue += character;
	    } else {
	      flag += queue + character;
	      queue = '';
	    }
	
	    index++;
	  }
	
	  character = value.charAt(index);
	
	  if (character && character !== C_NEWLINE) {
	    return;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  now = eat.now();
	  now.column += subvalue.length;
	  now.offset += subvalue.length;
	
	  subvalue += flag;
	  flag = self.decode.raw(self.unescape(flag), now);
	
	  if (queue) {
	    subvalue += queue;
	  }
	
	  queue = closing = exdentedClosing = content = exdentedContent = '';
	
	  /* Eat content. */
	  while (index < length) {
	    character = value.charAt(index);
	    content += closing;
	    exdentedContent += exdentedClosing;
	    closing = exdentedClosing = '';
	
	    if (character !== C_NEWLINE) {
	      content += character;
	      exdentedClosing += character;
	      index++;
	      continue;
	    }
	
	    /* Add the newline to `subvalue` if its the first
	     * character.  Otherwise, add it to the `closing`
	     * queue. */
	    if (content) {
	      closing += character;
	      exdentedClosing += character;
	    } else {
	      subvalue += character;
	    }
	
	    queue = '';
	    index++;
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character !== C_SPACE) {
	        break;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    closing += queue;
	    exdentedClosing += queue.slice(indent);
	
	    if (queue.length >= CODE_INDENT_COUNT) {
	      continue;
	    }
	
	    queue = '';
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character !== marker) {
	        break;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    closing += queue;
	    exdentedClosing += queue;
	
	    if (queue.length < fenceCount) {
	      continue;
	    }
	
	    queue = '';
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character !== C_SPACE && character !== C_TAB) {
	        break;
	      }
	
	      closing += character;
	      exdentedClosing += character;
	      index++;
	    }
	
	    if (!character || character === C_NEWLINE) {
	      break;
	    }
	  }
	
	  subvalue += content + closing;
	
	  return eat(subvalue)({
	    type: 'code',
	    lang: flag || null,
	    value: trim(exdentedContent)
	  });
	}


/***/ },

/***/ 877:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:blockquote
	 * @fileoverview Tokenise blockquote.
	 */
	
	'use strict';
	
	var trim = __webpack_require__(878);
	var interrupt = __webpack_require__(879);
	
	module.exports = blockquote;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_GT = '>';
	
	/* Tokenise a blockquote. */
	function blockquote(eat, value, silent) {
	  var self = this;
	  var offsets = self.offset;
	  var tokenizers = self.blockTokenizers;
	  var interruptors = self.interruptBlockquote;
	  var now = eat.now();
	  var currentLine = now.line;
	  var length = value.length;
	  var values = [];
	  var contents = [];
	  var indents = [];
	  var add;
	  var index = 0;
	  var character;
	  var rest;
	  var nextIndex;
	  var content;
	  var line;
	  var startIndex;
	  var prefixed;
	  var exit;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      break;
	    }
	
	    index++;
	  }
	
	  if (value.charAt(index) !== C_GT) {
	    return;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  index = 0;
	
	  while (index < length) {
	    nextIndex = value.indexOf(C_NEWLINE, index);
	    startIndex = index;
	    prefixed = false;
	
	    if (nextIndex === -1) {
	      nextIndex = length;
	    }
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character !== C_SPACE && character !== C_TAB) {
	        break;
	      }
	
	      index++;
	    }
	
	    if (value.charAt(index) === C_GT) {
	      index++;
	      prefixed = true;
	
	      if (value.charAt(index) === C_SPACE) {
	        index++;
	      }
	    } else {
	      index = startIndex;
	    }
	
	    content = value.slice(index, nextIndex);
	
	    if (!prefixed && !trim(content)) {
	      index = startIndex;
	      break;
	    }
	
	    if (!prefixed) {
	      rest = value.slice(index);
	
	      /* Check if the following code contains a possible
	       * block. */
	      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
	        break;
	      }
	    }
	
	    line = startIndex === index ? content : value.slice(startIndex, nextIndex);
	
	    indents.push(index - startIndex);
	    values.push(line);
	    contents.push(content);
	
	    index = nextIndex + 1;
	  }
	
	  index = -1;
	  length = indents.length;
	  add = eat(values.join(C_NEWLINE));
	
	  while (++index < length) {
	    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
	    currentLine++;
	  }
	
	  exit = self.enterBlock();
	  contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
	  exit();
	
	  return add({
	    type: 'blockquote',
	    children: contents
	  });
	}


/***/ },

/***/ 878:
/***/ function(module, exports) {

	
	exports = module.exports = trim;
	
	function trim(str){
	  return str.replace(/^\s*|\s*$/g, '');
	}
	
	exports.left = function(str){
	  return str.replace(/^\s*/, '');
	};
	
	exports.right = function(str){
	  return str.replace(/\s*$/, '');
	};


/***/ },

/***/ 879:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:util:get-indentation
	 * @fileoverview Get indentation.
	 */
	
	'use strict';
	
	module.exports = interrupt;
	
	function interrupt(interruptors, tokenizers, ctx, params) {
	  var bools = ['pedantic', 'commonmark'];
	  var count = bools.length;
	  var length = interruptors.length;
	  var index = -1;
	  var interruptor;
	  var config;
	  var fn;
	  var offset;
	  var bool;
	  var ignore;
	
	  while (++index < length) {
	    interruptor = interruptors[index];
	    config = interruptor[1] || {};
	    fn = interruptor[0];
	    offset = -1;
	    ignore = false;
	
	    while (++offset < count) {
	      bool = bools[offset];
	
	      if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
	        ignore = true;
	        break;
	      }
	    }
	
	    if (ignore) {
	      continue;
	    }
	
	    if (tokenizers[fn].apply(ctx, params)) {
	      return true;
	    }
	  }
	
	  return false;
	}


/***/ },

/***/ 880:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:heading-atx
	 * @fileoverview Tokenise an ATX-style heading.
	 */
	
	'use strict';
	
	module.exports = atxHeading;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_HASH = '#';
	
	var MAX_ATX_COUNT = 6;
	
	/* Tokenise an ATX-style heading. */
	function atxHeading(eat, value, silent) {
	  var self = this;
	  var settings = self.options;
	  var length = value.length + 1;
	  var index = -1;
	  var now = eat.now();
	  var subvalue = '';
	  var content = '';
	  var character;
	  var queue;
	  var depth;
	
	  /* Eat initial spacing. */
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      index--;
	      break;
	    }
	
	    subvalue += character;
	  }
	
	  /* Eat hashes. */
	  depth = 0;
	
	  while (++index <= length) {
	    character = value.charAt(index);
	
	    if (character !== C_HASH) {
	      index--;
	      break;
	    }
	
	    subvalue += character;
	    depth++;
	  }
	
	  if (depth > MAX_ATX_COUNT) {
	    return;
	  }
	
	  if (
	    !depth ||
	    (!settings.pedantic && value.charAt(index + 1) === C_HASH)
	  ) {
	    return;
	  }
	
	  length = value.length + 1;
	
	  /* Eat intermediate white-space. */
	  queue = '';
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      index--;
	      break;
	    }
	
	    queue += character;
	  }
	
	  /* Exit when not in pedantic mode without spacing. */
	  if (
	    !settings.pedantic &&
	    queue.length === 0 &&
	    character &&
	    character !== C_NEWLINE
	  ) {
	    return;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  /* Eat content. */
	  subvalue += queue;
	  queue = content = '';
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (!character || character === C_NEWLINE) {
	      break;
	    }
	
	    if (
	      character !== C_SPACE &&
	      character !== C_TAB &&
	      character !== C_HASH
	    ) {
	      content += queue + character;
	      queue = '';
	      continue;
	    }
	
	    while (character === C_SPACE || character === C_TAB) {
	      queue += character;
	      character = value.charAt(++index);
	    }
	
	    while (character === C_HASH) {
	      queue += character;
	      character = value.charAt(++index);
	    }
	
	    while (character === C_SPACE || character === C_TAB) {
	      queue += character;
	      character = value.charAt(++index);
	    }
	
	    index--;
	  }
	
	  now.column += subvalue.length;
	  now.offset += subvalue.length;
	  subvalue += content + queue;
	
	  return eat(subvalue)({
	    type: 'heading',
	    depth: depth,
	    children: self.tokenizeInline(content, now)
	  });
	}


/***/ },

/***/ 881:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:thematic-break
	 * @fileoverview Tokenise a thematic break.
	 */
	
	'use strict';
	
	module.exports = thematicBreak;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_ASTERISK = '*';
	var C_UNDERSCORE = '_';
	var C_DASH = '-';
	
	var THEMATIC_BREAK_MARKER_COUNT = 3;
	
	/* Tokenise a thematic break. */
	function thematicBreak(eat, value, silent) {
	  var index = -1;
	  var length = value.length + 1;
	  var subvalue = '';
	  var character;
	  var marker;
	  var markerCount;
	  var queue;
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_TAB && character !== C_SPACE) {
	      break;
	    }
	
	    subvalue += character;
	  }
	
	  if (
	    character !== C_ASTERISK &&
	    character !== C_DASH &&
	    character !== C_UNDERSCORE
	  ) {
	    return;
	  }
	
	  marker = character;
	  subvalue += character;
	  markerCount = 1;
	  queue = '';
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character === marker) {
	      markerCount++;
	      subvalue += queue + marker;
	      queue = '';
	    } else if (character === C_SPACE) {
	      queue += character;
	    } else if (
	      markerCount >= THEMATIC_BREAK_MARKER_COUNT &&
	      (!character || character === C_NEWLINE)
	    ) {
	      subvalue += queue;
	
	      if (silent) {
	        return true;
	      }
	
	      return eat(subvalue)({type: 'thematicBreak'});
	    } else {
	      return;
	    }
	  }
	}


/***/ },

/***/ 882:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:list
	 * @fileoverview Tokenise a list.
	 */
	
	'use strict';
	
	/* eslint-disable max-params */
	
	var trim = __webpack_require__(878);
	var repeat = __webpack_require__(874);
	var decimal = __webpack_require__(858);
	var getIndent = __webpack_require__(883);
	var removeIndent = __webpack_require__(884);
	var interrupt = __webpack_require__(879);
	
	module.exports = list;
	
	var C_ASTERISK = '*';
	var C_UNDERSCORE = '_';
	var C_PLUS = '+';
	var C_DASH = '-';
	var C_DOT = '.';
	var C_SPACE = ' ';
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_PAREN_CLOSE = ')';
	var C_X_LOWER = 'x';
	
	var TAB_SIZE = 4;
	var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
	var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
	var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
	var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
	var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;
	
	/* Map of characters which can be used to mark
	 * list-items. */
	var LIST_UNORDERED_MARKERS = {};
	
	LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
	LIST_UNORDERED_MARKERS[C_PLUS] = true;
	LIST_UNORDERED_MARKERS[C_DASH] = true;
	
	/* Map of characters which can be used to mark
	 * list-items after a digit. */
	var LIST_ORDERED_MARKERS = {};
	
	LIST_ORDERED_MARKERS[C_DOT] = true;
	
	/* Map of characters which can be used to mark
	 * list-items after a digit. */
	var LIST_ORDERED_COMMONMARK_MARKERS = {};
	
	LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
	LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;
	
	/* Tokenise a list. */
	function list(eat, value, silent) {
	  var self = this;
	  var commonmark = self.options.commonmark;
	  var pedantic = self.options.pedantic;
	  var tokenizers = self.blockTokenizers;
	  var interuptors = self.interruptList;
	  var markers;
	  var index = 0;
	  var length = value.length;
	  var start = null;
	  var size = 0;
	  var queue;
	  var ordered;
	  var character;
	  var marker;
	  var nextIndex;
	  var startIndex;
	  var prefixed;
	  var currentMarker;
	  var content;
	  var line;
	  var prevEmpty;
	  var empty;
	  var items;
	  var allLines;
	  var emptyLines;
	  var item;
	  var enterTop;
	  var exitBlockquote;
	  var isLoose;
	  var node;
	  var now;
	  var end;
	  var indented;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === C_TAB) {
	      size += TAB_SIZE - (size % TAB_SIZE);
	    } else if (character === C_SPACE) {
	      size++;
	    } else {
	      break;
	    }
	
	    index++;
	  }
	
	  if (size >= TAB_SIZE) {
	    return;
	  }
	
	  character = value.charAt(index);
	
	  markers = commonmark ?
	    LIST_ORDERED_COMMONMARK_MARKERS :
	    LIST_ORDERED_MARKERS;
	
	  if (LIST_UNORDERED_MARKERS[character] === true) {
	    marker = character;
	    ordered = false;
	  } else {
	    ordered = true;
	    queue = '';
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (!decimal(character)) {
	        break;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    character = value.charAt(index);
	
	    if (!queue || markers[character] !== true) {
	      return;
	    }
	
	    start = parseInt(queue, 10);
	    marker = character;
	  }
	
	  character = value.charAt(++index);
	
	  if (character !== C_SPACE && character !== C_TAB) {
	    return;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  index = 0;
	  items = [];
	  allLines = [];
	  emptyLines = [];
	
	  while (index < length) {
	    nextIndex = value.indexOf(C_NEWLINE, index);
	    startIndex = index;
	    prefixed = false;
	    indented = false;
	
	    if (nextIndex === -1) {
	      nextIndex = length;
	    }
	
	    end = index + TAB_SIZE;
	    size = 0;
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character === C_TAB) {
	        size += TAB_SIZE - (size % TAB_SIZE);
	      } else if (character === C_SPACE) {
	        size++;
	      } else {
	        break;
	      }
	
	      index++;
	    }
	
	    if (size >= TAB_SIZE) {
	      indented = true;
	    }
	
	    if (item && size >= item.indent) {
	      indented = true;
	    }
	
	    character = value.charAt(index);
	    currentMarker = null;
	
	    if (!indented) {
	      if (LIST_UNORDERED_MARKERS[character] === true) {
	        currentMarker = character;
	        index++;
	        size++;
	      } else {
	        queue = '';
	
	        while (index < length) {
	          character = value.charAt(index);
	
	          if (!decimal(character)) {
	            break;
	          }
	
	          queue += character;
	          index++;
	        }
	
	        character = value.charAt(index);
	        index++;
	
	        if (queue && markers[character] === true) {
	          currentMarker = character;
	          size += queue.length + 1;
	        }
	      }
	
	      if (currentMarker) {
	        character = value.charAt(index);
	
	        if (character === C_TAB) {
	          size += TAB_SIZE - (size % TAB_SIZE);
	          index++;
	        } else if (character === C_SPACE) {
	          end = index + TAB_SIZE;
	
	          while (index < end) {
	            if (value.charAt(index) !== C_SPACE) {
	              break;
	            }
	
	            index++;
	            size++;
	          }
	
	          if (index === end && value.charAt(index) === C_SPACE) {
	            index -= TAB_SIZE - 1;
	            size -= TAB_SIZE - 1;
	          }
	        } else if (character !== C_NEWLINE && character !== '') {
	          currentMarker = null;
	        }
	      }
	    }
	
	    if (currentMarker) {
	      if (!pedantic && marker !== currentMarker) {
	        break;
	      }
	
	      prefixed = true;
	    } else {
	      if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
	        indented = true;
	      } else if (commonmark && item) {
	        indented = size >= item.indent || size > TAB_SIZE;
	      }
	
	      prefixed = false;
	      index = startIndex;
	    }
	
	    line = value.slice(startIndex, nextIndex);
	    content = startIndex === index ? line : value.slice(index, nextIndex);
	
	    if (
	      currentMarker === C_ASTERISK ||
	      currentMarker === C_UNDERSCORE ||
	      currentMarker === C_DASH
	    ) {
	      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
	        break;
	      }
	    }
	
	    prevEmpty = empty;
	    empty = !trim(content).length;
	
	    if (indented && item) {
	      item.value = item.value.concat(emptyLines, line);
	      allLines = allLines.concat(emptyLines, line);
	      emptyLines = [];
	    } else if (prefixed) {
	      if (emptyLines.length !== 0) {
	        item.value.push('');
	        item.trail = emptyLines.concat();
	      }
	
	      item = {
	        value: [line],
	        indent: size,
	        trail: []
	      };
	
	      items.push(item);
	      allLines = allLines.concat(emptyLines, line);
	      emptyLines = [];
	    } else if (empty) {
	      if (prevEmpty) {
	        break;
	      }
	
	      emptyLines.push(line);
	    } else {
	      if (prevEmpty) {
	        break;
	      }
	
	      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
	        break;
	      }
	
	      item.value = item.value.concat(emptyLines, line);
	      allLines = allLines.concat(emptyLines, line);
	      emptyLines = [];
	    }
	
	    index = nextIndex + 1;
	  }
	
	  node = eat(allLines.join(C_NEWLINE)).reset({
	    type: 'list',
	    ordered: ordered,
	    start: start,
	    loose: null,
	    children: []
	  });
	
	  enterTop = self.enterList();
	  exitBlockquote = self.enterBlock();
	  isLoose = false;
	  index = -1;
	  length = items.length;
	
	  while (++index < length) {
	    item = items[index].value.join(C_NEWLINE);
	    now = eat.now();
	
	    item = eat(item)(listItem(self, item, now), node);
	
	    if (item.loose) {
	      isLoose = true;
	    }
	
	    item = items[index].trail.join(C_NEWLINE);
	
	    if (index !== length - 1) {
	      item += C_NEWLINE;
	    }
	
	    eat(item);
	  }
	
	  enterTop();
	  exitBlockquote();
	
	  node.loose = isLoose;
	
	  return node;
	}
	
	/**
	 * Create a list-item node.
	 *
	 * @example
	 *   listItem('- _foo_', now());
	 *
	 * @param {Object} ctx - Parser.
	 * @param {Object} value - List-item.
	 * @param {Object} position - List-item location.
	 * @return {Object} - `listItem` node.
	 */
	function listItem(ctx, value, position) {
	  var offsets = ctx.offset;
	  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
	  var checked = null;
	  var task;
	  var indent;
	
	  value = fn.apply(null, arguments);
	
	  if (ctx.options.gfm) {
	    task = value.match(EXPRESSION_TASK_ITEM);
	
	    if (task) {
	      indent = task[0].length;
	      checked = task[1].toLowerCase() === C_X_LOWER;
	      offsets[position.line] += indent;
	      value = value.slice(indent);
	    }
	  }
	
	  return {
	    type: 'listItem',
	    loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) ||
	      value.charAt(value.length - 1) === C_NEWLINE,
	    checked: checked,
	    children: ctx.tokenizeBlock(value, position)
	  };
	}
	
	/* Create a list-item using overly simple mechanics. */
	function pedanticListItem(ctx, value, position) {
	  var offsets = ctx.offset;
	  var line = position.line;
	
	  /* Remove the list-item’s bullet. */
	  value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);
	
	  /* The initial line was also matched by the below, so
	   * we reset the `line`. */
	  line = position.line;
	
	  return value.replace(EXPRESSION_INITIAL_INDENT, replacer);
	
	  /* A simple replacer which removed all matches,
	   * and adds their length to `offset`. */
	  function replacer($0) {
	    offsets[line] = (offsets[line] || 0) + $0.length;
	    line++;
	
	    return '';
	  }
	}
	
	/* Create a list-item using sane mechanics. */
	function normalListItem(ctx, value, position) {
	  var offsets = ctx.offset;
	  var line = position.line;
	  var max;
	  var bullet;
	  var rest;
	  var lines;
	  var trimmedLines;
	  var index;
	  var length;
	
	  /* Remove the list-item’s bullet. */
	  value = value.replace(EXPRESSION_BULLET, replacer);
	
	  lines = value.split(C_NEWLINE);
	
	  trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);
	
	  /* We replaced the initial bullet with something
	   * else above, which was used to trick
	   * `removeIndentation` into removing some more
	   * characters when possible.  However, that could
	   * result in the initial line to be stripped more
	   * than it should be. */
	  trimmedLines[0] = rest;
	
	  offsets[line] = (offsets[line] || 0) + bullet.length;
	  line++;
	
	  index = 0;
	  length = lines.length;
	
	  while (++index < length) {
	    offsets[line] = (offsets[line] || 0) +
	      lines[index].length - trimmedLines[index].length;
	    line++;
	  }
	
	  return trimmedLines.join(C_NEWLINE);
	
	  function replacer($0, $1, $2, $3, $4) {
	    bullet = $1 + $2 + $3;
	    rest = $4;
	
	    /* Make sure that the first nine numbered list items
	     * can indent with an extra space.  That is, when
	     * the bullet did not receive an extra final space. */
	    if (Number($2) < 10 && bullet.length % 2 === 1) {
	      $2 = C_SPACE + $2;
	    }
	
	    max = $1 + repeat(C_SPACE, $2.length) + $3;
	
	    return max + rest;
	  }
	}


/***/ },

/***/ 883:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:util:get-indentation
	 * @fileoverview Get indentation.
	 */
	
	'use strict';
	
	/* Expose. */
	module.exports = indentation;
	
	/* Map of characters, and their column length,
	 * which can be used as indentation. */
	var characters = {' ': 1, '\t': 4};
	
	/**
	 * Gets indentation information for a line.
	 *
	 * @param {string} value - Indented line.
	 * @return {Object} - Indetation information.
	 */
	function indentation(value) {
	  var index = 0;
	  var indent = 0;
	  var character = value.charAt(index);
	  var stops = {};
	  var size;
	
	  while (character in characters) {
	    size = characters[character];
	
	    indent += size;
	
	    if (size > 1) {
	      indent = Math.floor(indent / size) * size;
	    }
	
	    stops[indent] = index;
	
	    character = value.charAt(++index);
	  }
	
	  return {indent: indent, stops: stops};
	}


/***/ },

/***/ 884:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:util:remove-indentation
	 * @fileoverview Remove indentation.
	 */
	
	'use strict';
	
	/* Dependencies. */
	var trim = __webpack_require__(878);
	var repeat = __webpack_require__(874);
	var getIndent = __webpack_require__(883);
	
	/* Expose. */
	module.exports = indentation;
	
	/* Characters. */
	var C_SPACE = ' ';
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	
	/**
	 * Remove the minimum indent from every line in `value`.
	 * Supports both tab, spaced, and mixed indentation (as
	 * well as possible).
	 *
	 * @example
	 *   removeIndentation('  foo'); // 'foo'
	 *   removeIndentation('    foo', 2); // '  foo'
	 *   removeIndentation('\tfoo', 2); // '  foo'
	 *   removeIndentation('  foo\n bar'); // ' foo\n bar'
	 *
	 * @param {string} value - Value to trim.
	 * @param {number?} [maximum] - Maximum indentation
	 *   to remove.
	 * @return {string} - Unindented `value`.
	 */
	function indentation(value, maximum) {
	  var values = value.split(C_NEWLINE);
	  var position = values.length + 1;
	  var minIndent = Infinity;
	  var matrix = [];
	  var index;
	  var indentation;
	  var stops;
	  var padding;
	
	  values.unshift(repeat(C_SPACE, maximum) + '!');
	
	  while (position--) {
	    indentation = getIndent(values[position]);
	
	    matrix[position] = indentation.stops;
	
	    if (trim(values[position]).length === 0) {
	      continue;
	    }
	
	    if (indentation.indent) {
	      if (indentation.indent > 0 && indentation.indent < minIndent) {
	        minIndent = indentation.indent;
	      }
	    } else {
	      minIndent = Infinity;
	
	      break;
	    }
	  }
	
	  if (minIndent !== Infinity) {
	    position = values.length;
	
	    while (position--) {
	      stops = matrix[position];
	      index = minIndent;
	
	      while (index && !(index in stops)) {
	        index--;
	      }
	
	      if (
	        trim(values[position]).length !== 0 &&
	        minIndent &&
	        index !== minIndent
	      ) {
	        padding = C_TAB;
	      } else {
	        padding = '';
	      }
	
	      values[position] = padding + values[position].slice(
	        index in stops ? stops[index] + 1 : 0
	      );
	    }
	  }
	
	  values.shift();
	
	  return values.join(C_NEWLINE);
	}


/***/ },

/***/ 885:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:heading-setext
	 * @fileoverview Tokenise an setext-style heading.
	 */
	
	'use strict';
	
	module.exports = setextHeading;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_EQUALS = '=';
	var C_DASH = '-';
	
	var MAX_HEADING_INDENT = 3;
	
	/* Map of characters which can be used to mark setext
	 * headers, mapping to their corresponding depth. */
	var SETEXT_MARKERS = {};
	
	SETEXT_MARKERS[C_EQUALS] = 1;
	SETEXT_MARKERS[C_DASH] = 2;
	
	/* Tokenise an setext-style heading. */
	function setextHeading(eat, value, silent) {
	  var self = this;
	  var now = eat.now();
	  var length = value.length;
	  var index = -1;
	  var subvalue = '';
	  var content;
	  var queue;
	  var character;
	  var marker;
	  var depth;
	
	  /* Eat initial indentation. */
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
	      index--;
	      break;
	    }
	
	    subvalue += character;
	  }
	
	  /* Eat content. */
	  content = queue = '';
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character === C_NEWLINE) {
	      index--;
	      break;
	    }
	
	    if (character === C_SPACE || character === C_TAB) {
	      queue += character;
	    } else {
	      content += queue + character;
	      queue = '';
	    }
	  }
	
	  now.column += subvalue.length;
	  now.offset += subvalue.length;
	  subvalue += content + queue;
	
	  /* Ensure the content is followed by a newline and a
	   * valid marker. */
	  character = value.charAt(++index);
	  marker = value.charAt(++index);
	
	  if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
	    return;
	  }
	
	  subvalue += character;
	
	  /* Eat Setext-line. */
	  queue = marker;
	  depth = SETEXT_MARKERS[marker];
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character !== marker) {
	      if (character !== C_NEWLINE) {
	        return;
	      }
	
	      index--;
	      break;
	    }
	
	    queue += character;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  return eat(subvalue + queue)({
	    type: 'heading',
	    depth: depth,
	    children: self.tokenizeInline(content, now)
	  });
	}


/***/ },

/***/ 886:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:html-block
	 * @fileoverview Tokenise block HTML.
	 */
	
	'use strict';
	
	var openCloseTag = __webpack_require__(887).openCloseTag;
	
	module.exports = blockHTML;
	
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_NEWLINE = '\n';
	var C_LT = '<';
	
	/* Tokenise block HTML. */
	function blockHTML(eat, value, silent) {
	  var self = this;
	  var blocks = self.options.blocks;
	  var length = value.length;
	  var index = 0;
	  var next;
	  var line;
	  var offset;
	  var character;
	  var count;
	  var sequence;
	  var subvalue;
	
	  var sequences = [
	    [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
	    [/^<!--/, /-->/, true],
	    [/^<\?/, /\?>/, true],
	    [/^<![A-Za-z]/, />/, true],
	    [/^<!\[CDATA\[/, /\]\]>/, true],
	    [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true],
	    [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]
	  ];
	
	  /* Eat initial spacing. */
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_TAB && character !== C_SPACE) {
	      break;
	    }
	
	    index++;
	  }
	
	  if (value.charAt(index) !== C_LT) {
	    return;
	  }
	
	  next = value.indexOf(C_NEWLINE, index + 1);
	  next = next === -1 ? length : next;
	  line = value.slice(index, next);
	  offset = -1;
	  count = sequences.length;
	
	  while (++offset < count) {
	    if (sequences[offset][0].test(line)) {
	      sequence = sequences[offset];
	      break;
	    }
	  }
	
	  if (!sequence) {
	    return;
	  }
	
	  if (silent) {
	    return sequence[2];
	  }
	
	  index = next;
	
	  if (!sequence[1].test(line)) {
	    while (index < length) {
	      next = value.indexOf(C_NEWLINE, index + 1);
	      next = next === -1 ? length : next;
	      line = value.slice(index + 1, next);
	
	      if (sequence[1].test(line)) {
	        if (line) {
	          index = next;
	        }
	
	        break;
	      }
	
	      index = next;
	    }
	  }
	
	  subvalue = value.slice(0, index);
	
	  return eat(subvalue)({type: 'html', value: subvalue});
	}


/***/ },

/***/ 887:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:util:html
	 * @fileoverview HTML regexes.
	 */
	
	'use strict';
	
	var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
	var unquoted = '[^"\'=<>`\\x00-\\x20]+';
	var singleQuoted = '\'[^\']*\'';
	var doubleQuoted = '"[^"]*"';
	var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
	var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
	var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
	var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
	var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
	var processing = '<[?].*?[?]>';
	var declaration = '<![A-Za-z]+\\s+[^>]*>';
	var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
	
	exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');
	
	exports.tag = new RegExp('^(?:' +
	  openTag + '|' +
	  closeTag + '|' +
	  comment + '|' +
	  processing + '|' +
	  declaration + '|' +
	  cdata +
	')');


/***/ },

/***/ 888:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:footnote-definition
	 * @fileoverview Tokenise footnote definition.
	 */
	
	'use strict';
	
	var whitespace = __webpack_require__(872);
	var normalize = __webpack_require__(889);
	
	module.exports = footnoteDefinition;
	footnoteDefinition.notInList = true;
	footnoteDefinition.notInBlock = true;
	
	var C_BACKSLASH = '\\';
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_BRACKET_OPEN = '[';
	var C_BRACKET_CLOSE = ']';
	var C_CARET = '^';
	var C_COLON = ':';
	
	var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;
	
	/* Tokenise a footnote definition. */
	function footnoteDefinition(eat, value, silent) {
	  var self = this;
	  var offsets = self.offset;
	  var index;
	  var length;
	  var subvalue;
	  var now;
	  var currentLine;
	  var content;
	  var queue;
	  var subqueue;
	  var character;
	  var identifier;
	  var add;
	  var exit;
	
	  if (!self.options.footnotes) {
	    return;
	  }
	
	  index = 0;
	  length = value.length;
	  subvalue = '';
	  now = eat.now();
	  currentLine = now.line;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (!whitespace(character)) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  if (
	    value.charAt(index) !== C_BRACKET_OPEN ||
	    value.charAt(index + 1) !== C_CARET
	  ) {
	    return;
	  }
	
	  subvalue += C_BRACKET_OPEN + C_CARET;
	  index = subvalue.length;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === C_BRACKET_CLOSE) {
	      break;
	    } else if (character === C_BACKSLASH) {
	      queue += character;
	      index++;
	      character = value.charAt(index);
	    }
	
	    queue += character;
	    index++;
	  }
	
	  if (
	    !queue ||
	    value.charAt(index) !== C_BRACKET_CLOSE ||
	    value.charAt(index + 1) !== C_COLON
	  ) {
	    return;
	  }
	
	  if (silent) {
	    return true;
	  }
	
	  identifier = normalize(queue);
	  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
	  index = subvalue.length;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_TAB && character !== C_SPACE) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  now.column += subvalue.length;
	  now.offset += subvalue.length;
	  queue = content = subqueue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === C_NEWLINE) {
	      subqueue = character;
	      index++;
	
	      while (index < length) {
	        character = value.charAt(index);
	
	        if (character !== C_NEWLINE) {
	          break;
	        }
	
	        subqueue += character;
	        index++;
	      }
	
	      queue += subqueue;
	      subqueue = '';
	
	      while (index < length) {
	        character = value.charAt(index);
	
	        if (character !== C_SPACE) {
	          break;
	        }
	
	        subqueue += character;
	        index++;
	      }
	
	      if (subqueue.length === 0) {
	        break;
	      }
	
	      queue += subqueue;
	    }
	
	    if (queue) {
	      content += queue;
	      queue = '';
	    }
	
	    content += character;
	    index++;
	  }
	
	  subvalue += content;
	
	  content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
	    offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
	    currentLine++;
	
	    return '';
	  });
	
	  add = eat(subvalue);
	
	  exit = self.enterBlock();
	  content = self.tokenizeBlock(content, now);
	  exit();
	
	  return add({
	    type: 'footnoteDefinition',
	    identifier: identifier,
	    children: content
	  });
	}


/***/ },

/***/ 889:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:util:normalize
	 * @fileoverview Normalize an identifier.
	 */
	
	'use strict';
	
	/* Dependencies. */
	var collapseWhiteSpace = __webpack_require__(890);
	
	/* Expose. */
	module.exports = normalize;
	
	/**
	 * Normalize an identifier.  Collapses multiple white space
	 * characters into a single space, and removes casing.
	 *
	 * @example
	 *   normalizeIdentifier('FOO\t bar'); // 'foo bar'
	 *
	 * @param {string} value - Content to normalize.
	 * @return {string} - Normalized content.
	 */
	function normalize(value) {
	  return collapseWhiteSpace(value).toLowerCase();
	}


/***/ },

/***/ 890:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module collapse-white-space
	 * @fileoverview Replace multiple white-space characters
	 *   with a single space.
	 */
	
	'use strict';
	
	/* Expose. */
	module.exports = collapse;
	
	/**
	 * Replace multiple white-space characters with a single space.
	 *
	 * @example
	 *   collapse(' \t\nbar \nbaz\t'); // ' bar baz '
	 *
	 * @param {string} value - Value with uncollapsed white-space,
	 *   coerced to string.
	 * @return {string} - Value with collapsed white-space.
	 */
	function collapse(value) {
	  return String(value).replace(/\s+/g, ' ');
	}


/***/ },

/***/ 891:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:definition
	 * @fileoverview Tokenise a definition.
	 */
	
	'use strict';
	
	var whitespace = __webpack_require__(872);
	var normalize = __webpack_require__(889);
	
	module.exports = definition;
	definition.notInList = true;
	definition.notInBlock = true;
	
	var C_DOUBLE_QUOTE = '"';
	var C_SINGLE_QUOTE = '\'';
	var C_BACKSLASH = '\\';
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	var C_BRACKET_OPEN = '[';
	var C_BRACKET_CLOSE = ']';
	var C_PAREN_OPEN = '(';
	var C_PAREN_CLOSE = ')';
	var C_COLON = ':';
	var C_LT = '<';
	var C_GT = '>';
	
	/* Tokenise a definition. */
	function definition(eat, value, silent) {
	  var self = this;
	  var commonmark = self.options.commonmark;
	  var index = 0;
	  var length = value.length;
	  var subvalue = '';
	  var beforeURL;
	  var beforeTitle;
	  var queue;
	  var character;
	  var test;
	  var identifier;
	  var url;
	  var title;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_SPACE && character !== C_TAB) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	
	  if (character !== C_BRACKET_OPEN) {
	    return;
	  }
	
	  index++;
	  subvalue += character;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === C_BRACKET_CLOSE) {
	      break;
	    } else if (character === C_BACKSLASH) {
	      queue += character;
	      index++;
	      character = value.charAt(index);
	    }
	
	    queue += character;
	    index++;
	  }
	
	  if (
	    !queue ||
	    value.charAt(index) !== C_BRACKET_CLOSE ||
	    value.charAt(index + 1) !== C_COLON
	  ) {
	    return;
	  }
	
	  identifier = queue;
	  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
	  index = subvalue.length;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (
	      character !== C_TAB &&
	      character !== C_SPACE &&
	      character !== C_NEWLINE
	    ) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	  queue = '';
	  beforeURL = subvalue;
	
	  if (character === C_LT) {
	    index++;
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (!isEnclosedURLCharacter(character)) {
	        break;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    character = value.charAt(index);
	
	    if (character === isEnclosedURLCharacter.delimiter) {
	      subvalue += C_LT + queue + character;
	      index++;
	    } else {
	      if (commonmark) {
	        return;
	      }
	
	      index -= queue.length + 1;
	      queue = '';
	    }
	  }
	
	  if (!queue) {
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (!isUnclosedURLCharacter(character)) {
	        break;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    subvalue += queue;
	  }
	
	  if (!queue) {
	    return;
	  }
	
	  url = queue;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (
	      character !== C_TAB &&
	      character !== C_SPACE &&
	      character !== C_NEWLINE
	    ) {
	      break;
	    }
	
	    queue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	  test = null;
	
	  if (character === C_DOUBLE_QUOTE) {
	    test = C_DOUBLE_QUOTE;
	  } else if (character === C_SINGLE_QUOTE) {
	    test = C_SINGLE_QUOTE;
	  } else if (character === C_PAREN_OPEN) {
	    test = C_PAREN_CLOSE;
	  }
	
	  if (!test) {
	    queue = '';
	    index = subvalue.length;
	  } else if (queue) {
	    subvalue += queue + character;
	    index = subvalue.length;
	    queue = '';
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character === test) {
	        break;
	      }
	
	      if (character === C_NEWLINE) {
	        index++;
	        character = value.charAt(index);
	
	        if (character === C_NEWLINE || character === test) {
	          return;
	        }
	
	        queue += C_NEWLINE;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    character = value.charAt(index);
	
	    if (character !== test) {
	      return;
	    }
	
	    beforeTitle = subvalue;
	    subvalue += queue + character;
	    index++;
	    title = queue;
	    queue = '';
	  } else {
	    return;
	  }
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character !== C_TAB && character !== C_SPACE) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	
	  if (!character || character === C_NEWLINE) {
	    if (silent) {
	      return true;
	    }
	
	    beforeURL = eat(beforeURL).test().end;
	    url = self.decode.raw(self.unescape(url), beforeURL);
	
	    if (title) {
	      beforeTitle = eat(beforeTitle).test().end;
	      title = self.decode.raw(self.unescape(title), beforeTitle);
	    }
	
	    return eat(subvalue)({
	      type: 'definition',
	      identifier: normalize(identifier),
	      title: title || null,
	      url: url
	    });
	  }
	}
	
	/* Check if `character` can be inside an enclosed URI. */
	function isEnclosedURLCharacter(character) {
	  return character !== C_GT &&
	    character !== C_BRACKET_OPEN &&
	    character !== C_BRACKET_CLOSE;
	}
	
	isEnclosedURLCharacter.delimiter = C_GT;
	
	/* Check if `character` can be inside an unclosed URI. */
	function isUnclosedURLCharacter(character) {
	  return character !== C_BRACKET_OPEN &&
	    character !== C_BRACKET_CLOSE &&
	    !whitespace(character);
	}


/***/ },

/***/ 892:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:table
	 * @fileoverview Tokenise a table.
	 */
	
	'use strict';
	
	var whitespace = __webpack_require__(872);
	
	module.exports = table;
	table.notInList = true;
	
	var C_BACKSLASH = '\\';
	var C_TICK = '`';
	var C_DASH = '-';
	var C_PIPE = '|';
	var C_COLON = ':';
	var C_SPACE = ' ';
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	
	var MIN_TABLE_COLUMNS = 2;
	var MIN_TABLE_ROWS = 2;
	
	var TABLE_ALIGN_LEFT = 'left';
	var TABLE_ALIGN_CENTER = 'center';
	var TABLE_ALIGN_RIGHT = 'right';
	var TABLE_ALIGN_NONE = null;
	
	/* Tokenise a table. */
	function table(eat, value, silent) {
	  var self = this;
	  var index;
	  var alignments;
	  var alignment;
	  var subvalue;
	  var row;
	  var length;
	  var lines;
	  var queue;
	  var character;
	  var hasDash;
	  var align;
	  var cell;
	  var preamble;
	  var count;
	  var opening;
	  var now;
	  var position;
	  var lineCount;
	  var line;
	  var rows;
	  var table;
	  var lineIndex;
	  var pipeIndex;
	  var first;
	
	  /* Exit when not in gfm-mode. */
	  if (!self.options.gfm) {
	    return;
	  }
	
	  /* Get the rows.
	   * Detecting tables soon is hard, so there are some
	   * checks for performance here, such as the minimum
	   * number of rows, and allowed characters in the
	   * alignment row. */
	  index = lineCount = 0;
	  length = value.length + 1;
	  lines = [];
	
	  while (index < length) {
	    lineIndex = value.indexOf(C_NEWLINE, index);
	    pipeIndex = value.indexOf(C_PIPE, index + 1);
	
	    if (lineIndex === -1) {
	      lineIndex = value.length;
	    }
	
	    if (pipeIndex === -1 || pipeIndex > lineIndex) {
	      if (lineCount < MIN_TABLE_ROWS) {
	        return;
	      }
	
	      break;
	    }
	
	    lines.push(value.slice(index, lineIndex));
	    lineCount++;
	    index = lineIndex + 1;
	  }
	
	  /* Parse the alignment row. */
	  subvalue = lines.join(C_NEWLINE);
	  alignments = lines.splice(1, 1)[0] || [];
	  index = 0;
	  length = alignments.length;
	  lineCount--;
	  alignment = false;
	  align = [];
	
	  while (index < length) {
	    character = alignments.charAt(index);
	
	    if (character === C_PIPE) {
	      hasDash = null;
	
	      if (alignment === false) {
	        if (first === false) {
	          return;
	        }
	      } else {
	        align.push(alignment);
	        alignment = false;
	      }
	
	      first = false;
	    } else if (character === C_DASH) {
	      hasDash = true;
	      alignment = alignment || TABLE_ALIGN_NONE;
	    } else if (character === C_COLON) {
	      if (alignment === TABLE_ALIGN_LEFT) {
	        alignment = TABLE_ALIGN_CENTER;
	      } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
	        alignment = TABLE_ALIGN_RIGHT;
	      } else {
	        alignment = TABLE_ALIGN_LEFT;
	      }
	    } else if (!whitespace(character)) {
	      return;
	    }
	
	    index++;
	  }
	
	  if (alignment !== false) {
	    align.push(alignment);
	  }
	
	  /* Exit when without enough columns. */
	  if (align.length < MIN_TABLE_COLUMNS) {
	    return;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  /* Parse the rows. */
	  position = -1;
	  rows = [];
	
	  table = eat(subvalue).reset({
	    type: 'table',
	    align: align,
	    children: rows
	  });
	
	  while (++position < lineCount) {
	    line = lines[position];
	    row = {type: 'tableRow', children: []};
	
	    /* Eat a newline character when this is not the
	     * first row. */
	    if (position) {
	      eat(C_NEWLINE);
	    }
	
	    /* Eat the row. */
	    eat(line).reset(row, table);
	
	    length = line.length + 1;
	    index = 0;
	    queue = cell = '';
	    preamble = true;
	    count = opening = null;
	
	    while (index < length) {
	      character = line.charAt(index);
	
	      if (character === C_TAB || character === C_SPACE) {
	        if (cell) {
	          queue += character;
	        } else {
	          eat(character);
	        }
	
	        index++;
	        continue;
	      }
	
	      if (character === '' || character === C_PIPE) {
	        if (preamble) {
	          eat(character);
	        } else {
	          if (character && opening) {
	            queue += character;
	            index++;
	            continue;
	          }
	
	          if ((cell || character) && !preamble) {
	            subvalue = cell;
	
	            if (queue.length > 1) {
	              if (character) {
	                subvalue += queue.slice(0, queue.length - 1);
	                queue = queue.charAt(queue.length - 1);
	              } else {
	                subvalue += queue;
	                queue = '';
	              }
	            }
	
	            now = eat.now();
	
	            eat(subvalue)({
	              type: 'tableCell',
	              children: self.tokenizeInline(cell, now)
	            }, row);
	          }
	
	          eat(queue + character);
	
	          queue = cell = '';
	        }
	      } else {
	        if (queue) {
	          cell += queue;
	          queue = '';
	        }
	
	        cell += character;
	
	        if (character === C_BACKSLASH && index !== length - 2) {
	          cell += line.charAt(index + 1);
	          index++;
	        }
	
	        if (character === C_TICK) {
	          count = 1;
	
	          while (line.charAt(index + 1) === character) {
	            cell += character;
	            index++;
	            count++;
	          }
	
	          if (!opening) {
	            opening = count;
	          } else if (count >= opening) {
	            opening = 0;
	          }
	        }
	      }
	
	      preamble = false;
	      index++;
	    }
	
	    /* Eat the alignment row. */
	    if (!position) {
	      eat(C_NEWLINE + alignments);
	    }
	  }
	
	  return table;
	}


/***/ },

/***/ 893:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:paragraph
	 * @fileoverview Tokenise a paragraph.
	 */
	
	'use strict';
	
	var trim = __webpack_require__(878);
	var decimal = __webpack_require__(858);
	var trimTrailingLines = __webpack_require__(875);
	var interrupt = __webpack_require__(879);
	
	module.exports = paragraph;
	
	var C_NEWLINE = '\n';
	var C_TAB = '\t';
	var C_SPACE = ' ';
	
	var TAB_SIZE = 4;
	
	/* Tokenise paragraph. */
	function paragraph(eat, value, silent) {
	  var self = this;
	  var settings = self.options;
	  var commonmark = settings.commonmark;
	  var gfm = settings.gfm;
	  var tokenizers = self.blockTokenizers;
	  var interruptors = self.interruptParagraph;
	  var index = value.indexOf(C_NEWLINE);
	  var length = value.length;
	  var position;
	  var subvalue;
	  var character;
	  var size;
	  var now;
	
	  while (index < length) {
	    /* Eat everything if there’s no following newline. */
	    if (index === -1) {
	      index = length;
	      break;
	    }
	
	    /* Stop if the next character is NEWLINE. */
	    if (value.charAt(index + 1) === C_NEWLINE) {
	      break;
	    }
	
	    /* In commonmark-mode, following indented lines
	     * are part of the paragraph. */
	    if (commonmark) {
	      size = 0;
	      position = index + 1;
	
	      while (position < length) {
	        character = value.charAt(position);
	
	        if (character === C_TAB) {
	          size = TAB_SIZE;
	          break;
	        } else if (character === C_SPACE) {
	          size++;
	        } else {
	          break;
	        }
	
	        position++;
	      }
	
	      if (size >= TAB_SIZE) {
	        index = value.indexOf(C_NEWLINE, index + 1);
	        continue;
	      }
	    }
	
	    subvalue = value.slice(index + 1);
	
	    /* Check if the following code contains a possible
	     * block. */
	    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
	      break;
	    }
	
	    /* Break if the following line starts a list, when
	     * already in a list, or when in commonmark, or when
	     * in gfm mode and the bullet is *not* numeric. */
	    if (
	      tokenizers.list.call(self, eat, subvalue, true) &&
	      (
	        self.inList ||
	        commonmark ||
	        (gfm && !decimal(trim.left(subvalue).charAt(0)))
	      )
	    ) {
	      break;
	    }
	
	    position = index;
	    index = value.indexOf(C_NEWLINE, index + 1);
	
	    if (index !== -1 && trim(value.slice(position, index)) === '') {
	      index = position;
	      break;
	    }
	  }
	
	  subvalue = value.slice(0, index);
	
	  if (trim(subvalue) === '') {
	    eat(subvalue);
	
	    return null;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  now = eat.now();
	  subvalue = trimTrailingLines(subvalue);
	
	  return eat(subvalue)({
	    type: 'paragraph',
	    children: self.tokenizeInline(subvalue, now)
	  });
	}


/***/ },

/***/ 894:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:escape
	 * @fileoverview Tokenise an escape.
	 */
	
	'use strict';
	
	var locate = __webpack_require__(895);
	
	module.exports = escape;
	escape.locator = locate;
	
	/* Tokenise an escape. */
	function escape(eat, value, silent) {
	  var self = this;
	  var character;
	  var node;
	
	  if (value.charAt(0) === '\\') {
	    character = value.charAt(1);
	
	    if (self.escape.indexOf(character) !== -1) {
	      /* istanbul ignore if - never used (yet) */
	      if (silent) {
	        return true;
	      }
	
	      if (character === '\n') {
	        node = {type: 'break'};
	      } else {
	        node = {
	          type: 'text',
	          value: character
	        };
	      }
	
	      return eat('\\' + character)(node);
	    }
	  }
	}


/***/ },

/***/ 895:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:locate:escape
	 * @fileoverview Locate an escape.
	 */
	
	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  return value.indexOf('\\', fromIndex);
	}


/***/ },

/***/ 896:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:auto-link
	 * @fileoverview Tokenise an auto-link.
	 */
	
	'use strict';
	
	var decode = __webpack_require__(854);
	var locate = __webpack_require__(897);
	
	module.exports = autoLink;
	autoLink.locator = locate;
	autoLink.notInLink = true;
	
	var C_LT = '<';
	var C_GT = '>';
	var C_AT_SIGN = '@';
	var C_SLASH = '/';
	var MAILTO = 'mailto:';
	var MAILTO_LENGTH = MAILTO.length;
	
	/* Tokenise a link. */
	function autoLink(eat, value, silent) {
	  var self;
	  var subvalue;
	  var length;
	  var index;
	  var queue;
	  var character;
	  var hasAtCharacter;
	  var link;
	  var now;
	  var content;
	  var tokenize;
	  var exit;
	
	  if (value.charAt(0) !== C_LT) {
	    return;
	  }
	
	  self = this;
	  subvalue = '';
	  length = value.length;
	  index = 0;
	  queue = '';
	  hasAtCharacter = false;
	  link = '';
	
	  index++;
	  subvalue = C_LT;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (
	      character === ' ' ||
	      character === C_GT ||
	      character === C_AT_SIGN ||
	      (character === ':' && value.charAt(index + 1) === C_SLASH)
	    ) {
	      break;
	    }
	
	    queue += character;
	    index++;
	  }
	
	  if (!queue) {
	    return;
	  }
	
	  link += queue;
	  queue = '';
	
	  character = value.charAt(index);
	  link += character;
	  index++;
	
	  if (character === C_AT_SIGN) {
	    hasAtCharacter = true;
	  } else {
	    if (
	      character !== ':' ||
	      value.charAt(index + 1) !== C_SLASH
	    ) {
	      return;
	    }
	
	    link += C_SLASH;
	    index++;
	  }
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === ' ' || character === C_GT) {
	      break;
	    }
	
	    queue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	
	  if (!queue || character !== C_GT) {
	    return;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  link += queue;
	  content = link;
	  subvalue += link + character;
	  now = eat.now();
	  now.column++;
	  now.offset++;
	
	  if (hasAtCharacter) {
	    if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
	      content = content.substr(MAILTO_LENGTH);
	      now.column += MAILTO_LENGTH;
	      now.offset += MAILTO_LENGTH;
	    } else {
	      link = MAILTO + link;
	    }
	  }
	
	  /* Temporarily remove support for escapes in autolinks. */
	  tokenize = self.inlineTokenizers.escape;
	  self.inlineTokenizers.escape = null;
	  exit = self.enterLink();
	
	  content = self.tokenizeInline(content, now);
	
	  self.inlineTokenizers.escape = tokenize;
	  exit();
	
	  return eat(subvalue)({
	    type: 'link',
	    title: null,
	    url: decode(link),
	    children: content
	  });
	}


/***/ },

/***/ 897:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:locate:tag
	 * @fileoverview Locate a tag.
	 */
	
	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  return value.indexOf('<', fromIndex);
	}


/***/ },

/***/ 898:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:url
	 * @fileoverview Tokenise a URL.
	 */
	
	'use strict';
	
	var decode = __webpack_require__(854);
	var whitespace = __webpack_require__(872);
	var locate = __webpack_require__(899);
	
	module.exports = url;
	url.locator = locate;
	url.notInLink = true;
	
	var C_BRACKET_OPEN = '[';
	var C_BRACKET_CLOSE = ']';
	var C_PAREN_OPEN = '(';
	var C_PAREN_CLOSE = ')';
	var C_LT = '<';
	var C_AT_SIGN = '@';
	
	var HTTP_PROTOCOL = 'http://';
	var HTTPS_PROTOCOL = 'https://';
	var MAILTO_PROTOCOL = 'mailto:';
	
	var PROTOCOLS = [
	  HTTP_PROTOCOL,
	  HTTPS_PROTOCOL,
	  MAILTO_PROTOCOL
	];
	
	var PROTOCOLS_LENGTH = PROTOCOLS.length;
	
	/* Tokenise a URL. */
	function url(eat, value, silent) {
	  var self = this;
	  var subvalue;
	  var content;
	  var character;
	  var index;
	  var position;
	  var protocol;
	  var match;
	  var length;
	  var queue;
	  var parenCount;
	  var nextCharacter;
	  var exit;
	
	  if (!self.options.gfm) {
	    return;
	  }
	
	  subvalue = '';
	  index = -1;
	  length = PROTOCOLS_LENGTH;
	
	  while (++index < length) {
	    protocol = PROTOCOLS[index];
	    match = value.slice(0, protocol.length);
	
	    if (match.toLowerCase() === protocol) {
	      subvalue = match;
	      break;
	    }
	  }
	
	  if (!subvalue) {
	    return;
	  }
	
	  index = subvalue.length;
	  length = value.length;
	  queue = '';
	  parenCount = 0;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (whitespace(character) || character === C_LT) {
	      break;
	    }
	
	    if (
	      character === '.' ||
	      character === ',' ||
	      character === ':' ||
	      character === ';' ||
	      character === '"' ||
	      character === '\'' ||
	      character === ')' ||
	      character === ']'
	    ) {
	      nextCharacter = value.charAt(index + 1);
	
	      if (!nextCharacter || whitespace(nextCharacter)) {
	        break;
	      }
	    }
	
	    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
	      parenCount++;
	    }
	
	    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
	      parenCount--;
	
	      if (parenCount < 0) {
	        break;
	      }
	    }
	
	    queue += character;
	    index++;
	  }
	
	  if (!queue) {
	    return;
	  }
	
	  subvalue += queue;
	  content = subvalue;
	
	  if (protocol === MAILTO_PROTOCOL) {
	    position = queue.indexOf(C_AT_SIGN);
	
	    if (position === -1 || position === length - 1) {
	      return;
	    }
	
	    content = content.substr(MAILTO_PROTOCOL.length);
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  exit = self.enterLink();
	  content = self.tokenizeInline(content, eat.now());
	  exit();
	
	  return eat(subvalue)({
	    type: 'link',
	    title: null,
	    url: decode(subvalue),
	    children: content
	  });
	}


/***/ },

/***/ 899:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:locate:url
	 * @fileoverview Locate a URL.
	 */
	
	'use strict';
	
	module.exports = locate;
	
	var PROTOCOLS = ['https://', 'http://', 'mailto:'];
	
	function locate(value, fromIndex) {
	  var length = PROTOCOLS.length;
	  var index = -1;
	  var min = -1;
	  var position;
	
	  if (!this.options.gfm) {
	    return -1;
	  }
	
	  while (++index < length) {
	    position = value.indexOf(PROTOCOLS[index], fromIndex);
	
	    if (position !== -1 && (position < min || min === -1)) {
	      min = position;
	    }
	  }
	
	  return min;
	}


/***/ },

/***/ 900:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:html-inline
	 * @fileoverview Tokenise inline HTML.
	 */
	
	'use strict';
	
	var alphabetical = __webpack_require__(861);
	var locate = __webpack_require__(897);
	var tag = __webpack_require__(887).tag;
	
	module.exports = inlineHTML;
	inlineHTML.locator = locate;
	
	var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
	var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;
	
	/* Tokenise inline HTML. */
	function inlineHTML(eat, value, silent) {
	  var self = this;
	  var length = value.length;
	  var character;
	  var subvalue;
	
	  if (value.charAt(0) !== '<' || length < 3) {
	    return;
	  }
	
	  character = value.charAt(1);
	
	  if (
	    !alphabetical(character) &&
	    character !== '?' &&
	    character !== '!' &&
	    character !== '/'
	  ) {
	    return;
	  }
	
	  subvalue = value.match(tag);
	
	  if (!subvalue) {
	    return;
	  }
	
	  /* istanbul ignore if - not used yet. */
	  if (silent) {
	    return true;
	  }
	
	  subvalue = subvalue[0];
	
	  if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
	    self.inLink = true;
	  } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
	    self.inLink = false;
	  }
	
	  return eat(subvalue)({type: 'html', value: subvalue});
	}


/***/ },

/***/ 901:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:link
	 * @fileoverview Tokenise a link.
	 */
	
	'use strict';
	
	var has = __webpack_require__(830);
	var whitespace = __webpack_require__(872);
	var locate = __webpack_require__(902);
	
	module.exports = link;
	link.locator = locate;
	
	var C_BACKSLASH = '\\';
	var C_BRACKET_OPEN = '[';
	var C_BRACKET_CLOSE = ']';
	var C_PAREN_OPEN = '(';
	var C_PAREN_CLOSE = ')';
	var C_LT = '<';
	var C_GT = '>';
	var C_TICK = '`';
	var C_DOUBLE_QUOTE = '"';
	var C_SINGLE_QUOTE = '\'';
	
	/* Map of characters, which can be used to mark link
	 * and image titles. */
	var LINK_MARKERS = {};
	
	LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
	LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
	
	/* Map of characters, which can be used to mark link
	 * and image titles in commonmark-mode. */
	var COMMONMARK_LINK_MARKERS = {};
	
	COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
	COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
	COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;
	
	/* Tokenise a link. */
	function link(eat, value, silent) {
	  var self = this;
	  var subvalue = '';
	  var index = 0;
	  var character = value.charAt(0);
	  var commonmark = self.options.commonmark;
	  var gfm = self.options.gfm;
	  var closed;
	  var count;
	  var opening;
	  var beforeURL;
	  var beforeTitle;
	  var subqueue;
	  var hasMarker;
	  var markers;
	  var isImage;
	  var content;
	  var marker;
	  var length;
	  var title;
	  var depth;
	  var queue;
	  var url;
	  var now;
	  var exit;
	  var node;
	
	  /* Detect whether this is an image. */
	  if (character === '!') {
	    isImage = true;
	    subvalue = character;
	    character = value.charAt(++index);
	  }
	
	  /* Eat the opening. */
	  if (character !== C_BRACKET_OPEN) {
	    return;
	  }
	
	  /* Exit when this is a link and we’re already inside
	   * a link. */
	  if (!isImage && self.inLink) {
	    return;
	  }
	
	  subvalue += character;
	  queue = '';
	  index++;
	
	  /* Eat the content. */
	  length = value.length;
	  now = eat.now();
	  depth = 0;
	
	  now.column += index;
	  now.offset += index;
	
	  while (index < length) {
	    subqueue = character = value.charAt(index);
	
	    if (character === C_TICK) {
	      /* Inline-code in link content. */
	      count = 1;
	
	      while (value.charAt(index + 1) === C_TICK) {
	        subqueue += character;
	        index++;
	        count++;
	      }
	
	      if (!opening) {
	        opening = count;
	      } else if (count >= opening) {
	        opening = 0;
	      }
	    } else if (character === C_BACKSLASH) {
	      /* Allow brackets to be escaped. */
	      index++;
	      subqueue += value.charAt(index);
	    /* In GFM mode, brackets in code still count.
	     * In all other modes, they don’t.  This empty
	     * block prevents the next statements are
	     * entered. */
	    } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
	      depth++;
	    } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
	      if (depth) {
	        depth--;
	      } else {
	        /* Allow white-space between content and
	         * url in GFM mode. */
	        if (gfm) {
	          while (index < length) {
	            character = value.charAt(index + 1);
	
	            if (!whitespace(character)) {
	              break;
	            }
	
	            subqueue += character;
	            index++;
	          }
	        }
	
	        if (value.charAt(index + 1) !== C_PAREN_OPEN) {
	          return;
	        }
	
	        subqueue += C_PAREN_OPEN;
	        closed = true;
	        index++;
	
	        break;
	      }
	    }
	
	    queue += subqueue;
	    subqueue = '';
	    index++;
	  }
	
	  /* Eat the content closing. */
	  if (!closed) {
	    return;
	  }
	
	  content = queue;
	  subvalue += queue + subqueue;
	  index++;
	
	  /* Eat white-space. */
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (!whitespace(character)) {
	      break;
	    }
	
	    subvalue += character;
	    index++;
	  }
	
	  /* Eat the URL. */
	  character = value.charAt(index);
	  markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
	  queue = '';
	  beforeURL = subvalue;
	
	  if (character === C_LT) {
	    index++;
	    beforeURL += C_LT;
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character === C_GT) {
	        break;
	      }
	
	      if (commonmark && character === '\n') {
	        return;
	      }
	
	      queue += character;
	      index++;
	    }
	
	    if (value.charAt(index) !== C_GT) {
	      return;
	    }
	
	    subvalue += C_LT + queue + C_GT;
	    url = queue;
	    index++;
	  } else {
	    character = null;
	    subqueue = '';
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (subqueue && has(markers, character)) {
	        break;
	      }
	
	      if (whitespace(character)) {
	        if (commonmark) {
	          break;
	        }
	
	        subqueue += character;
	      } else {
	        if (character === C_PAREN_OPEN) {
	          depth++;
	        } else if (character === C_PAREN_CLOSE) {
	          if (depth === 0) {
	            break;
	          }
	
	          depth--;
	        }
	
	        queue += subqueue;
	        subqueue = '';
	
	        if (character === C_BACKSLASH) {
	          queue += C_BACKSLASH;
	          character = value.charAt(++index);
	        }
	
	        queue += character;
	      }
	
	      index++;
	    }
	
	    subvalue += queue;
	    url = queue;
	    index = subvalue.length;
	  }
	
	  /* Eat white-space. */
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (!whitespace(character)) {
	      break;
	    }
	
	    queue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	  subvalue += queue;
	
	  /* Eat the title. */
	  if (queue && has(markers, character)) {
	    index++;
	    subvalue += character;
	    queue = '';
	    marker = markers[character];
	    beforeTitle = subvalue;
	
	    /* In commonmark-mode, things are pretty easy: the
	     * marker cannot occur inside the title.
	     *
	     * Non-commonmark does, however, support nested
	     * delimiters. */
	    if (commonmark) {
	      while (index < length) {
	        character = value.charAt(index);
	
	        if (character === marker) {
	          break;
	        }
	
	        if (character === C_BACKSLASH) {
	          queue += C_BACKSLASH;
	          character = value.charAt(++index);
	        }
	
	        index++;
	        queue += character;
	      }
	
	      character = value.charAt(index);
	
	      if (character !== marker) {
	        return;
	      }
	
	      title = queue;
	      subvalue += queue + character;
	      index++;
	
	      while (index < length) {
	        character = value.charAt(index);
	
	        if (!whitespace(character)) {
	          break;
	        }
	
	        subvalue += character;
	        index++;
	      }
	    } else {
	      subqueue = '';
	
	      while (index < length) {
	        character = value.charAt(index);
	
	        if (character === marker) {
	          if (hasMarker) {
	            queue += marker + subqueue;
	            subqueue = '';
	          }
	
	          hasMarker = true;
	        } else if (!hasMarker) {
	          queue += character;
	        } else if (character === C_PAREN_CLOSE) {
	          subvalue += queue + marker + subqueue;
	          title = queue;
	          break;
	        } else if (whitespace(character)) {
	          subqueue += character;
	        } else {
	          queue += marker + subqueue + character;
	          subqueue = '';
	          hasMarker = false;
	        }
	
	        index++;
	      }
	    }
	  }
	
	  if (value.charAt(index) !== C_PAREN_CLOSE) {
	    return;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  subvalue += C_PAREN_CLOSE;
	
	  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end);
	
	  if (title) {
	    beforeTitle = eat(beforeTitle).test().end;
	    title = self.decode.raw(self.unescape(title), beforeTitle);
	  }
	
	  node = {
	    type: isImage ? 'image' : 'link',
	    title: title || null,
	    url: url
	  };
	
	  if (isImage) {
	    node.alt = self.decode.raw(self.unescape(content), now) || null;
	  } else {
	    exit = self.enterLink();
	    node.children = self.tokenizeInline(content, now);
	    exit();
	  }
	
	  return eat(subvalue)(node);
	}


/***/ },

/***/ 902:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:locate:link
	 * @fileoverview Locate a link.
	 */
	
	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  var link = value.indexOf('[', fromIndex);
	  var image = value.indexOf('![', fromIndex);
	
	  if (image === -1) {
	    return link;
	  }
	
	  /* Link can never be `-1` if an image is found, so we don’t need
	   * to check for that :) */
	  return link < image ? link : image;
	}


/***/ },

/***/ 903:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:reference
	 * @fileoverview Tokenise a reference.
	 */
	
	'use strict';
	
	var whitespace = __webpack_require__(872);
	var locate = __webpack_require__(902);
	var normalize = __webpack_require__(889);
	
	module.exports = reference;
	reference.locator = locate;
	
	var T_LINK = 'link';
	var T_IMAGE = 'image';
	var T_FOOTNOTE = 'footnote';
	var REFERENCE_TYPE_SHORTCUT = 'shortcut';
	var REFERENCE_TYPE_COLLAPSED = 'collapsed';
	var REFERENCE_TYPE_FULL = 'full';
	var C_CARET = '^';
	var C_BACKSLASH = '\\';
	var C_BRACKET_OPEN = '[';
	var C_BRACKET_CLOSE = ']';
	
	/* Tokenise a reference. */
	function reference(eat, value, silent) {
	  var self = this;
	  var character = value.charAt(0);
	  var index = 0;
	  var length = value.length;
	  var subvalue = '';
	  var intro = '';
	  var type = T_LINK;
	  var referenceType = REFERENCE_TYPE_SHORTCUT;
	  var content;
	  var identifier;
	  var now;
	  var node;
	  var exit;
	  var queue;
	  var bracketed;
	  var depth;
	
	  /* Check whether we’re eating an image. */
	  if (character === '!') {
	    type = T_IMAGE;
	    intro = character;
	    character = value.charAt(++index);
	  }
	
	  if (character !== C_BRACKET_OPEN) {
	    return;
	  }
	
	  index++;
	  intro += character;
	  queue = '';
	
	  /* Check whether we’re eating a footnote. */
	  if (
	    self.options.footnotes &&
	    type === T_LINK &&
	    value.charAt(index) === C_CARET
	  ) {
	    intro += C_CARET;
	    index++;
	    type = T_FOOTNOTE;
	  }
	
	  /* Eat the text. */
	  depth = 0;
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (character === C_BRACKET_OPEN) {
	      bracketed = true;
	      depth++;
	    } else if (character === C_BRACKET_CLOSE) {
	      if (!depth) {
	        break;
	      }
	
	      depth--;
	    }
	
	    if (character === C_BACKSLASH) {
	      queue += C_BACKSLASH;
	      character = value.charAt(++index);
	    }
	
	    queue += character;
	    index++;
	  }
	
	  subvalue = content = queue;
	  character = value.charAt(index);
	
	  if (character !== C_BRACKET_CLOSE) {
	    return;
	  }
	
	  index++;
	  subvalue += character;
	  queue = '';
	
	  while (index < length) {
	    character = value.charAt(index);
	
	    if (!whitespace(character)) {
	      break;
	    }
	
	    queue += character;
	    index++;
	  }
	
	  character = value.charAt(index);
	
	  if (character === C_BRACKET_OPEN) {
	    identifier = '';
	    queue += character;
	    index++;
	
	    while (index < length) {
	      character = value.charAt(index);
	
	      if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
	        break;
	      }
	
	      if (character === C_BACKSLASH) {
	        identifier += C_BACKSLASH;
	        character = value.charAt(++index);
	      }
	
	      identifier += character;
	      index++;
	    }
	
	    character = value.charAt(index);
	
	    if (character === C_BRACKET_CLOSE) {
	      referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
	      queue += identifier + character;
	      index++;
	    } else {
	      identifier = '';
	    }
	
	    subvalue += queue;
	    queue = '';
	  } else {
	    if (!content) {
	      return;
	    }
	
	    identifier = content;
	  }
	
	  /* Brackets cannot be inside the identifier. */
	  if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
	    return;
	  }
	
	  /* Inline footnotes cannot have an identifier. */
	  if (type === T_FOOTNOTE && referenceType !== REFERENCE_TYPE_SHORTCUT) {
	    type = T_LINK;
	    intro = C_BRACKET_OPEN + C_CARET;
	    content = C_CARET + content;
	  }
	
	  subvalue = intro + subvalue;
	
	  if (type === T_LINK && self.inLink) {
	    return null;
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
	    return eat(subvalue)({
	      type: 'footnote',
	      children: this.tokenizeInline(content, eat.now())
	    });
	  }
	
	  now = eat.now();
	  now.column += intro.length;
	  now.offset += intro.length;
	  identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;
	
	  node = {
	    type: type + 'Reference',
	    identifier: normalize(identifier)
	  };
	
	  if (type === T_LINK || type === T_IMAGE) {
	    node.referenceType = referenceType;
	  }
	
	  if (type === T_LINK) {
	    exit = self.enterLink();
	    node.children = self.tokenizeInline(content, now);
	    exit();
	  } else if (type === T_IMAGE) {
	    node.alt = self.decode.raw(self.unescape(content), now) || null;
	  }
	
	  return eat(subvalue)(node);
	}


/***/ },

/***/ 904:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:strong
	 * @fileoverview Tokenise strong.
	 */
	
	'use strict';
	
	var trim = __webpack_require__(878);
	var whitespace = __webpack_require__(872);
	var locate = __webpack_require__(905);
	
	module.exports = strong;
	strong.locator = locate;
	
	var C_ASTERISK = '*';
	var C_UNDERSCORE = '_';
	
	/* Tokenise strong. */
	function strong(eat, value, silent) {
	  var self = this;
	  var index = 0;
	  var character = value.charAt(index);
	  var now;
	  var pedantic;
	  var marker;
	  var queue;
	  var subvalue;
	  var length;
	  var prev;
	
	  if (
	    (character !== C_ASTERISK && character !== C_UNDERSCORE) ||
	    value.charAt(++index) !== character
	  ) {
	    return;
	  }
	
	  pedantic = self.options.pedantic;
	  marker = character;
	  subvalue = marker + marker;
	  length = value.length;
	  index++;
	  queue = character = '';
	
	  if (pedantic && whitespace(value.charAt(index))) {
	    return;
	  }
	
	  while (index < length) {
	    prev = character;
	    character = value.charAt(index);
	
	    if (
	      character === marker &&
	      value.charAt(index + 1) === marker &&
	      (!pedantic || !whitespace(prev))
	    ) {
	      character = value.charAt(index + 2);
	
	      if (character !== marker) {
	        if (!trim(queue)) {
	          return;
	        }
	
	        /* istanbul ignore if - never used (yet) */
	        if (silent) {
	          return true;
	        }
	
	        now = eat.now();
	        now.column += 2;
	        now.offset += 2;
	
	        return eat(subvalue + queue + subvalue)({
	          type: 'strong',
	          children: self.tokenizeInline(queue, now)
	        });
	      }
	    }
	
	    if (!pedantic && character === '\\') {
	      queue += character;
	      character = value.charAt(++index);
	    }
	
	    queue += character;
	    index++;
	  }
	}


/***/ },

/***/ 905:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:locate:strong
	 * @fileoverview Locate bold / strong / importance.
	 */
	
	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  var asterisk = value.indexOf('**', fromIndex);
	  var underscore = value.indexOf('__', fromIndex);
	
	  if (underscore === -1) {
	    return asterisk;
	  }
	
	  if (asterisk === -1) {
	    return underscore;
	  }
	
	  return underscore < asterisk ? underscore : asterisk;
	}


/***/ },

/***/ 906:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:emphasis
	 * @fileoverview Tokenise emphasis.
	 */
	
	'use strict';
	
	var trim = __webpack_require__(878);
	var word = __webpack_require__(907);
	var whitespace = __webpack_require__(872);
	var locate = __webpack_require__(908);
	
	module.exports = emphasis;
	emphasis.locator = locate;
	
	var C_ASTERISK = '*';
	var C_UNDERSCORE = '_';
	
	/* Tokenise emphasis. */
	function emphasis(eat, value, silent) {
	  var self = this;
	  var index = 0;
	  var character = value.charAt(index);
	  var now;
	  var pedantic;
	  var marker;
	  var queue;
	  var subvalue;
	  var length;
	  var prev;
	
	  if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
	    return;
	  }
	
	  pedantic = self.options.pedantic;
	  subvalue = marker = character;
	  length = value.length;
	  index++;
	  queue = character = '';
	
	  if (pedantic && whitespace(value.charAt(index))) {
	    return;
	  }
	
	  while (index < length) {
	    prev = character;
	    character = value.charAt(index);
	
	    if (character === marker && (!pedantic || !whitespace(prev))) {
	      character = value.charAt(++index);
	
	      if (character !== marker) {
	        if (!trim(queue) || prev === marker) {
	          return;
	        }
	
	        if (!pedantic && marker === C_UNDERSCORE && word(character)) {
	          queue += marker;
	          continue;
	        }
	
	        /* istanbul ignore if - never used (yet) */
	        if (silent) {
	          return true;
	        }
	
	        now = eat.now();
	        now.column++;
	        now.offset++;
	
	        return eat(subvalue + queue + marker)({
	          type: 'emphasis',
	          children: self.tokenizeInline(queue, now)
	        });
	      }
	
	      queue += marker;
	    }
	
	    if (!pedantic && character === '\\') {
	      queue += character;
	      character = value.charAt(++index);
	    }
	
	    queue += character;
	    index++;
	  }
	}


/***/ },

/***/ 907:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2016 Titus Wormer
	 * @license MIT
	 * @module is-word-character
	 * @fileoverview Check if a character is a word character.
	 */
	
	'use strict';
	
	/* eslint-env commonjs */
	
	/* Expose. */
	module.exports = wordCharacter;
	
	/* Methods. */
	var fromCode = String.fromCharCode;
	
	/* Constants. */
	var re = /\w/;
	
	/**
	 * Check whether the given character code, or the character
	 * code at the first character, is a word character.
	 *
	 * @param {string|number} character
	 * @return {boolean} - Whether `character` is a word character.
	 */
	function wordCharacter(character) {
	  return re.test(
	    typeof character === 'number' ? fromCode(character) : character.charAt(0)
	  );
	}


/***/ },

/***/ 908:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:locate:emphasis
	 * @fileoverview Locate italics / emphasis.
	 */
	
	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  var asterisk = value.indexOf('*', fromIndex);
	  var underscore = value.indexOf('_', fromIndex);
	
	  if (underscore === -1) {
	    return asterisk;
	  }
	
	  if (asterisk === -1) {
	    return underscore;
	  }
	
	  return underscore < asterisk ? underscore : asterisk;
	}


/***/ },

/***/ 909:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:delete
	 * @fileoverview Tokenise strikethrough.
	 */
	
	'use strict';
	
	var whitespace = __webpack_require__(872);
	var locate = __webpack_require__(910);
	
	module.exports = strikethrough;
	strikethrough.locator = locate;
	
	var C_TILDE = '~';
	var DOUBLE = '~~';
	
	/* Tokenise strikethrough. */
	function strikethrough(eat, value, silent) {
	  var self = this;
	  var character = '';
	  var previous = '';
	  var preceding = '';
	  var subvalue = '';
	  var index;
	  var length;
	  var now;
	
	  if (
	    !self.options.gfm ||
	    value.charAt(0) !== C_TILDE ||
	    value.charAt(1) !== C_TILDE ||
	    whitespace(value.charAt(2))
	  ) {
	    return;
	  }
	
	  index = 1;
	  length = value.length;
	  now = eat.now();
	  now.column += 2;
	  now.offset += 2;
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (
	      character === C_TILDE &&
	      previous === C_TILDE &&
	      (!preceding || !whitespace(preceding))
	    ) {
	      /* istanbul ignore if - never used (yet) */
	      if (silent) {
	        return true;
	      }
	
	      return eat(DOUBLE + subvalue + DOUBLE)({
	        type: 'delete',
	        children: self.tokenizeInline(subvalue, now)
	      });
	    }
	
	    subvalue += previous;
	    preceding = previous;
	    previous = character;
	  }
	}


/***/ },

/***/ 910:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:locate:delete
	 * @fileoverview Locate strikethrough.
	 */
	
	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  return value.indexOf('~~', fromIndex);
	}


/***/ },

/***/ 911:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:code-inline
	 * @fileoverview Tokenise inline code.
	 */
	
	'use strict';
	
	var whitespace = __webpack_require__(872);
	var locate = __webpack_require__(912);
	
	module.exports = inlineCode;
	inlineCode.locator = locate;
	
	var C_TICK = '`';
	
	/* Tokenise inline code. */
	function inlineCode(eat, value, silent) {
	  var length = value.length;
	  var index = 0;
	  var queue = '';
	  var tickQueue = '';
	  var contentQueue;
	  var subqueue;
	  var count;
	  var openingCount;
	  var subvalue;
	  var character;
	  var found;
	  var next;
	
	  while (index < length) {
	    if (value.charAt(index) !== C_TICK) {
	      break;
	    }
	
	    queue += C_TICK;
	    index++;
	  }
	
	  if (!queue) {
	    return;
	  }
	
	  subvalue = queue;
	  openingCount = index;
	  queue = '';
	  next = value.charAt(index);
	  count = 0;
	
	  while (index < length) {
	    character = next;
	    next = value.charAt(index + 1);
	
	    if (character === C_TICK) {
	      count++;
	      tickQueue += character;
	    } else {
	      count = 0;
	      queue += character;
	    }
	
	    if (count && next !== C_TICK) {
	      if (count === openingCount) {
	        subvalue += queue + tickQueue;
	        found = true;
	        break;
	      }
	
	      queue += tickQueue;
	      tickQueue = '';
	    }
	
	    index++;
	  }
	
	  if (!found) {
	    if (openingCount % 2 !== 0) {
	      return;
	    }
	
	    queue = '';
	  }
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  contentQueue = subqueue = '';
	  length = queue.length;
	  index = -1;
	
	  while (++index < length) {
	    character = queue.charAt(index);
	
	    if (whitespace(character)) {
	      subqueue += character;
	      continue;
	    }
	
	    if (subqueue) {
	      if (contentQueue) {
	        contentQueue += subqueue;
	      }
	
	      subqueue = '';
	    }
	
	    contentQueue += character;
	  }
	
	  return eat(subvalue)({
	    type: 'inlineCode',
	    value: contentQueue
	  });
	}


/***/ },

/***/ 912:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:locate:code-inline
	 * @fileoverview Locate inline code.
	 */
	
	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  return value.indexOf('`', fromIndex);
	}


/***/ },

/***/ 913:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:break
	 * @fileoverview Tokenise a break.
	 */
	
	'use strict';
	
	var locate = __webpack_require__(914);
	
	module.exports = hardBreak;
	hardBreak.locator = locate;
	
	var MIN_BREAK_LENGTH = 2;
	
	/* Tokenise a break. */
	function hardBreak(eat, value, silent) {
	  var self = this;
	  var breaks = self.options.breaks;
	  var length = value.length;
	  var index = -1;
	  var queue = '';
	  var character;
	
	  while (++index < length) {
	    character = value.charAt(index);
	
	    if (character === '\n') {
	      if (!breaks && index < MIN_BREAK_LENGTH) {
	        return;
	      }
	
	      /* istanbul ignore if - never used (yet) */
	      if (silent) {
	        return true;
	      }
	
	      queue += character;
	
	      return eat(queue)({type: 'break'});
	    }
	
	    if (character !== ' ') {
	      return;
	    }
	
	    queue += character;
	  }
	}


/***/ },

/***/ 914:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:locate:break
	 * @fileoverview Locate a break.
	 */
	
	'use strict';
	
	module.exports = locate;
	
	function locate(value, fromIndex) {
	  var index = value.indexOf('\n', fromIndex);
	
	  while (index > fromIndex) {
	    if (value.charAt(index - 1) !== ' ') {
	      break;
	    }
	
	    index--;
	  }
	
	  return index;
	}


/***/ },

/***/ 915:
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer
	 * @license MIT
	 * @module remark:parse:tokenize:text
	 * @fileoverview Tokenise text.
	 */
	
	'use strict';
	
	module.exports = text;
	
	/* Tokenise text. */
	function text(eat, value, silent) {
	  var self = this;
	  var methods;
	  var tokenizers;
	  var index;
	  var length;
	  var subvalue;
	  var position;
	  var tokenizer;
	  var name;
	  var min;
	  var now;
	
	  /* istanbul ignore if - never used (yet) */
	  if (silent) {
	    return true;
	  }
	
	  methods = self.inlineMethods;
	  length = methods.length;
	  tokenizers = self.inlineTokenizers;
	  index = -1;
	  min = value.length;
	
	  while (++index < length) {
	    name = methods[index];
	
	    if (name === 'text' || !tokenizers[name]) {
	      continue;
	    }
	
	    tokenizer = tokenizers[name].locator;
	
	    if (!tokenizer) {
	      eat.file.fail('Missing locator: `' + name + '`');
	    }
	
	    position = tokenizer.call(self, value, 1);
	
	    if (position !== -1 && position < min) {
	      min = position;
	    }
	  }
	
	  subvalue = value.slice(0, min);
	  now = eat.now();
	
	  self.decode(subvalue, now, function (content, position, source) {
	    eat(source || content)({
	      type: 'text',
	      value: content
	    });
	  });
	}


/***/ },

/***/ 916:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObj = __webpack_require__(917);
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Sources cannot be null or undefined');
		}
	
		return Object(val);
	}
	
	function assignKey(to, from, key) {
		var val = from[key];
	
		if (val === undefined || val === null) {
			return;
		}
	
		if (hasOwnProperty.call(to, key)) {
			if (to[key] === undefined || to[key] === null) {
				throw new TypeError('Cannot convert undefined or null to object (' + key + ')');
			}
		}
	
		if (!hasOwnProperty.call(to, key) || !isObj(val)) {
			to[key] = val;
		} else {
			to[key] = assign(Object(to[key]), from[key]);
		}
	}
	
	function assign(to, from) {
		if (to === from) {
			return to;
		}
	
		from = Object(from);
	
		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				assignKey(to, from, key);
			}
		}
	
		if (Object.getOwnPropertySymbols) {
			var symbols = Object.getOwnPropertySymbols(from);
	
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					assignKey(to, from, symbols[i]);
				}
			}
		}
	
		return to;
	}
	
	module.exports = function deepAssign(target) {
		target = toObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			assign(target, arguments[s]);
		}
	
		return target;
	};


/***/ },

/***/ 917:
/***/ function(module, exports) {

	'use strict';
	module.exports = function (x) {
		var type = typeof x;
		return x !== null && (type === 'object' || type === 'function');
	};


/***/ },

/***/ 918:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames3 = __webpack_require__(721);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	var _Spinning = __webpack_require__(795);
	
	var _Spinning2 = _interopRequireDefault(_Spinning);
	
	var _InfiniteScroll = __webpack_require__(919);
	
	var _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);
	
	var _Selection = __webpack_require__(920);
	
	var _Selection2 = _interopRequireDefault(_Selection);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _KeyboardAccelerators = __webpack_require__(766);
	
	var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);
	
	var _Responsive = __webpack_require__(778);
	
	var _Responsive2 = _interopRequireDefault(_Responsive);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Announcer = __webpack_require__(772);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.TABLE;
	var SELECTED_CLASS = CLASS_ROOT + '-row--selected';
	var ACTIVE_CLASS = CLASS_ROOT + '-row--active';
	// empirical number describing a minimum cell width for a
	// table to be presented in column-mode.
	var MIN_CELL_WIDTH = 120;
	
	var Table = function (_Component) {
	  _inherits(Table, _Component);
	
	  function Table(props, context) {
	    _classCallCheck(this, Table);
	
	    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props, context));
	
	    _this._onClick = _this._onClick.bind(_this);
	    _this._onResize = _this._onResize.bind(_this);
	    _this._layout = _this._layout.bind(_this);
	    _this._onResponsive = _this._onResponsive.bind(_this);
	    _this._onPreviousRow = _this._onPreviousRow.bind(_this);
	    _this._onNextRow = _this._onNextRow.bind(_this);
	    _this._onEnter = _this._onEnter.bind(_this);
	    _this._fireClick = _this._fireClick.bind(_this);
	    _this._announceRow = _this._announceRow.bind(_this);
	    _this._onViewPortChange = _this._onViewPortChange.bind(_this);
	
	    _this.state = {
	      activeRow: undefined,
	      mouseActive: false,
	      selected: _Selection2.default.normalizeIndexes(props.selected),
	      columnMode: false,
	      rebuildMirror: props.scrollable,
	      small: false
	    };
	    return _this;
	  }
	
	  _createClass(Table, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          onMore = _props.onMore,
	          selectable = _props.selectable,
	          scrollable = _props.scrollable;
	      var _state = this.state,
	          columnMode = _state.columnMode,
	          small = _state.small;
	
	      this._setSelection();
	      if (scrollable && !columnMode && !small) {
	        this._buildMirror();
	        this._alignMirror();
	      }
	      if (this.props.onMore) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.moreRef, onMore);
	      }
	      this._adjustBodyCells();
	      setTimeout(this._layout, 50);
	      window.addEventListener('resize', this._onResize);
	
	      if (selectable) {
	        // only listen for navigation keys if the table row can be selected
	        this._keyboardHandlers = {
	          left: this._onPreviousRow,
	          up: this._onPreviousRow,
	          right: this._onNextRow,
	          down: this._onNextRow,
	          enter: this._onEnter,
	          space: this._onEnter
	        };
	        _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);
	      }
	
	      this._responsive = _Responsive2.default.start(this._onViewPortChange);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	        this._scroll = undefined;
	      }
	      if (nextProps.selected !== undefined) {
	        this.setState({
	          selected: _Selection2.default.normalizeIndexes(nextProps.selected)
	        });
	      }
	
	      this.setState({
	        rebuildMirror: nextProps.scrollable
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _props2 = this.props,
	          onMore = _props2.onMore,
	          selectable = _props2.selectable,
	          scrollable = _props2.scrollable;
	      var _state2 = this.state,
	          columnMode = _state2.columnMode,
	          rebuildMirror = _state2.rebuildMirror,
	          selected = _state2.selected,
	          small = _state2.small;
	
	      if (JSON.stringify(selected) !== JSON.stringify(prevState.selected)) {
	        this._setSelection();
	      }
	      if (rebuildMirror && !columnMode) {
	        this._buildMirror();
	        this.setState({ rebuildMirror: false });
	      }
	      if (scrollable && !columnMode && !small) {
	        this._alignMirror();
	      }
	      if (onMore && !this._scroll) {
	        this._scroll = _InfiniteScroll2.default.startListeningForScroll(this.moreRef, onMore);
	      }
	      this._adjustBodyCells();
	      this._layout();
	
	      if (selectable) {
	        // only listen for navigation keys if the table row can be selected
	        this._keyboardHandlers = {
	          left: this._onPreviousRow,
	          up: this._onPreviousRow,
	          right: this._onNextRow,
	          down: this._onNextRow,
	          enter: this._onEnter,
	          space: this._onEnter
	        };
	        _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var selectable = this.props.selectable;
	
	      if (this._scroll) {
	        _InfiniteScroll2.default.stopListeningForScroll(this._scroll);
	      }
	      clearTimeout(this._resizeTimer);
	      window.removeEventListener('resize', this._onResize);
	
	      if (selectable) {
	        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
	      }
	
	      this._responsive.stop();
	    }
	  }, {
	    key: '_onViewPortChange',
	    value: function _onViewPortChange(small) {
	      this.setState({ small: small, rebuildMirror: true });
	    }
	  }, {
	    key: '_announceRow',
	    value: function _announceRow(label) {
	      var intl = this.context.intl;
	
	      var enterSelectMessage = _Intl2.default.getMessage(intl, 'Enter Select');
	      (0, _Announcer.announce)(label + ' ' + enterSelectMessage);
	    }
	  }, {
	    key: '_onResponsive',
	    value: function _onResponsive() {
	      var columnMode = this.state.columnMode;
	
	      if (this.containerRef && this.tableRef) {
	        var availableSize = this.containerRef.offsetWidth;
	        var numberOfCells = this.tableRef.querySelectorAll('thead th').length;
	
	        if (numberOfCells * MIN_CELL_WIDTH > availableSize) {
	          if (columnMode === false) {
	            this.setState({ columnMode: true });
	          }
	        } else {
	          if (columnMode === true) {
	            this.setState({ columnMode: false });
	          }
	        }
	      }
	    }
	  }, {
	    key: '_container',
	    value: function _container() {
	      var containerElement = this.tableRef;
	      if (containerElement) {
	        var tableBodies = containerElement.getElementsByTagName('TBODY');
	        if (tableBodies.length > 0) {
	          containerElement = tableBodies[0];
	        }
	      }
	      return containerElement;
	    }
	  }, {
	    key: '_setSelection',
	    value: function _setSelection() {
	      var selected = this.state.selected;
	
	      _Selection2.default.setClassFromIndexes({
	        containerElement: this._container(),
	        childSelector: 'tr',
	        selectedClass: SELECTED_CLASS,
	        selectedIndexes: selected
	      });
	    }
	  }, {
	    key: '_onPreviousRow',
	    value: function _onPreviousRow(event) {
	      var _this2 = this;
	
	      if (this.tableRef.contains(document.activeElement)) {
	        event.preventDefault();
	        var activeRow = this.state.activeRow;
	
	        var rows = this.tableRef.querySelectorAll('tbody tr');
	        if (rows && rows.length > 0) {
	          if (activeRow === undefined) {
	            rows[0].classList.add(ACTIVE_CLASS);
	            this.setState({ activeRow: 0 }, function () {
	              _this2._announceRow(rows[_this2.state.activeRow].innerText);
	            });
	          } else if (activeRow - 1 >= 0) {
	            rows[activeRow].classList.remove(ACTIVE_CLASS);
	            rows[activeRow - 1].classList.add(ACTIVE_CLASS);
	            this.setState({ activeRow: activeRow - 1 }, function () {
	              _this2._announceRow(rows[_this2.state.activeRow].innerText);
	            });
	          }
	        }
	
	        //stop event propagation
	        return true;
	      }
	    }
	  }, {
	    key: '_onNextRow',
	    value: function _onNextRow(event) {
	      var _this3 = this;
	
	      if (this.tableRef.contains(document.activeElement)) {
	        event.preventDefault();
	        var activeRow = this.state.activeRow;
	
	        var rows = this.tableRef.querySelectorAll('tbody tr');
	        if (rows && rows.length > 0) {
	          if (activeRow === undefined) {
	            rows[0].classList.add(ACTIVE_CLASS);
	            this.setState({ activeRow: 0 }, function () {
	              _this3._announceRow(rows[_this3.state.activeRow].innerText);
	            });
	          } else if (activeRow + 1 <= rows.length - 1) {
	            rows[activeRow].classList.remove(ACTIVE_CLASS);
	            rows[activeRow + 1].classList.add(ACTIVE_CLASS);
	            this.setState({ activeRow: activeRow + 1 }, function () {
	              _this3._announceRow(rows[_this3.state.activeRow].innerText);
	            });
	          }
	        }
	
	        //stop event propagation
	        return true;
	      }
	    }
	  }, {
	    key: '_fireClick',
	    value: function _fireClick(element, shiftKey) {
	      var event = void 0;
	      try {
	        event = new MouseEvent('click', {
	          'bubbles': true,
	          'cancelable': true,
	          'shiftKey': shiftKey
	        });
	      } catch (e) {
	        // IE11 workaround.
	        event = document.createEvent('Event');
	        event.initEvent('click', true, true);
	      }
	      // We use dispatchEvent to have the browser fill out the event fully.
	      element.dispatchEvent(event);
	    }
	  }, {
	    key: '_onEnter',
	    value: function _onEnter(event) {
	      var activeRow = this.state.activeRow;
	      var intl = this.context.intl;
	
	      if (this.tableRef.contains(document.activeElement) && activeRow !== undefined) {
	        var rows = this.tableRef.querySelectorAll('tbody tr');
	        this._fireClick(rows[activeRow], event.shiftKey);
	        rows[activeRow].classList.remove(ACTIVE_CLASS);
	        var label = rows[activeRow].innerText;
	        var selectedMessage = _Intl2.default.getMessage(intl, 'Selected');
	        (0, _Announcer.announce)(label + ' ' + selectedMessage);
	      }
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick(event) {
	      var _props3 = this.props,
	          onSelect = _props3.onSelect,
	          selectable = _props3.selectable,
	          selected = _props3.selected;
	
	
	      var selection = _Selection2.default.onClick(event, {
	        containerElement: this._container(),
	        childSelector: 'tr',
	        selectedClass: SELECTED_CLASS,
	        multiSelect: 'multiple' === selectable,
	        priorSelectedIndexes: this.state.selected
	      });
	      // only set the selected state and classes if the caller isn't managing it.
	      if (selected === undefined) {
	        this.setState({ selected: selection }, this._setSelection);
	      }
	
	      if (onSelect) {
	        onSelect(selection.length === 1 ? selection[0] : selection);
	      }
	    }
	  }, {
	    key: '_adjustBodyCells',
	    value: function _adjustBodyCells() {
	      // adjust table body cells to have link to the header
	      // so that in responsive mode it displays the text as content in css.
	      // IMPORTANT: non-text header cells, such as icon, are rendered as empty
	      // headers.
	      if (this.tableRef) {
	        var headerCells = this.tableRef.querySelectorAll('thead th');
	        if (headerCells.length > 0) {
	          var increments = [];
	          [].forEach.call(headerCells, function (cell) {
	            var colspan = cell.getAttribute('colspan');
	            increments.push(colspan ? parseInt(colspan) : 1);
	          });
	
	          var rows = this.tableRef.querySelectorAll('tbody tr');
	
	          [].forEach.call(rows, function (row) {
	            var incrementCount = 0;
	            var headerIndex = 0;
	            [].forEach.call(row.cells, function (cell) {
	              cell.setAttribute('data-th', headerCells[headerIndex].innerText || headerCells[headerIndex].textContent);
	              incrementCount++;
	              if (incrementCount === increments[headerIndex]) {
	                incrementCount = 0;
	                headerIndex++;
	              }
	            });
	          });
	        }
	      }
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      // debounce
	      clearTimeout(this._resizeTimer);
	      this._resizeTimer = setTimeout(this._layout, 50);
	    }
	  }, {
	    key: '_layout',
	    value: function _layout() {
	      this._alignMirror();
	      this._onResponsive();
	    }
	  }, {
	    key: '_buildMirror',
	    value: function _buildMirror() {
	      var tableElement = this.tableRef;
	      if (tableElement) {
	        var cells = tableElement.querySelectorAll('thead tr th');
	        var mirrorElement = this.mirrorRef;
	        if (mirrorElement) {
	          var mirrorRow = mirrorElement.querySelectorAll('thead tr')[0];
	          while (mirrorRow.hasChildNodes()) {
	            mirrorRow.removeChild(mirrorRow.lastChild);
	          }
	          for (var i = 0; i < cells.length; i++) {
	            mirrorRow.appendChild(cells[i].cloneNode(true));
	          }
	        }
	      }
	    }
	  }, {
	    key: '_alignMirror',
	    value: function _alignMirror() {
	      if (this.mirrorRef) {
	        var tableElement = this.tableRef;
	        var cells = tableElement.querySelectorAll('thead tr th');
	        var mirrorElement = this.mirrorRef;
	        var mirrorCells = mirrorElement.querySelectorAll('thead tr th');
	
	        var rect = tableElement.getBoundingClientRect();
	        mirrorElement.style.width = '' + Math.floor(rect.right - rect.left) + 'px';
	
	        var height = 0;
	        for (var i = 0; i < cells.length; i++) {
	          rect = cells[i].getBoundingClientRect();
	          mirrorCells[i].style.width = '' + Math.floor(rect.right - rect.left) + 'px';
	          mirrorCells[i].style.height = '' + Math.floor(rect.bottom - rect.top) + 'px';
	          height = Math.max(height, Math.floor(rect.bottom - rect.top));
	        }
	        mirrorElement.style.height = '' + height + 'px';
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames,
	          _this4 = this;
	
	      var _props4 = this.props,
	          a11yTitle = _props4.a11yTitle,
	          children = _props4.children,
	          className = _props4.className,
	          _onBlur = _props4.onBlur,
	          _onFocus = _props4.onFocus,
	          onMore = _props4.onMore,
	          _onMouseDown = _props4.onMouseDown,
	          _onMouseUp = _props4.onMouseUp,
	          responsive = _props4.responsive,
	          scrollable = _props4.scrollable,
	          selectable = _props4.selectable,
	          props = _objectWithoutProperties(_props4, ['a11yTitle', 'children', 'className', 'onBlur', 'onFocus', 'onMore', 'onMouseDown', 'onMouseUp', 'responsive', 'scrollable', 'selectable']);
	
	      delete props.onSelect;
	      delete props.selected;
	      var _state3 = this.state,
	          activeRow = _state3.activeRow,
	          columnMode = _state3.columnMode,
	          focus = _state3.focus,
	          mouseActive = _state3.mouseActive,
	          small = _state3.small;
	      var intl = this.context.intl;
	
	      var classes = (0, _classnames4.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--small', responsive && columnMode), _defineProperty(_classnames, CLASS_ROOT + '--selectable', selectable), _defineProperty(_classnames, CLASS_ROOT + '--scrollable', scrollable && !small), _classnames), className);
	
	      var mirror = void 0;
	      if (scrollable && !small) {
	        mirror = _react2.default.createElement(
	          'table',
	          { ref: function ref(_ref) {
	              return _this4.mirrorRef = _ref;
	            },
	            className: CLASS_ROOT + '__mirror' },
	          _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement('tr', null)
	          )
	        );
	      }
	
	      var more = void 0;
	      if (onMore) {
	        more = _react2.default.createElement(
	          'div',
	          { ref: function ref(_ref2) {
	              return _this4.moreRef = _ref2;
	            }, className: CLASS_ROOT + '__more' },
	          _react2.default.createElement(_Spinning2.default, null)
	        );
	      }
	
	      var selectableProps = void 0;
	      if (selectable) {
	        var multiSelectMessage = selectable === 'multiple' ? '(' + _Intl2.default.getMessage(intl, 'Multi Select') + ')' : '';
	        var tableMessage = a11yTitle || _Intl2.default.getMessage(intl, 'Table');
	        var navigationHelpMessage = _Intl2.default.getMessage(intl, 'Navigation Help');
	        selectableProps = {
	          'aria-label': tableMessage + ' ' + multiSelectMessage + ' ' + navigationHelpMessage,
	          tabIndex: '0',
	          onClick: this._onClick,
	          onMouseDown: function onMouseDown(event) {
	            _this4.setState({ mouseActive: true });
	            if (_onMouseDown) {
	              _onMouseDown(event);
	            }
	          },
	          onMouseUp: function onMouseUp(event) {
	            _this4.setState({ mouseActive: false });
	            if (_onMouseUp) {
	              _onMouseUp(event);
	            }
	          },
	          onFocus: function onFocus(event) {
	            if (mouseActive === false) {
	              _this4.setState({ focus: true });
	            }
	            if (_onFocus) {
	              _onFocus(event);
	            }
	          },
	          onBlur: function onBlur(event) {
	            if (activeRow) {
	              var rows = _this4.tableRef.querySelectorAll('tbody tr');
	              rows[activeRow].classList.remove(ACTIVE_CLASS);
	            }
	            _this4.setState({ focus: false, activeRow: undefined });
	            if (_onBlur) {
	              _onBlur(event);
	            }
	          }
	        };
	      }
	
	      var tableClasses = (0, _classnames4.default)(CLASS_ROOT + '__table', _defineProperty({}, CLASS_ROOT + '__table--focus', focus));
	
	      return _react2.default.createElement(
	        'div',
	        _extends({ ref: function ref(_ref4) {
	            return _this4.containerRef = _ref4;
	          } }, props, { className: classes }),
	        mirror,
	        _react2.default.createElement(
	          'table',
	          _extends({ ref: function ref(_ref3) {
	              return _this4.tableRef = _ref3;
	            } }, selectableProps, {
	            className: tableClasses }),
	          children
	        ),
	        more
	      );
	    }
	  }]);
	
	  return Table;
	}(_react.Component);
	
	Table.displayName = 'Table';
	exports.default = Table;
	
	
	Table.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Table.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  onMore: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  responsive: _react.PropTypes.bool,
	  scrollable: _react.PropTypes.bool,
	  selectable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['multiple'])]),
	  selected: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)])
	};
	
	Table.defaultProps = {
	  responsive: true
	};
	module.exports = exports['default'];

/***/ },

/***/ 919:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _DOM = __webpack_require__(767);
	
	var SCROLL_MORE_DELAY = 500; // when the user scrolls
	// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var SCROLL_MORE_INITIAL_DELAY = 50; // when we start out at the bottom already
	
	function _evaluate(scrollState) {
	  (scrollState.scrollParents || []).forEach(function (scrollParent) {
	    // are we at the bottom?
	    var bottom;
	    if (scrollParent === document) {
	      bottom = window.innerHeight;
	    } else {
	      bottom = scrollParent.getBoundingClientRect().bottom;
	    }
	    var indicatorRect = scrollState.indicatorElement.getBoundingClientRect();
	    // Only if bottom isn't zero. This can happen when content hasn't
	    // arrived yet.
	    // 10px offset is to ensure onEnd() gets called
	    if (bottom && indicatorRect.bottom <= bottom + 10) {
	      scrollState.onEnd();
	    }
	  });
	}
	
	function _onScroll(scrollState) {
	  // delay a bit to ride out quick users
	  clearTimeout(scrollState.scrollTimer);
	  scrollState.scrollTimer = setTimeout(function () {
	    return _evaluate(scrollState);
	  }, SCROLL_MORE_DELAY);
	}
	
	function _onResize(scrollState) {
	  clearTimeout(scrollState.scrollTimer);
	  scrollState.scrollTimer = setTimeout(function () {
	    return _evaluate(scrollState);
	  }, SCROLL_MORE_DELAY);
	}
	
	exports.default = {
	  startListeningForScroll: function startListeningForScroll(indicatorElement, onEnd) {
	    var scrollState = {
	      onEnd: onEnd,
	      indicatorElement: indicatorElement,
	      scrollParents: (0, _DOM.findScrollParents)(indicatorElement)
	    };
	
	    scrollState._onResize = _onResize.bind(this, scrollState);
	    scrollState._onScroll = _onScroll.bind(this, scrollState);
	
	    window.addEventListener("resize", scrollState._onResize);
	    // check in case we're already at the bottom and the indicator is visible
	    (scrollState.scrollParents || []).forEach(function (scrollParent) {
	      scrollParent.addEventListener("scroll", scrollState._onScroll);
	      if (scrollParent === document || scrollParent === document.body) {
	        var rect = indicatorElement.getBoundingClientRect();
	        if (rect.top < window.innerHeight) {
	          scrollState.scrollTimer = setTimeout(onEnd, SCROLL_MORE_INITIAL_DELAY);
	        }
	      }
	    });
	    return scrollState;
	  },
	  stopListeningForScroll: function stopListeningForScroll(scrollState) {
	    (scrollState.scrollParents || []).forEach(function (scrollParent) {
	      clearTimeout(scrollState.scrollTimer);
	      scrollParent.removeEventListener("scroll", scrollState._onScroll);
	      window.removeEventListener("resize", scrollState._onResize);
	    });
	    scrollState.scrollParents = undefined;
	  }
	};
	module.exports = exports["default"];

/***/ },

/***/ 920:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// (C) Copyright 2015 Hewlett Packard Enterprise Development LP
	
	// Functions to manage selection via both child index and a specific class name.
	
	// Ensures it is an array.
	function normalizeIndexes(selectedIndexes) {
	  var result = void 0;
	  if (undefined === selectedIndexes || null === selectedIndexes) {
	    result = [];
	  } else if (typeof selectedIndexes === 'number') {
	    result = [selectedIndexes];
	  } else {
	    result = selectedIndexes;
	  }
	  return result;
	}
	
	// Clears any selected items
	// options: {containerElement: , selectedClass: }
	function clearClass(options) {
	  if (options && options.containerElement) {
	    var items = options.containerElement.querySelectorAll("." + options.selectedClass);
	    for (var i = 0; i < items.length; i++) {
	      items[i].classList.remove(options.selectedClass);
	    }
	  }
	}
	
	// Sets the selectedClass on all children whose index is in selectedIndexes.
	// options: {containerElement: , childSelector: , selectedClass: ,
	//    selectedIndexes: []}
	function setClassFromIndexes(options) {
	  clearClass(options);
	  if (options && options.containerElement && options.selectedIndexes) {
	    var items = options.containerElement.querySelectorAll(options.childSelector);
	    options.selectedIndexes.forEach(function (index) {
	      if (items[index]) {
	        items[index].classList.add(options.selectedClass);
	      }
	    });
	  }
	}
	
	// Gets the selected selectedClass on all children whose index is in
	// selectedIndexes.
	// options: {containerElement: , childSelector: , selectedClass: }
	function getIndexesFromClass(options) {
	  var items = options.containerElement.querySelectorAll(options.childSelector);
	  var selectedIndexes = [];
	  for (var i = 0; i < items.length; i++) {
	    if (items[i].classList.contains(options.selectedClass)) {
	      selectedIndexes.push(i);
	    }
	  }
	  return selectedIndexes;
	}
	
	// Returns a new selectedIndexes array with the latest selected indexes
	// options: {containerElement: , childSelector: , //selectedClass: ,
	//   multiSelect: true|false, priorSelectedIndexes: []}
	function onClick(event, options) {
	
	  // Go up the DOM tree until we match the childSelector
	  var item = event.target;
	  var matchFunction = item.matches || item.matchesElement || item.msMatchesSelector;
	  while (matchFunction && item && !matchFunction.bind(item, options.childSelector)()) {
	    item = item.parentNode;
	    matchFunction = item.matches || item.matchesElement || item.msMatchesSelector;
	  }
	
	  // determine the index of the clicked element
	  var indexInContainer = 0;
	  var previousItem = item.previousSibling;
	  while (previousItem != null) {
	    previousItem = previousItem.previousSibling;
	    indexInContainer += 1;
	  }
	
	  var selectedIndexes = void 0; // what will be returned
	
	  if (!event.ctrlKey && !event.metaKey && !event.shiftKey) {
	
	    selectedIndexes = [indexInContainer];
	  } else {
	    // was it selected?
	    var indexInPrior = options.priorSelectedIndexes.indexOf(indexInContainer);
	
	    if (!options.multiSelect) {
	
	      if (-1 !== indexInPrior && (event.ctrlKey || event.metaKey)) {
	        selectedIndexes = [];
	      } else {
	        selectedIndexes = options.priorSelectedIndexes;
	      }
	    } else {
	      // multi-select
	
	      // make a copy of the prior list so we can modify it
	      selectedIndexes = options.priorSelectedIndexes.slice(0);
	
	      if (event.shiftKey) {
	
	        // select from nearest selected item to the currently selected item
	        var closestIndex = -1;
	        selectedIndexes.forEach(function (selectIndex, arrayIndex) {
	          if (-1 === closestIndex) {
	            closestIndex = selectIndex;
	          } else if (Math.abs(indexInContainer - selectIndex) < Math.abs(indexInContainer - closestIndex)) {
	            closestIndex = selectIndex;
	          }
	        });
	
	        for (var i = indexInContainer; i !== closestIndex;) {
	          selectedIndexes.push(i);
	          if (closestIndex < indexInContainer) {
	            i -= 1;
	          } else {
	            i += 1;
	          }
	        }
	
	        if (indexInPrior > -1) {
	          selectedIndexes.splice(indexInPrior, 1);
	        }
	
	        // Remove text selection. This often happens when shift multi-selecting
	        window.getSelection().removeAllRanges();
	      } else {
	        // toggle
	        if (-1 === indexInPrior) {
	          selectedIndexes.push(indexInContainer);
	        } else {
	          selectedIndexes.splice(indexInPrior, 1);
	        }
	      }
	    }
	  }
	
	  return selectedIndexes;
	}
	
	exports.default = {
	  normalizeIndexes: normalizeIndexes,
	  clearClass: clearClass,
	  getIndexesFromClass: getIndexesFromClass,
	  setClassFromIndexes: setClassFromIndexes,
	  onClick: onClick
	};
	module.exports = exports["default"];

/***/ },

/***/ 921:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames3 = __webpack_require__(721);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	var _Label = __webpack_require__(823);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.IMAGE;
	
	var Image = function (_Component) {
	  _inherits(Image, _Component);
	
	  function Image() {
	    _classCallCheck(this, Image);
	
	    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
	  }
	
	  _createClass(Image, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          align = _props.align,
	          caption = _props.caption,
	          className = _props.className,
	          full = _props.full,
	          mask = _props.mask,
	          size = _props.size,
	          fit = _props.fit,
	          props = _objectWithoutProperties(_props, ['align', 'caption', 'className', 'full', 'mask', 'size', 'fit']);
	
	      var classes = (0, _classnames4.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--' + fit, fit), _defineProperty(_classnames, CLASS_ROOT + '--full', typeof full === 'boolean' && full), _defineProperty(_classnames, CLASS_ROOT + '--full-' + full, typeof full === 'string'), _defineProperty(_classnames, CLASS_ROOT + '--mask', mask), _defineProperty(_classnames, CLASS_ROOT + '--align-top', align && align.top), _defineProperty(_classnames, CLASS_ROOT + '--align-bottom', align && align.bottom), _defineProperty(_classnames, CLASS_ROOT + '--align-left', align && align.left), _defineProperty(_classnames, CLASS_ROOT + '--align-right', align && align.right), _classnames), className);
	
	      var captionText = typeof caption === 'string' ? caption : props.alt;
	      var imgNode = _react2.default.createElement('img', _extends({}, props, { className: classes }));
	
	      var labelRoot = CLASS_ROOT + '__caption';
	      var labelClasses = (0, _classnames4.default)(labelRoot, _defineProperty({}, labelRoot + '--' + size, size));
	      return caption && captionText ? _react2.default.createElement(
	        'span',
	        { className: CLASS_ROOT + '__container' },
	        imgNode,
	        _react2.default.createElement(
	          _Label2.default,
	          { className: labelClasses },
	          captionText
	        )
	      ) : imgNode;
	    }
	  }]);
	
	  return Image;
	}(_react.Component);
	
	Image.displayName = 'Image';
	exports.default = Image;
	;
	
	Image.propTypes = {
	  align: _react.PropTypes.shape({
	    bottom: _react.PropTypes.boolean,
	    left: _react.PropTypes.boolean,
	    right: _react.PropTypes.boolean,
	    top: _react.PropTypes.boolean
	  }),
	  alt: _react.PropTypes.string,
	  caption: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
	  fit: _react.PropTypes.oneOf(['contain', 'cover']),
	  full: _react.PropTypes.oneOf([true, 'horizontal', 'vertical', false]),
	  mask: _react.PropTypes.bool,
	  size: _react.PropTypes.oneOf(['small', 'medium', 'large', 'thumb']),
	  src: _react.PropTypes.string,
	  title: _react.PropTypes.string
	};
	
	Image.defaultProps = {
	  size: 'medium'
	};
	module.exports = exports['default'];

/***/ },

/***/ 922:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	var _Controls = __webpack_require__(923);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
	var _Overlay = __webpack_require__(936);
	
	var _Overlay2 = _interopRequireDefault(_Overlay);
	
	var _Throttle = __webpack_require__(946);
	
	var _Throttle2 = _interopRequireDefault(_Throttle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
	var BACKGROUND_COLOR_INDEX = _CSSClassnames2.default.BACKGROUND_COLOR_INDEX;
	
	var Video = function (_Component) {
	  _inherits(Video, _Component);
	
	  function Video(props, context) {
	    _classCallCheck(this, Video);
	
	    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props, context));
	
	    _this._hasPlayed = false;
	    _this._play = _this._play.bind(_this);
	    _this._pause = _this._pause.bind(_this);
	    _this._togglePlay = _this._togglePlay.bind(_this);
	    _this._toggleMute = _this._toggleMute.bind(_this);
	    _this._seek = _this._seek.bind(_this);
	    _this._mute = _this._mute.bind(_this);
	    _this._unmute = _this._unmute.bind(_this);
	    _this._fullscreen = _this._fullscreen.bind(_this);
	    _this._onInterationStart = _this._onInterationStart.bind(_this);
	    _this._onInteractionOver = _this._onInteractionOver.bind(_this);
	    _this._renderControls = _this._renderControls.bind(_this);
	
	    _this.state = {
	      mouseActive: false
	    };
	    return _this;
	  }
	
	  _createClass(Video, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._update = (0, _Throttle2.default)(this._update.bind(this), 100, this);
	      this._mediaEventProps = this._injectUpdateVideoEvents();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // Dynamically modifying a source element and its attribute when
	      // the element is already inserted in a video or audio element will
	      // have no effect.
	      // From HTML Specs:
	      // https://html.spec.whatwg.org/multipage/embedded-content.html
	      //   #the-source-element
	      // Using forceUpdate to force redraw of video when receiving new <source>
	      this.forceUpdate();
	    }
	  }, {
	    key: '_injectUpdateVideoEvents',
	    value: function _injectUpdateVideoEvents() {
	      var _this2 = this;
	
	      var videoEvents = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];
	
	      return videoEvents.reduce(function (previousValue, currentValue) {
	        previousValue[currentValue] = function () {
	          if (currentValue in _this2.props && typeof _this2.props[currentValue] === 'function') {
	            _this2.props[currentValue]();
	          }
	          _this2._update();
	        };
	
	        return previousValue;
	      }, {});
	    }
	  }, {
	    key: '_update',
	    value: function _update() {
	      // Set flag for Video first play
	      if (!this._hasPlayed && !this._video.paused && !this._video.loading) {
	        this._hasPlayed = true;
	      }
	
	      var interacting = this.state.interacting;
	      if (this._video.ended) {
	        interacting = false;
	      };
	
	      this.setState({
	        duration: this._video.duration,
	        currentTime: this._video.currentTime,
	        buffered: this._video.buffered,
	        paused: this._video.paused,
	        muted: this._video.muted,
	        volume: this._video.volume,
	        ended: this._video.ended,
	        readyState: this._video.readyState,
	        interacting: interacting,
	        // computed values
	        hasPlayed: this._hasPlayed,
	        playing: !this._video.paused && !this._video.loading,
	        percentageBuffered: this._video.buffered.length && this._video.buffered.end(this._video.buffered.length - 1) / this._video.duration * 100,
	        percentagePlayed: this._video.currentTime / this._video.duration * 100,
	        loading: this._video.readyState < this._video.HAVE_ENOUGH_DATA
	      });
	    }
	  }, {
	    key: '_play',
	    value: function _play() {
	      this._video.play();
	    }
	  }, {
	    key: '_pause',
	    value: function _pause() {
	      this._video.pause();
	    }
	  }, {
	    key: '_togglePlay',
	    value: function _togglePlay() {
	      if (this.state.paused) {
	        this._play();
	      } else {
	        this._pause();
	      }
	    }
	  }, {
	    key: '_seek',
	    value: function _seek(time) {
	      this._video.currentTime = typeof time !== 'undefined' ? time : this._video.currentTime;
	    }
	  }, {
	    key: '_unmute',
	    value: function _unmute() {
	      this._video.muted = false;
	    }
	  }, {
	    key: '_mute',
	    value: function _mute() {
	      this._video.muted = true;
	    }
	  }, {
	    key: '_toggleMute',
	    value: function _toggleMute() {
	      if (!this.state.muted) {
	        this._mute();
	      } else {
	        this._unmute();
	      }
	    }
	  }, {
	    key: '_fullscreen',
	    value: function _fullscreen() {
	      if (this._video.requestFullscreen) {
	        this._video.requestFullscreen();
	      } else if (this._video.msRequestFullscreen) {
	        this._video.msRequestFullscreen();
	      } else if (this._video.mozRequestFullScreen) {
	        this._video.mozRequestFullScreen();
	      } else if (this._video.webkitRequestFullscreen) {
	        this._video.webkitRequestFullscreen();
	      } else {
	        console.warn('Your browser doesn\'t support fullscreen.');
	      }
	    }
	  }, {
	    key: '_onInterationStart',
	    value: function _onInterationStart() {
	      this.setState({ interacting: true });
	    }
	  }, {
	    key: '_onInteractionOver',
	    value: function _onInteractionOver() {
	      var focus = this.state.focus;
	
	      if (!focus) {
	        this.setState({ interacting: false });
	      }
	    }
	  }, {
	    key: '_renderControls',
	    value: function _renderControls() {
	      var _this3 = this;
	
	      var extendedProps = Object.assign({
	        title: this.props.title,
	        togglePlay: this._togglePlay,
	        toggleMute: this._toggleMute,
	        play: this._play,
	        pause: this._pause,
	        mute: this._mute,
	        unmute: this._unmute,
	        seek: this._seek,
	        timeline: this.props.timeline,
	        fullscreen: this._fullscreen,
	        shareLink: this.props.shareLink,
	        shareHeadline: this.props.shareHeadline,
	        shareText: this.props.shareText,
	        allowFullScreen: this.props.allowFullScreen,
	        size: this.props.size
	      }, this.state);
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Overlay2.default, extendedProps),
	        _react2.default.createElement(_Controls2.default, _extends({ ref: function ref(_ref) {
	            return _this3._controlRef = _ref;
	          }
	        }, extendedProps))
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames,
	          _this4 = this;
	
	      var _props = this.props,
	          align = _props.align,
	          autoPlay = _props.autoPlay,
	          className = _props.className,
	          colorIndex = _props.colorIndex,
	          fit = _props.fit,
	          full = _props.full,
	          loop = _props.loop,
	          muted = _props.muted,
	          poster = _props.poster,
	          showControls = _props.showControls,
	          size = _props.size;
	      var _state = this.state,
	          ended = _state.ended,
	          hasPlayed = _state.hasPlayed,
	          interacting = _state.interacting,
	          mouseActive = _state.mouseActive,
	          playing = _state.playing;
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--' + fit, fit), _defineProperty(_classnames, CLASS_ROOT + '--full', fit || full), _defineProperty(_classnames, CLASS_ROOT + '--interacting', interacting), _defineProperty(_classnames, CLASS_ROOT + '--playing', playing), _defineProperty(_classnames, CLASS_ROOT + '--hasPlayed', hasPlayed), _defineProperty(_classnames, CLASS_ROOT + '--ended', ended), _defineProperty(_classnames, BACKGROUND_COLOR_INDEX + '--' + colorIndex, colorIndex), _defineProperty(_classnames, CLASS_ROOT + '--align-top', align && align.top), _defineProperty(_classnames, CLASS_ROOT + '--align-bottom', align && align.bottom), _defineProperty(_classnames, CLASS_ROOT + '--align-left', align && align.left), _defineProperty(_classnames, CLASS_ROOT + '--align-right', align && align.right), _classnames), className);
	      var restProps = _Props2.default.omit(this.props, Object.keys(Video.propTypes));
	
	      return _react2.default.createElement(
	        'div',
	        { className: classes, ref: function ref(_ref2) {
	            return _this4._containerRef = _ref2;
	          },
	          onMouseEnter: function onMouseEnter() {
	            if (!ended) {
	              _this4._onInterationStart();
	            }
	          },
	          onMouseMove: function onMouseMove(event) {
	            // needed to avoid react synthatic event pooling
	            event.persist();
	            if (!ended || (0, _reactDom.findDOMNode)(_this4._controlRef).contains(event.target)) {
	              _this4._onInterationStart();
	            } else if (ended) {
	              _this4._onInteractionOver();
	            }
	            clearTimeout(_this4._moveTimer);
	            _this4._moveTimer = setTimeout(function () {
	              var element = (0, _reactDom.findDOMNode)(_this4._controlRef);
	              if (element && !element.contains(event.target)) {
	                _this4._onInteractionOver();
	              }
	            }, 1000);
	          },
	          onMouseLeave: this._onInteractionOver,
	          onMouseDown: function onMouseDown() {
	            _this4.setState({ mouseActive: true });
	          },
	          onMouseUp: function onMouseUp() {
	            _this4.setState({ mouseActive: false });
	          },
	          onFocus: function onFocus() {
	            if (mouseActive === false) {
	              _this4._onInterationStart();
	              _this4.setState({ focus: true });
	            }
	          },
	          onBlur: function onBlur() {
	            _this4.setState({ focus: false }, function () {
	              if (!_this4._containerRef.contains(document.activeElement)) {
	                _this4._onInteractionOver();
	              }
	            });
	          } },
	        _react2.default.createElement(
	          'video',
	          _extends({ ref: function ref(el) {
	              return _this4._video = el;
	            } }, restProps, {
	            poster: poster, autoPlay: autoPlay ? 'autoplay' : false,
	            loop: loop ? 'loop' : false, muted: muted }, this._mediaEventProps),
	          this.props.children
	        ),
	        showControls ? this._renderControls() : undefined
	      );
	    }
	  }]);
	
	  return Video;
	}(_react.Component);
	
	Video.displayName = 'Video';
	exports.default = Video;
	
	
	Video.propTypes = {
	  align: _react.PropTypes.shape({
	    bottom: _react.PropTypes.boolean,
	    left: _react.PropTypes.boolean,
	    right: _react.PropTypes.boolean,
	    top: _react.PropTypes.boolean
	  }),
	  allowFullScreen: _react.PropTypes.bool,
	  autoPlay: _react.PropTypes.bool,
	  colorIndex: _react.PropTypes.string,
	  fit: _react.PropTypes.oneOf(['contain', 'cover']),
	  full: _react.PropTypes.oneOf([true, 'horizontal', 'vertical', false]),
	  loop: _react.PropTypes.bool,
	  muted: _react.PropTypes.bool,
	  poster: _react.PropTypes.string,
	  shareLink: _react.PropTypes.string,
	  shareHeadline: _react.PropTypes.string,
	  shareText: _react.PropTypes.string,
	  showControls: _react.PropTypes.bool,
	  size: _react2.default.PropTypes.oneOf(['small', 'medium', 'large']),
	  timeline: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	    label: _react.PropTypes.string,
	    time: _react.PropTypes.number
	  })),
	  title: _react.PropTypes.node
	};
	
	Video.defaultProps = {
	  allowFullScreen: true,
	  autoPlay: false,
	  loop: false,
	  muted: false,
	  size: 'medium',
	  showControls: true
	};
	module.exports = exports['default'];

/***/ },

/***/ 923:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _Button = __webpack_require__(774);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Box = __webpack_require__(765);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _Heading = __webpack_require__(824);
	
	var _Heading2 = _interopRequireDefault(_Heading);
	
	var _Volume = __webpack_require__(924);
	
	var _Volume2 = _interopRequireDefault(_Volume);
	
	var _VolumeMute = __webpack_require__(925);
	
	var _VolumeMute2 = _interopRequireDefault(_VolumeMute);
	
	var _Time = __webpack_require__(926);
	
	var _Time2 = _interopRequireDefault(_Time);
	
	var _FullscreenButton = __webpack_require__(928);
	
	var _FullscreenButton2 = _interopRequireDefault(_FullscreenButton);
	
	var _ProgressBar = __webpack_require__(930);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	var _PlayButton = __webpack_require__(931);
	
	var _PlayButton2 = _interopRequireDefault(_PlayButton);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _FormatTime = __webpack_require__(927);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
	var BUTTON_CLASS = CLASS_ROOT + '__button';
	
	var Controls = function (_Component) {
	  _inherits(Controls, _Component);
	
	  function Controls() {
	    _classCallCheck(this, Controls);
	
	    var _this = _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).call(this));
	
	    _this._onChapterTickHover = _this._onChapterTickHover.bind(_this);
	
	    _this.state = {
	      activeChapterIndex: undefined
	    };
	    return _this;
	  }
	
	  _createClass(Controls, [{
	    key: '_onChapterTickHover',
	    value: function _onChapterTickHover(index) {
	      this.setState({ activeChapterIndex: index });
	    }
	  }, {
	    key: '_renderTitle',
	    value: function _renderTitle() {
	      var title = void 0;
	      if (this.props.title) {
	        title = _react2.default.createElement(
	          _Box2.default,
	          { pad: { horizontal: 'small', vertical: 'none' } },
	          _react2.default.createElement(
	            _Heading2.default,
	            { tag: 'h3', margin: 'none' },
	            this.props.title
	          )
	        );
	      }
	
	      return title;
	    }
	  }, {
	    key: '_renderMuteButton',
	    value: function _renderMuteButton() {
	      var _props = this.props,
	          muted = _props.muted,
	          toggleMute = _props.toggleMute;
	      var intl = this.context.intl;
	
	      var buttonMessage = _Intl2.default.getMessage(intl, 'Mute');
	      var Icon = _VolumeMute2.default;
	      if (muted) {
	        Icon = _Volume2.default;
	        buttonMessage = _Intl2.default.getMessage(intl, 'Unmute');
	      }
	      return _react2.default.createElement(
	        _Button2.default,
	        { plain: true, onClick: toggleMute, className: BUTTON_CLASS,
	          a11yTitle: buttonMessage },
	        _react2.default.createElement(Icon, { className: BUTTON_CLASS + '__icon', colorIndex: 'brand' })
	      );
	    }
	  }, {
	    key: '_renderChapterLabels',
	    value: function _renderChapterLabels() {
	      var _props2 = this.props,
	          duration = _props2.duration,
	          timeline = _props2.timeline,
	          props = _objectWithoutProperties(_props2, ['duration', 'timeline']);
	
	      var activeChapterIndex = this.state.activeChapterIndex;
	
	
	      if (timeline) {
	        var chapterLabels = timeline.map(function (chapter, index, chapters) {
	          var _classnames;
	
	          var percent = chapter.time / duration * 100;
	          var classes = (0, _classnames3.default)(CLASS_ROOT + '__chapter-label', (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '__chapter-label-start', percent === 0), _defineProperty(_classnames, CLASS_ROOT + '__chapter-label-active', activeChapterIndex === index), _classnames));
	
	          return _react2.default.createElement(
	            'div',
	            { className: classes, key: chapter.label,
	              style: { left: percent + '%' } },
	            _react2.default.createElement(
	              'span',
	              null,
	              chapter.label
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              (0, _FormatTime.formatTime)(chapter.time)
	            )
	          );
	        });
	
	        return _react2.default.createElement(
	          _Box2.default,
	          _extends({}, props, { pad: 'none', className: CLASS_ROOT + '__chapter-labels',
	            direction: 'row' }),
	          chapterLabels
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          togglePlay = _props3.togglePlay,
	          hasPlayed = _props3.hasPlayed,
	          playing = _props3.playing,
	          ended = _props3.ended,
	          currentTime = _props3.currentTime,
	          duration = _props3.duration,
	          percentagePlayed = _props3.percentagePlayed,
	          seek = _props3.seek,
	          timeline = _props3.timeline,
	          allowFullScreen = _props3.allowFullScreen,
	          fullscreen = _props3.fullscreen;
	
	
	      if (!hasPlayed) {
	        return null;
	      }
	
	      var overlayContent = _react2.default.createElement(
	        _Box2.default,
	        { pad: 'none', className: CLASS_ROOT + '__controls',
	          direction: 'column', justify: 'start' },
	        _react2.default.createElement(_ProgressBar2.default, { progress: percentagePlayed,
	          onChapterHover: this._onChapterTickHover,
	          duration: duration, onChange: seek, timeline: timeline }),
	        timeline ? this._renderChapterLabels() : undefined,
	        _react2.default.createElement(
	          _Box2.default,
	          { pad: 'none', className: CLASS_ROOT + '__controls-primary',
	            direction: 'row', justify: 'between' },
	          _react2.default.createElement(
	            _Box2.default,
	            { direction: 'row', align: 'center',
	              pad: { horizontal: 'small', vertical: 'none' } },
	            _react2.default.createElement(_PlayButton2.default, { playing: playing, ended: ended, iconSize: 'medium',
	              togglePlay: togglePlay, primary: false }),
	            this._renderTitle()
	          ),
	          _react2.default.createElement(
	            _Box2.default,
	            { direction: 'row', align: 'center',
	              pad: { horizontal: 'small', vertical: 'none' } },
	            _react2.default.createElement(_Time2.default, { currentTime: currentTime, duration: duration }),
	            this._renderMuteButton(),
	            allowFullScreen ? _react2.default.createElement(_FullscreenButton2.default, { onClick: fullscreen }) : undefined
	          )
	        )
	      );
	
	      return overlayContent;
	    }
	  }]);
	
	  return Controls;
	}(_react.Component);
	
	Controls.displayName = 'Controls';
	exports.default = Controls;
	
	
	Controls.contextTypes = {
	  intl: _react.PropTypes.object
	};
	module.exports = exports['default'];

/***/ },

/***/ 924:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-volume', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'volume');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M15,16 C17.209,16 19,14.209 19,12 C19,9.791 17.209,8 15,8 M15,20 C20,20 23,16.411 23,12 C23,7.589 19.411,4 15,4 M1,12 L1,8 L6,8 L12,3 L12,21 L6,16 L1,16 L1,12' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'Volume';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 925:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-volume-mute', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'volume-mute');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,8 L1,16 L6.09901951,16 L12,21 L12,3 L6,8 L1,8 Z M15,9 L21,15 M21,9 L15,15' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'VolumeMute';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 926:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Box = __webpack_require__(765);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _Heading = __webpack_require__(824);
	
	var _Heading2 = _interopRequireDefault(_Heading);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _FormatTime = __webpack_require__(927);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
	
	var Time = function (_Component) {
	  _inherits(Time, _Component);
	
	  function Time() {
	    _classCallCheck(this, Time);
	
	    return _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).apply(this, arguments));
	  }
	
	  _createClass(Time, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          currentTime = _props.currentTime,
	          duration = _props.duration;
	
	
	      return _react2.default.createElement(
	        _Box2.default,
	        { pad: { horizontal: 'small', vertical: 'none' } },
	        _react2.default.createElement(
	          _Heading2.default,
	          { tag: 'h3', margin: 'none', className: CLASS_ROOT + '__time' },
	          (0, _FormatTime.formatTime)(currentTime),
	          ' / ',
	          (0, _FormatTime.formatTime)(duration)
	        )
	      );
	    }
	  }]);
	
	  return Time;
	}(_react.Component);
	
	Time.displayName = 'Time';
	exports.default = Time;
	
	
	Time.propTypes = {
	  currentTime: _react.PropTypes.number,
	  duration: _react.PropTypes.number
	};
	module.exports = exports['default'];

/***/ },

/***/ 927:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formatTime = formatTime;
	function formatTime(seconds) {
	  var date = new Date(null);
	  seconds = isNaN(seconds) ? 0 : Math.floor(seconds);
	  date.setSeconds(seconds);
	
	  var dateISOString = date.toISOString();
	  var time = dateISOString.substr(11, 8);
	  if (seconds < 3600) {
	    time = dateISOString.substr(14, 5);
	  }
	
	  return time;
	}

/***/ },

/***/ 928:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Button = __webpack_require__(774);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Expand = __webpack_require__(929);
	
	var _Expand2 = _interopRequireDefault(_Expand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
	var BUTTON_CLASS = CLASS_ROOT + '__button';
	
	var FullscreenButton = function (_Component) {
	  _inherits(FullscreenButton, _Component);
	
	  function FullscreenButton() {
	    _classCallCheck(this, FullscreenButton);
	
	    return _possibleConstructorReturn(this, (FullscreenButton.__proto__ || Object.getPrototypeOf(FullscreenButton)).apply(this, arguments));
	  }
	
	  _createClass(FullscreenButton, [{
	    key: 'shouldComponentUpdate',
	
	
	    // prevents unnecessarily updates/re-renders
	    // only update component if the onClick prop changes
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.onClick !== nextProps.onClick;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var a11yExpandButtonTitle = _Intl2.default.getMessage(this.context.intl, 'Toggle Fullscreen');
	
	      return _react2.default.createElement(
	        _Button2.default,
	        { plain: true, className: BUTTON_CLASS, onClick: this.props.onClick,
	          a11yTitle: a11yExpandButtonTitle },
	        _react2.default.createElement(_Expand2.default, { className: BUTTON_CLASS + '__icon',
	          colorIndex: 'brand' })
	      );
	    }
	  }]);
	
	  return FullscreenButton;
	}(_react.Component);
	
	FullscreenButton.displayName = 'FullscreenButton';
	exports.default = FullscreenButton;
	
	
	FullscreenButton.propTypes = {
	  onClick: _react.PropTypes.func
	};
	module.exports = exports['default'];

/***/ },

/***/ 929:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-expand', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'expand');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M10,14 L2,22 M1,15 L1,23 L9,23 M22,2 L14,10 M15,1 L23,1 L23,9' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'Expand';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 930:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _Box = __webpack_require__(765);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
	
	var ProgressBar = function (_Component) {
	  _inherits(ProgressBar, _Component);
	
	  function ProgressBar() {
	    _classCallCheck(this, ProgressBar);
	
	    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this));
	
	    _this._onProgressBarChange = _this._onProgressBarChange.bind(_this);
	    return _this;
	  }
	
	  // prevents unnecessarily updates/re-renders
	
	
	  _createClass(ProgressBar, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.progress !== nextProps.progress;
	    }
	  }, {
	    key: '_onProgressBarChange',
	    value: function _onProgressBarChange(e) {
	      this.props.onChange(e.target.value * this.props.duration / 100);
	    }
	  }, {
	    key: '_onChapterClick',
	    value: function _onChapterClick(time) {
	      this.props.onChange(time);
	    }
	  }, {
	    key: '_onMouseOver',
	    value: function _onMouseOver(index) {
	      this.props.onChapterHover(index);
	    }
	  }, {
	    key: '_renderChapterMarkers',
	    value: function _renderChapterMarkers() {
	      var _this2 = this;
	
	      var _props = this.props,
	          duration = _props.duration,
	          timeline = _props.timeline;
	
	
	      if (timeline) {
	        var chapters = timeline.map(function (chapter, index, chapters) {
	          var percent = chapter.time / duration * 100;
	          var tickClasses = (0, _classnames3.default)(CLASS_ROOT + '__chapter-marker-tick', _defineProperty({}, CLASS_ROOT + '__chapter-marker-tick-start', percent === 0));
	
	          return _react2.default.createElement(
	            'div',
	            { className: CLASS_ROOT + '__chapter-marker', key: chapter.time,
	              style: { width: percent + '%' } },
	            _react2.default.createElement('div', { className: tickClasses,
	              onMouseOver: _this2._onMouseOver.bind(_this2, index),
	              onMouseOut: _this2.props.onChapterHover,
	              onFocus: _this2._onMouseOver.bind(_this2, index),
	              onBlur: _this2.props.onChapterHover,
	              onClick: _this2._onChapterClick.bind(_this2, chapter.time) }),
	            _react2.default.createElement('div', { className: CLASS_ROOT + '__chapter-marker-track' })
	          );
	        });
	
	        return _react2.default.createElement(
	          'div',
	          { className: CLASS_ROOT + '__chapter-markers' },
	          chapters
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          progress = _props2.progress,
	          timeline = _props2.timeline;
	
	
	      return _react2.default.createElement(
	        _Box2.default,
	        { pad: 'none', className: CLASS_ROOT + '__progress', direction: 'row' },
	        _react2.default.createElement('div', { className: CLASS_ROOT + '__progress-bar-fill', style: {
	            width: progress + '%'
	          } }),
	        timeline ? this._renderChapterMarkers() : undefined,
	        _react2.default.createElement('input', { className: CLASS_ROOT + '__progress-bar-input',
	          onChange: this._onProgressBarChange,
	          type: 'range',
	          min: '0',
	          max: '100',
	          value: progress || '',
	          step: '0.1' })
	      );
	    }
	  }]);
	
	  return ProgressBar;
	}(_react.Component);
	
	ProgressBar.displayName = 'ProgressBar';
	exports.default = ProgressBar;
	
	
	ProgressBar.propTypes = {
	  onClick: _react.PropTypes.func,
	  duration: _react.PropTypes.number,
	  progress: _react.PropTypes.number,
	  onChapterHover: _react.PropTypes.func
	};
	
	ProgressBar.defaultProps = {
	  duration: 0,
	  progress: 0
	};
	module.exports = exports['default'];

/***/ },

/***/ 931:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Button = __webpack_require__(774);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _CirclePlay = __webpack_require__(932);
	
	var _CirclePlay2 = _interopRequireDefault(_CirclePlay);
	
	var _Play = __webpack_require__(933);
	
	var _Play2 = _interopRequireDefault(_Play);
	
	var _Pause = __webpack_require__(934);
	
	var _Pause2 = _interopRequireDefault(_Pause);
	
	var _Refresh = __webpack_require__(935);
	
	var _Refresh2 = _interopRequireDefault(_Refresh);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
	var BUTTON_CLASS = CLASS_ROOT + '__button';
	
	var PlayButton = function (_Component) {
	  _inherits(PlayButton, _Component);
	
	  function PlayButton() {
	    _classCallCheck(this, PlayButton);
	
	    return _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).apply(this, arguments));
	  }
	
	  _createClass(PlayButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          ended = _props.ended,
	          iconSize = _props.iconSize,
	          playing = _props.playing,
	          primary = _props.primary,
	          togglePlay = _props.togglePlay;
	      var intl = this.context.intl;
	
	
	      var PIcon = primary ? _CirclePlay2.default : _Play2.default;
	      var Icon = playing ? _Pause2.default : ended ? _Refresh2.default : PIcon;
	      var controlIcon = _react2.default.createElement(Icon, { className: BUTTON_CLASS + '__icon', size: iconSize,
	        colorIndex: 'brand' });
	
	      var a11yControlButtonMessage = playing ? 'Pause Video' : ended ? 'Restart Video' : 'Play Video';
	
	      var a11yControlButtonTitle = _Intl2.default.getMessage(intl, a11yControlButtonMessage);
	
	      return _react2.default.createElement(
	        _Button2.default,
	        { plain: true, className: BUTTON_CLASS, onClick: togglePlay,
	          a11yTitle: a11yControlButtonTitle },
	        controlIcon
	      );
	    }
	  }]);
	
	  return PlayButton;
	}(_react.Component);
	
	PlayButton.displayName = 'PlayButton';
	exports.default = PlayButton;
	
	
	PlayButton.propTypes = {
	  iconSize: _react.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
	  playing: _react.PropTypes.bool,
	  primary: _react.PropTypes.bool,
	  ended: _react.PropTypes.bool,
	  togglePlay: _react.PropTypes.func
	};
	
	PlayButton.defaultProps = {
	  iconSize: 'xlarge',
	  primary: true
	};
	module.exports = exports['default'];

/***/ },

/***/ 932:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-circle-play', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'circle-play');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M9.5,15.5 L15.5,12 L9.5,8.5 L9.5,15.5 Z M10.5,13.5 L12.5,12 L10.5,10.5 L10.5,13.5 Z' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'CirclePlay';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 933:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-play', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'play');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('polygon', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '3 22 21 12 3 2' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'Play';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 934:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-pause', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'pause');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,21 L9,21 L9,3 L3,3 L3,21 Z M15,21 L21,21 L21,3 L15,3 L15,21 Z' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'Pause';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 935:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-refresh', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'refresh');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'Refresh';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 936:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Box = __webpack_require__(765);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _Heading = __webpack_require__(824);
	
	var _Heading2 = _interopRequireDefault(_Heading);
	
	var _Share = __webpack_require__(937);
	
	var _Share2 = _interopRequireDefault(_Share);
	
	var _PlayButton = __webpack_require__(931);
	
	var _PlayButton2 = _interopRequireDefault(_PlayButton);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
	
	var Overlay = function (_Component) {
	  _inherits(Overlay, _Component);
	
	  function Overlay(props, context) {
	    _classCallCheck(this, Overlay);
	
	    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props, context));
	
	    _this._onResponsive = _this._onResponsive.bind(_this);
	    _this.state = {
	      iconSize: props.size && (props.size === 'small' || props.size === 'medium') ? 'large' : 'xlarge'
	    };
	    return _this;
	  }
	
	  _createClass(Overlay, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      if (newProps.size !== this.props.size) {
	        this.setState({
	          iconSize: newProps.size && (newProps.size === 'small' || newProps.size === 'medium') ? 'large' : 'xlarge'
	        });
	      }
	    }
	  }, {
	    key: '_onResponsive',
	    value: function _onResponsive(small) {
	      if (small) {
	        this.setState({ iconSize: 'medium' });
	      } else {
	        var iconSize = 'small' === this.props.size ? undefined : 'xlarge';
	        this.setState({ iconSize: iconSize });
	      }
	    }
	  }, {
	    key: '_renderReplayMenu',
	    value: function _renderReplayMenu() {
	      var _props = this.props,
	          ended = _props.ended,
	          shareLink = _props.shareLink,
	          shareHeadline = _props.shareHeadline,
	          shareText = _props.shareText;
	
	
	      var replayContent = void 0;
	      if (ended) {
	        replayContent = _react2.default.createElement(
	          _Box2.default,
	          { className: CLASS_ROOT + '__replay', align: 'center' },
	          _react2.default.createElement(
	            _Heading2.default,
	            { tag: 'h3', strong: true, uppercase: true },
	            'Replay'
	          ),
	          _react2.default.createElement(_Share2.default, { shareLink: shareLink, shareHeadline: shareHeadline,
	            shareText: shareText })
	        );
	      }
	
	      return replayContent;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          ended = _props2.ended,
	          playing = _props2.playing,
	          togglePlay = _props2.togglePlay,
	          videoHeader = _props2.videoHeader;
	
	
	      return _react2.default.createElement(
	        _Box2.default,
	        { pad: 'none', align: 'center', justify: 'center',
	          className: CLASS_ROOT + '__overlay' },
	        videoHeader,
	        _react2.default.createElement(
	          _Box2.default,
	          { pad: 'none', align: 'center', justify: 'center' },
	          _react2.default.createElement(_PlayButton2.default, { iconSize: this.state.iconSize,
	            playing: playing,
	            ended: ended,
	            togglePlay: togglePlay })
	        ),
	        this._renderReplayMenu()
	      );
	    }
	  }]);
	
	  return Overlay;
	}(_react.Component);
	
	Overlay.displayName = 'Overlay';
	exports.default = Overlay;
	module.exports = exports['default'];

/***/ },

/***/ 937:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(55);
	
	var _Box = __webpack_require__(765);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _SocialShare = __webpack_require__(938);
	
	var _SocialShare2 = _interopRequireDefault(_SocialShare);
	
	var _Form = __webpack_require__(944);
	
	var _Form2 = _interopRequireDefault(_Form);
	
	var _FormField = __webpack_require__(945);
	
	var _FormField2 = _interopRequireDefault(_FormField);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
	var BUTTON_CLASS = CLASS_ROOT + '__button';
	
	var Overlay = function (_Component) {
	  _inherits(Overlay, _Component);
	
	  function Overlay() {
	    _classCallCheck(this, Overlay);
	
	    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this));
	
	    _this._onClickShareLink = _this._onClickShareLink.bind(_this);
	    return _this;
	  }
	
	  _createClass(Overlay, [{
	    key: '_onClickShareLink',
	    value: function _onClickShareLink() {
	      (0, _reactDom.findDOMNode)(this.shareLinkRef).select();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          shareLink = _props.shareLink,
	          shareHeadline = _props.shareHeadline,
	          shareText = _props.shareText;
	
	      // this has to be null to be a valid react children
	
	      var shareContent = null;
	      if (shareLink) {
	        shareContent = _react2.default.createElement(
	          _Box2.default,
	          { align: 'center' },
	          _react2.default.createElement(
	            _Form2.default,
	            { pad: { vertical: 'small' } },
	            _react2.default.createElement(
	              _FormField2.default,
	              { strong: true },
	              _react2.default.createElement('input', { ref: function ref(_ref) {
	                  return _this2.shareLinkRef = _ref;
	                },
	                className: 'share-link', type: 'text', value: shareLink,
	                onClick: this._onClickShareLink, readOnly: true })
	            )
	          ),
	          _react2.default.createElement(
	            _Box2.default,
	            { direction: 'row', className: BUTTON_CLASS },
	            _react2.default.createElement(_SocialShare2.default, { type: 'email', link: shareLink, colorIndex: 'brand',
	              className: BUTTON_CLASS + '__icon',
	              title: shareHeadline, text: shareText }),
	            _react2.default.createElement(_SocialShare2.default, { type: 'twitter', colorIndex: 'brand',
	              className: BUTTON_CLASS + '__icon',
	              link: shareLink, text: shareHeadline }),
	            _react2.default.createElement(_SocialShare2.default, { type: 'facebook', colorIndex: 'brand',
	              className: BUTTON_CLASS + '__icon',
	              link: shareLink }),
	            _react2.default.createElement(_SocialShare2.default, { type: 'linkedin', colorIndex: 'brand',
	              className: BUTTON_CLASS + '__icon',
	              link: shareLink, title: shareHeadline, text: shareText })
	          )
	        );
	      }
	
	      return shareContent;
	    }
	  }]);
	
	  return Overlay;
	}(_react.Component);
	
	Overlay.displayName = 'Overlay';
	exports.default = Overlay;
	
	
	Overlay.propTypes = {
	  shareLink: _react.PropTypes.string,
	  shareHeadline: _react.PropTypes.string,
	  shareText: _react.PropTypes.string
	};
	
	Overlay.defaultProps = {
	  shareHeadline: '',
	  shareText: ''
	};
	module.exports = exports['default'];

/***/ },

/***/ 938:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Anchor = __webpack_require__(808);
	
	var _Anchor2 = _interopRequireDefault(_Anchor);
	
	var _SocialTwitter = __webpack_require__(939);
	
	var _SocialTwitter2 = _interopRequireDefault(_SocialTwitter);
	
	var _SocialFacebook = __webpack_require__(940);
	
	var _SocialFacebook2 = _interopRequireDefault(_SocialFacebook);
	
	var _SocialGooglePlus = __webpack_require__(941);
	
	var _SocialGooglePlus2 = _interopRequireDefault(_SocialGooglePlus);
	
	var _SocialLinkedin = __webpack_require__(942);
	
	var _SocialLinkedin2 = _interopRequireDefault(_SocialLinkedin);
	
	var _SocialMail = __webpack_require__(943);
	
	var _SocialMail2 = _interopRequireDefault(_SocialMail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var SocialShare = function (_Component) {
	  _inherits(SocialShare, _Component);
	
	  function SocialShare() {
	    _classCallCheck(this, SocialShare);
	
	    return _possibleConstructorReturn(this, (SocialShare.__proto__ || Object.getPrototypeOf(SocialShare)).apply(this, arguments));
	  }
	
	  _createClass(SocialShare, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex,
	          type = _props.type,
	          link = _props.link,
	          text = _props.text,
	          title = _props.title,
	          a11yTitle = _props.a11yTitle,
	          props = _objectWithoutProperties(_props, ['className', 'colorIndex', 'type', 'link', 'text', 'title', 'a11yTitle']);
	
	      var socialIcon = undefined;
	      var href = '';
	      var target = '_blank';
	      var calculatedA11yTitle = a11yTitle || 'Share on ' + (type.charAt(0).toUpperCase() + type.slice(1));
	
	      var encodedLink = encodeURIComponent(link);
	      var encodedTitle = encodeURIComponent(title);
	      var encodedText = encodeURIComponent(text);
	
	      if (type === 'twitter') {
	        socialIcon = _react2.default.createElement(_SocialTwitter2.default, {
	          a11yTitle: calculatedA11yTitle,
	          className: className, colorIndex: colorIndex });
	        href = 'https://twitter.com/intent/tweet?url=' + (encodedLink + '&text=' + encodedText);
	      } else if (type === 'linkedin') {
	        socialIcon = _react2.default.createElement(_SocialLinkedin2.default, {
	          a11yTitle: calculatedA11yTitle,
	          className: className, colorIndex: colorIndex });
	        href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + (encodedLink + '&title=' + encodedTitle + '&summary=' + encodedText);
	      } else if (type === 'google') {
	        socialIcon = _react2.default.createElement(_SocialGooglePlus2.default, {
	          a11yTitle: calculatedA11yTitle,
	          className: className, colorIndex: colorIndex });
	        href = 'https://plus.google.com/share?url=' + encodedLink;
	      } else if (type === 'facebook') {
	        socialIcon = _react2.default.createElement(_SocialFacebook2.default, {
	          a11yTitle: calculatedA11yTitle,
	          className: className, colorIndex: colorIndex });
	        href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodedLink;
	      } else if (type === 'email') {
	        socialIcon = _react2.default.createElement(_SocialMail2.default, {
	          a11yTitle: calculatedA11yTitle,
	          className: className, colorIndex: colorIndex });
	        href = 'mailto:?subject=' + (encodedTitle + '&body=' + encodedText + '%0D%0A' + encodedLink);
	        target = '_self';
	      }
	
	      return _react2.default.createElement(_Anchor2.default, _extends({}, props, { href: href, icon: socialIcon, target: target }));
	    }
	  }]);
	
	  return SocialShare;
	}(_react.Component);
	
	SocialShare.displayName = 'SocialShare';
	exports.default = SocialShare;
	;
	
	SocialShare.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  link: _react.PropTypes.string.isRequired,
	  text: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  type: _react.PropTypes.oneOf(['email', 'facebook', 'twitter', 'linkedin', 'google']).isRequired
	};
	
	SocialShare.defaultProps = {
	  text: '',
	  title: ''
	};
	module.exports = exports['default'];

/***/ },

/***/ 939:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-twitter', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-twitter');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('path', { fill: '#1DA1F2', fillRule: 'evenodd', d: 'M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086', stroke: 'none' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'SocialTwitter';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 940:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-facebook', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-facebook');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('path', { fill: '#3B5998', fillRule: 'evenodd', d: 'M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0', stroke: 'none' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'SocialFacebook';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 941:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-google-plus', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-google-plus');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('path', { fill: '#4285F4', fillRule: 'evenodd', d: 'M0.0202537528,11.2032618 C0.0858884305,7.29693926 3.69605513,3.87603603 7.62298049,4.00635861 C9.5045944,3.91939087 11.2733582,4.73384249 12.7144674,5.87784249 C12.0993693,6.57306829 11.4624794,7.24274571 10.7820061,7.86906829 C9.04956189,6.67810055 6.58579693,6.33771345 4.85335275,7.71345539 C2.37505996,9.41848765 2.26220982,13.4442941 4.64607169,15.2796489 C6.96429889,17.3722941 11.3459973,16.3333264 11.9865191,13.1291973 C10.534514,13.1075199 9.07861756,13.1291973 7.62661245,13.0822296 C7.62298049,12.2205522 7.61934853,11.3588747 7.62298049,10.4974554 C10.0504259,10.4902296 12.4778712,10.4863586 14.9089486,10.5046812 C15.0544863,12.532036 14.7852026,14.6897135 13.5332146,16.3658425 C11.6370729,19.0195199 7.83052098,19.7942296 4.86061667,18.6574554 C1.88007591,17.527907 -0.230870232,14.3962941 0.0202537528,11.2032618 M19.6437253,8.32145539 L21.8091508,8.32145539 C21.8127827,9.04197152 21.8164147,9.76610055 21.8236786,10.4863586 C22.5479949,10.4938425 23.2759431,10.4938425 24,10.5010683 L24,12.6551328 C23.2759431,12.6623586 22.5516269,12.6659715 21.8236786,12.6731973 C21.8164147,13.3970683 21.8127827,14.1175844 21.8091508,14.8381005 L19.6400933,14.8381005 C19.6328294,14.1175844 19.6328294,13.3970683 19.6255655,12.6768102 C18.9012492,12.6695844 18.1735604,12.6623586 17.4492441,12.6551328 L17.4492441,10.5010683 C18.1735604,10.4938425 18.8976172,10.4902296 19.6255655,10.4863586 C19.6291974,9.76248765 19.6364613,9.04197152 19.6437253,8.32145539', stroke: 'none' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'SocialGooglePlus';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 942:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-linkedin', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-linkedin');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement('path', { fill: '#0077B5', fillRule: 'evenodd', d: 'M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z', stroke: 'none' })
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'SocialLinkedin';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 943:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Props = __webpack_require__(769);
	
	var _Props2 = _interopRequireDefault(_Props);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
	var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;
	
	var Icon = function (_Component) {
	  _inherits(Icon, _Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          colorIndex = _props.colorIndex;
	      var _props2 = this.props,
	          a11yTitle = _props2.a11yTitle,
	          size = _props2.size,
	          responsive = _props2.responsive;
	      var intl = this.context.intl;
	
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-mail', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));
	
	      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-mail');
	
	      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
	      return _react2.default.createElement(
	        'svg',
	        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
	        _react2.default.createElement(
	          'g',
	          { fill: 'none', fillRule: 'evenodd' },
	          _react2.default.createElement('path', { fill: '#000', d: 'M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z', stroke: 'none' }),
	          _react2.default.createElement('rect', { width: '24', height: '24' })
	        )
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react.Component);
	
	Icon.displayName = 'Icon';
	exports.default = Icon;
	;
	
	Icon.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	Icon.defaultProps = {
	  responsive: true
	};
	
	Icon.displayName = 'SocialMail';
	
	Icon.icon = true;
	
	Icon.propTypes = {
	  a11yTitle: _react.PropTypes.string,
	  colorIndex: _react.PropTypes.string,
	  size: _react.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
	  responsive: _react.PropTypes.bool
	};
	module.exports = exports['default'];

/***/ },

/***/ 944:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.FORM;
	
	var Form = function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form() {
	    _classCallCheck(this, Form);
	
	    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
	  }
	
	  _createClass(Form, [{
	    key: 'render',
	    value: function render() {
	      var _classnames;
	
	      var _props = this.props,
	          className = _props.className,
	          compact = _props.compact,
	          fill = _props.fill,
	          pad = _props.pad,
	          plain = _props.plain,
	          props = _objectWithoutProperties(_props, ['className', 'compact', 'fill', 'pad', 'plain']);
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--compact', compact), _defineProperty(_classnames, CLASS_ROOT + '--fill', fill), _defineProperty(_classnames, CLASS_ROOT + '--pad-' + pad, typeof pad === 'string'), _defineProperty(_classnames, CLASS_ROOT + '--pad-horizontal-' + pad.horizontal, (typeof pad === 'undefined' ? 'undefined' : _typeof(pad)) === 'object' && 'horizontal' in pad), _defineProperty(_classnames, CLASS_ROOT + '--pad-vertical-' + pad.vertical, (typeof pad === 'undefined' ? 'undefined' : _typeof(pad)) === 'object' && 'vertical' in pad), _defineProperty(_classnames, CLASS_ROOT + '--plain', plain), _classnames), className);
	
	      return _react2.default.createElement(
	        'form',
	        _extends({}, props, { className: classes, onSubmit: this.props.onSubmit }),
	        this.props.children
	      );
	    }
	  }]);
	
	  return Form;
	}(_react.Component);
	
	Form.displayName = 'Form';
	exports.default = Form;
	;
	
	Form.propTypes = {
	  compact: _react.PropTypes.bool,
	  fill: _react.PropTypes.bool,
	  onSubmit: _react.PropTypes.func,
	  pad: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(['none', 'small', 'medium', 'large']), _react.PropTypes.shape({
	    horizontal: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large']),
	    vertical: _react.PropTypes.oneOf(['none', 'small', 'medium', 'large'])
	  })]),
	  plain: _react.PropTypes.bool
	};
	
	Form.defaultProps = {
	  compact: false,
	  fill: false,
	  pad: 'none'
	};
	module.exports = exports['default'];

/***/ },

/***/ 945:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames2 = __webpack_require__(721);
	
	var _classnames3 = _interopRequireDefault(_classnames2);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.FORM_FIELD;
	
	var FormField = function (_Component) {
	  _inherits(FormField, _Component);
	
	  function FormField(props, context) {
	    _classCallCheck(this, FormField);
	
	    var _this = _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).call(this, props, context));
	
	    _this._onFocus = _this._onFocus.bind(_this);
	    _this._onBlur = _this._onBlur.bind(_this);
	    _this._onClick = _this._onClick.bind(_this);
	
	    _this.state = { focus: false };
	    return _this;
	  }
	
	  _createClass(FormField, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var contentsElement = this.contentsRef;
	      if (contentsElement) {
	        var inputElements = contentsElement.querySelectorAll('input, textarea, select');
	        if (inputElements.length === 1) {
	          this._inputElement = inputElements[0];
	          this._inputElement.addEventListener('focus', this._onFocus);
	          this._inputElement.addEventListener('blur', this._onBlur);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._inputElement) {
	        this._inputElement.removeEventListener('focus', this._onFocus);
	        this._inputElement.removeEventListener('blur', this._onBlur);
	        delete this._inputElement;
	      }
	    }
	  }, {
	    key: '_onFocus',
	    value: function _onFocus() {
	      this.setState({ focus: true });
	    }
	  }, {
	    key: '_onBlur',
	    value: function _onBlur() {
	      this.setState({ focus: false });
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      if (this._inputElement) {
	        this._inputElement.focus();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames,
	          _this2 = this;
	
	      var _props = this.props,
	          children = _props.children,
	          className = _props.className,
	          help = _props.help,
	          hidden = _props.hidden,
	          htmlFor = _props.htmlFor,
	          label = _props.label,
	          size = _props.size,
	          strong = _props.strong,
	          error = _props.error,
	          props = _objectWithoutProperties(_props, ['children', 'className', 'help', 'hidden', 'htmlFor', 'label', 'size', 'strong', 'error']);
	
	      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--focus', this.state.focus), _defineProperty(_classnames, CLASS_ROOT + '--hidden', hidden), _defineProperty(_classnames, CLASS_ROOT + '--text', htmlFor), _defineProperty(_classnames, CLASS_ROOT + '--size-' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--strong', strong), _defineProperty(_classnames, CLASS_ROOT + '--error', error), _classnames), className);
	
	      var fieldError = error ? _react2.default.createElement(
	        'span',
	        { className: CLASS_ROOT + "__error" },
	        error
	      ) : undefined;
	
	      var fieldHelp = help !== null && help !== undefined ? _react2.default.createElement(
	        'span',
	        { className: CLASS_ROOT + "__help" },
	        this.props.help
	      ) : undefined;
	
	      var labelNode = label ? _react2.default.createElement(
	        'label',
	        { className: CLASS_ROOT + "__label", htmlFor: htmlFor },
	        label
	      ) : undefined;
	
	      return _react2.default.createElement(
	        'div',
	        _extends({ className: classes }, props, { onClick: this._onClick }),
	        fieldError,
	        labelNode,
	        fieldHelp,
	        _react2.default.createElement(
	          'span',
	          { ref: function ref(_ref) {
	              return _this2.contentsRef = _ref;
	            },
	            className: CLASS_ROOT + "__contents" },
	          children
	        )
	      );
	    }
	  }]);
	
	  return FormField;
	}(_react.Component);
	
	FormField.displayName = 'FormField';
	exports.default = FormField;
	
	
	FormField.propTypes = {
	  error: _react.PropTypes.node,
	  help: _react.PropTypes.node,
	  hidden: _react.PropTypes.bool,
	  htmlFor: _react.PropTypes.string,
	  label: _react.PropTypes.node,
	  size: _react.PropTypes.oneOf(['medium', 'large']),
	  strong: _react.PropTypes.bool
	};
	
	FormField.defaultProps = {
	  size: 'medium',
	  strong: false
	};
	module.exports = exports['default'];

/***/ },

/***/ 946:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (fn) {
	  var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
	  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
	
	  var last = void 0;
	  var deferTimer = void 0;
	
	  return function () {
	    var now = Date.now();
	    if (last && now < last + threshhold) {
	      clearTimeout(deferTimer);
	      deferTimer = setTimeout(function () {
	        last = now;
	        fn.apply(scope, arguments);
	      }, threshhold);
	    } else {
	      last = now;
	      fn.apply(scope, arguments);
	    }
	  };
	};
	
	module.exports = exports["default"]; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

/***/ },

/***/ 953:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames3 = __webpack_require__(721);
	
	var _classnames4 = _interopRequireDefault(_classnames3);
	
	var _KeyboardAccelerators = __webpack_require__(766);
	
	var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);
	
	var _Drop = __webpack_require__(777);
	
	var _Drop2 = _interopRequireDefault(_Drop);
	
	var _DOM = __webpack_require__(767);
	
	var _Intl = __webpack_require__(768);
	
	var _Intl2 = _interopRequireDefault(_Intl);
	
	var _Announcer = __webpack_require__(772);
	
	var _CSSClassnames = __webpack_require__(771);
	
	var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014 Hewlett Packard Enterprise Development LP
	
	var CLASS_ROOT = _CSSClassnames2.default.TEXT_INPUT;
	var INPUT = _CSSClassnames2.default.INPUT;
	var FORM_FIELD = _CSSClassnames2.default.FORM_FIELD;
	
	var TextInput = function (_Component) {
	  _inherits(TextInput, _Component);
	
	  function TextInput(props, context) {
	    _classCallCheck(this, TextInput);
	
	    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props, context));
	
	    _this._onInputChange = _this._onInputChange.bind(_this);
	    _this._onAddDrop = _this._onAddDrop.bind(_this);
	    _this._onRemoveDrop = _this._onRemoveDrop.bind(_this);
	    _this._onNextSuggestion = _this._onNextSuggestion.bind(_this);
	    _this._onPreviousSuggestion = _this._onPreviousSuggestion.bind(_this);
	    _this._onEnter = _this._onEnter.bind(_this);
	    _this._onClickSuggestion = _this._onClickSuggestion.bind(_this);
	    _this._onFocus = _this._onFocus.bind(_this);
	    _this._onInputKeyDown = _this._onInputKeyDown.bind(_this);
	    _this._stopPropagation = _this._stopPropagation.bind(_this);
	    _this._announceSuggestion = _this._announceSuggestion.bind(_this);
	
	    _this.state = {
	      announceChange: false,
	      dropActive: false,
	      activeSuggestionIndex: -1
	    };
	    return _this;
	  }
	
	  _createClass(TextInput, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var suggestions = this.props.suggestions;
	      var _state = this.state,
	          announceChange = _state.announceChange,
	          dropActive = _state.dropActive,
	          focused = _state.focused;
	      var intl = this.context.intl;
	      // Set up keyboard listeners appropriate to the current state.
	
	      var activeKeyboardHandlers = {
	        esc: this._onRemoveDrop,
	        tab: this._onRemoveDrop,
	        up: this._onPreviousSuggestion,
	        down: this._onNextSuggestion,
	        enter: this._onEnter
	      };
	      var focusedKeyboardHandlers = {
	        down: this._onAddDrop
	      };
	
	      // the order here is important, need to turn off keys before turning on
	
	      if (!focused && prevState.focused) {
	        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, focusedKeyboardHandlers);
	      }
	
	      if (!dropActive && prevState.dropActive) {
	        document.removeEventListener('click', this._onRemoveDrop);
	        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, activeKeyboardHandlers);
	        if (this._drop) {
	          this._drop.remove();
	          this._drop = undefined;
	        }
	      }
	
	      if (focused && !prevState.focused) {
	        _KeyboardAccelerators2.default.startListeningToKeyboard(this, focusedKeyboardHandlers);
	      }
	
	      if (dropActive && !prevState.dropActive) {
	        document.addEventListener('click', this._onRemoveDrop);
	        _KeyboardAccelerators2.default.startListeningToKeyboard(this, activeKeyboardHandlers);
	
	        // If this is inside a FormField, place the drop in reference to it.
	        var control = (0, _DOM.findAncestor)(this.componentRef, FORM_FIELD) || this.componentRef;
	        this._drop = new _Drop2.default(control, this._renderDropContent(), {
	          align: { top: 'bottom', left: 'left' },
	          responsive: false // so suggestion changes don't re-align
	        });
	      } else if (dropActive && prevState.dropActive) {
	        this._drop.render(this._renderDropContent());
	      }
	
	      if (announceChange && suggestions) {
	        var matchResultsMessage = _Intl2.default.getMessage(intl, 'Match Results', {
	          count: suggestions.length
	        });
	        var navigationHelpMessage = '';
	        if (suggestions.length) {
	          navigationHelpMessage = '(' + _Intl2.default.getMessage(intl, 'Navigation Help') + ')';
	        }
	        (0, _Announcer.announce)(matchResultsMessage + ' ' + navigationHelpMessage);
	        this.setState({ announceChange: false });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('click', this._onRemoveDrop);
	      if (this._drop) {
	        this._drop.remove();
	      }
	    }
	  }, {
	    key: '_stopPropagation',
	    value: function _stopPropagation() {
	      if (document.activeElement === this.componentRef) {
	        return true;
	      }
	    }
	  }, {
	    key: '_onInputChange',
	    value: function _onInputChange(event) {
	      var onDOMChange = this.props.onDOMChange;
	
	      this.setState({
	        activeSuggestionIndex: -1, announceChange: true, dropActive: true
	      });
	      if (onDOMChange) {
	        onDOMChange(event);
	      }
	    }
	  }, {
	    key: '_announceSuggestion',
	    value: function _announceSuggestion(index) {
	      var suggestions = this.props.suggestions;
	      var intl = this.context.intl;
	
	      var labelMessage = this._renderLabel(suggestions[index]);
	      var enterSelectMessage = _Intl2.default.getMessage(intl, 'Enter Select');
	      (0, _Announcer.announce)(labelMessage + ' ' + enterSelectMessage);
	    }
	  }, {
	    key: '_onAddDrop',
	    value: function _onAddDrop(event) {
	      var _props = this.props,
	          suggestions = _props.suggestions,
	          value = _props.value;
	      // Get values of suggestions, so we can highlight selected suggestion
	
	      if (suggestions) {
	        event.preventDefault();
	        var suggestionValues = suggestions.map(function (suggestion) {
	          if ((typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
	            return suggestion.value;
	          } else {
	            return suggestion;
	          }
	        });
	        var activeSuggestionIndex = suggestionValues.indexOf(value);
	        this.setState({
	          dropActive: true,
	          activeSuggestionIndex: activeSuggestionIndex
	        });
	      }
	    }
	  }, {
	    key: '_onRemoveDrop',
	    value: function _onRemoveDrop() {
	      this.setState({ dropActive: false });
	    }
	  }, {
	    key: '_onNextSuggestion',
	    value: function _onNextSuggestion() {
	      var suggestions = this.props.suggestions;
	      var activeSuggestionIndex = this.state.activeSuggestionIndex;
	
	      var index = Math.min(activeSuggestionIndex + 1, suggestions.length - 1);
	      this.setState({ activeSuggestionIndex: index }, this._announceSuggestion.bind(this, index));
	    }
	  }, {
	    key: '_onPreviousSuggestion',
	    value: function _onPreviousSuggestion() {
	      var activeSuggestionIndex = this.state.activeSuggestionIndex;
	
	      var index = Math.max(activeSuggestionIndex - 1, 0);
	      this.setState({ activeSuggestionIndex: index }, this._announceSuggestion.bind(this, index));
	    }
	  }, {
	    key: '_onEnter',
	    value: function _onEnter(event) {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          onSelect = _props2.onSelect,
	          suggestions = _props2.suggestions;
	      var activeSuggestionIndex = this.state.activeSuggestionIndex;
	      var intl = this.context.intl;
	
	      this.setState({ dropActive: false });
	      if (activeSuggestionIndex >= 0) {
	        event.preventDefault(); // prevent submitting forms
	        var suggestion = suggestions[activeSuggestionIndex];
	        this.setState({ value: suggestion }, function () {
	          var suggestionMessage = _this2._renderLabel(suggestion);
	          var selectedMessage = _Intl2.default.getMessage(intl, 'Selected');
	          (0, _Announcer.announce)(suggestionMessage + ' ' + selectedMessage);
	        });
	        if (onSelect) {
	          onSelect({
	            target: this.componentRef, suggestion: suggestion
	          });
	        }
	      }
	    }
	  }, {
	    key: '_onClickSuggestion',
	    value: function _onClickSuggestion(suggestion) {
	      var onSelect = this.props.onSelect;
	
	      this.setState({ value: suggestion, dropActive: false });
	      if (onSelect) {
	        onSelect({
	          target: this.componentRef, suggestion: suggestion
	        });
	      }
	    }
	  }, {
	    key: '_onFocus',
	    value: function _onFocus(event) {
	      var onFocus = this.props.onFocus;
	
	      this.setState({
	        focused: true,
	        activeSuggestionIndex: -1
	      });
	      // elements with autoFocus=true will be focused before the ref is available
	      if (this.componentRef) {
	        this.componentRef.select();
	      }
	
	      if (onFocus) {
	        onFocus(event);
	      }
	    }
	  }, {
	    key: '_onInputKeyDown',
	    value: function _onInputKeyDown(event) {
	      var _props3 = this.props,
	          onKeyDown = _props3.onKeyDown,
	          suggestions = _props3.suggestions;
	      var dropActive = this.state.dropActive;
	
	      if (suggestions) {
	        var up = 38;
	        var down = 40;
	        var tab = 9;
	        if (event.keyCode === up || event.keyCode === down) {
	          // stop the input to move the cursor when suggestions are present
	          event.preventDefault();
	
	          if (event.keyCode === down && !dropActive) {
	            this._onAddDrop(event);
	          }
	        }
	
	        if (event.keyCode === tab) {
	          this.setState({ focused: false });
	        }
	      }
	
	      if (onKeyDown) {
	        onKeyDown(event);
	      }
	    }
	  }, {
	    key: '_renderLabel',
	    value: function _renderLabel(suggestion) {
	      if (suggestion && (typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
	        return suggestion.label || suggestion.value;
	      } else {
	        return suggestion;
	      }
	    }
	  }, {
	    key: '_renderDropContent',
	    value: function _renderDropContent() {
	      var _this3 = this;
	
	      var suggestions = this.props.suggestions;
	      var activeSuggestionIndex = this.state.activeSuggestionIndex;
	
	      var items = void 0;
	      if (suggestions) {
	        items = suggestions.map(function (suggestion, index) {
	          var _classnames;
	
	          var classes = (0, _classnames4.default)((_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '__suggestion', true), _defineProperty(_classnames, CLASS_ROOT + '__suggestion--active', index === activeSuggestionIndex), _classnames));
	          return _react2.default.createElement(
	            'li',
	            { key: index, className: classes,
	              onClick: _this3._onClickSuggestion.bind(_this3, suggestion) },
	            _this3._renderLabel(suggestion)
	          );
	        });
	      }
	
	      return _react2.default.createElement(
	        'ol',
	        { className: CLASS_ROOT + '__suggestions', onClick: this._onRemoveDrop },
	        items
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props4 = this.props,
	          className = _props4.className,
	          defaultValue = _props4.defaultValue,
	          value = _props4.value,
	          placeHolder = _props4.placeHolder,
	          props = _objectWithoutProperties(_props4, ['className', 'defaultValue', 'value', 'placeHolder']);
	
	      delete props.suggestions;
	      delete props.onDOMChange;
	      delete props.onSelect;
	      var classes = (0, _classnames4.default)(CLASS_ROOT, INPUT, _defineProperty({}, CLASS_ROOT + '--active', this.state.active), className);
	
	      return _react2.default.createElement('input', _extends({ ref: function ref(_ref) {
	          return _this4.componentRef = _ref;
	        } }, props, {
	        className: classes, autoComplete: 'off',
	        defaultValue: this._renderLabel(defaultValue),
	        value: this._renderLabel(value),
	        placeholder: placeHolder,
	        onChange: this._onInputChange, onFocus: this._onFocus,
	        onKeyDown: this._onInputKeyDown }));
	    }
	  }]);
	
	  return TextInput;
	}(_react.Component);
	
	TextInput.displayName = 'TextInput';
	exports.default = TextInput;
	
	
	TextInput.contextTypes = {
	  intl: _react.PropTypes.object
	};
	
	TextInput.propTypes = {
	  defaultValue: _react.PropTypes.string,
	  id: _react.PropTypes.string,
	  name: _react.PropTypes.string,
	  onDOMChange: _react.PropTypes.func,
	  onSelect: _react.PropTypes.func,
	  placeHolder: _react.PropTypes.string,
	  suggestions: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.shape({
	    label: _react.PropTypes.node,
	    value: _react.PropTypes.any
	  }), _react.PropTypes.string])),
	  value: _react.PropTypes.string
	};
	module.exports = exports['default'];

/***/ },

/***/ 959:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(280);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _reactRedux = __webpack_require__(695);
	
	var _ramda = __webpack_require__(305);
	
	var _firebaseconnector = __webpack_require__(819);
	
	var _firebaseconnector2 = _interopRequireDefault(_firebaseconnector);
	
	var _main = __webpack_require__(960);
	
	var _main2 = _interopRequireDefault(_main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	  return {
	    updateUsername: function updateUsername(payload) {
	      return dispatch({ type: 'UPDATEUSERNAME', payload: payload });
	    },
	    updatePassword: function updatePassword(payload) {
	      return dispatch({ type: 'UPDATEPASSWORD', payload: payload });
	    },
	    authenticate: function authenticate(payload) {
	      return dispatch({ type: 'AUTHENTICATE', payload: payload });
	    }
	  };
	};
	
	var mapStateToProps = function mapStateToProps(state) {
	  return (0, _extends3.default)({}, (0, _ramda.pick)(['username', 'password'], state.login), (0, _ramda.pick)(['authenticated'], state.core));
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _firebaseconnector2.default)(_main2.default, '/auth', 'auth'));

/***/ },

/***/ 960:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoginView = undefined;
	
	var _getPrototypeOf = __webpack_require__(639);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(644);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(645);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(649);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(683);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Box = __webpack_require__(765);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _Card = __webpack_require__(822);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _propTypes = __webpack_require__(691);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _TextInput = __webpack_require__(953);
	
	var _TextInput2 = _interopRequireDefault(_TextInput);
	
	var _Button = __webpack_require__(774);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _authenticatedcard = __webpack_require__(961);
	
	var _authenticatedcard2 = _interopRequireDefault(_authenticatedcard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LoginView = exports.LoginView = function (_Component) {
	  (0, _inherits3.default)(LoginView, _Component);
	
	  function LoginView() {
	    (0, _classCallCheck3.default)(this, LoginView);
	    return (0, _possibleConstructorReturn3.default)(this, (LoginView.__proto__ || (0, _getPrototypeOf2.default)(LoginView)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(LoginView, [{
	    key: 'authenticate',
	    value: function authenticate() {
	      this.props.authenticate(this.props.username === this.props.auth.username && this.props.password === this.props.auth.password);
	    }
	  }, {
	    key: 'invalidate',
	    value: function invalidate() {
	      this.props.authenticate(false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        _Box2.default,
	        {
	          justify: 'center',
	          pad: 'large',
	          align: 'center',
	          appCentered: true,
	          full: true,
	          texture: 'http://photos.imageevent.com/afap/wallpapers/movies/starwarsanewhopepostersetc/star%20wars%20poster.jpg' //eslint-disable-line
	        },
	        !this.props.authenticated ? _react2.default.createElement(
	          _Card2.default,
	          { colorIndex: 'grey-1',
	            contentPad: 'large',
	            label: 'Authenticate',
	            description: 'Authenticate to access Admin'
	          },
	          _react2.default.createElement(
	            _Box2.default,
	            { pad: 'medium' },
	            _react2.default.createElement(_TextInput2.default, {
	              placeHolder: 'Enter Username',
	              value: this.props.username,
	              onDOMChange: function onDOMChange(e) {
	                return _this2.props.updateUsername(e.target.value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Box2.default,
	            { pad: 'medium' },
	            _react2.default.createElement(_TextInput2.default, {
	              placeHolder: 'Enter Password',
	              value: this.props.password,
	              onDOMChange: function onDOMChange(e) {
	                return _this2.props.updatePassword(e.target.value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Box2.default,
	            { pad: 'medium' },
	            _react2.default.createElement(_Button2.default, {
	              label: 'Login',
	              onClick: function onClick() {
	                return _this2.authenticate();
	              } })
	          )
	        ) : _react2.default.createElement(_authenticatedcard2.default, { invalidate: function invalidate() {
	            return _this2.invalidate();
	          } })
	      );
	    }
	  }]);
	  return LoginView;
	}(_react.Component);
	
	LoginView.propTypes = {
	  auth: _propTypes2.default.object,
	  username: _propTypes2.default.string,
	  password: _propTypes2.default.string,
	  updateUsername: _propTypes2.default.func,
	  updatePassword: _propTypes2.default.func,
	  authenticate: _propTypes2.default.func,
	  authenticated: _propTypes2.default.bool
	};
	
	exports.default = LoginView;

/***/ },

/***/ 961:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Card = __webpack_require__(822);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	var _Button = __webpack_require__(774);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	var _Box = __webpack_require__(765);
	
	var _Box2 = _interopRequireDefault(_Box);
	
	var _propTypes = __webpack_require__(691);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactRouter = __webpack_require__(224);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AuthenticatedCard = function AuthenticatedCard(props) {
	  return _react2.default.createElement(
	    _Card2.default,
	    {
	      colorIndex: 'grey-1',
	      contentPad: 'large',
	      label: 'Already Authenticated',
	      description: 'Trying to Login, Already Logged in you are'
	    },
	    _react2.default.createElement(
	      _Box2.default,
	      { pad: 'medium' },
	      _react2.default.createElement(_Button2.default, {
	        label: 'Invalidate',
	        onClick: function onClick() {
	          return props.invalidate();
	        }
	      })
	    ),
	    _react2.default.createElement(
	      _reactRouter.Link,
	      { to: 'admin' },
	      'Go to Admin'
	    )
	  );
	};
	
	AuthenticatedCard.propTypes = {
	  invalidate: _propTypes2.default.func
	};
	
	exports.default = AuthenticatedCard;

/***/ },

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(281);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _reducecreator = __webpack_require__(304);
	
	var _reducecreator2 = _interopRequireDefault(_reducecreator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ACTION_HANDLERS = {
	  UPDATEUSERNAME: function UPDATEUSERNAME(state, action) {
	    return (0, _assign2.default)({}, state, { username: action.payload });
	  },
	  UPDATEPASSWORD: function UPDATEPASSWORD(state, action) {
	    return (0, _assign2.default)({}, state, { password: action.payload });
	  }
	};
	
	var initialState = { username: '', password: '' };
	
	exports.default = (0, _reducecreator2.default)(initialState, ACTION_HANDLERS);

/***/ }

});
//# sourceMappingURL=3.login.7a8ea04feb8bdfce5694.js.map