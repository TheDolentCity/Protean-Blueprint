import { writable } from 'svelte/store';

export const activeFile = writable(null);
export const files = writable([]);