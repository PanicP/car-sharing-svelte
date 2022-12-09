<script>
    import { find } from 'lodash-es'

    import MainLayout from '../components/MainLayout.svelte'
    import { store } from '../store/store'

    export let id

    const handleJoin = () => {
        $store.bookedCars = [car]
    }

    $: car = find($store.cars, (car) => car.id == id)
</script>

<div>
    <MainLayout>
        <div>
            <!-- profile -->
            <div class="flex justify-center">Name: {car.user.name}</div>
            <figure class="flex justify-center">
                <img src={car.imageLarge} alt="Movie" />
            </figure>
            <!-- map -->
        </div>
        <!-- detail -->
        <div class="flex flex-col justify-center ">
            <div class="flex justify-center">Age: {car.user.age}</div>
            <div class="flex justify-center">Sex: {car.user.sex}</div>
            <div class="flex justify-center">Car Brand: {car.car.brand}</div>
            <div class="flex justify-center">Car Model: {car.car.model}</div>
            <div class="flex justify-center">Max Seat: {car.maxSeat}</div>
            <div class="flex justify-center">
                Seat Available: {car.seatAvailable}
            </div>
        </div>
        <div class="flex justify-center">
            <button class="btn" on:click={handleJoin}>Join</button>
            <p>{$store.bookedCars[0]?.user.name}</p>
        </div>
    </MainLayout>
</div>

<style></style>
