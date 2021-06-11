<script>
  import InputSection from "./components/inputSection/InputSection.svelte";
</script>

<main>
  <section class="input-section">
    <div>
      <InputSection />
    </div>
  </section>
  <section class="result-section">
    <div />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
  }

  .input-section {
    background: var(--white);
    height: 100vh;
    width: 50vw;
  }

  .result-section {
    background: var(--background-color);
    height: 100vh;
    width: 50vw;
  }
</style>
