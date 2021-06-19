<script>
  import { fade, fly } from "svelte/transition";
  export let title = "Unable to connect";
  export let body = "Unable to connect to the network, please try again later.";
  export let isError;
</script>

<div class="container" transition:fade>
  <div transition:fly>
    <p class="close-button" on:click={() => (isError = !isError)}>X</p>
    <h1>{title}</h1>
    <p class="body">{body}</p>
  </div>
</div>

<style>
  .container {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.521);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .container div {
    height: fit-content;
    max-width: 30rem;
    background-color: var(--background-color);
    border-radius: 5px;
    box-shadow: 0 0 5px var(--orange);
  }

  .close-button {
    display: inline-block;
    font-weight: bold;
    cursor: pointer;
    padding: 10px 15px;
  }

  h1,
  .body {
    padding: 5px 15px;
  }
</style>
