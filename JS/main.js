import { writeParam } from "./state.js";
import textSize from "./text.js";

document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  console.log("Page loaded");
  // Call the function you want to trigger on load
  textSize("textSize");
});

const rstxS = document.getElementById("rs-textSize");
rstxS.addEventListener("input", () => {
  writeParam("textSize", rstxS.value);
  console.log("textSize set to", rstxS.value);
  textSize("textSize");
});
