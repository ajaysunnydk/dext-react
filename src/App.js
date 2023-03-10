import './App.css';
import React, { useState } from 'react'
import Select from 'react-select'
import Header from './Header';
import axios from 'axios';
import js_beautify from 'js-beautify'
import Footer from './Footer';
import Login from './components/Login';

function App() {

  const requests = [
    { label: "GET", value: "get" },
    { label: "POST", value: "post" },
    { label: "PUT", value: "put" },
    { label: "DELETE", value: "delete" }
  ];

  var url;
  var reqType;
  var reqBody;
  var data;
  const [respData, setRespData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    var url = event.target.url.value;
    var reqType = event.target.reqType.value;
    var reqBody = event.target.inputBody.value;

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'withCredentials': true
    };
    if (reqType == "post") {
      const dataBody = JSON.parse(reqBody);
      axios.post(url, dataBody, { headers: headers })
        .then(resp => {
          console.log(resp)
          setRespData(js_beautify(JSON.stringify(resp.data)))
        })
        .catch(error => {
          setRespData(error)
        });
    }
    else if (reqType == "get") {
      axios.get(url)
        .then(resp => {
          setRespData(js_beautify(JSON.stringify(resp.data)))
        })
        .catch(error => {
          setRespData(error)
        });
    }

  }

  return (
    <div className="App">
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <div className='form-top'>
          <Select required name='reqType' options={requests} />
          <input required className='url-input' name='url' type="text" />
          <button type='submit'>Submit</button>
          <button type='reset'>Reset</button>
        </div>
        <div className='req-body'>
          Request Body: JSON
          <textarea spellCheck='false' name='inputBody' />
        </div>
      </form>
      <div className='res-body'>
        Response Body: JSON
        <textarea spellCheck='false' defaultValue={respData}></textarea>
      </div>
      {/* <Login></Login>
      <Footer year="2022" devName="Ajay Sunny"></Footer> */}
    </div>
  );
}

export default App;
