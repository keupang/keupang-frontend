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
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html'],
			reportsDirectory: './coverage',
			include: ['src/**/*.{js,ts,jsx,tsx}'],
			exclude: ['node_modules', 'test/**', 'src/mocks/browser.ts'], // browser.ts 제외
		},
	},
});
