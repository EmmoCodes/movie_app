import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'
import { apiKey } from '../../../data/api.js'
import './Trailer.scss'
import trailer from '../../../assets/img/watchtrailer.png'
import notrailer from '../../../assets/img/notrailer.png'

function Trailer() {
  const [trailerData, setTrailerData] = useState([])
  const params = useParams()

  useEffect(() => {
    getAllMovies(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${apiKey}`, setTrailerData, 'results')
  }, [params.id])

  let trailerKey = ''
  trailerData.forEach(item => {
    if (item.name === ('Official Trailer' || 'Trailer')) {
      trailerKey = item.key
    } else if (item.type === ('Official Trailer' || 'Trailer')) {
      trailerKey = item.key
    }
  })

  // if (!trailerData.id) {
  //   return <p>Is Loading...</p>
  // }
  console.log(trailerData)

  return (
    <section className="trailer_section">
      <img className="watch_trailer" src={trailer} alt="" />
      <div className="trailer_box">
        {trailerKey ? (
          <iframe
            title="Movie Trailer"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            width="350px"
            height="250px"
            frameBorder="0"
            allowFullScreen></iframe>
        ) : (
          <img className="no_trailer" src={notrailer} alt="" />
        )}
      </div>
    </section>
  )
}

export default Trailer