import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { worker } from './mocks/browser';

function prepare() {
	if (process.env.NODE_ENV === 'development') {
		return worker.start();
	}

	return Promise.resolve();
}

prepare().then(() => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<App />
		</StrictMode>
	);
});
