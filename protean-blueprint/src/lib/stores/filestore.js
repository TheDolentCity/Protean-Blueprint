import { writable } from 'svelte/store';

// const initialFiles = localStorage.getItem("files");

export const files = writable([]);
export const activeFile = writable(null);
export const newFileForm = writable(null);
export const selectedBlock = writable(null);