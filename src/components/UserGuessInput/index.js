import React from "react";

const UserGuessInput = (props) => {
  const strcustomTitle = "Type in only numbers, please."
  return (
    <div className='input-group mb-3'>
      <input
        type='text'
        data-bs-toggle='tooltip'
        data-bs-placement='bottom'
        data-bs-html='true'
        placeholder={props.fillerText}
        className='form-control'
        aria-label={props.placeholder}
        aria-describedby='button-addon2'
        maxLength='5'
        title={strcustomTitle}
        pattern='[0-9.]{0,5}'
        value={props.temperature || ""}
        onChange={props.handleInputChange}
        onFocus={(e) => (e.target.value = "")}
        onKeyPress={(event) => {
          if (!/[0-9.]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      <button
        className='btn btn-outline-secondary'
        type='button'
        id='button-addon2'
        onClick={props.handleSubmit}
      >
        {" "}
        Submit
      </button>
    </div>
  );
};

export default UserGuessInput;