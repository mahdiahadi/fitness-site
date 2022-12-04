import React from 'react'
import { useState,useEffect } from 'react';
import { Stack,Box,Typography,Button, TextField } from '@mui/material';
import {HorizontalScrollbar} from '../components';
import { fetchData,exerciseOptions } from '../utils/fetchData'
const SearchExercises = ({setExercises,setBodyPart,bodyPart}) => {
  const[search,setSearch]=useState('');
  const[bodyParts,setBodyParts]=useState([])

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  },[])
  const handleSearch = async ()=>{
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems='center' mt="37px" justifyContent='center' p="20px"  >
        <Typography fontWeight='700' sx={{ fontSize:{ lg:'44px' , xs:'30px' }}} mb="49px" textAlign="center" >
           Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
              height="76px"
              sx={{ input: { t: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
              value={search}
              onChange={(e)=>setSearch(e.target.value.toLowerCase())}
              placeholder="Search Exercise"
              type='text'

           />
           <Button
            className='search-btn'
            onClick={handleSearch}
            sx={{ bgcolor:"#FF2625", color:"#fff", textTransform:"none", width:{ lg:'17px', xs:'80px'},height:"56px", position:"absolute", right:'0px',fontSize: { lg: '20px', xs: '14px' } }}
           >
              Search
           </Button>
        </Box>
        <Box sx={{ position:'relative',width:'100%',p:'20px'}} >
          <HorizontalScrollbar  data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
        </Box>
    </Stack>
  )
}

export default SearchExercises