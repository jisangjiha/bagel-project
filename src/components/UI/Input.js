import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-2">
      <label htmlFor={props.input.id} className="font-bold mr-4">
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className="w-32 rounded-md border border-bagel-light-gray pl-2 font-inherit"
      />
    </div>
  );
});

export default Input;
