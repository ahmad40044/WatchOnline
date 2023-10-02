import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/Card'
import useFetch from '../hooks/useFetch';


export const MovieListC = ({apiPath,title}) => {
// const [movies,setMovies] = useState([]);
const {data : movies} = useFetch({apiPath})
useEffect(()=>{
document.title=title;


},[apiPath])
return (
  <main >
    <section className='mx-w--7xl mx-auto py-7 '>
    <div className='flex justify-evenly flex-wrap '>
    {movies.map(
  (movies)=> (<Card key={movies.id} movie= {movies}/>))
 
 }
  </div>
  </section>
  </main>
  )
}

