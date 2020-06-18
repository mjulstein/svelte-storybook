<script>
  import Chartist from "chartist";
  import { onMount } from "svelte";
  let mounted = false;
  export let id = "ct-chart";
  export let aspect = "ct-perfect-fourth";
  export let data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    series: [[5, 2, 4, 2, 0], [5, 2, 4, 2, 0].reverse()],
  };
  const classes = `${id} ${aspect}`;
  onMount(() => (mounted = true));
  $: if (mounted) {
    new Chartist.Line(`.${id}`, data);
  }
</script>

<div class={classes} />
