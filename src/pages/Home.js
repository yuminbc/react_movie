// import React from 'react'

// const Home = () => {
//     return (
//         <div>Home</div>
//     )
// }

// export default Home


// import React, { useState, useEffect } from 'react'
// import { Movie } from 'components'

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])

//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const homeUI = movies.map(movie => <Movie
//                                         key={movie.id}
//                                         title={movie.title}
//                                         genres={movie.genres}
//                                         cover={movie.medium_cover_image}
//                                         summary={movie.summary}/>
//                                     )

//     return (
//         <div>
//             {loading? 'Loading ...': homeUI}
//         </div>
//     )
// }

// export default Home

// import React, { useState, useEffect } from 'react'
// import { Movie, Loading } from 'components'

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])

//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const homeUI = movies.map(movie => <Movie
//                                         key={movie.id}
//                                         title={movie.title}
//                                         genres={movie.genres}
//                                         cover={movie.medium_cover_image}
//                                         summary={movie.summary}
//                                        />
//                                     )

//     return (
//         <div>
//             {loading? <Loading/>:<div className="Home-container"/>}
//         </div>
//     )
// }

// export default Home


// import React, { useState, useEffect } from 'react'
// import { Movie, Loading } from 'components'

// import './Home.css'

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])

//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const homeUI = movies.map(movie => <Movie
//                                         key={movie.id}
//                                         title={movie.title}
//                                         genres={movie.genres}
//                                         cover={movie.medium_cover_image}
//                                         summary={movie.summary}
//                                        />
//                                     )

//     return (
//         <>
//             {loading? <Loading/>: <div className='Home-container'><div className='Home-movies'>{homeUI}</div></div>}
//         </>
//     )
// }

// export default Home

// import React, { useState, useEffect } from 'react'
// import { Movie, Loading ,Button} from 'components'

// import { Input } from 'components'
// import './Home.css'

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])
//     const [query, setQuery] = useState('')
//     const [isSorted,setIsSorted] = useState(-1)


//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=20')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const handleChange = (e) => {
//         const { value } = e.target
//         setQuery(value)
//     }
//     const sortByYear=(e)=>{
//         setIsSorted(isSorted - 1)
//     }

//     const homeUI = movies
//                         .filter(movie => {
//                             const title = movie.title.toLowerCase()
//                             const genres = movie.genres.join(' ').toLowerCase()
//                             const q = query.toLowerCase()

//                             return title.includes(q) || genres.includes(q)
//                         })
//                         .sort((a,b)=>{
//                             return (b.year-a.year) * isSorted
//                         })
//                         .map(movie => <Movie
//                                         key={movie.id}
//                                         title={movie.title}
//                                         genres={movie.genres}
//                                         year={movie.year}
//                                         cover={movie.medium_cover_image}
//                                         summary={movie.summary}
//                                        />
//                                     )

//     return (
//         <>
//             {loading? <Loading/>: <div className='Home-container'>
//                                     <Input name='search' type='text' placeholder='Search movies ...' value={query} onChange={handleChange}/>
//                                     <Button handleClick = {sortByYear}>정렬</Button>
//                                     <div className='Home-movies'>{homeUI}</div>
//                                   </div>}
//         </>
//     )
// }

// export default Home


// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// import { Movie, Loading, Input, Button } from 'components'
// import './Home.css'

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])
//     const [query, setQuery] = useState('')
//     const [isSorted, setIsSorted] = useState(-1)
    

//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=20')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const handleChange = (e) => {
//         const { value } = e.target
//         setQuery(value)
//     }

//     const sortByYear = (e) => {
//         setIsSorted(isSorted * -1)
//     }

//     const homeUI = movies
//                         .filter(movie => {
//                             const title = movie.title.toLowerCase()
//                             const genres = movie.genres.join(' ').toLowerCase()
//                             const q = query.toLowerCase()
                        
//                             return title.includes(q) || genres.includes(q)
//                         })
//                         .sort( (a, b) => {
//                             return (b.year - a.year) * isSorted;
//                         })
//                         .map(movie =>
//                             <Link key={movie.id}  
//                                   to='/detail'
//                                   state={{ movie }} 
//                                   style={{ textDecoration: 'none', color: 'white'}}
//                             >
                                
//                                 <Movie 
//                                         title={movie.title} 
//                                         genres={movie.genres} 
//                                         cover={movie.medium_cover_image} 
//                                         summary={movie.summary}
//                                         year={movie.year}
//                                        />
//                             </Link> 
//                                     )

//     return (
//         <>
//             {loading? <Loading/>: <div className='Home-container'>
//                                     <Input name='search' type='text' placeholder='Search movies ...' value={query} onChange={handleChange}/>
//                                     <Button handleClick={sortByYear}>정렬</Button>
//                                     <div className='Home-movies'>{homeUI}</div>
//                                   </div>}
//         </>
//     )
// }

// export default Home


// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// import { Movie, Loading, Input, Button, Menu } from 'components'
// import './Home.css'

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])
//     const [query, setQuery] = useState('')
//     const [isSorted, setIsSorted] = useState(-1)
//     const navigate = useNavigate()


//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=20')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const handleChange = (e) => {
//         const { value } = e.target
//         setQuery(value)
//     }

//     const sortByYear = (e) => {
//         setIsSorted(isSorted * -1)
//     }

//     const homeUI = movies
//                         .filter(movie => {
//                             const title = movie.title.toLowerCase()
//                             const genres = movie.genres.join(' ').toLowerCase()
//                             const q = query.toLowerCase()

//                             return title.includes(q) || genres.includes(q)
//                         })
//                         .sort( (a, b) => {
//                             return (b.year - a.year) * isSorted;
//                         })
//                         .map(movie =>
//                             <Link key={movie.id}
//                                   to='/detail'
//                                   state={{ movie }}
//                                   style={{ textDecoration: 'none', color: 'white'}}
//                             >

//                                 <Movie
//                                         title={movie.title}
//                                         genres={movie.genres}
//                                         cover={movie.medium_cover_image}
//                                         summary={movie.summary}
//                                         year={movie.year}
//                                        />
//                             </Link>
//                                     )

//     const toRankPage = () => {
//         navigate('/recommend', { state: { movies }})
//     }
//     return (
//         <>
//             {loading? <Loading/>: <div className='Home-container'>
//                                     <Menu>
//                                         <Button handleClick={toRankPage}>Rank</Button>
//                                     </Menu>
//                                     <div className='Home-contents'>
//                                         <Input name='search' type='text' placeholder='Search movies ...' value={query} onChange={handleChange}/>
//                                         <Button handleClick={sortByYear}>정렬</Button>
//                                         <div className='Home-movies'>{homeUI}</div>
//                                     </div>
//                                   </div>}
//         </>
//     )
// }

// export default Home


// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// import { Movie, Loading, Input, Button, Menu } from 'components'
// import './Home.css'

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])
//     const [query, setQuery] = useState('')
//     const [isSorted, setIsSorted] = useState(-1)
//     const navigate = useNavigate()


//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=20')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const handleChange = (e) => {
//         const { value } = e.target
//         setQuery(value)
//     }

//     const sortByYear = (e) => {
//         setIsSorted(isSorted * -1)
//     }

//     const homeUI = movies
//                         .filter(movie => {
//                             const title = movie.title.toLowerCase()
//                             const genres = movie.genres.join(' ').toLowerCase()
//                             const q = query.toLowerCase()

//                             return title.includes(q) || genres.includes(q)
//                         })
//                         .sort( (a, b) => {
//                             return (b.year - a.year) * isSorted;
//                         })
//                         .map(movie =>
//                             <Link key={movie.id}
//                                   to='/detail'
//                                   state={{ movie }}
//                                   style={{ textDecoration: 'none', color: 'white'}}
//                             >

//                                 <Movie
//                                         title={movie.title}
//                                         genres={movie.genres}
//                                         cover={movie.medium_cover_image}
//                                         summary={movie.summary}
//                                         year={movie.year}
//                                         rating={movie.rating}
//                                        />
//                             </Link>
//                                     )

//     const toRankPage = () => {
//         navigate('/recommend', { state: { movies }})
//     }
//     return (
//         <>
//             {loading? <Loading/>: <div className='Home-container'>
//                                     <Menu>
//                                         <Button handleClick={toRankPage}>Rank</Button>
//                                     </Menu>
//                                     <div className='Home-contents'>
//                                         <Input name='search' type='text' placeholder='Search movies ...' value={query} onChange={handleChange}/>
//                                         <Button handleClick={sortByYear}>정렬</Button>
//                                         <div className='Home-movies'>{homeUI}</div>
// //                                     </div>
// //                                   </div>}
//         </>
//     )
// }

// export default Home


// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// import { Movie, Loading, Input, Button, Menu } from 'components'
// import './Home.css'

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])
//     const [query, setQuery] = useState('')
//     const [isSorted, setIsSorted] = useState(-1)
//     const navigate = useNavigate()

//     const likes = JSON.parse(sessionStorage.getItem('likes')) || {}
//     console.log(likes)


//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=20')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const handleChange = (e) => {
//         const { value } = e.target
//         setQuery(value)
//     }

//     const sortByYear = (e) => {
//         setIsSorted(isSorted * -1)
//     }

//     const updateLikes = (id) => {
//         const likes = JSON.parse(sessionStorage.getItem('likes')) || {}

//         if(likes[id] === null || likes[id] === undefined){
//             likes[id] = 0
//         }
//         likes[id] += 1
//         sessionStorage.setItem('likes', JSON.stringify(likes))
//     }

//     const homeUI = movies
//                         .filter(movie => {
//                             const title = movie.title.toLowerCase()
//                             const genres = movie.genres.join(' ').toLowerCase()
//                             const q = query.toLowerCase()

//                             return title.includes(q) || genres.includes(q)
//                         })
//                         .sort( (a, b) => {
//                             return (b.year - a.year) * isSorted;
//                         })
//                         .map(movie =>
//                             <Link key={movie.id}
//                                   to='/detail'
//                                   state={{ movie }}
//                                   style={{ textDecoration: 'none', color: 'white'}}
//                                   onClick={() => updateLikes(movie.id)}
//                             >

//                                 <Movie
//                                         title={movie.title}
//                                         genres={movie.genres}
//                                         cover={movie.medium_cover_image}
//                                         summary={movie.summary}
//                                         year={movie.year}
//                                         rating={movie.rating}
//                                         likes={likes[movie.id]}
//                                        />
//                             </Link>
//                                     )

//     const toRankPage = () => {
//         navigate('/recommend', { state: { movies }})
//     }
//     return (
//         <>
//             {loading? <Loading/>: <div className='Home-container'>
//                                     <Menu>
//                                         <Button handleClick={toRankPage}>Rank</Button>
//                                     </Menu>
//                                     <div className='Home-contents'>
//                                         <Input name='search' type='text' placeholder='Search movies ...' value={query} onChange={handleChange}/>
//                                         <Button handleClick={sortByYear}>정렬</Button>
//                                         <div className='Home-movies'>{homeUI}</div>
//                                     </div>
//                                   </div>}
//         </>
//     )
// }

// export default Home


// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// import { Movie, Loading, Input, Button, Menu } from 'components'
// import './Home.css'

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])
//     const [query, setQuery] = useState('')
//     const [isSorted, setIsSorted] = useState(-1)
//     const navigate = useNavigate()

//     const likes = JSON.parse(sessionStorage.getItem('likes')) || {}
//     console.log(likes)


//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=20')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const handleChange = (e) => {
//         const { value } = e.target
//         setQuery(value)
//     }

//     const sortByYear = (e) => {
//         setIsSorted(isSorted * -1)
//     }

//     const updateLikes = (id) => {
//         const likes = JSON.parse(sessionStorage.getItem('likes')) || {}

//         if(likes[id] === null || likes[id] === undefined){
//             likes[id] = 0
//         }
//         likes[id] += 1
//         sessionStorage.setItem('likes', JSON.stringify(likes))
//     }

//     const handleRemove = (id) => {
//         const moviesFiltered = movies.filter(movie => movie.id !== id)
//         setMovies(moviesFiltered)

//         // likes 리스트에서도 해당 영화에 대한 좋아요 정보 제거
//         const likes = JSON.parse(sessionStorage.getItem('likes')) || {}
//         delete likes[id]
//         sessionStorage.setItem('likes', JSON.stringify(likes))

//     }

//     const homeUI = movies
//                         .filter(movie => {
//                             const title = movie.title.toLowerCase()
//                             const genres = movie.genres.join(' ').toLowerCase()
//                             const q = query.toLowerCase()

//                             return title.includes(q) || genres.includes(q)
//                         })
//                         .sort( (a, b) => {
//                             return (b.year - a.year) * isSorted;
//                         })
//                         .map(movie =>
//                             <div className='movie-item' key={movie.id}  >
//                                 <div className='movie-delete' onClick={(e) => handleRemove(movie.id)}>X</div>
//                                 <Link
//                                     to='/detail'
//                                     state={{ movie }}
//                                     style={{ textDecoration: 'none', color: 'white'}}
//                                     onClick={() => updateLikes(movie.id)}
//                                 >

//                                     <Movie
//                                             title={movie.title}
//                                             genres={movie.genres}
//                                             cover={movie.medium_cover_image}
//                                             summary={movie.summary}
//                                             year={movie.year}
//                                             rating={movie.rating}
//                                             likes={likes[movie.id]}
//                                         />
//                                 </Link>
//                             </div>
//                                     )

//     const toRankPage = () => {
//         navigate('/recommend', { state: { movies }})
//     }
//     return (
//         <>
//             {loading? <Loading/>: <div className='Home-container'>
//                                     <Menu>
//                                         <Button handleClick={toRankPage}>Rank</Button>
//                                     </Menu>
//                                     <div className='Home-contents'>
//                                         <Input name='search' type='text' placeholder='Search movies ...' value={query} onChange={handleChange}/>
//                                         <Button handleClick={sortByYear}>정렬</Button>
//                                         <div className='Home-movies'>{homeUI}</div>
//                                     </div>
//                                   </div>}
//         </>
//     )
// }

// export default Home





// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// import { Movie, Loading, Input, Button, Menu } from 'components'
// import './Home.css'

// const Home = () => {
//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])
//     const [query, setQuery] = useState('')
//     const [isSorted, setIsSorted] = useState(-1)
//     const [limit, setLimit] = useState(6)
//     const navigate = useNavigate()

//     const likes = JSON.parse(sessionStorage.getItem('likes')) || {}
//     console.log(likes)


//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=20')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const handleChange = (e) => {
//         const { value } = e.target
//         setQuery(value)
//     }

//     const sortByYear = (e) => {
//         setIsSorted(isSorted * -1)
//     }

//     const updateLikes = (id) => {
//         const likes = JSON.parse(sessionStorage.getItem('likes')) || {}

//         if(likes[id] === null || likes[id] === undefined){
//             likes[id] = 0
//         }
//         likes[id] += 1
//         sessionStorage.setItem('likes', JSON.stringify(likes))
//     }

//     const handleRemove = (id) => {
//         const moviesFiltered = movies.filter(movie => movie.id !== id)
//         setMovies(moviesFiltered)

//         // likes 리스트에서도 해당 영화에 대한 좋아요 정보 제거
//         const likes = JSON.parse(sessionStorage.getItem('likes')) || {}
//         delete likes[id]
//         sessionStorage.setItem('likes', JSON.stringify(likes))

//     }
//     const displayEntireMovies = () => {
//         console.log('display all movies !')
//         setLimit(movies.length)
//     }

//     const homeUI = movies
//                         .filter(movie => {
//                             const title = movie.title.toLowerCase()
//                             const genres = movie.genres.join(' ').toLowerCase()
//                             const q = query.toLowerCase()

//                             return title.includes(q) || genres.includes(q)
//                         })
//                         .sort( (a, b) => {
//                             return (b.year - a.year) * isSorted;
//                         })
//                         .slice(0, limit)
//                         .map(movie =>
//                             <div className='movie-item' key={movie.id}  >
//                                 <div className='movie-delete' onClick={(e) => handleRemove(movie.id)}>X</div>
//                                 <Link
//                                     to='/detail'
//                                     state={{ movie }}
//                                     style={{ textDecoration: 'none', color: 'white'}}
//                                     onClick={() => updateLikes(movie.id)}
//                                 >

//                                     <Movie
//                                             title={movie.title}
//                                             genres={movie.genres}
//                                             cover={movie.medium_cover_image}
//                                             summary={movie.summary}
//                                             year={movie.year}
//                                             rating={movie.rating}
//                                             likes={likes[movie.id]}
//                                         />
//                                 </Link>
//                             </div>
//                                     )

//     const toRankPage = () => {
//         navigate('/recommend', { state: { movies }})
//     }
//     return (
//         <>
//             {loading? <Loading/>: <div className='Home-container'>
//                                     <Menu>
//                                         <Button handleClick={toRankPage}>Rank</Button>
//                                     </Menu>
//                                     <div className='Home-entire'>
//                                         <Button handleClick={displayEntireMovies}>See Entire Movies</Button>
//                                     </div>

//                                     <div className='Home-contents'>
//                                         <Input name='search' type='text' placeholder='Search movies ...' value={query} onChange={handleChange}/>
//                                         <Button handleClick={sortByYear}>정렬</Button>
//                                         <div className='Home-movies'>{homeUI}</div>
//                                     </div>
//                                   </div>}
//         </>
//     )
// }

// export default Home





// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// import { Movie, Loading, Input, Button, Menu } from 'components'
// import './Home.css'

// const Home = () => {

//     // 사용자 정보 유무에 따른 페이지 접근 제한하기
//     const navigateToRegister = useNavigate()
//     const user = JSON.parse(sessionStorage.getItem('user'))
//     if(!user){
//         useEffect ( () => {
//             alert("Sorry ! You need to register first !")
//             navigateToRegister('/')
//         })

//         return <></>
//     }


//     const [loading, setLoading] = useState(true)
//     const [movies, setMovies] = useState([])
//     const [query, setQuery] = useState('')
//     const [isSorted, setIsSorted] = useState(-1)
//     const [limit, setLimit] = useState(6)
//     const navigate = useNavigate()

//     const likes = JSON.parse(sessionStorage.getItem('likes')) || {}
//     console.log(likes)


//     useEffect( () => {
//         fetch('https://yts.mx/api/v2/list_movies.json?limit=20')
//         .then( res => res.json())
//         .then( result => {
//             const {data: {movies}} = result
//             console.log(movies)
//             setLoading(false)
//             setMovies(movies)
//         })
//     }, [])

//     const handleChange = (e) => {
//         const { value } = e.target
//         setQuery(value)
//     }

//     const sortByYear = (e) => {
//         setIsSorted(isSorted * -1)
//     }

//     const updateLikes = (id) => {
//         const likes = JSON.parse(sessionStorage.getItem('likes')) || {}

//         if(likes[id] === null || likes[id] === undefined){
//             likes[id] = 0
//         }
//         likes[id] += 1
//         sessionStorage.setItem('likes', JSON.stringify(likes))
//     }

//     const handleRemove = (id) => {
//         const moviesFiltered = movies.filter(movie => movie.id !== id)
//         setMovies(moviesFiltered)

//         // likes 리스트에서도 해당 영화에 대한 좋아요 정보 제거
//         const likes = JSON.parse(sessionStorage.getItem('likes')) || {}
//         delete likes[id]
//         sessionStorage.setItem('likes', JSON.stringify(likes))

//     }
//     const displayEntireMovies = () => {
//         console.log('display all movies !')
//         setLimit(movies.length)
//     }

//     const homeUI = movies
//                         .filter(movie => {
//                             const title = movie.title.toLowerCase()
//                             const genres = movie.genres.join(' ').toLowerCase()
//                             const q = query.toLowerCase()

//                             return title.includes(q) || genres.includes(q)
//                         })
//                         .sort( (a, b) => {
//                             return (b.year - a.year) * isSorted;
//                         })
//                         .slice(0, limit)
//                         .map(movie =>
//                             <div className='movie-item' key={movie.id}  >
//                                 <div className='movie-delete' onClick={(e) => handleRemove(movie.id)}>X</div>
//                                 <Link
//                                     to='/detail'
//                                     state={{ movie }}
//                                     style={{ textDecoration: 'none', color: 'white'}}
//                                     onClick={() => updateLikes(movie.id)}
//                                 >

//                                     <Movie
//                                             title={movie.title}
//                                             genres={movie.genres}
//                                             cover={movie.medium_cover_image}
//                                             summary={movie.summary}
//                                             year={movie.year}
//                                             rating={movie.rating}
//                                             likes={likes[movie.id]}
//                                         />
//                                 </Link>
//                             </div>
//                                     )

//     const toRankPage = () => {
//         navigate('/recommend', { state: { movies }})
//     }
//     return (
//         <>
//             {loading? <Loading/>: <div className='Home-container'>
//                                     <Menu>
//                                         <Button handleClick={toRankPage}>Rank</Button>
//                                     </Menu>
//                                     <div className='Home-entire'>
//                                         <Button handleClick={displayEntireMovies}>See Entire Movies</Button>
//                                     </div>

//                                     <div className='Home-contents'>
//                                         <Input name='search' type='text' placeholder='Search movies ...' value={query} onChange={handleChange}/>
//                                         <Button handleClick={sortByYear}>정렬</Button>
//                                         <div className='Home-movies'>{homeUI}</div>
//                                     </div>
//                                   </div>}
//         </>
//     )
// }

// export default Home




import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Movie, Loading, Input, Button, Menu, Modal } from 'components'
import './Home.css'

const Home = () => {

    const [open, setOpen] = useState(false)

    // 사용자 정보 유무에 따른 페이지 접근 제한하기
    const navigateToRegister = useNavigate()
    const user = JSON.parse(sessionStorage.getItem('user'))

    const openModal = () => {
        setOpen(true)
    }
    const closeModal = () => {
        setOpen(false)

        // alert("Sorry ! You need to register first !")
        navigateToRegister('/')
    }

    if(!user){
        useEffect ( () => {
            openModal()
        })

        return <>
                    {/* 모달창 */}
                    <Modal open={open}>
                        <div className="header">-- Warning message --</div>
                        <div className="body">
                            "Sorry ! You need to register first !"
                        </div>
                        <div className="footer">
                            <Button size="small" handleClick={closeModal}>Close</Button>
                        </div>
                    </Modal>
                </>
    }



    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')
    const [isSorted, setIsSorted] = useState(1)
    const [limit, setLimit] = useState(6) // 6개만 보이기
    const navigate = useNavigate()

    const likes = JSON.parse(sessionStorage.getItem('likes')) || {}
    console.log(likes)


    useEffect( () => {
        fetch('https://yts.mx/api/v2/list_movies.json?limit=50')
        .then( res => res.json())
        .then( result => {
            const {data: {movies}} = result
            console.log(movies)
            setLoading(false)
            setMovies(movies)
        })
    }, [])

    const handleChange = (e) => {
        const { value } = e.target
        setQuery(value)
    }

    const sortByYear = (e) => {
        setIsSorted(isSorted * -1)
    }

    const updateLikes = (id) => {
        const likes = JSON.parse(sessionStorage.getItem('likes')) || {}

        if(likes[id] === null || likes[id] === undefined){
            likes[id] = 0
        }
        likes[id] += 1
        sessionStorage.setItem('likes', JSON.stringify(likes))
    }

    const handleRemove = (id) => {
        const moviesFiltered = movies.filter(movie => movie.id !== id)
        setMovies(moviesFiltered)

        // likes 리스트에서도 해당 영화에 대한 좋아요 정보 제거
        const likes = JSON.parse(sessionStorage.getItem('likes')) || {}
        delete likes[id]
        sessionStorage.setItem('likes', JSON.stringify(likes))

    }
    const displayEntireMovies = () => {
        console.log('display all movies !')
        setLimit(movies.length)
    }

    const homeUI = movies
                        .filter(movie => {
                            const title = movie.title.toLowerCase()
                            const genres = movie.genres.join(' ').toLowerCase()
                            const q = query.toLowerCase()

                            return title.includes(q) || genres.includes(q)
                        })
                        .slice(0, limit) //순서 중요 .sort 아래에 있으면 리미트 밖에꺼 까지 정렬됨
                        .sort( (a, b) => {
                             if(b.year == a.year){ //년도가 같을때
                                 if (b.rating == a.rating){ // 평점이 같다면
                                     return (a.title.localeCompare(b.title)) * isSorted; // 이름순 정렬
                                 }
                                return  (b.rating - a.rating) * isSorted; //평점순
                             } 
                             return (b.year - a.year) * isSorted; // 년도순
                        })
                        
                        .map(movie =>
                            <div className='movie-item' key={movie.id}  >
                                <div className='movie-delete' onClick={(e) => handleRemove(movie.id)}>X</div>
                                <Link
                                    to='/detail'
                                    state={{ movie }}
                                    style={{ textDecoration: 'none', color: 'white'}}
                                    onClick={() => updateLikes(movie.id)}
                                >

                                    <Movie
                                            title={movie.title}
                                            genres={movie.genres}
                                            cover={movie.medium_cover_image}
                                            summary={movie.summary}
                                            year={movie.year}
                                            rating={movie.rating}
                                            likes={likes[movie.id]}
                                        />
                                </Link>
                            </div>
                                    )

    const toRankPage = () => {
        navigate('/recommend', { state: { movies }})
    }
    return (
        <>
            {loading? <Loading/>: <div className='Home-container'>
                                    <Menu>
                                    <div className='Home-entire'>  
                                            <Button handleClick={displayEntireMovies}>전체목록 보기</Button>
                                        </div>
                                        <Button handleClick={toRankPage}>순위</Button>
                                    </Menu>
                                    <div className='Home-contents'>
                                        <Input name='search' type='text' placeholder='Search movies ...' value={query} onChange={handleChange}/>
                                        <Button handleClick={sortByYear}>정렬</Button>
                                        <div className='Home-movies'>{homeUI}</div>
                                    </div>
                                  </div>}
        </>
    )
}

export default Home