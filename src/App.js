import React from "react";
import logo from './logo.svg';
import './App.css';
import Row from "./Row"
import requests from "./requests"
import Banner from "./banner.js";
import Nav from "./Nav";

function App() {
  return (
  <div className="App">
    <Nav/>
    <Banner />
    <Row title="DAFLIX ORIGINALS"fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow/>
    
    <Row title="watch dis ma boi"fetchUrl={requests.fetchTrending}/>
    <Row title="top rated"fetchUrl={requests.fetchTopRated}/>
    <Row title="some action for you "fetchUrl={requests.fetchActionMovies}/>
    <Row title="funny "fetchUrl={requests.fetchComedyMovies}/>
    <Row title="horror"fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance"fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries"fetchUrl={requests.fetchDocumentaries}/>

  </div>
    )
}

export default App;
