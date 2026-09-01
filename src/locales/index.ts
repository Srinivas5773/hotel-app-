import { en } from './en';
import { te } from './te';

export const dictionaries = {
  en,
  te,
};

export type Language = 'en' | 'te';
export * from './en';
export * from './te';
