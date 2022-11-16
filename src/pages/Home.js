import React,{useState} from 'react'
import {Box} from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'


const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <HeroBanner/>
      {/* whenever you pass this as data remeber in next file it should be in this order */}
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
      />
      {/* whenever you pass this as data remeber in next file it should be in this order */}
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart} 
      />
    </Box>
  )
}

export default Home