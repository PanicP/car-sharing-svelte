<script>
    import { isEmpty } from 'lodash-es'
    import { Link, navigate } from 'svelte-routing'
    import { store } from '../../store/store'

    const handleCancel = () => {
        $store.bookedCars = []
    }

    $: car = $store.bookedCars[0]
        ? $store.bookedCars[0]
        : {
              id: 0,
              image: 'https://placeimg.com/400/300/people',
              imageLarge: 'https://placeimg.com/1000/500/people',
              user: {
                  name: '',
                  age: 0,
                  sex: '',
              },
              car: {
                  brand: '',
                  model: '',
              },
              maxSeat: 0,
              location: { lat: 50.558824, lng: 9.678458 },
          }
</script>

<div class="mb-2 border-2">
    <element
        on:click={() =>
            navigate(`/car-sharing-svelte/car/${car.id}`, { replace: true })}
    >
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
                <div class="card-actions justify-end">
                    <button
                        class="btn btn-primary"
                        on:click|preventDefault|stopPropagation={handleCancel}
                        >Cancel</button
                    >
                </div>
            </div>
        </div>
    </element>
</div>

<style></style>
