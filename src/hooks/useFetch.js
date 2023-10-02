import { useState ,useEffect} from "react"
const useFetch = ({apiPath},searchParam="") => {
const [data,setData] = useState([]);


 const url= `https://api.themoviedb.org/3/${apiPath}${searchParam}api_key=${process.env.REACT_APP_API_KEY}`;


useEffect(()=> { 
    async function fetchmovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results)
    }
    fetchmovies();
    },[apiPath])

  return ({data})
}

export default useFetch
