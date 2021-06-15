<script>
  export let resultSet = [
    {
      title: "Learn Express.js",
      type: "Education",
      priceProgress: 20,
      accessibilityProgress: 60,
      link: "#",
    },
  ];
  import ResultContainer from "./ResultContainer.svelte";
</script>

<div class="result-container">
  {#each resultSet as { title, type, priceProgress, accessibilityProgress, link }}
    <ResultContainer
      {title}
      {type}
      {priceProgress}
      {accessibilityProgress}
      {link}
    />
  {:else}
    <p>Don't be bored</p>
  {/each}
</div>

<style>
  .result-container {
    margin: 20px 10px 0 20px;
    max-height: 97vh;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    background-color: var(--background-color);
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--orange);
    border-radius: 30px;
  }
</style>
