"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./MobileMultipleSelect.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var List = function List(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      onHide = _ref.onHide,
      onConfirm = _ref.onConfirm,
      preData = _ref.preData,
      checkbox = _ref.checkbox;

  var refDom = [];

  return _react2.default.createElement(
    "div",
    { className: "multiple" },
    _react2.default.createElement(
      "ul",
      { className: "multiple__list" },
      data.map(function (item, index) {
        var name = item.name,
            code = item.code;


        return _react2.default.createElement(
          "li",
          { className: "multiple__item", key: index },
          _react2.default.createElement(
            "label",
            null,
            _react2.default.createElement(
              "span",
              null,
              name
            ),
            _react2.default.createElement("input", {
              type: checkbox ? "checkbox" : "radio",
              name: "multiple-list",
              value: code,
              "data-label": item.name,
              ref: function ref(node) {
                return refDom = [].concat(_toConsumableArray(refDom), [node]);
              },
              defaultChecked: preData && preData.includes(String(code))
            }),
            _react2.default.createElement("i", { className: "show-box" })
          )
        );
      })
    ),
    _react2.default.createElement(
      "div",
      { className: "multiple__buttons" },
      _react2.default.createElement(
        "button",
        {
          type: "button",
          onTouchEnd: function onTouchEnd() {
            onHide();
          }
        },
        "\u53D6\u6D88"
      ),
      _react2.default.createElement(
        "button",
        {
          type: "button",
          onTouchEnd: function onTouchEnd() {
            onConfirm(refDom);
          }
        },
        "\u786E\u8BA4"
      )
    )
  );
};

exports.default = List;