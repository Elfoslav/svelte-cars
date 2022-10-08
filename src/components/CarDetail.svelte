<script>
  import { deleteCar } from '@/store.js';
  export let car;
</script>

{#if car}
  <h2 class="car-header">
    {car.brand} {car.model} {car.year}
    <button class="delete-btn" title="delete" on:click={deleteCar(car)}>x</button>
  </h2>
{:else}
  <p>Car not found.</p>
{/if}

<style>
  .car-header .delete-btn {
    vertical-align: middle;
    margin-bottom: 5px;
  }
</style>
