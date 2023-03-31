import { Route, Routes } from 'react-router-dom'
import MoviePage from './moviepage'
import SearchResults from './searchresults'

export const Movies = () => (
	<Routes>
		{/* <Route path="/" element={<MoviesList />} />
    <Route path="/:id" element={<MovieDetails />} /> */}
		<Route path="" element={<MoviePage />} />
		<Route path="searchresults" element={<SearchResults />} />
	</Routes>
)
