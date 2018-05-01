// Open the app page when the browser icon is clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        'url': chrome.extension.getURL('index.html'),
        'active': true
    });
});