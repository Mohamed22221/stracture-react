import React, { useState } from "react";

const DropDown = ({ data, setItems ,width}) => {
  const [selected, setSelected] = useState(0);
  const handelDropDown = (val, index) => {
    console.log(val , index)
    setSelected(index);
    setItems(val);
  };
  return (
    <div className="main-dropdown" >
      {data.map((val, index) => {
        return (
          <li
            onClick={() =>handelDropDown(val, index)}
            key={index}
            className={index === selected ? "active" : ""}
          >
            <div className="icon">{val.icon}</div>
            <div className="name">{val.name}</div>
          </li>
        );
      })}
    </div>
  );
};

export default DropDown;
