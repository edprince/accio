import React from 'react';
import { Highlight } from 'react-fast-highlight';

function HistoryItem(props) {
  return (
      <pre onClick={() => {
        props.updateHistory(props.data);
        props.setSelectedState(props.index);
      }} className={"text-gray-800 cursor-pointer hover:bg-gray-200 pt-4 pb-4 px-8 text-sm w-full " + ((props.selected == props.index) ? "bg-gray-200" : "")}>
          {props.req}
      </pre>
  );
}

export default HistoryItem;
