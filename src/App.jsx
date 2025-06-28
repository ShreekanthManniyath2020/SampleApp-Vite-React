import React from 'react'
import {Button, Stack} from 'react-bootstrap';
import Search from './components/Search';
import './App.css'
const App = () => {
  return (
    <main>
    <div className='pattern'></div>
    <div className='wrapper'>
      <header>
        <img src="./hero.png" alt="Hero Banner" />
        <h1>Find <span className='text-gradient'>Movies</span> You'll Love Without the Hassle</h1>
      </header>
      <Search/>
    </div>
    </main>
  )
}

export default App