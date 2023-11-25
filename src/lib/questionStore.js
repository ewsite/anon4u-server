import { writable } from 'svelte/store';

const questionStore = writable('');

export default questionStore;
