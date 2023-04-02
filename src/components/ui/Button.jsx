import cn from 'clsx'
import { NavLink } from 'react-router-dom'
import { Spinner } from './Spinner'

export const Button = ({ children, className, loading, disabled, ...props }) => {
	const Component = props.to ? NavLink : 'button'
	const classes = cn('button', className, {
		"opacity-50": disabled,
	})
	return (
		<Component className={classes} {...props} disabled={disabled}>
			{loading ? <Spinner className="w-4 h-4" /> : children}
		</Component>
	)
}
