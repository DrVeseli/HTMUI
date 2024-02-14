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

export { readParam, writeParam };
