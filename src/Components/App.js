import React, { Component } from 'react'
import Header from './Header'
import About from './About'
import Weather from './Weather.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Weather />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App