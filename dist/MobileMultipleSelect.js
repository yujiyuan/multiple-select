"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = require("./List");

var _List2 = _interopRequireDefault(_List);

require("./MobileMultipleSelect.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components

// styles


var MobileMultipleSelect = function (_React$Component) {
  _inherits(MobileMultipleSelect, _React$Component);

  function MobileMultipleSelect(props) {
    _classCallCheck(this, MobileMultipleSelect);

    var _this = _possibleConstructorReturn(this, (MobileMultipleSelect.__proto__ || Object.getPrototypeOf(MobileMultipleSelect)).call(this, props));

    _this.onTapConfirm = function (refDom) {
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
    };

    _this.onTapSetMultipleSelectionModalStatus = function () {
      _this.setState({
        multipleModal: !_this.state.multipleModal
      });
    };

    _this.state = {
      multipleModal: false,
      valueList: [].concat(_toConsumableArray(props.serviceData))
    };
    return _this;
  }

  /**
   * 多选模态框内点击确定时的方法
   */


  /**
   * 设置多选模态框的显示/隐藏状态
   */


  _createClass(MobileMultipleSelect, [{
    key: "render",
    value: function render() {
      var _state = this.state,
          multipleModal = _state.multipleModal,
          valueList = _state.valueList;
      var _props = this.props,
          data = _props.data,
          isRequired = _props.isRequired,
          label = _props.label,
          checkbox = _props.checkbox;

      var props = {
        onHide: this.onTapSetMultipleSelectionModalStatus,
        onConfirm: this.onTapConfirm,
        data: data,
        preData: valueList,
        checkbox: checkbox
      };
      //筛选出源数据中与后台返回的数据相匹配的项，并返回name
      var serviceDataLabel = data.filter(function (item) {
        return valueList.includes(String(item.code));
      }).map(function (item) {
        return item.name;
      });
      //返回的相匹配项组合成字符串
      var serviceDataLabelString = Array.from(new Set(serviceDataLabel)).join("、");
      var valueString = Array.from(new Set(valueList)).join(",");
      return _react2.default.createElement(
        "div",
        { className: "multiple-select" },
        _react2.default.createElement(
          "div",
          { className: "multiple-select__label" },
          isRequired && _react2.default.createElement(
            "em",
            { className: "multiple-select__isRequired--red" },
            "*"
          ),
          label
        ),
        _react2.default.createElement(
          "div",
          {
            className: "multiple-select__primary",
            onClick: this.onTapSetMultipleSelectionModalStatus
          },
          _react2.default.createElement("input", { type: "hidden", value: valueString }),
          _react2.default.createElement(
            "p",
            null,
            serviceDataLabelString || "\u8BF7\u9009\u62E9" + label
          )
        ),
        _react2.default.createElement("i", { className: "multiple-select__arrow" }),
        multipleModal && _react2.default.createElement(_List2.default, props)
      );
    }
  }]);

  return MobileMultipleSelect;
}(_react2.default.Component);

/**
 * @param {array} data - 多选列表的数据.
 * @param {array} serviceData - 从后台返回的数据，一般用于设置默认选择值.
 * @param {boolean} isRequired - 是否显示必填的红色星号.
 * @param {string} label - 多选列表的文字.
 * @param {boolean} checkbox - 是否是checkbok.
 */


MobileMultipleSelect.prototypes = {
  data: _propTypes2.default.array.isRequired,
  serviceData: _propTypes2.default.array,
  isRequired: _propTypes2.default.bool,
  label: _propTypes2.default.string.isRequired,
  checkbox: _propTypes2.default.bool
};

MobileMultipleSelect.defaultProps = {
  data: [],
  isRequired: true,
  label: "",
  checkbox: true,
  serviceData: []
};
exports.default = MobileMultipleSelect;