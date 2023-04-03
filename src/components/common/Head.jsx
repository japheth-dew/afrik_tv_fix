import { Helmet } from 'react-helmet-async'

export const Head = ({ title, description = '', keywords = '', children }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			{children}
		</Helmet>
	)
}
