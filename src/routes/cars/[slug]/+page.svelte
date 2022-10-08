<script>
  import CarDetail from "@/components/CarDetail.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<CarDetail car={data.car} />
