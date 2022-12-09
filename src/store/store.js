import { writable } from 'svelte/store'

export const store = writable({
    navs: [
        {
            key: 'home',
            label: 'Home',
        },
    ],
    cars: [
        {
            id: 1,
            image: 'https://placeimg.com/400/300/arch',
            imageLarge: 'https://placeimg.com/1000/500/arch',
            user: {
                name: 'Aaaaaaaa Bbbbbbbbb1',
                age: 23,
                sex: 'male',
            },
            car: {
                brand: 'ABC',
                model: 'model',
            },
            maxSeat: 4,
            seatAvailable: 2,
        },
        {
            id: 2,
            image: 'https://placeimg.com/400/300/arch',
            imageLarge: 'https://placeimg.com/1000/500/arch',
            user: {
                name: 'Aaaaaaaa Bbbbbbbbb2',
                age: 23,
                sex: 'male',
            },
            car: {
                brand: 'ABC',
                model: 'model',
            },
            maxSeat: 4,
            seatAvailable: 2,
        },
    ],
    bookedCars: [
        {
            id: 1,
            image: 'https://placeimg.com/400/300/arch',
            imageLarge: 'https://placeimg.com/1000/500/arch',
            user: {
                name: 'Aaaaaaaa Bbbbbbbbb',
                age: 23,
                sex: 'male',
            },
            car: {
                brand: 'ABC',
                model: 'model',
            },
            maxSeat: 4,
            seatAvailable: 2,
        },
    ],
    registedUsers: [
        {
            user: 'testpanic',
            password: 'testpanic',
        },
        {
            user: 'test2',
            password: 'test2',
        },
    ],
    isLogin: false,
})
