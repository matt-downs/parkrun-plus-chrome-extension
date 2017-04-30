var following = ['2054291'];

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 'url': chrome.extension.getURL('app/app.html'), 'active': true });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.type) {
        case 'followQuery':
            sendResponse(processFollowQuery(sender.tab.url));
            break;
        case 'follow':
            sendResponse(processFollow(sender.tab.url));
            break;
        case 'unfollow':
            sendResponse(processUnfollow(sender.tab.url));
            break;
        default:
            console.log('Unknown message');
    }
});


function processFollowQuery(url) {
    var athleteId = getParameterByName(url, 'athleteNumber');

    var isFollowing = false;
    for (var i = 0; i < following.length; i++) {
        if (following[i] == athleteId) {
            isFollowing = true;
            break;
        }
    }

    return {
        following: isFollowing
    };
}


function processFollow(url) {
    var athleteId = getParameterByName(url, 'athleteNumber');
    // TODO check for duplicates
    following.push(athleteId);
    return {
        following: true
    };
}


function processUnfollow(url) {
    var athleteId = getParameterByName(url, 'athleteNumber');

    for (var i = 0; i < following.length; i++) {
        if (following[i] == athleteId) {
            following.splice(i, 1);
            break;
        }
    }

    return {
        following: false
    };
}


// Adapted from http://stackoverflow.com/a/901144
function getParameterByName(url, name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}