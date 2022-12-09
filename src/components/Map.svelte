<script>
    // import mapStyles from './map-styles' // optional
    export let location
    let container
    let map
    let zoom = 17
    let center = { lat: location.lat, lng: location.lng }

    import { onMount } from 'svelte'

    onMount(async () => {
        map = new google.maps.Map(container, {
            zoom,
            center,
            // styles: mapStyles, // optional
        })

        new google.maps.Marker({
            position: center,
            map,
            title: 'Hello World!',
        })
    })
</script>

<div class="flex justify-center">
    <div class="full-screen flex justify-center" bind:this={container} />
</div>

<style>
    .full-screen {
        width: 70vw;
        height: 50vh;
    }
</style>
