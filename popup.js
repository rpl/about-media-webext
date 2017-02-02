window.onload = () => {
  const preEl = document.querySelector("pre");

  browser.tabs.executeScript({file: "extract-media-info.js"}).then(results => {
    preEl.innerText = JSON.stringify(results, null, 2);
  }).catch(err => {
    preEl.innerText = err.message;
  });
}
