import cn from 'clsx'
import { NavLink } from 'react-router-dom'

export const Button = ({ children, className, loading, ...props }) => {
	const Component = props.to ? NavLink : 'button'
	const classes = cn('button', className)
	return (
		<Component className={classes} {...props}>
			{loading ? 'Loading...' : children}
		</Component>
	)
}
