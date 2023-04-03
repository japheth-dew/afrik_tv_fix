import cn from 'clsx'

export const Spinner = ({ className }) => {
	const classes = cn(
		'w-12 h-12 border-2 border-gray-300 border-t-[black] rounded-full animate-spin',
		'dark:border-gray-600 dark:border-t-[white]',
		className
	)
	return <div className={classes} />
}
