import { writable } from 'svelte/store';

export const selectedBlock = writable(null);
export const activeFile = writable(null);
export const files = writable([]);
export const newFileForm = writable(null);