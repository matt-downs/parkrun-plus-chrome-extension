var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.parkrun.com.au/results/athleteresultshistory/?athleteNumber=2054291",
    true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {

        var html = $.parseHTML(xhr.responseText);
        // Locate the element with id="page"
        $.each(html, function(i, el) {
            if (el.id == 'page') {
                // Locate the first table with id="results"
                var results = $(el).find('#results')[0];
                parseResultsTable(results);
            }
        });
    }
}
xhr.send();


function parseResultsTable(results) {
    // Extract the body of the table
    var tbody = $(results).find('tbody')[0];
    // Extract the rows of the table
    var rows = $(tbody).find('tr');

    $.each(rows, function(i, row) {
        parseResultsRow(row);
    });
}


function parseResultsRow(row) {
    var columns = $(row).find('td');

    var event = $(columns[0]).text();
    var date = $(columns[1]).text();
    var overallPosition = $(columns[3]).text();
    var time = $(columns[4]).text();

    console.log(event + ' ' + date + ' ' + overallPosition + ' ' + time);
}