import React , {useState} from 'react'
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE, 
    SEARCH_BASE_URL, 
    POPULAR_BASE_URL
} from '../config'

// Import components
import HeroImage from './elements/HeroImages'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'

// Custom Hook
import {useHomeFetch} from './hooks/useHomeFetch'
import NoImage from './images/no_image.jpg'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [
        {state: {movies, currentPage, totalPages, heroImage}, 
        loading, error}
        , fetchMovies] = useHomeFetch(searchTerm);

    const searchMovies = search => {
        const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

        setSearchTerm(search);
        fetchMovies(endpoint)
    }

    const loadMoreMovies = () => {
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`
        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
        fetchMovies(endpoint)
    }


    if(error) return <div>Something went wrong...</div>
    if(!movies[0] && !searchTerm) {  
        return (
            <>
            <SearchBar callback={searchMovies}/>
            <Spinner />
            </>
        )
    }

    return (
        <>
        {!searchTerm && (
        <HeroImage  
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`} 
            title={heroImage.title}  
            text={heroImage.overview} />
            )}
        <SearchBar callback={searchMovies}/>
        <Grid header={searchTerm ? `Search Results for ${searchTerm}` : 'Popular Movies'}>
            {movies.map(movie => {
                // if(movie.id !== heroImage.id) {
                    return(
                    <MovieThumb 
                    key={movie.id}
                    clickable
                    image={
                        movie.poster_path 
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                     }
                     movieId={movie.id}
                     movieName={movie.original_title}
                     />
                    )
                // }
            }
            )}
        </Grid>
        {(movies.length === 0) ? <Spinner /> : ''}

        <LoadMoreBtn 
            callBack={loadMoreMovies}
            totalPages={totalPages} 
            currentPage={currentPage} 
            loading={loading}
            text="Load More"
            />
    </>
    )
}


export default Home;