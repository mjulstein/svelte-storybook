import Chart from "../chart";

export default { title: "Chart" };

export const dunno = () => ({
  Component: Chart,
  props: {
    id: "ct-chart",
    aspect: "ct-perfect-fourth",
    data: {
      // A labels array that can contain any sort of values
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      // Our series array that contains series objects or in this case series data arrays
      series: [[5, 2, 4, 2, 0], [5, 2, 4, 2, 0].reverse()],
    },
  },
});
