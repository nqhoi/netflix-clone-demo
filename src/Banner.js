import axios from './axios';
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requsets from "./requsets";

function Banner() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requset = await axios.get(requsets.fetchNetflixOriginals);
      setMovie(
        requset.data.results[
          Math.floor(Math.random() * requset.data.results.length - 1)
        ]
      );
      return requset;
    }
    fetchData();
  }, []);


  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        // backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* Background image */}
        {/* title */}
        <h1 className="banner__title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        {/* div > 2 button */}
        <div className="banner__buttons">
          {/* <button className="banner__button">Play</button>
          <button className="banner__button">My List</button> */}
          <button type="button" className="banner__button btn btn-dark mr-2">
            Play
          </button>
          <button type="button" className="banner__button btn btn-dark">
            My List
          </button>
        </div>
        {/* description */}
        <h1 className="banner__description">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
