import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: ['@emotion/babel-plugin'],
			},
		}),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
		exclude: [...configDefaults.exclude, 'node_modules/**'],
	},
});
