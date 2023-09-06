import React from "react";
import "./Hero.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link , useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";


const Hero = ({ movies }) => {
  const navigate = useNavigate();

  function reviews (movieId)
  {
    navigate(`/Reviews/${movieId}`);
  }
  return (
    <div className="movie-carousel-container">
      <Carousel>
        {movies && movies.map((movie) => (
          <Paper key={movie.imdbId}>
            <div className="movie-card-container">
              <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                <div className="movie-detail">
                  <div className="movie-poster">
                    <img src={movie.poster} alt="" />
                  </div>
                  <div className="movie-title">
                    
                    <div className="movie-title-header">
                    <h3>{movie.title}</h3>
                    </div>
                    <p> Release Date : ({movie.releaseDate})</p> {/* to display genre liste */}
                    <p> Category : {movie.genres.map((genre, index) => (
                     <span key={index} className="genre">
                    {index !== 0 && <span className="dot"> • </span>}
                      {genre}
                     </span> ))}</p>
                    
                          
                                           
                    
                    
                  </div>
                  <div className="movies-button-container">
                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                    <div className="play-button-icon-container">
                      <FontAwesomeIcon className="play-button-icon"
                       icon={faCirclePlay}
                      /> </div>
                    </Link>

                    <div className="movie-review-button-container mt-3">
                      <Button variant="info" onClick={ () => reviews(movie.imdbId) }>Reviews </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
