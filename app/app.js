var sampleFollowing = [
    '2054291', // Me
    '1830855', // Frances
    '1910204', // Andrew
    '655632' // Emilie
];


var queue = [];
var doneCount = 0;


// Updates the total load progress of the queue, called after each queue item has been loaded
function updateProgress(count) {
    data.loadProgress = (count + 1) / queue.length * 100;
}


// Add each athlete to the download queue
$.each(sampleFollowing, function(i, el) {
    queue.push(getAthleteResults(el).then(function(val) {
        updateProgress(doneCount++);
        return val;
    }));
});


// Load all data in the queue
Promise.all(queue)
    .then(function(results) {
        sortResults(results);
    });


// Sort the data once all the items in the queue have finished loading
function sortResults(athletes) {
    // Index all the results by their date
    var dateIndex = {};
    $.each(athletes, function(i, athlete) {
        $.each(athlete.results, function(i, result) {
            result.name = athlete.name;
            var date = result.date;
            delete result.date;
            if (!dateIndex[date]) dateIndex[date] = [result];
            else dateIndex[date].push(result);
        });
    });

    var days = [];
    $.each(dateIndex, function(date, results) {
        days.push({
            date: moment(date, 'DD-MM-YYYY').valueOf(),
            results: results
        });
    });

    // Sort by the date in ascending order
    days.sort(function(a, b) {
        return b.date - a.date;
    });

    // Sort the results for each day in decending order
    $.each(days, function(i, day) {
        day.results.sort(function(a, b) {
            // Convert both result times to seconds for comparison
            return convertResultTimeToSeconds(a.time) - convertResultTimeToSeconds(
                b.time);
        })
    });

    data.days = days;
    data.doneLoading = true;
}


function convertResultTimeToSeconds(resultTime) {
    var spl = resultTime.split(':');
    return parseInt(spl[0]) * 60 + parseInt(spl[1]);
}


var data = {
    days: [],
    loadProgress: 0,
    doneLoading: false
};


// Initialise the app
var app = new Vue({
    el: '#app',
    data: data
})