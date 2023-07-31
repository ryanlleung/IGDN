
let urlChangeTimer;
const intervalDuration = 2500; // 2.5 seconds

// Function to handle URL changes
function handleUrlUpdate(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        const newUrl = changeInfo.url;
        resetTimer();
        console.log("URL changed:", newUrl);
        requestAddDownloadButtons();
    }
}

// Add listener to URL changes
chrome.tabs.onUpdated.addListener(handleUrlUpdate);

// Functions to start and reset timer
function startTimer() {
    urlChangeTimer = setInterval(requestAddDownloadButtons, intervalDuration);
}
function resetTimer() {
    clearInterval(urlChangeTimer);
    startTimer();
}
startTimer();

let toggleState = false;
// Listen for messages from popup.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "toggle") {
        console.log("Toggle message received");
        toggleState = message.state;
    }
});

// Function called when URL changes or when 2500ms have passed after URL change
function requestAddDownloadButtons() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTabId = tabs[0].id;
        if (toggleState) {
            chrome.tabs.sendMessage(activeTabId, { action: "addDownloadButtons" });
        } else {
            chrome.tabs.sendMessage(activeTabId, { action: "removeDownloadButtons" });
        }
    });
}
