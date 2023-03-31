import React from 'react'
import Navbar from '../../components/Navbar'
import './moviestyle.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import Search from '../../components/Searchmodal'
import Searchcard from '../../components/Searchcard'

function searchresults() {
	return (
		<div>
			<Navbar />

			<p className="text-3xl mt-6 container mx-auto px-4 font-bold">
				Showing Results for:{' '}
			</p>

			<Searchcard />
			<Search />
		</div>
	)
}

export default searchresults
