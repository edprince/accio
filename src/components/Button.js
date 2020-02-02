import React from 'react';

function Button(props) {
  return (
    <div>
      <button onClick={props.click} className="text-sm mt-2 float-left shadow bg-blue-700 hover:bg-bluet-800 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-4 rounded" type="button">
        Fetch
      </button>
    </div>
  );
}

export default Button;
