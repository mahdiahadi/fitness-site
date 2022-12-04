import React from 'react';
import {HorizontalScrollbar,Loader} from '../components'
import { Stack,Typography,Box } from '@mui/material';

const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color:'#FF2625',textTeransform:"capitalize"}}>Target Muscle</span> exercises
        </Typography> 
        <Stack direction="row" sx={{ p:2,position:'relative' }} >
            {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises}/>  : <Loader/> }
        </Stack>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
            Similar <span style={{ color:'#FF2625',textTeransform:"capitalize"}}>Equipment</span> exercises
        </Typography>
        <Stack direction="row" sx={{ p:2,position:'relative' }}  >
            { equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} />  : <Loader/>}
        </Stack>
    </Box>
  )
}

export default SimilarExercises