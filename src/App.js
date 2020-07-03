import React from 'react';


import Header from './components/Header'
import About from './components/About'
import Thecity from './components/Thecity'
import Monterey from './components/Monterey'
import Pokeball from './components/Pokeball'
import Bayarea from './components/Bayarea'
import Rotom from './components/Rotom'
import Project0 from './components/Project0'
import Project1 from './components/Project1'
import Gaymeit from './components/Gaymeit'
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <div className="App">
    <Header/>
    <About/>
    <Thecity/>
    <Project0/>
    <Pokeball/>
    <Monterey/>
    <Project1/>
    <Rotom/>
    <Bayarea/>
    <Gaymeit/>
    <Footer/>
    </div>
  );
}

export default App;
