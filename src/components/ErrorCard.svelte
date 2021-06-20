<script>
  import { fade, fly } from "svelte/transition";
  export let title = "Unable to connect";
  export let body = "Unable to connect to the network, please try again later.";
  export let isError;
</script>

<div class="container" transition:fade>
  <div transition:fly>
    <section>
      <p class="close-button" on:click={() => (isError = !isError)}>X</p>
      <p />
    </section>
    <img src="./assets/set_preferences.png" alt="Change your preferences" />
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
    z-index: 2;
  }

  img {
    width: 10rem;
    height: 7rem;
    display: flex;
    align-items: center;
    justify-items: center;
  }

  section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .container div {
    height: fit-content;
    max-width: 30rem;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 0 5px var(--orange);
    padding: 2rem;
  }

  h1 {
    text-align: center;
  }

  .close-button {
    font-weight: bold;
    cursor: pointer;
  }

  * {
    margin-bottom: 0.5rem;
  }
</style>
