import { writable } from 'svelte/store'

export const store = writable({
    navs: [
        {
            key: 'home',
            label: 'Home',
        }
    ]
})
