<script>
  import { cars, deleteCar } from '@/store.js';
  import { getCarSlug } from '@/lib/helpers.js';

  export let slug;
</script>

{#if $cars && $cars.length}
  <ul>
    {#each $cars as car}
      <li class="flex" class:active={getCarSlug(car) === slug}>
        <div class="flex-item flex-anchor">
          <a class="block-display" href="/cars/{getCarSlug(car)}">
            {car.brand} {car.model} {car.year ? car.year : ""}
          </a>
        </div>
        <div class="flex-item push-right">
          <button on:click={deleteCar(car)}>x</button>
        </div>
      </li>
    {/each}
  </ul>
{/if}

<style>
  .flex {
    display: flex;
  }

  .flex-anchor {
    padding: 2px 0;
    flex: 1 1 auto;
  }

  .flex-anchor:hover {
    background: rgb(150, 191, 230);
  }

  .push-right {
    margin-left: auto;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    padding: 3px 0;
  }

  ul li.active {
    background: rgb(150, 191, 230);
  }

  .block-display {
    display: block;
  }
</style>
