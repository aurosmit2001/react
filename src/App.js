import logo from './logo.svg';
import './App.css';
import './Quote.css';
import axios from "axios";
import React, { useState,useEffect } from 'react';
import {FacebookShareButton, WhatsappShareButton} from "react-share";
import {FacebookIcon,WhatsappShareIcon} from "react-share";

function App() {
  return <>
  <Container>
    <Segment>
      <FacebookShareButton url="http://localhost:3000/">
        <FacebookIcon logofillColor="white" round={true}>
        < WhatsappShareButton url="http://localhost:3000/">
        < WhatsappShareIcon logofillColor="white" round={true}>


        </WhatsappShareIcon>
        </WhatsappShareButton>
        </FacebookIcon>
      </FacebookShareButton>
      </Segment>
  </Container>
  </>
}



const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try{
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes = (await data).data;
    }
    catch(error){
      console.log(error);

    }
    try{
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    }catch (error) {
      console.log(error);
    }
    
  };
  useEffect(() =>{
    quoteAPI();

  },[]);
  return<div className="App">
    <div className="quoteBox"></div>
    <div className="container"></div>
    <div className="quoteButton"></div>
    <div className = "Sahil" >    <div className="quote">{quote}</div>
    <div className="author">{author}
    </div>
    <button onClick={quoteAPI}> GIVE ME QUOTE</button>
    </div>
  </div>;
};

 





export default App;
