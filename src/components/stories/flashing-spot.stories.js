import FlashingSpot from "../flashing-spot.svelte";

export default { title: "Flashing Spot", argTypes:{
  status: {
    description:'Color mode',
     options:['ok','notice','warning','error','critical','custom'] },
  color: {
    name: "Custom color",
    description:'Custom CSS color'
    },
    spotSize: {
      name: "Center spot max diameter",
      description:'Custom CSS color'
    },
    flash: {
      name: "Flash multiplier",
      description:'Custom CSS color'
      },
} };


export const view = (args) => ({
  Component: FlashingSpot,
  props: {
    ...args
  },
});
view.args={
  status: 'error',
  color: '',
  spotSize: '20px',
  flash: 3.1,
}