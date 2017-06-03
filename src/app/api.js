function get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {

            callback(xhr.responseText);
        }
    }
    xhr.send();
}


function getAthleteResults(athleteId) {
    return new Promise(function(resolve, reject) {
        var url = 'http://www.parkrun.com.au/results/athleteresultshistory/?athleteNumber=' +
            athleteId;
        get(url, function(res) {
            // Parse the response as HTML
            var html = $.parseHTML(res);
            // Locate the element with id="page"
            $.each(html, function(i, el) {
                if (el.id == 'page') {
                    // Find the athlete's name (first h2 element on the page)
                    var name = $($(el).find('h2')[0]).text();

                    // Locate the first table with id="results"
                    var results = $(el).find('#results')[0];
                    var parsedResults = parseResultsTable(results);

                    var athleteData = {
                        name: name,
                        athleteId: athleteId,
                        results: parsedResults
                    };
                    resolve(athleteData);
                    // console.log(athleteData);
                }
            });
        });
    });
}


// Extracts data from the results table found on the athlete results page
function parseResultsTable(results) {
    // Extract the body of the table
    var tbody = $(results).find('tbody')[0];
    // Extract the rows of the table
    var rows = $(tbody).find('tr');

    var parsedResults = [];

    $.each(rows, function(i, row) {
        parsedResults.push(parseResultsRow(row));
    });

    return parsedResults;
}


// Extracts data from each row of the results table found on the athlete results page
function parseResultsRow(row) {
    var columns = $(row).find('td');

    return {
        event: $(columns[0]).text(),
        date: $(columns[1]).text(),
        overallPosition: $(columns[3]).text(),
        time: $(columns[4]).text()
    };
}