// import React from 'react'

// const Movie = ({ title, genres, cover, summary }) => {
//     return (
//         <div>
//             <img src={cover} alt={title}></img>
//             <h3>{title}</h3>
//             <h4>{genres.join(" ")}</h4>
//             <p>{summary}</p>
//         </div>
//     )
// }

// export default Movie

// import React from 'react'
// import './Movie.css'

// const Movie = ({ title, genres, cover, summary, year }) => {
//     return (
//         <div className='movie-container'>
//             <img src={cover} alt={title}></img>
//             <h3>{title} ({year})</h3>
//             <h4>{genres.join(" ")}</h4>
//         </div>
//     )
// }

// export default Movie

import React from 'react'
import './Movie.css'

const Movie = ({ title, genres, cover, summary, year, rating, likes }) => {

    return (
        <div className='movie-container'>
            <img src={cover} alt={title}></img>
            <h3>{title} ({year})</h3>
            <h4>{genres.join(" ")}</h4>
            <p>{rating} / ❤️ {likes ? likes : 0} </p>
        </div>
    )
}

export default Movie