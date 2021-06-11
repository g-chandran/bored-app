<script>
  export let type = "education";
  export let status = false;
  function setSelection() {
    console.log(type);
  }
</script>

<div class={status ? "selected" : ""} on:click={setSelection}>
  <p>{type}</p>
</div>

<style>
  div {
    padding: 10px 20px;
    border: 1px solid var(--black);
    background-color: var(--white);
    border-radius: 50px;
    width: fit-content;
    cursor: pointer;
  }

  .selected {
    background-color: var(--orange);
  }

  p {
    font-size: var(--tiny-font);
    font-weight: bold;
  }
</style>
