import React from "react";

function Radio_button(props) {
  return (
    <>
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label for="default-radio-1" className="ml-2 text-lg font-medium">
        {props.children}
      </label>
      <div className="mr-4"></div>
    </>
  );
}

export default Radio_button;
