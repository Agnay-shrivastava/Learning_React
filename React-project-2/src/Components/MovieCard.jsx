import React from 'react'

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    id: 4,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
];


const MovieCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 bg-gray-900'>
      {movies.map((movie) => (
        <div key={movie.id} className='bg-gray-800 p-4 rounded-2xl text-white'>
          <img src={movie.poster} alt={movie.title} className='w-full h-64 rounded-2xl object-cover hover:grayscale  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-300' />
          <h2>{movie.title}</h2>
          <p>Year: {movie.year}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  )
}

export default MovieCard