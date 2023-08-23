import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../../utils/fetches/movieFetch.js'
import { apiKey } from '../../../data/api.js'
import { useParams } from 'react-router-dom'

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
    <div className="trailer_box">
      {trailerKey ? (
        <iframe
          title="Movie Trailer"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          width="500px"
          height="400px"
          frameBorder="0"
          allowFullScreen></iframe>
      ) : (
        <p>No Trailer found, Try again!</p>
      )}
    </div>
  )
}

export default Trailer
