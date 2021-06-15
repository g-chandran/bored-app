<script>
  import Bean from "./Bean.svelte";
  import { slide } from "svelte/transition";
  export let required = "education";

  let typeBeans = [
    "education",
    "recreational",
    "social",
    "diy",
    "music",
    "charity",
    "cooking",
    "relaxation",
    "busywork",
  ];
</script>

<div transition:slide={{ duration: 300 }} class="type-bean-container">
  {#each typeBeans as typeBean}
    {#if typeBean === required}
      <Bean
        on:change={() => {
          required = typeBean;
        }}
        type={typeBean}
        status={true}
      />
    {:else}
      <Bean
        on:change={() => {
          required = typeBean;
        }}
        type={typeBean}
        status={false}
      />
    {/if}
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
