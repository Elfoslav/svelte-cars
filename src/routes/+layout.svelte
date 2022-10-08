<script>
  import CarForm from "@/components/CarForm.svelte";
  import CarsList from "@/components/CarsList.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<nav>
  <a href="/">Home</a>
  |
  <a href="/about">About</a>
</nav>

<hr />

<div class="grid">
  <div class="grid-item">
    <CarForm />

    <hr />

    <CarsList slug={data.slug} />
  </div>

  <div class="grid-item">
    <slot></slot>
  </div>
</div>

<style>
  .grid {
    display: flex;
  }

  .grid .grid-item {
    flex: 50%;
  }
</style>
