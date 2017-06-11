var queue = [];
var doneCount = 0;


chrome.storage.sync.get('following', function(res) {
    // If value returned from storage is undefined or isn't an array, return an empty array
    if (!res.following || !res.following.au) res.following.au = [];
    loadResults(res.following.au);
});


// Loads parkrun website results from athleteNumbers in athletes array
function loadResults(athletes) {
    queue = [];
    doneCount = 0;

    // Add each athlete to the download queue
    $.each(athletes, function(i, el) {
        queue.push(getAthleteResults(el)
            .then(function(val) {
                updateQueueProgress(doneCount++);
                return val;
            }));
    });


    // Load all data in the queue
    Promise.all(queue)
        .then(function(results) {
            sortResults(results);
        });
}

// loadResults(sampleFollowing);


// Updates the total load progress of the queue, called after each queue item has been loaded
function updateQueueProgress(count) {
    data.loadProgress = (count + 1) / queue.length * 100;
}


// Sort the data once all the items in the queue have finished loading
function sortResults(athletes) {

    // Index all the results by their date
    var dateIndex = {};
    $.each(athletes, function(i, athlete) {
        $.each(athlete.results, function(i, result) {
            result.name = athlete.name;
            result.athleteId = athlete.athleteId;
            var date = result.date;
            delete result.date;
            if (!dateIndex[date]) dateIndex[date] = [result];
            else dateIndex[date].push(result);
        });
    });

    var days = [];
    $.each(dateIndex, function(date, results) {
        days.push({
            // Convert the date into unix time for easy sorting
            date: moment(date, 'DD-MM-YYYY').valueOf(),
            results: results
        });
    });

    // Sort by the date in ascending order
    days.sort(function(a, b) {
        return b.date - a.date;
    });

    // Show only the latest 10 days
    if (days.length > 10) {
        days.splice(10, days.length - 10);
    }


    // Sort the results for each day in decending order
    $.each(days, function(i, day) {
        day.results.sort(function(a, b) {
            // Convert both result times to seconds for comparison
            return convertResultTimeToSeconds(a.time) - convertResultTimeToSeconds(
                b.time);
        })
    });

    data.athletes = athletes;
    data.days = days;
    data.doneLoading = true;
}


function convertResultTimeToSeconds(resultTime) {
    var spl = resultTime.split(':');
    return parseInt(spl[0]) * 60 + parseInt(spl[1]);
}


var data = {
    days: [],
    athletes: [],
    loadProgress: 0,
    doneLoading: false
};

Vue.use(VueMaterial);

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'lime',
      hue: 400
    },
    accent: 'blue'
  }
});

// Initialise the app
var app = new Vue({
    el: '#app',
    data: data
});