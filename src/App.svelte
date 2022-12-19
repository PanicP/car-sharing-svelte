<script>
    import { Route, Router } from 'svelte-routing'
    import CarDetail from './pages/CarDetail.svelte'
    import FindingCar from './pages/FindingCar.svelte'
    import Landing from './pages/Landing.svelte'
    import RegisterCar from './pages/RegisterCar.svelte'

    export let url = ''
</script>

<svelte:head>
    <script
        defer
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCy9QphZsJQHjpeaTyja9kx7PIK-9qgP1E&callback=initMap"
    >
    </script>
</svelte:head>

<main>
    <!-- <div>Landing</div>
  <Login /> -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <html data-theme="luxury">
        <Router {url} basepath="/car-sharing-svelte">
            <div>
                <Route path="car/:id" component={CarDetail} />
                <Route path="findingcar" component={FindingCar} />
                <Route path="registercar" component={RegisterCar} />
                <Route path="/" component={Landing} />
            </div>
        </Router>
    </html>
</main>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
