<script>
  import BoredButton from "./BoredButton.svelte";
  import Slider from "./Slider.svelte";
  import BeanContainer from "./BeanContainer.svelte";
  import Options from "./Options.svelte";

  let optionTitle = "options";
  let options = false;
</script>

<div>
  <BoredButton />
  <p on:click={() => (options = !options)}>{optionTitle}</p>

  {#if options}
    <Options
      on:typeSelection={(option) => {
        options = false;
        optionTitle = option.detail;
      }}
    />
  {/if}
  {#if optionTitle === "type"}
    <BeanContainer />
  {:else if optionTitle === "price"}
    <Slider />
  {:else if optionTitle === "accessibility"}
    <Slider />
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  p {
    font-size: var(--mid-font);
    font-weight: bold;
    margin: 13px 0px 20px 0px;
    cursor: pointer;
  }
</style>
