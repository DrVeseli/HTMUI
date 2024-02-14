//Generic function for writing parameters to the URL
function writeParam(paramName, paramValue) {
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.set(paramName, paramValue);
  const newUrl = currentUrl.toString();
  history.pushState({}, "", newUrl);
}

// Function to read a parameter from the URL
function readParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

function magic(paramName) {
  var value = readParam(paramName);
  const divElement = document.getElementById("ty"); // Select the div element

  // Find all elements with classes starting with "text-" followed by a number and "xl"
  const textElements = divElement.querySelectorAll(".text-[0-9]xl");

  // Loop through each element and modify the number in the class
  textElements.forEach((element) => {
    // Extract the current number using regular expression
    const currentNumber = element.className.match(/\d+/)[0];

    // Modify the number (replace with your desired logic)
    const newNumber = Number(currentNumber) + value; // Increase by 1 for example

    // Update the class name with the new number
    element.className = element.className.replace(/\d+xl/, `${newNumber}xl`);
  });
}

export { magic, readParam, writeParam };
