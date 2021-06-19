<script>
  import InputSection from "./components/inputSection/InputSection.svelte";
  import ResultSection from "./components/resultSection/ResultSection.svelte";
  import { onMount } from "svelte";
  const base_URI = "http://www.boredapi.com/api/activity";

  let resultSet = [];
  let resultId = 0;

  onMount(async () => {
    let data = await getData();
    resultSet = [data];
  });

  const getQuery = ({ option, slider, type }) => {
    let query = "";
    switch (option) {
      case "type":
        query = `${base_URI}?type=${type}`;
        break;
      case "price":
        query = `${base_URI}?price=${slider / 10}`;
        break;
      case "accessibility":
        query = `${base_URI}?accessibility=${slider / 10}`;
        break;
      default:
        query = `${base_URI}/`;
        break;
    }
    return query;
  };

  const getData = async (query = base_URI) => {
    const response = await fetch(query);
    const { activity, type, price, link, accessibility } =
      await response.json();
    let result = {
      id: resultId++,
      title: activity,
      type: type,
      priceProgress: Math.round(price * 10),
      accessibilityProgress: Math.round(accessibility * 10),
      link: link,
    };
    return result;
  };

  const fetchData = async (event) => {
    const query = getQuery(event.detail);
    let data = await getData(query);
    resultSet = [data, ...resultSet];
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
