import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import SingleCharacter from './components/characters/SingleCharacter';
import Home from './components/characters/Home';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/single/:id" element={<SingleCharacter />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
