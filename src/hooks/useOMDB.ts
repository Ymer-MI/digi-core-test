import type { IOmdbResponse } from '../models/IOmdbResponse'
import useFetch from './useFetch';

export default (s: string, p = 1) => {
    const res = useFetch<IOmdbResponse>(`https://omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${s}&page=${p}`)

    return { loading: res.loading, movies: res.data?.Search }
}