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
            image: 'https://placeimg.com/400/300/people',
            imageLarge: 'https://placeimg.com/1000/500/people',
            user: {
                name: 'Johnny Ringo',
                age: 15,
                sex: 'male',
            },
            car: {
                brand: 'Tesla',
                model: '3',
            },
            maxSeat: 4,
            location: { lat: 50.558824, lng: 9.678458 },
        },
        {
            id: 2,
            image: 'https://placeimg.com/400/300/people',
            imageLarge: 'https://placeimg.com/1000/500/people',
            user: {
                name: 'Johnny Bravo',
                age: 23,
                sex: 'Female',
            },
            car: {
                brand: 'Mi',
                model: 'X',
            },
            maxSeat: 4,
            location: { lat: 50.566791, lng: 9.690055 },
        },
    ],
    bookedCars: [
        {
            id: 1,
            image: 'https://placeimg.com/400/300/people',
            imageLarge: 'https://placeimg.com/1000/500/people',
            user: {
                name: 'Johnny Ringo',
                age: 15,
                sex: 'male',
            },
            car: {
                brand: 'Tesla',
                model: '3',
            },
            maxSeat: 4,
            location: { lat: 50.558824, lng: 9.678458 },
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
