<script>
  import Button from "../button.svelte";
  export let buttonText;
</script>

<Button on:click>{buttonText}</Button>
