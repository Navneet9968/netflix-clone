import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  //every time the row loads, we want to make a request to the movie database
  useEffect(() => {
    //this piece of code runs when the row loads to get necessary data from api
    //if left blank like this [] the second argument, run once when the row loads
    // , and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParamsn" + urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/** several row__poster(s) */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)} //when you click on the image, it will call handleClick function
            className={`row__poster ${isLargeRow && "row__posterLarge"}`} //if this is the large row then
            //  this will get the larger row style
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path //if isLargeRow is true,
              // then use movie.poster_path, else use movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
