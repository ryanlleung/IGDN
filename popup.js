
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleSwitch");

    // Check the initial state of the toggle switch based on previous state in localStorage
    const savedState = localStorage.getItem("toggleState");
    if (savedState !== null) {
        toggleSwitch.checked = JSON.parse(savedState);
    } else {
        // If no previous state found, set the default state to "false" (unchecked)
        toggleSwitch.checked = false;
    }

    toggleSwitch.addEventListener("change", function () {
        // Save the current state of the toggle switch to the localStorage
        localStorage.setItem("toggleState", toggleSwitch.checked);

        // Send a message to the background script with the current state
        chrome.runtime.sendMessage({ action: "toggle", state: toggleSwitch.checked });
    });
});