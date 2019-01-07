import React from "react";
import PropTypes from "prop-types";
// components
import List from "./List";
// styles
import "./MutipleSelect.scss";

class MultipleSelect extends React.Component {
  state = {
    multipleModal: false,
    valueList: [],
    labelList: [],
    valueString: "",
    labelString: ""
  };

  /**
   * 多选模态框内点击确定时的方法
   */
  onTapConfirm = () => {
    const { valueList, labelList } = this.state;

    this.setState({
      valueString: Array.from(new Set(valueList)).join(","),
      labelString: Array.from(new Set(labelList)).join("、")
    });

    this.onTapSetMultipleSelectionModalStatus();
  };

  /**
   * 设置多选模态框的显示/隐藏状态
   */
  onTapSetMultipleSelectionModalStatus = () => {
    this.setState({
      multipleModal: !this.state.multipleModal
    });
  };

  /** 列表点击时选中的值 */
  onTapChange = event => {
    const { value, checked } = event.target;
    const label = event.target.getAttribute("data-label");
    const { valueList, labelList } = this.state;

    if (checked && valueList.indexOf(value) === -1) {
      valueList.push(value);
      labelList.push(label);
    } else {
      valueList.splice(valueList.indexOf(value), 1);
      labelList.splice(labelList.indexOf(label), 1);
    }
    this.setState({
      valueList,
      labelList
    });
  };
  render() {
    const { multipleModal, valueString, labelString, valueList } = this.state;
    const { data, isRequired, label, checkbox } = this.props;
    const props = {
      onHide: this.onTapSetMultipleSelectionModalStatus,
      onConfirm: this.onTapConfirm,
      onChange: this.onTapChange,
      data,
      preData: valueList,
      checkbox
    };

    return (
      <div className={"multiple-select"}>
        <div className={"multiple-select__label"}>
          {isRequired && (
            <em className="multiple-select__isRequired--red">*</em>
          )}
          {label}
        </div>
        <div
          className="multiple-select__primary"
          onClick={this.onTapSetMultipleSelectionModalStatus}
        >
          <input type="hidden" value={valueString} />
          <p>{labelString || `请选择${label}`}</p>
        </div>
        <i className="multiple-select__arrow" />
        {multipleModal && <List {...props} />}
      </div>
    );
  }
}

/**
 * @param {array} data - 多选列表的数据.
 * @param {boolean} isRequired - 是否显示必填的红色星号.
 * @param {string} label - 多选列表的文字.
 * @param {boolean} checkbox - 是否是checkbok.
 */
MultipleSelect.prototypes = {
  data: PropTypes.array,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  checkbox: PropTypes.bool
};

MultipleSelect.defaultProps = {
  data: [],
  isRequired: true,
  label: "",
  checkbox: true
};
export default MultipleSelect;
