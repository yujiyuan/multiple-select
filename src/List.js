import React from "react";

import "./MobileMultipleSelect.css";

const List = ({ data = [], onHide, onConfirm, preData, checkbox }) => {
  let refDom = [];

  return (
    <div className="multiple">
      <ul className="multiple__list">
        {data.map((item, index) => {
          const { name, code } = item;

          return (
            <li className="multiple__item" key={index}>
              <label>
                <span>{name}</span>
                <input
                  type={checkbox ? "checkbox" : "radio"}
                  name="multiple-list"
                  value={code}
                  data-label={item.name}
                  ref={node => (refDom = [...refDom, node])}
                  defaultChecked={preData && preData.includes(String(code))}
                 
                />
                <i className="show-box" />
              </label>
            </li>
          );
        })}
      </ul>

      <div className="multiple__buttons">
        <button
          type="button"
          onTouchEnd={() => {
            onHide();
          }}
        >
          取消
        </button>
        <button
          type="button"
          onTouchEnd={() => {
            onConfirm(refDom);
          }}
        >
          确认
        </button>
      </div>
    </div>
  );
};

export default List;
