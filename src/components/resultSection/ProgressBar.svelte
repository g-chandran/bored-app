<script>
  export let title = "price";
  export let progress = 20;
</script>

<!-- 353, 30 -->
<div class="progress-component">
  <div class="progress-bar">
    <p>{progress}%</p>
    <div class="progress" style="width: {progress}%;" />
  </div>
  <p class="title">{title}</p>
</div>

<style>
  .progress-component {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .progress-bar {
    position: relative;
    height: 30px;
    width: 300px;
    margin-top: 20px;
    line-height: 30px;
    background-color: var(--background-color);
  }
  .progress-bar p {
    text-align: center;
    position: absolute;
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  .progress {
    position: absolute;
    z-index: 1;
    background-color: var(--orange);
    height: 100%;
  }
  p {
    font-weight: bold;
  }
</style>
