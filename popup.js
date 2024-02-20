const site = "stake.com";
const host = window.location.hostname;

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("modifyDOMButton")
    .addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "modifyDOM" });
      });
    });
});
