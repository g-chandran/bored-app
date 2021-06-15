<script>
  import ProgressBar from "./ProgressBar.svelte";
  export let title;
  export let type;
  export let priceProgress;
  export let accessibilityProgress;
  export let link;
</script>

<div class="result-container">
  <div class="split">
    <h1>{title}</h1>
    {#if link}
      <a href={link}>
        <i class="material-icons">import_export</i>
      </a>
    {/if}
  </div>
  <p>{type}</p>
  <div class="split">
    <ProgressBar title="Price" progress={priceProgress} />
    <ProgressBar title="Accessibility" progress={accessibilityProgress} />
  </div>
</div>

<style>
  a {
    text-decoration: none;
    color: var(--black);
  }
  .split {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .result-container {
    padding: 20px;
    background-color: var(--white);
    margin-bottom: 20px;
  }
  p {
    font-weight: bold;
  }
</style>
