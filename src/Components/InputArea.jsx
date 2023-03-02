import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.handleChange}
        type="text"
        value={props.inputText}
        onKeyDown={props.handelKeyPress}
      />
      <button
        onClick={() => {
          props.addItem(props.inputText);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
