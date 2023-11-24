// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

console.log('hello');


function DbSectoin(){
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

    const handleShortenClick = (event) =>{
      console.log(originalUrl);
      event.preventDefault();
      console.log('Button clicked');
      window.alert('button clicked')
      // setShortenedUrl('Random text');
      // setShortenedUrl(originalUrl);

      async function makeShortUrl () {
        try{
          // const response = await axios.get('../createShortUrl')
          // .then((response)=>{
          //   console.log(`response is: ${response}`);
          //   setShortenedUrl(response);
          // })
          const response = await axios.post('http://localhost:3333/short', {
            // method: 'post',
            // url: 'https://localhost:3333',
            origUrl: originalUrl,
           })
          const shortenedUrl = response.data.shortUrl; 
          setShortenedUrl(shortenedUrl);
          // console.log(`response is: ${response}`)
          // setShortenedUrl(response);
          // console.log(`shortened URL is: ${JSON.stringify(response)}`);
          // }).then((response)=>{
          //   console.log(`response is: ${response}`)
          //   setShortenedUrl(response);
          //   console.log(`shortened URL is: ${JSON.stringify(response)}`);
          // });

        } catch (error){
          console.error('error is: ' + error)
        }
      } 
      makeShortUrl();
      
    } 

    return(  
    <div className='container'>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label htmlFor="originalUrl" className="form-label">Orignial URL</label>
                <input 
                type="text" 
                className="form-control" 
                onChange={(e) => setOriginalUrl(e.target.value)}
                id="originalUrl" 
                value={originalUrl} 
                aria-describedby="urlHelp">
                </input>
                <div id="urlHelp" className="form-text">Enter your URL above!</div>
              </div>
              <div className="mb-3">
                <label htmlFor="shortenedUrl" 
                className="form-label">Shortened URL:</label>
                <input type="text" className="form-control" id="shortenedUrl" value={shortenedUrl} readOnly></input>
              </div>
              <button 
              onClick={handleShortenClick} 
              className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>   
    </div>
    )
    
}

function TextBox(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <p>This is a new component</p>
        </div>
      </div>
    </div>
  )
}

function App(){
  return (
    <div>
      {/* <DbSectoin /> */}
      <TextBox />
    </div>
  )
}

export default App;
