// src/mocks/browser.ts
import { setupWorker } from 'msw/browser';
import { handlers } from './handler';

export const worker = setupWorker(...handlers);
