<script>
  import InputSection from "./components/inputSection/InputSection.svelte";
  import ResultSection from "./components/resultSection/ResultSection.svelte";
  import ErrorCard from "./components/ErrorCard.svelte";
  import { onMount } from "svelte";
  import Loader from "./components/Loader.svelte";
  import {
    base_URI,
    TYPE,
    PRICE,
    ACCESSIBILITY,
    errorMessages,
  } from "./stores/r-store";
  import { isError } from "./stores/w-store";

  let isLoading = false;
  let errorInfo = errorMessages.default;
  let resultSet = [];
  let resultId = 0;

  onMount(async () => {
    let { data, status } = await getData();
    if (status === "OK") resultSet = [data];
    else setError(data.title, data.body);
  });

  const setError = (title, body) => {
    isError.set(true);
    errorInfo["title"] = title;
    errorInfo["body"] = body;
  };

  const getQuery = ({ option, slider, type }) => {
    let query = "";
    switch (option) {
      case TYPE:
        query = `${base_URI}?${TYPE}=${type}`;
        break;
      case PRICE:
        query = `${base_URI}?${PRICE}=${slider / 10}`;
        break;
      case ACCESSIBILITY:
        query = `${base_URI}?${ACCESSIBILITY}=${slider / 10}`;
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
      return { data: errorMessages.noInternet, status: "Error" };
    }
    if (response.status === 200) {
      let json = await response.json();
      if ("error" in json) {
        console.log(json);
        return { data: errorMessages.noActivity, status: "Error" };
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
      return { data: errorMessages.default, status: "Error" };
    }
  };

  const fetchData = async (event) => {
    isLoading = true;
    const query = getQuery(event.detail);
    let { data, status } = await getData(query);
    if (status === "OK") resultSet = [data, ...resultSet];
    else setError(data.title, data.body);
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
  {#if $isError}
    <ErrorCard {...errorInfo} />
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
