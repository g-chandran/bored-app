<script>
  export let handleBored;
</script>

<button on:click={handleBored}>Bored</button>

<style>
  button {
    text-transform: capitalize;
    color: var(--white);
    background-color: var(--orange);
    border: none;
    padding: 23px 169px;
    font-size: var(--big-font);
    cursor: pointer;
  }
</style>
