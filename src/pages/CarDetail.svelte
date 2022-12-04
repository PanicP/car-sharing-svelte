<script>
  import _ from "lodash";
  import MainLayout from "../components/MainLayout.svelte";
  import { store } from "../store/store";

  export let id;
  $: car = _.find($store.cars, (car) => car.id == id);
</script>

<div>
  <MainLayout>
    <div>
      <!-- profile -->
      {car?.user?.name}
      <div />
      <!-- map -->
      <div />
    </div>
    <!-- detail -->
    <div />
  </MainLayout>
</div>

<style></style>
