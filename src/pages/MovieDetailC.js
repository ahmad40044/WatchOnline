import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export const MovieDetailC = () => {
  // Get the movie ID from route parameters
  const { id } = useParams();

  // Construct the API URL using the movie ID and API key
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

  // Initialize the movie state
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setMovie(json);
        document.title=json.title;
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }

    
    }

    fetchMovie();
    
  }, [url]);


  // Conditionally render the movie details when `movie` is available
  return (
    <div className="container mx-auto px-6 py-16 ">
      {movie ? (
        <div className="flex items-center justify-center">
          <div className="w-full lg:w-3/4 bg-white p-5 rounded-lg shadow-lg  dark:bg-gray-800 dark:border-gray-700 m-3 border border-grey-200">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full lg:w-2/3 pl-0 lg:pl-10">
                <h1 className="text-3xl font-semibold mb-4 dark:text-white">{movie.title}</h1>
                {/* <h2 className="text-xl text-gray-600 mb-4 dark:text-white">{movie.original_title}</h2> */}
                <p className="text-gray-700 text-xl mb-4 dark:text-white">{movie.overview}</p>
                <p className="text-gray-700 mb-4 dark:text-white">Release Date: {movie.release_date}</p>
                <div className="text-gray-700 mb-4 dark:text-white">
                  Genres: {movie.genres.map((genre,index) => (
                    <div key={index} className="box dark:bg-blue-500">
                      {genre.name}
                      </div>
                  


                  ) )}
                </div>
                <p className="text-gray-700 mb-4 dark:text-white">Budget: ${movie.budget.toLocaleString()}</p>
                <p className="text-gray-700 mb-4 dark:text-white">Revenue: ${movie.revenue.toLocaleString()}</p>
                <p className="text-gray-700 mb-4 dark:text-white">Runtime: {movie.runtime} minutes</p>
                <p className="text-gray-700 mb-4 dark:text-white">Average Vote: {movie.vote_average}</p>
                <p className="text-gray-700 mb-4 dark:text-white">Vote Count: {movie.vote_count}</p>
                <p className="text-blue-500 hover:underline mb-4 ">
                  Homepage:{" "}
                  {movie.homepage ? (
                    <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
                      Visit Homepage
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </p>
                <p className="text-gray-700 mb-4 dark:text-white">
  <a
    href={`https://www.imdb.com/title/${movie.imdb_id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline"
  >
    IMDb
  </a>
</p>

              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-700 dark:text-white">Loading...</div>
      )}
    </div>
  );
};
