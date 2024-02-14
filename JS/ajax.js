function swapElement(elementId, url) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = () => {
    if (xhr.status === 200) {
      element.innerHTML = xhr.responseText;
    } else {
      console.error("Error fetching content:", xhr.statusText);
    }
  };

  xhr.send();
}
