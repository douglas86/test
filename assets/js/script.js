import { bar } from "./components/bar-chart.js";
import { line } from "./components/line-chart.js";
import { pie } from "./components/pie-chart.js";

document.addEventListener("DOMContentLoaded", function () {
  bar();
  line();
  pie();
});
