import { Route,Routes } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { MovieDetailC } from "../pages/MovieDetailC";
import { MovieListC } from "../pages/MovieListC";
import { PageNotFound } from "../pages/PageNotFound";
import { Search } from "../pages/Search";


export const AllRoutes = () => {
  
  const [useSearch] = useSearchParams();
const searchQuery= useSearch.get("q");
// const defaultQuery = "search/movie?query=Jack+Reacher&"

  return (
    <div className="dark:bg-slate-800">
<Routes>
    <Route path="/" element={<MovieListC apiPath ="movie/now_playing?" title="Home"/>}/>
    <Route path="movie/:id" element={<MovieDetailC />}/>
    <Route path="movies/popular" element={<MovieListC apiPath ="movie/popular?" title ="Popular Movies"/>}/>
    <Route path="movies/top" element={<MovieListC apiPath ="movie/top_rated?" title ="Top movies"/>}/>
    <Route path="movies/upcoming" element={<MovieListC apiPath ="movie/upcoming?" title ="Upcoming Movies"/>}/>
    <Route path="search" element={<Search  apiPath={`search/movie?query=${searchQuery}&`} />}/>
    <Route path="*" element={<PageNotFound title="Page Not Found"/>}/>
</Routes>

      
    </div>
  )
}
