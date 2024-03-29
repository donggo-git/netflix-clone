import React from 'react'
import './App.css';
import Row from './Row'
import requests from './requsets'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      {/*Nav */}
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINAL' fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />

      <Row title='Trending Now' fetchUrl={requests.fetchActionMovies} />
      <Row title='Trending Now' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Trending Now' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Trending Now' fetchUrl={requests.fetchRomanMovies} />
      <Row title='Trending Now' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
