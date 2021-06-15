<script>
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";
  let options = ["type", "price", "accessibility"];

  const dispatch = createEventDispatcher();
</script>

<div transition:slide={{ duration: 300 }} class="options">
  {#each options as option}
    <div class="option">
      <p on:click={() => dispatch("typeSelection", option)}>{option}</p>
    </div>
  {/each}
</div>

<style>
  .options {
    box-shadow: 0 0 5px var(--orange);
    position: absolute;
    z-index: 1;
    background-color: var(--white);
  }

  .option {
    padding: 5px 15px;
    cursor: pointer;
  }

  .option:hover {
    background-color: var(--background-color);
  }
</style>
