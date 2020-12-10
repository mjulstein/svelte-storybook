<script>
  /**
   * @type {'ok'|'notice'|'warning'|'error'|'critical'|'custom'}
   */
  export let status = 'ok';
  export let spotSize = '20px';
  export let flash = 3.1;
  export let color = '';
  if (color) {
    status = 'custom';
  }

  switch (status) {
    case 'ok':
      color = 'var(--ok-color)';
      break;
    case 'notice':
      color = 'var(--notice-color)';
      break;
    case 'warning':
      color = 'var(--warning-color)';
      break;
    case 'error':
      color = 'var(--error-color)';
      break;
    case 'critical':
      color = 'var(--critical-color)';
      break;
    default:
      break;
  }
  $: flashSize = `calc( ${spotSize} * ${flash} )`;
  $: console.log(flashSize);
</script>

<style>
  .flash-container > div {
    background-color: var(--color);
  }
  .flash-container {
    height: var(--spot-size);
    width: var(--spot-size);
    position: relative;
    display: inline-block;
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
  style="--flash-size:{flashSize};--spot-size:{spotSize};{color ? `--color:${color};` : ''}"
  class="flash-container {status}">
  <div class="flash" />
  <div class="spot" />
</div>
