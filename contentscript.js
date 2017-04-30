console.log('content script loaded');

var test = document.createElement('div');
test.innerText = 'test';
var body = document.body.insertBefore(test, null);






// TODO gracefully fail if the elements can't be found (if parkrun changes their markup)
var content = document.getElementById('content');
// Grab a reference to the first paragraph (located under the main page heading)
var firstParagraph = content.getElementsByTagName('p')[0];

// Create the follow button
var followButton = document.createElement('button');
followButton.setAttribute('type', 'button');
followButton.innerText = 'Loading...';

// Inject the follow button to the page
content.insertBefore(followButton, firstParagraph);

// 
chrome.runtime.sendMessage({
    type: 'followQuery'
}, function (response) {
    updateFollowingButton(response.following);
});


function updateFollowingButton(following) {
    if (following) {
        followButton.innerText = 'Unfollow';
        followButton.removeEventListener('click', followAthlete);
        followButton.addEventListener('click', unfollowAthlete);
    } else {
        followButton.innerText = 'Follow';
        followButton.removeEventListener('click', unfollowAthlete);
        followButton.addEventListener('click', followAthlete);
    }
}


function followAthlete() {
    console.log('follow');
    chrome.runtime.sendMessage({
        type: 'follow'
    }, function (response) {
        console.log(response);
        updateFollowingButton(response.following);
    });
}

function unfollowAthlete() {
    console.log('unfollow');
    chrome.runtime.sendMessage({
        type: 'unfollow'
    }, function (response) {
        console.log(response);
        updateFollowingButton(response.following);
    });
}