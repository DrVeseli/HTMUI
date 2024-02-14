import { readParam } from "./state.js";

const textSizeMap = new Map([
  ["xs", 1],
  ["sm", 2],
  ["base", 3],
  ["lg", 4],
  ["xl", 5],
  ["2xl", 6],
  ["3xl", 7],
  ["4xl", 8],
  ["5xl", 9],
  ["6xl", 10],
  ["7xl", 11],
  ["8xl", 12],
  ["9xl", 12],
]);

export default function textSize(paramName) {
  var value = parseInt(readParam(paramName)); // Parse the parameter value to ensure it's a number
  const divElement = document.getElementById("ty"); // Select the div element
  const textElements = divElement.querySelectorAll("*");
  let i = 6; //variable for the differentiation of element sizes h1-3 and p

  // Loop through each element and modify the number based on the map
  textElements.forEach((element) => {
    // Get the class list of the current element
    const classes = Array.from(element.classList);

    // Iterate over each class of the element
    classes.forEach((className) => {
      // Check if the class matches the pattern "text-{value}"
      if (className.startsWith("text-")) {
        // Extract the value from the class name
        const oldValue = className.replace("text-", "");
        // Find the numeric value corresponding to the class in the textSizeMap
        const oldValueNumeric = textSizeMap.get(oldValue);
        if (oldValueNumeric !== undefined) {
          // Calculate the new numeric value after subtracting the parameter value
          const newValueNumeric = value + i;
          i = i - 2;
          console.log(i);
          // Look up the new text value in the textSizeMap
          const newTextValue = [...textSizeMap.entries()].find(
            ([key, val]) => val === newValueNumeric
          )?.[0];
          if (newTextValue) {
            // Remove the old class
            element.classList.remove(className);
            // Add the new class
            element.classList.add(`text-${newTextValue}`);
          }
        }
      }
    });
  });
}
