import { createRoot } from 'react-dom/client';
import App from './App';
import { worker } from './mocks/browser';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './apis/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';

// MSW 초기화 함수
async function prepare() {
	if (process.env.NODE_ENV === 'development') {
		console.log('Mock Service Worker is starting...');
		return worker.start({
			onUnhandledRequest: 'bypass', // 처리되지 않은 요청은 실제 API로 전달
		});
	}

	console.log('Mock Service Worker is disabled.');
	return Promise.resolve();
}

// 애플리케이션 초기화
prepare().then(() => {
	createRoot(document.getElementById('root')!).render(
		<QueryClientProvider client={queryClient}>
			<HelmetProvider>
				<App />
			</HelmetProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
});

// createRoot(document.getElementById('root')!).render(
// 	<StrictMode>
// 		<QueryClientProvider client={queryClient}>
// 			<App />
// 			<ReactQueryDevtools />
// 		</QueryClientProvider>
// 	</StrictMode>
// );
