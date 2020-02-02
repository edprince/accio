import React from 'react';

function Input(props) {
  return (
    <div>
      <input onChange={props.updateUrl} className="text-normal bg-gray-200 shadow appearance-none rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none outline-none" id="username" type="text" placeholder="https://example.com/api"/>
    </div>
  );
}

export default Input;
