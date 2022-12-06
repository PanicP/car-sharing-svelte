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
            // <!-- profile -->
            {car?.user?.name}
            <div />
            // <!-- map -->
            apiKey="AIzaSyCy9QphZsJQHjpeaTyja9kx7PIK-9qgP1E" />
        </div>
        // <!-- detail -->
        <div />
    </MainLayout>
</div>

<style></style>
