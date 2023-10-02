import { useSearchParams } from "react-router-dom"
import { Card } from "../components/Card"
import useFetch from "../hooks/useFetch"

import { useEffect } from "react";



export const Search = ({apiPath}) => {


  const [useSearch] = useSearchParams();
  const searchQuery= useSearch.get("q");
  // const defaultQuery = "search/movie?query=Jack+Reacher&"




  const {data : movies} = useFetch({apiPath})
useEffect(()=>{

document.title=`Result for ${searchQuery}`


},[searchQuery])

  return (
    <main className="default"> 
      <section className="py-7">
        <p className="text-3xl text-gry-700 dark:text-white">{movies.length===0 ? `No results found for ${searchQuery}` : `Result for ${searchQuery}`}  </p>
      </section>
    <section className='mx-w--7xl mx-auto py-7'>
    <div className='flex justify-start flex-wrap other:justify-evenly'>
    {movies.map(
  (movies)=> (<Card key={movies.id} movie= {movies}/>))
 
 }
  </div>
  </section>
  </main>
  )
}

