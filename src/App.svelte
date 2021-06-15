<script>
  import InputSection from "./components/inputSection/InputSection.svelte";
  import ResultSection from "./components/resultSection/ResultSection.svelte";
</script>

<main>
  <section class="input-section">
    <div>
      <InputSection />
    </div>
  </section>
  <section class="result-section">
    <div>
      <ResultSection />
    </div>
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
