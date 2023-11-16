import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import handlebars from 'vite-plugin-handlebars';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
import { resolve } from 'path';
import fs from "fs";

const inputs = {};
fs.readdirSync(__dirname)
	.filter(value => value.indexOf('.html') !== -1)
	.map(value => {
		inputs[value.replace('.html', '')] = resolve(__dirname, value);
	});

export default defineConfig({
	build: {
		rollupOptions: {
			input: inputs,
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						// return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				}
			}
		}
	},
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
});