// Open the app page when the browser icon is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 'url': chrome.extension.getURL('app/app.html'), 'active': true });
});


// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.type) {
        case 'followQuery':
            processFollowQuery(sender.tab.url, function(res) {
                sendResponse(res);
            });
            return true; // Indicate that the sendResponse is async
        case 'follow':
            processFollow(sender.tab.url, function(res) {
                sendResponse(res);
            });
            return true;
        case 'unfollow':
            processUnfollow(sender.tab.url, function(res) {
                sendResponse(res);
            });
            return true;
        default:
            console.log('Unknown message');
    }
});


// Queries whether a athlete is followed using their athlete page URL
function processFollowQuery(url, callback) {
    var athleteId = getParameterByName(url, 'athleteNumber');

    getFollowingFromStorage(function(following) {
        var isFollowing = false;
        for (var i = 0; i < following.length; i++) {
            if (following[i] == athleteId) {
                isFollowing = true;
                break;
            }
        }

        callback({ following: isFollowing });
    });
}


// Follow an athlete using their athlete page URL
function processFollow(url, callback) {
    var athleteId = getParameterByName(url, 'athleteNumber');

    getFollowingFromStorage(function(following) {
        // Check if already following
        var alreadyFollowing = false;
        for (var i = 0; i < following.length; i++) {
            if (following[i] == athleteId) {
                alreadyFollowing = true;
                break;
            }
        }

        if (!alreadyFollowing) {
            following.push(athleteId);
            saveFollowingToStorage(following);
        }

        callback({ following: true });
    });
}


// Unfollow an athlete using their athlete page URL
function processUnfollow(url, callback) {
    var athleteId = getParameterByName(url, 'athleteNumber');

    getFollowingFromStorage(function(following) {
        for (var i = 0; i < following.length; i++) {
            if (following[i] == athleteId) {
                following.splice(i, 1);
                break;
            }
        }

        saveFollowingToStorage(following);
        callback({ following: false });
    });
}


// Grabs the specified query string from a url.
// Used for extracting the athleteNumber from their page URL.
// Adapted from http://stackoverflow.com/a/901144
function getParameterByName(url, name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


// Get following array from Chrome storage
function getFollowingFromStorage(callback) {
    chrome.storage.sync.get('following', function(res) {
        // If value returned from storage is undefined or isn't an array, return an empty array
        if (!res.following || res.following.constructor !== Array) res.following = [];
        callback(res.following);
    });
}


// Save following array to chrome storage
function saveFollowingToStorage(following) {
    // Only save the data if it is a valid array
    if (following.constructor !== Array) return console.log('Error saving data');
    console.log(following);
    chrome.storage.sync.set({ 'following': following });
}