import React from 'react';

export function ButtonSubmit({ buttonText, buttonStyle, disabled }) {
  return (
    <button
      type="submit"
      step='0.01'
      className={`${buttonStyle} ${disabled ?  ' bg-gray-400 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}
