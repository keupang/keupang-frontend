// src/mocks/browser.ts
import { setupWorker } from 'msw/browser';
import { handler } from './handler';

export const worker = setupWorker(...handler);
