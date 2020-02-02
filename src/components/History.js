import React from 'react';
import { Highlight } from 'react-fast-highlight';
import HistoryItem from './HistoryItem';

function History(props) {
  return (
    <div className="flex text-left text-sm w-full font-code 100vh">
      <pre className="mt-8 text-sm w-full">
        <p className="px-8 text-gray-500 uppercase bottom-0">Previous Requests</p>
        <div className="overflow-y-auto h-full">
          {props.req.map((req, index) => <HistoryItem index={index} data={req.data} updateHistory={props.updateHistory} req={req.req} />)}
        </div>
      </pre>
    </div>
  );
}

export default History;
