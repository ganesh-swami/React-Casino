import React from "react";

function AuthInput(props) {
  return (
    <div className="inline-flex items-center space-x-2 rounded-3xl bg-transparent px-2 py-1 border border-gray-600 input-register mb-2">
      <input
        type={props.type}
        placeholder={props.children}
        className="focus:outline-none outline-none bg-transparent border-none input1-register"
        ref={props.refObj}
      />
    </div>
  );
}

export default AuthInput;
