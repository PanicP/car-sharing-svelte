<script>
    import { isEmpty } from 'lodash-es'
    import { Link } from 'svelte-routing'
    import { store } from '../../store/store'

    const handleCancel = () => {
        $store.bookedCars = []
    }

    $: cars = $store.cars
</script>

<div>
    {#each cars as car, index}
        <div class="mb-2 border-2">
            <Link to={`car/${car.id}`}>
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={car.image} alt="Movie" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Name: {car.user.name}</h2>
                        <div>Age: {car.user.age}</div>
                        <div>Sex: {car.user.sex}</div>
                        <div>Car Brand: {car.car.brand}</div>
                        <div>Car Model: {car.car.model}</div>
                        <div>Max Seat: {car.maxSeat}</div>
                        <div />
                    </div>
                </div>
            </Link>
        </div>
    {/each}
</div>

<style></style>
