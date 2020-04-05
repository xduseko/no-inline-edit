const script = document.createElement("script");
script.src = chrome.runtime.getURL("page.js");
document.documentElement.appendChild(script);
