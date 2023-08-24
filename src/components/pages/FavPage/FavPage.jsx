import React, { useContext } from 'react'
import { FavoritesContext } from '../../utils/Contexts/FavoritesContext.jsx'
import FavItem from '../../shared/FavItem/FavItem.jsx'
import '../MovieList/MovieList.scss'

function FavPage() {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  return (
    <section className="movie_wrapper grid_desktop">
      {favorites.map(movie => (
        <FavItem key={movie.id} id={movie.id} movie={movie} />
      ))}
    </section>
  )
}

export default FavPage
