<script>
  import { slide } from "svelte/transition";
  export let sliderValue = 0;
</script>

<div transition:slide={{ duration: 300 }}>
  <input bind:value={sliderValue} type="range" min="0" max="100" />
  <p>{sliderValue}</p>
</div>

<style>
  div {
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    -webkit-appearance: none;
    width: 520px;
    height: 9px;
    border: none;
    border-radius: 0%;
    background-color: var(--orange);
    cursor: pointer;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 41px;
    width: 9px;
    background-color: var(--black);
  }

  p {
    margin-top: 20px;
    font-size: var(--mid-font);
    font-weight: bold;
  }
</style>
