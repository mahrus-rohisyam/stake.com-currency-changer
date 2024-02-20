function modifyDOM() {
  const elements = document.querySelectorAll(".svelte-1d6bfct");

  elements.forEach((element) => {
    element.textContent = element.textContent.replace(/RUB/g, "$");
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "modifyDOM") {
    modifyDOM();
  }
});
