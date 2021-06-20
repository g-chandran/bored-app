<script>
  import BoredButton from "./BoredButton.svelte";
  import Slider from "./Slider.svelte";
  import BeanContainer from "./BeanContainer.svelte";
  import Options from "./Options.svelte";
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import { PRICE, TYPE, ACCESSIBILITY, OPTIONS } from "./../../stores/r-store";

  const dispatcher = createEventDispatcher();

  const getData = () => {
    dispatcher("fetch", {
      option: optionTitle,
      slider: sliderValue,
      type: type,
    });
  };

  let optionTitle = OPTIONS;
  let options = false;
  let sliderValue = 0;
  let type = "education";
</script>

<div class="body">
  <BoredButton handleBored={getData} />
  <p transition:slide on:click={() => (options = !options)}>{optionTitle}</p>
  <div>
    {#if options}
      <Options
        on:typeSelection={(option) => {
          options = false;
          optionTitle = option.detail;
        }}
      />
    {/if}
  </div>

  {#if optionTitle === TYPE}
    <BeanContainer bind:required={type} />
  {:else if optionTitle === PRICE}
    <Slider bind:sliderValue />
  {:else if optionTitle === ACCESSIBILITY}
    <Slider bind:sliderValue />
  {/if}

  {#if optionTitle !== OPTIONS}
    <button
      transition:slide={{ duration: 300 }}
      on:click={() => {
        options = false;
        optionTitle = OPTIONS;
      }}
    >
      X
    </button>
  {/if}
</div>

<style>
  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .body div {
    display: flex;
    justify-content: center;
    margin-top: -20px;
    margin-bottom: 20px;
  }

  p {
    font-size: var(--mid-font);
    font-weight: bold;
    margin: 13px 0px 20px 0px;
    cursor: pointer;
    user-select: none;
  }

  button {
    text-transform: uppercase;
    margin: 13px 0px;
    font-size: var(--mid-font);
    font-weight: bold;
    background-color: var(--white);
    border: none;
    border-radius: 0;
    cursor: pointer;
    user-select: none;
  }
</style>
