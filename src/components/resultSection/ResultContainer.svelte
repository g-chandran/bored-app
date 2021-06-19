<script>
  import { fly } from "svelte/transition";
  import ProgressBar from "./ProgressBar.svelte";
  export let title;
  export let type;
  export let priceProgress;
  export let accessibilityProgress;
  export let link;
  export let id;
</script>

<div transition:fly={{ y: -300, delay: 250 }}>
  <div class="split">
    <h1>{title}</h1>
    {#if link}
      <a href={link} target="blank">
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

  p {
    font-weight: bold;
  }
</style>
