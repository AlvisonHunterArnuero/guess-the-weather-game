import React from "react";
const UserGuessInput = (props) => {
  return (
    <div className='input-group mb-3'>
    <input
      value={props.temperature || ""}
      onChange={props.handleInputChange}
      onFocus={(e) => e.target.value = ""}
      type='text'
      placeholder={props.fillerText}
      className='form-control'
      aria-label={props.placeholder}
      aria-describedby='button-addon2'
    />
    <button
      className='btn btn-outline-secondary'
      type='button'
      id='button-addon2'
      onClick={props.handleSubmit}
    > Submit
    </button>
  </div>
  );
};

export default UserGuessInput;