import autoprefixer from 'autoprefixer';
import sortMedia from 'postcss-sort-media-queries';

export default {
	plugins: [
		autoprefixer(),
		sortMedia({
			sort: 'mobile-first' // default
		})
	],
};