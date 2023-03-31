import { NavLink } from 'react-router-dom'
import Icon from '../../components/Icon'
import Movie from '../../components/Movie'

const movies = [
	{ title: 'The Family', image: 'https://picsum.photos/200/300' },
	{ title: 'The Venge', image: 'https://picsum.photos/200/300' },
	{ title: 'My Soulmate', image: 'https://picsum.photos/200/300' },
]

export const WatchLater = () => {
	return (
		<div className='ml-16 lg:ml-0'>
			<header className="flex flex-gap items-center gap-6">
				<NavLink to="/in">
					<Icon name="back" />
				</NavLink>
				<h2 className="font-bold text-xl">Watch Later</h2>
			</header>
			<div className="flex flex-wrap gap-8 mt-12">
				{movies.map((movie) => <Movie key={movie.title} {...movie} />)}
			</div>
		</div>
	)
}
