import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';
import path from 'path';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		plugins: [
			react({
				babel: {
					plugins: ['@emotion/babel-plugin'],
				},
			}),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'@mocks': path.resolve(__dirname, './src/mocks'),
				'@stores': path.resolve(__dirname, './src/stores'),
				'@apis': path.resolve(__dirname, './src/apis'),
				'@hooks': path.resolve(__dirname, './src/hooks'),
				'@utils': path.resolve(__dirname, './src/utils'),
				'@assets': path.resolve(__dirname, './src/assets'),
				'@styles': path.resolve(__dirname, './src/styles'),
				'@components': path.resolve(__dirname, './src/components'),
				'@pages': path.resolve(__dirname, './src/pages'),
				'@constants': path.resolve(__dirname, './src/constants'),
			},
		},
		define: {
			// import.meta.env 환경변수를 명시적으로 설정
			'import.meta.env.VITE_BASE_URL': JSON.stringify(env.VITE_BASE_URL),
		},
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: './src/setupTests.ts',
			exclude: [...configDefaults.exclude, 'node_modules/**'],
			coverage: {
				provider: 'istanbul',
				reporter: ['text'],
				reportsDirectory: './coverage',
				include: ['src/**/*.{js,ts,jsx,tsx}'],
				exclude: ['node_modules', 'test/**', 'src/mocks/browser.ts'],
			},
		},
	};
});
