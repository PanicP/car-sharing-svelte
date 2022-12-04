<script>
  import CarCard from "../components/cards/CarCard.svelte";
  import MainLayout from "../components/MainLayout.svelte";
  import { store } from "../store/store";
</script>

<div>
  <MainLayout>
    {#each $store.cars as car, index}
      <!-- <div>{car?.user?.name}</div> -->
      <CarCard />
    {/each}
  </MainLayout>
</div>

<style></style>
