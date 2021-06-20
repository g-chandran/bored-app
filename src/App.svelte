<script>
  import InputSection from "./components/inputSection/InputSection.svelte";
  import ResultSection from "./components/resultSection/ResultSection.svelte";
  import ErrorCard from "./components/ErrorCard.svelte";
  import { onMount } from "svelte";
  import Loader from "./components/Loader.svelte";
  const base_URI = "http://www.boredapi.com/api/activity";

  let isError = false;
  let isLoading = false;
  let errorInfo = {
    title: "Take a nap",
    body: "Unexpected error occurred, please try again later",
    hints: [],
  };
  let resultSet = [];
  let resultId = 0;

  onMount(async () => {
    let { data, status } = await getData();
    if (status === "OK") resultSet = [data];
    else setError(data.title, data.description);
  });

  const getErrorMessage = (title, description) => {
    return { title: title, description: description };
  };

  const setError = (title, body) => {
    isError = true;
    errorInfo["title"] = title;
    errorInfo["body"] = body;
  };

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
    let response;
    try {
      response = await fetch(query);
    } catch (e) {
      let errorMessage = getErrorMessage(
        "You are in a Island",
        "Unable to connect to the internet, please check your connection"
      );
      return { data: errorMessage, status: "Error" };
    }
    if (response.status === 200) {
      let json = await response.json();
      if ("error" in json) {
        console.log(json);
        let errorMessage = getErrorMessage(
          "You must be unique, but boredom is common",
          "Unable to find an activity for the given option, try changing the options"
        );
        return { data: errorMessage, status: "Error" };
      }
      const { activity, type, price, link, accessibility } = json;
      let result = {
        id: resultId++,
        title: activity,
        type: type,
        priceProgress: Math.round(price * 10),
        accessibilityProgress: Math.round(accessibility * 10),
        link: link,
      };
      return { data: result, status: "OK" };
    } else {
      let errorMessage = getErrorMessage(
        "Take a nap",
        "Unexpected error occurred, please try again later"
      );
      return { data: errorMessage, status: "Error" };
    }
  };

  const fetchData = async (event) => {
    isLoading = true;
    const query = getQuery(event.detail);
    let { data, status } = await getData(query);
    if (status === "OK") resultSet = [data, ...resultSet];
    else setError(data.title, data.description);
    isLoading = false;
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
  {#if isError}
    <ErrorCard bind:isError {...errorInfo} />
  {/if}
  {#if isLoading}
    <Loader />
  {/if}
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
