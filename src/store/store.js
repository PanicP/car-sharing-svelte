import { writable } from 'svelte/store'

export const store = writable({
    navs: [
        {
            key: 'home',
            label: 'Home',
        }
    ],
    cars: [
        {
            id: 1,
            image: 'https://placeimg.com/200/280/arch',
            user: {
                name: "Aaaaaaaa Bbbbbbbbb1",
                age: 23,
                sex: 'male'
            },
            car: {
                brand: "ABC",
                model: "model"
            },
            maxSeat: 4,
            seatAvailable: 2
        },
        {
            id: 2,
            image: 'https://placeimg.com/200/280/arch',
            user: {
                name: "Aaaaaaaa Bbbbbbbbb2",
                age: 23,
                sex: 'male'
            },
            car: {
                brand: "ABC",
                model: "model"
            },
            maxSeat: 4,
            seatAvailable: 2
        }
    ],
    bookedCars: {
        id: 1,
        image: './src/public/image/tempProfile.jpg',
        user: {
            name: "Aaaaaaaa Bbbbbbbbb",
            age: 23,
            sex: 'male'
        },
        car: {
            brand: "ABC",
            model: "model"
        },
        maxSeat: 4,
        seatAvailable: 2
    },
})
