import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/Input";
import Button from "./components/Button";
import Results from "./components/Results";
import History from "./components/History";

function App() {
  const [result, getResult] = useState("{}");
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [requests, setRequests] = useState([]);

  const fetch_data = (url) => {
    fetch(url, {mode: "cors", method: method}).then(
      function(response) {
        if (response.status !== 200) {
          let data = 'Looks like there was a problem. Status Code: ' + response.status;
          update(data);
        }
        // Examine the text in the response
        response.json().then(function(data) {
          update(data);
        });
      }
    ).catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  const update = (data) => {
    let parsed_data = JSON.stringify(data, undefined, 2);
    getResult(parsed_data);
    let req = method + " " + url;
    setRequests([{req, data}, ...requests]);
  }

  const updateView = (data) => {
    console.log("Updating");
    console.log(data);
    let parsed_data = JSON.stringify(data, undefined, 2);
    getResult(parsed_data);
  }

  return (
    <div className="App max-width-full">
      <div className="flex-container">
        <div className="App-header bg-white shadow-md pt-10 pb-8 max-w-lg">
          <div className="px-8">
            <div className="flex mb-4">
              <div onClick={() => {setMethod("GET")}} className={"cursor-pointer text-md w-1/2 text-" + (method == "GET" ? "black" : "gray-400")}>GET</div>
              <div onClick={() => {setMethod("POST")}} className={"cursor-pointer text-md w-1/2 text-" + (method == "POST" ? "black" : "gray-400")}>POST</div>
            </div>
            <Input updateUrl={(e) => setUrl(e.target.value)} />
            <div className="w-full mb-4">
              <Button click={() => fetch_data(url) }/>
            </div>
          </div>
          <History updateHistory={(data) => updateView(data)} req={requests} />
        </div>
        <div className="App-header bg-gray-900 text-left pl-4 font-code max-w-full">
          <Results results={result}/>
        </div>
      </div>
    </div>
  );
}


export default App;
