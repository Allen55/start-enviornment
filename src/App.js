import React from 'react';
import './index.css';
import { Routes, Route, Link  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import car from './reducers/car';
import character from './reducers/character';
import CarTable from './components/CarTable';
import CharacterTable from './components/CharacterTable';




export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/cartable' element={<CarTable />}/>
        <Route path='/charactertable' element={<CharacterTable />}/>
      </Routes>
    </div>
  )
}
