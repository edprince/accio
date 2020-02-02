import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/Input";
import Button from "./components/Button";
import Results from "./components/Results";

function App() {
  const [result, getResult] = useState("{}");
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  const fetch_data = (url) => {
    fetch(url, {mode: "cors", method: method}).then(
      function(response) {
        if (response.status !== 200) {
          getResult('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        // Examine the text in the response
        response.json().then(function(data) {
          getResult(JSON.stringify(data, undefined, 2));
        });
      }
    ).catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  return (
    <div className="App max-width-full">
      <div className="flex-container">
        <div className="App-header bg-gray-800 shadow-md px-8 pt-10 pb-8 max-w-lg">
          <div className="flex mb-4">
            <div onClick={() => {setMethod("GET")}} className={"cursor-pointer text-md w-1/2 text-" + (method == "GET" ? "white" : "gray-600")}>GET</div>
            <div onClick={() => {setMethod("POST")}} className={"cursor-pointer text-md w-1/2 text-" + (method == "POST" ? "white" : "gray-600")}>POST</div>
          </div>
          <Input updateUrl={(e) => setUrl(e.target.value)} />
          <Button click={() => fetch_data(url) }/>
        </div>
        <div className="App-header bg-gray-900 text-left pl-4 font-code max-w-full">
          <Results results={result}/>
        </div>
      </div>
    </div>
  );
}


export default App;
