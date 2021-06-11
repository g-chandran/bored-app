<script>
  import Bean from "./Bean.svelte";

  const typeBeans = [
    { status: false, type: "education" },
    { status: false, type: "recreational" },
    { status: false, type: "social" },
    { status: false, type: "diy" },
    { status: false, type: "music" },
    { status: false, type: "charity" },
    { status: false, type: "cooking" },
    { status: true, type: "relaxation" },
    { status: false, type: "busywork" },
  ];
</script>

<div class="type-bean-container">
  {#each typeBeans as typeBean}
    <Bean {...typeBean} />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    width: 530px;
    row-gap: 10px;
    column-gap: 10px;
  }
</style>
