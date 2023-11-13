import Inspect from 'vite-plugin-inspect';
import handlebars from 'vite-plugin-handlebars';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

export default {
	plugins: [
		handlebars({
			partialDirectory: 'partials',
		}),
		Inspect(),
		ViteSvgSpriteWrapper({
			icons: './src/img/icons/*.svg',
			outputDir: './src/img/'
		}),
	],
};