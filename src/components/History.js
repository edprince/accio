import React, { useState } from 'react';
import { Highlight } from 'react-fast-highlight';
import HistoryItem from './HistoryItem';

function History(props) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex text-left text-sm w-full font-code 100vh">
      <pre className="mt-8 text-sm w-full">
  <p className="px-8 text-gray-500 uppercase bottom-0">Previous Requests ({props.req.length})</p>
        <div className="overflow-y-auto h-full">
          {props.req.map((req, index) => <HistoryItem setSelectedState={data => setSelected(data)} selected={selected} index={index} data={req.data} updateHistory={props.updateHistory} req={req.req} />)}
        </div>
      </pre>
    </div>
  );
}

export default History;
