<script>
  export let type = "education";
  export let status = false;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<button class:selected={status} on:click={() => dispatch("change")}>
  {type}
</button>

<style>
  button {
    padding: 10px 20px;
    border: 1px solid var(--orange);
    background-color: var(--white);
    border-radius: 50px;
    width: fit-content;
    cursor: pointer;
    font-size: var(--tiny-font);
    font-weight: bold;
  }

  .selected {
    background-color: var(--orange);
  }

  button:hover {
    box-shadow: 0px 0px 5px var(--orange);
  }
</style>
