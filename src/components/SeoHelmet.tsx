import { Helmet } from 'react-helmet-async';

interface SeoHelmetProps {
	title: string;
	description: string;
	url: string;
	image: string;
}

const SeoHelmet = ({ title, description, url, image }: SeoHelmetProps) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='canonical' href={url} />

			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />
			<meta property='og:url' content={url} />

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
		</Helmet>
	);
};

export default SeoHelmet;
