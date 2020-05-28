import React from 'react';

function Input(props) {
  return (
    <div>
      <input onChange={props.updateUrl} className="text-normal w-full appearance-none rounded py-2 px-3 text-gray-900 leading-tight focus:outline-none outline-none" id="username" type="text" placeholder="https://api.tvmaze.com/search/shows?q=game"/>
    </div>
  );
}

export default Input;
