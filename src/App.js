import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {Box} from '@mui/material';
import './App.css'
import { Navbar,Footer } from './components';
import Home from './Pages/Home';
import ExerciseDetails from './Pages/ExerciseDetails';
const App = () => {
  return (
    <Box width='480px' sx={{ width:{ xl:'1488px'} }} m='auto' >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/exercise/:id' element={<ExerciseDetails/>} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App