/* eslint-disable no-undef */
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: chrome.runtime.getURL('./index.html'),
  });
});