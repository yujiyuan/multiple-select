"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireDefault(require("./List"));

require("./MobileMultipleSelect.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MobileMultipleSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileMultipleSelect, _React$Component);

  function MobileMultipleSelect(props) {
    var _this;

    _classCallCheck(this, MobileMultipleSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MobileMultipleSelect).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onTapConfirm", function (refDom) {
      var checkedList = refDom.filter(function (item) {
        return item.checked;
      });
      var value = checkedList.map(function (item) {
        return item.value;
      });
      var label = checkedList.map(function (item) {
        return item.getAttribute("data-label");
      });
      console.log("hz", value);
      console.log("label", label);

      _this.setState({
        valueList: value
      });

      _this.onTapSetMultipleSelectionModalStatus();
    });

    _defineProperty(_assertThisInitialized(_this), "onTapSetMultipleSelectionModalStatus", function () {
      _this.setState({
        multipleModal: !_this.state.multipleModal
      });
    });

    _this.state = {
      multipleModal: false,
      valueList: _toConsumableArray(props.serviceData)
    };
    return _this;
  }
  /**
   * 多选模态框内点击确定时的方法
   */


  _createClass(MobileMultipleSelect, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          multipleModal = _this$state.multipleModal,
          valueList = _this$state.valueList;
      var _this$props = this.props,
          data = _this$props.data,
          isRequired = _this$props.isRequired,
          label = _this$props.label,
          checkbox = _this$props.checkbox;
      var props = {
        onHide: this.onTapSetMultipleSelectionModalStatus,
        onConfirm: this.onTapConfirm,
        data: data,
        preData: valueList,
        checkbox: checkbox
      }; //筛选出源数据中与后台返回的数据相匹配的项，并返回name

      var serviceDataLabel = data.filter(function (item) {
        return valueList.includes(String(item.code));
      }).map(function (item) {
        return item.name;
      }); //返回的相匹配项组合成字符串

      var serviceDataLabelString = Array.from(new Set(serviceDataLabel)).join("、");
      var valueString = Array.from(new Set(valueList)).join(",");
      return _react.default.createElement("div", {
        className: "multiple-select"
      }, _react.default.createElement("div", {
        className: "multiple-select__label"
      }, isRequired && _react.default.createElement("em", {
        className: "multiple-select__isRequired--red"
      }, "*"), label), _react.default.createElement("div", {
        className: "multiple-select__primary",
        onClick: this.onTapSetMultipleSelectionModalStatus
      }, _react.default.createElement("input", {
        type: "hidden",
        value: valueString
      }), _react.default.createElement("p", null, serviceDataLabelString || "\u8BF7\u9009\u62E9".concat(label))), _react.default.createElement("i", {
        className: "multiple-select__arrow"
      }), multipleModal && _react.default.createElement(_List.default, props));
    }
  }]);

  return MobileMultipleSelect;
}(_react.default.Component);
/**
 * @param {array} data - 多选列表的数据.
 * @param {array} serviceData - 从后台返回的数据，一般用于设置默认选择值.
 * @param {boolean} isRequired - 是否显示必填的红色星号.
 * @param {string} label - 多选列表的文字.
 * @param {boolean} checkbox - 是否是checkbok.
 */


MobileMultipleSelect.prototypes = {
  data: _propTypes.default.array.isRequired,
  serviceData: _propTypes.default.array,
  isRequired: _propTypes.default.bool,
  label: _propTypes.default.string.isRequired,
  checkbox: _propTypes.default.bool
};
MobileMultipleSelect.defaultProps = {
  data: [],
  isRequired: true,
  label: "",
  checkbox: true,
  serviceData: []
};
var _default = MobileMultipleSelect;
exports.default = _default;