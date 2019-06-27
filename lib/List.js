"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./MobileMultipleSelect.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var List = function List(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      onHide = _ref.onHide,
      onConfirm = _ref.onConfirm,
      preData = _ref.preData,
      checkbox = _ref.checkbox;
  var refDom = [];
  return _react["default"].createElement("div", {
    className: "multiple"
  }, _react["default"].createElement("ul", {
    className: "multiple__list"
  }, data.map(function (item, index) {
    var name = item.name,
        code = item.code;
    return _react["default"].createElement("li", {
      className: "multiple__item",
      key: index
    }, _react["default"].createElement("label", null, _react["default"].createElement("span", null, name), _react["default"].createElement("input", {
      type: checkbox ? "checkbox" : "radio",
      name: "multiple-list",
      value: code,
      "data-label": item.name,
      ref: function ref(node) {
        return refDom = [].concat(_toConsumableArray(refDom), [node]);
      },
      defaultChecked: preData && preData.includes(String(code))
    }), _react["default"].createElement("i", {
      className: "show-box"
    })));
  })), _react["default"].createElement("div", {
    className: "multiple__buttons"
  }, _react["default"].createElement("button", {
    type: "button",
    onTouchEnd: function onTouchEnd() {
      onHide();
    }
  }, "\u53D6\u6D88"), _react["default"].createElement("button", {
    type: "button",
    onTouchEnd: function onTouchEnd() {
      onConfirm(refDom);
    }
  }, "\u786E\u8BA4")));
};

var _default = List;
exports["default"] = _default;