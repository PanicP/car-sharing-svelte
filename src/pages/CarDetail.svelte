<script>
    import { find } from 'lodash-es'

    import MainLayout from '../components/MainLayout.svelte'
    import { store } from '../store/store'

    export let id
    $: car = find($store.cars, (car) => car.id == id)
</script>

<div>
    <MainLayout>
        <div>
            <!-- profile -->
            {car?.user?.name}
            <div />
            <!-- map -->
        </div>
        <!-- detail -->
        <div>
            <div>Age: {car.user.age}</div>
            <div>Sex: {car.user.sex}</div>
            <div>Car Brand: {car.car.brand}</div>
            <div>Car Model: {car.car.model}</div>
            <div>Max Seat: {car.maxSeat}</div>
            <div>Seat Available: {car.seatAvailable}</div>
        </div>
    </MainLayout>
</div>

<style></style>
