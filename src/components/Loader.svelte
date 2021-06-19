<div class="container">
  <div class="inner-container">
    <div class="loader" />
  </div>
</div>

<style>
  .container {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
  }

  .inner-container {
    margin: 0 auto;
    height: 100%;
    width: 5px;
    background-color: rgba(255, 68, 0, 0.363);
  }

  .loader {
    width: 100%;
    background-color: var(--orange);
    opacity: 1;
    height: 10rem;
    animation: load 1s linear infinite;
  }

  @keyframes load {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(calc(100vh - 10rem));
    }
  }
</style>
