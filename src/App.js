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
    console.log(url);
    if (url === "") url = "https://api.tvmaze.com/search/shows?q=game";
    setUrl(url);
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
        <div className="App-header flex-col bg-white shadow-md pt-10 pb-8 max-w-lg">
          <div className="px-8">
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-1/6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="method">
                  Method
                </label>
                <select onChange={e => setMethod(e.target.value)} className="text-sm block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none" id="method">
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                </select>
              </div>
              <div className="w-full md:w-5/6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="endpoint">
                  Endpoint (url)
                </label>
                <Input updateUrl={(e) => setUrl(e.target.value)} />
              </div>
            </div>

            <div className="w-full mb-4">
              <Button click={() => fetch_data(url) }/>
            </div>
          </div>
          <History className="" updateHistory={(data) => updateView(data)} req={requests} />
        </div>
        <div className="App-header bg-gray-900 text-left pl-4 font-code max-w-full">
          <Results results={result}/>
        </div>
      </div>
    </div>
  );
}


export default App;
