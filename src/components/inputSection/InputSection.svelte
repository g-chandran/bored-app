<script>
  import BoredButton from "./BoredButton.svelte";
  import Slider from "./Slider.svelte";
  import BeanContainer from "./BeanContainer.svelte";
</script>

<div>
  <BoredButton />
  <p>options</p>
  <Slider />
  <BeanContainer />
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
    margin: 13px 0px 0px 20px;
    cursor: pointer;
  }
</style>
