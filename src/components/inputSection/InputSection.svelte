<script>
  import BoredButton from "./BoredButton.svelte";
  import Slider from "./Slider.svelte";
  import BeanContainer from "./BeanContainer.svelte";
  import Options from "./Options.svelte";

  let optionTitle = "options";
  let options = false;
</script>

<div class="body">
  <BoredButton />
  <p on:click={() => (options = !options)}>{optionTitle}</p>
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

  {#if optionTitle === "type"}
    <BeanContainer />
  {:else if optionTitle === "price"}
    <Slider />
  {:else if optionTitle === "accessibility"}
    <Slider />
  {/if}

  {#if optionTitle !== "options"}
    <p
      on:click={() => {
        options = false;
        optionTitle = "options";
      }}
    >
      X
    </p>
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
</style>
