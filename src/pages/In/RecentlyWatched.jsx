import { NavLink } from 'react-router-dom'
import Icon from '../../components/Icon'

export const RecentlyWatched = () => {
	return (
		<header className="flex flex-gap items-center gap-6">
			<NavLink to="/in">
				<Icon name="back" />
			</NavLink>
			<h2 className="font-bold text-xl">Recently Watched</h2>
		</header>
	)
}
