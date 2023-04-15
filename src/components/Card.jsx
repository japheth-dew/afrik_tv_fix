import Icon from './Icon'

const Card = ({ className, children }) => {
	return (
		<div className={`w-80 h-40 px-8 py-6 rounded-xl ${className}`}>
			{children}
			<div className="absolute w-full -left-4 z-100 bottom-4">
				<Icon name="wave" />
			</div>
		</div>
	)
}

export default Card
