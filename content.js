
const downloadButtonBase64 = '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';

// Listen for messages from background.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "addDownloadButtons") {

        console.log("Adding download buttons");
        const divElements = document.querySelectorAll('div._aagv');
        removeDownloadButtons()
        
        // Loop through each div element
        for (const div of divElements) {

            const imgElement = div.querySelector('img');

            const downloadBtn = document.createElement('div');
            downloadBtn.className = 'download-btn';
            downloadBtn.style.backgroundImage = `url(data:image/png;base64,${downloadButtonBase64})`;

            // Function to set tooltip content with image dimensions
            async function setImageDimensions() {
                try {
                    const { width, height } = await getImageDimensions(imgElement.src);
                    console.log('Retrieved image dimensions:', width, height);
                    downloadBtn.setAttribute('data-tooltip', `Download (${width}x${height} px)`);
                } catch (error) {
                    console.error('Error loading image dimensions:', error);
                    downloadBtn.setAttribute('data-tooltip', 'Download'); // Set default tooltip if image dimensions cannot be fetched
                }
            }

            // If an img element is found, set up the click event to download the image when the button is clicked
            if (imgElement) {
                downloadBtn.addEventListener('click', () => {
                    downloadImage(imgElement.src);
                });
                setImageDimensions();
                div.appendChild(downloadBtn);
            }
        }
        return true;
    } else if (message.action === "removeDownloadButtons") {
        removeDownloadButtons();
        return true;
    }
});

// Function to remove download buttons
function removeDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    console.log("Removing download buttons");
    for (const downloadButton of downloadButtons) {
        downloadButton.remove();
    }
}

// Function to get image dimensions
function getImageDimensions(imageUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve({ width: img.width, height: img.height });
        };
        img.onerror = () => {
            reject(new Error('Failed to load image'));
        };
        img.src = imageUrl;
    });
}

function getFileName() {

    // Get usename
    const userName = document.querySelector("._aaqw .xt0psk2").textContent;
    console.log(userName);

    // Get dt
    const datetimeValue = document.querySelector("._aacl._aaco._aacu._aacx._aad6._aade._aaqb ._aaqe")?.getAttribute("datetime");

    let formattedDatetime = '';
    if (datetimeValue) {
        const parsedDatetime = new Date(datetimeValue);
        const year = parsedDatetime.getUTCFullYear().toString().slice(-2).padStart(2, '0');
        const month = (parsedDatetime.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = parsedDatetime.getUTCDate().toString().padStart(2, '0');
        const hours = parsedDatetime.getUTCHours().toString().padStart(2, '0');
        const minutes = parsedDatetime.getUTCMinutes().toString().padStart(2, '0');

        formattedDatetime = `${year}${month}${day}-${hours}${minutes}`;
        console.log(formattedDatetime);
    }

    // Get current tab
    function getCurrTab() {
        var tabs = document.querySelector("._aamj._acvz._acnc._acng");
        if (!tabs) return 0;
        var tabElements = tabs.querySelectorAll("._acnb");
        for (var i = 0; i < tabElements.length; i++) {
            if (tabElements[i].classList.contains("_acnf")) {
                return i;
            }
        }
        return 0;
    }
    var currTab = getCurrTab();

    return `${userName}-${formattedDatetime}-${currTab}.jpg`;
}

// Function to convert image URL to Blob and initiate download
function downloadImage(imageUrl) {
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            // Create an anchor element to trigger the download
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = getFileName();
            link.click();

            // Clean up the URL.createObjectURL to free up resources
            URL.revokeObjectURL(link.href);
        })
        .catch(error => console.error('Error downloading image:', error));
}


// Inject the CSS styles into the head of the document
const styleElement = document.createElement('style');
styleElement.textContent = `
    ._aagv {
      position: relative;
    }
  
    .download-btn {
      position: absolute;
      top: 10px; /* You can adjust this value to position the button vertically */
      left: 10px; /* You can adjust this value to position the button horizontally */
      width: 30px; /* Set the width of the download button */
      height: 30px; /* Set the height of the download button */
      z-index: 1; /* Ensure the button appears on top of the image */
      cursor: pointer; /* Show pointer cursor on the download button */
  
      /* Resize the background image to fit within the div */
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
  
      /* Make the download button slightly transparent */
      opacity: 0.7;
    }
  
    /* Tooltip to show "Download (widthxheight)" */
    .download-btn::after {
      content: attr(data-tooltip); /* Set tooltip content to the value of data-tooltip attribute */
      position: absolute;
      top: 50%; /* Adjust the tooltip's vertical position */
      left: 75%; /* Adjust the tooltip's horizontal position */
      transform: translate(10%, -50%);
      padding: 5px 10px;
      background-color: rgba(0, 0, 0, 1); /* Background color of the tooltip */
      color: #fff; /* Text color of the tooltip */
      border-radius: 4px;
      font-size: 14px;
      pointer-events: none; /* Ensure the tooltip does not intercept clicks */
      white-space: nowrap; /* Prevent line breaks in the tooltip text */
      display: none; /* Hide the tooltip by default */
    }

    /* Show the tooltip when hovering over the download button */
    .download-btn:hover::after {
      display: block;
    }
  `;
document.head.appendChild(styleElement);
