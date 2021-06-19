<script>
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  export let resultSet = [];
  import ResultContainer from "./ResultContainer.svelte";
</script>

<div class="result-section">
  {#each resultSet as result, i (result.id)}
    <div animate:flip transition:fly class="result-container">
      <ResultContainer {...result} />
    </div>
  {:else}
    <p>Don't be bored, get some coffee and some activity</p>
  {/each}
</div>

<style>
  .result-section {
    margin: 20px 10px 0 20px;
    max-height: 97vh;
    overflow-y: scroll;
  }

  p {
    text-align: center;
  }

  .result-container {
    padding: 20px;
    background-color: var(--white);
    margin-bottom: 20px;
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
