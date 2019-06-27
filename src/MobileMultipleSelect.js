import React from "react";
import PropTypes from "prop-types";
// components
import List from "./List";
// styles
import "./MobileMultipleSelect.css";

class MobileMultipleSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multipleModal: false,
      valueList: [...props.serviceData]
    };
  }

  /**
   * 多选模态框内点击确定时的方法
   */
  onTapConfirm = refDom => {
    const {onChange} = this.props;
    const checkedList = refDom.filter(item => {
      return item.checked;
    });
    const value = checkedList.map(item => {
      return item.value;
    });
    const label = checkedList.map(item => {
      return item.getAttribute("data-label");
    });

    console.log("hz", value);
    console.log("label", label);
    this.setState({
      valueList: value
    });
    onChange&&onChange(value);
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

  render() {
    const { multipleModal, valueList } = this.state;
    const { data, isRequired, label, checkbox } = this.props;
    const props = {
      onHide: this.onTapSetMultipleSelectionModalStatus,
      onConfirm: this.onTapConfirm,
      data,
      preData: valueList,
      checkbox,
    };
    //筛选出源数据中与后台返回的数据相匹配的项，并返回name
    const serviceDataLabel = data
      .filter(item => {
        return valueList.includes(String(item.code));
      })
      .map(item => {
        return item.name;
      });
    //返回的相匹配项组合成字符串
    const serviceDataLabelString = Array.from(new Set(serviceDataLabel)).join(
      "、"
    );
    const valueString = Array.from(new Set(valueList)).join(",");
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
          <p>{serviceDataLabelString || `请选择${label}`}</p>
        </div>
        <i className="multiple-select__arrow" />
        {multipleModal && <List {...props} />}
      </div>
    );
  }
}

/**
 * @param {array} data - 多选列表的数据.
 * @param {array} serviceData - 从后台返回的数据，一般用于设置默认选择值.
 * @param {boolean} isRequired - 是否显示必填的红色星号.
 * @param {string} label - 多选列表的文字.
 * @param {boolean} checkbox - 是否是checkbok.
 * @param {function} onChange - 点击checkbox时将选中的值传回使用者
 */
MobileMultipleSelect.prototypes = {
  data: PropTypes.array.isRequired,
  serviceData: PropTypes.array,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  checkbox: PropTypes.bool,
  onChange:PropTypes.func.isRequired
};

MobileMultipleSelect.defaultProps = {
  data: [],
  isRequired: true,
  label: "",
  checkbox: true,
  serviceData: [],
  onChange:()=>{}
};
export default MobileMultipleSelect;
