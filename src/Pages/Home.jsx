import React from 'react'
import {HeroBanner,SearchExercises,Exercises} from '../components';
import { Box } from '@mui/material';
import { useState } from 'react';
const Home = () => {
  const [bodyPart,setBodyPart]=useState('all');
  const [exercises,setExercises]=useState([]);
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home