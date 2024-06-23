import { writable } from "svelte/store";


export const drawerOpen = writable(false);
export const theam = writable(localStorage.getItem("theme") ?? "dark");
export const width = writable(0);