import React from 'react';

function Input(props) {
  return (
    <div>
      <input onChange={props.updateUrl} className="bg-gray-900 shadow appearance-none rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none outline-none" id="username" type="text" placeholder="https://example.com/api"/>
    </div>
  );
}

export default Input;
