<script>
  import InputSection from "./components/inputSection/InputSection.svelte";
  import ResultSection from "./components/resultSection/ResultSection.svelte";
  let resultSet = [];
  let resultId = 0;

  const fetchData = (event) => {
    console.log(event.detail);
    let temp = {
      id: resultId++,
      title: "Learn Express.js",
      type: "Education",
      priceProgress: 20,
      accessibilityProgress: 60,
      link: "#",
    };
    console.log(temp);
    resultSet = [temp, ...resultSet];
  };
</script>

<main>
  <section class="input-section">
    <div>
      <InputSection on:fetch={fetchData} />
    </div>
  </section>
  <section class="result-section">
    <div>
      <ResultSection bind:resultSet />
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
