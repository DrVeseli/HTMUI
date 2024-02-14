import { writeParam, readParam, magic } from "./state.js";

const rstxS = document.getElementById("rs-textSize");
rstxS.addEventListener("input", () => {
  writeParam("textSize", rstxS.value);
  console.log("textSize set to", rstxS.value);
  magic("textSize");
});
