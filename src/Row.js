import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import axios from './axios'
import './Row.css'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    const [youtubeHeight, setYoutubeHeight] = useState("0")
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: youtubeHeight,
        width: "100%",
        playerVar: {
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        console.log(movie.name)
        if (trailerUrl) {
            setYoutubeHeight("0")
            setTrailerUrl('');
        }
        else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
                .then(url => {
                    console.log(url)
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"))
                }).catch((error) => console.log(error))
            setYoutubeHeight("390")
        }
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            {/*container->posters */}
            <div className='row__posters'>
                {/*serveral poster */}
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            <YouTube videoId={trailerUrl} opts={opts} />
        </div>
    )
}

export default Row
