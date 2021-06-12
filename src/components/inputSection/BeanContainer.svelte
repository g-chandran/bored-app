<script>
  import Bean from "./Bean.svelte";

  let typeId = 1;

  let typeBeans = [
    { id: typeId++, status: false, type: "education" },
    { id: typeId++, status: false, type: "recreational" },
    { id: typeId++, status: false, type: "social" },
    { id: typeId++, status: false, type: "diy" },
    { id: typeId++, status: false, type: "music" },
    { id: typeId++, status: false, type: "charity" },
    { id: typeId++, status: false, type: "cooking" },
    { id: typeId++, status: false, type: "relaxation" },
    { id: typeId++, status: false, type: "busywork" },
  ];

  const updateTypeBean = (typeBean) => {
    for (let bean in typeBeans) {
      typeBeans[bean].status = false;
    }
    typeBean.status = true;
  };
</script>

<div class="type-bean-container">
  {#each typeBeans as typeBean}
    <Bean on:change={() => updateTypeBean(typeBean)} {...typeBean} />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    width: 530px;
    row-gap: 10px;
    column-gap: 10px;
  }
</style>
