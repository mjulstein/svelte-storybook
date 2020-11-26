<script>
  /**
   * @type {'ok'|'notice'|'warning'|'error'|'critical'|'custom'}
   */
  export let status = 'ok';
  export let flashSize = '100px';
  export let spotSize = '20px';
  export let customColor = '';
  if (customColor) {
    status = 'custom';
  }
</script>

<style>
  .ok > .flash,
  .ok > .spot {
    background-color: var(--ok-color);
  }
  .notice > .flash,
  .notice > .spot {
    background-color: var(--notice-color);
  }
  .warning > .flash,
  .warning > .spot {
    background-color: var(--warning-color);
  }
  .error > .flash,
  .error > .spot {
    background-color: var(--error-color);
  }
  .critical > .flash,
  .critical > .spot {
    background-color: var(--critical-color);
  }
  .flash-container {
    position: relative;
  }
  .flash-container > * {
    pointer-events: none;
  }
  .flash,
  .spot {
    height: var(--width);
    width: var(--width);
    border-radius: 50%;
    position: absolute;
    top: calc(50% - var(--width) / 2);
    left: calc(50% - var(--width) / 2);
  }
  .spot {
    --width: var(--spot-size);
    animation-name: compression;
    animation-direction: normal;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }
  .flash {
    --width: var(--flash-size);
    opacity: 0;
    animation-name: shockwave;
    animation-direction: normal;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
  }
  @keyframes compression {
    0% {
      transform: scale(1);
    }
    15% {
      transform: scale(0.85);
    }
    20% {
      transform: scale(1);
    }
  }
  @keyframes shockwave {
    0% {
      transform: scale(0.28);
    }
    15% {
      opacity: 0.3;
      transform: scale(0.28);
    }
    20% {
      transform: scale(0.333);
    }
    50% {
      opacity: 0;
      transform: scale(1);
    }
  }
</style>

<div
  style="--flash-size:{flashSize};--spot-size:{spotSize};{customColor ? `--color:${customColor};` : ''}"
  class="flash-container {status}">
  <div class="flash" />
  <div class="spot" />
</div>
