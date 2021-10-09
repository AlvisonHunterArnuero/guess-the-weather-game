import React from "react";
import toast, { Toaster } from 'react-hot-toast';

const UserGuessInput = (props) => {
  const strcustomTitle = "Type in only numbers, please."
  const notify = () =>
    toast.error(strcustomTitle, {
      style: {
        border: "1px dotted black",
        background: "#ffb7b7",
        color: "#990044",
      },
    });
  return (
    <div className='input-group mb-3'>
      <Toaster gutter={8} />
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
            notify();
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
        SUBMIT
      </button>
    </div>
  );
};

export default UserGuessInput;