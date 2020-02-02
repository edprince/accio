import React from 'react';
import { Highlight } from 'react-fast-highlight';

function Results(props) {
  return (
    <div>
      <pre className="overflow-y-auto max-h-screen">
        <Highlight languages={['js']}>
          {props.results}
        </Highlight>
      </pre>
    </div>
  );
}

export default Results;
