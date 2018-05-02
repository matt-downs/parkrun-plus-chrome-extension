import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import reducer from "./reducers"

import { testAction } from './actions'


const middleware = applyMiddleware(createLogger());


const store = createStore(reducer, middleware);
export default store;


const dummyAthlete_matt = {
    "athleteId": "2054291",
    "name": "Matt DOWNS",
    "totalRuns": 73,
    "recentRuns": [{
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "date": "14/04/2018",
        "genderPosition": 38,
        "overallPosition": 41,
        "time": "23:33",
        "ageGrade": "54.78%"
    }, {
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "date": "07/04/2018",
        "genderPosition": 63,
        "overallPosition": 87,
        "time": "29:07",
        "ageGrade": "44.30%"
    }, {
        "event": "Kelvin Grove parkrun",
        "eventUrl": "http://www.parkrun.com.au/kelvingrove/results",
        "date": "31/03/2018",
        "genderPosition": 79,
        "overallPosition": 105,
        "time": "26:20",
        "ageGrade": "48.99%"
    }, {
        "event": "St Lucia parkrun",
        "eventUrl": "http://www.parkrun.com.au/stlucia/results",
        "date": "24/03/2018",
        "genderPosition": 188,
        "overallPosition": 230,
        "time": "25:35",
        "ageGrade": "50.42%"
    }, {
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "date": "10/03/2018",
        "genderPosition": 81,
        "overallPosition": 113,
        "time": "28:32",
        "ageGrade": "45.21%"
    }, {
        "event": "Noosa parkrun",
        "eventUrl": "http://www.parkrun.com.au/noosa/results",
        "date": "20/01/2018",
        "genderPosition": 10,
        "overallPosition": 11,
        "time": "22:25",
        "ageGrade": "57.55%"
    }, {
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "date": "13/01/2018",
        "genderPosition": 55,
        "overallPosition": 75,
        "time": "28:07",
        "ageGrade": "45.88%"
    }, {
        "event": "South Bank parkrun",
        "eventUrl": "http://www.parkrun.com.au/southbank/results",
        "date": "25/12/2017",
        "genderPosition": 273,
        "overallPosition": 412,
        "time": "31:36",
        "ageGrade": "40.82%"
    }, {
        "event": "South Bank parkrun",
        "eventUrl": "http://www.parkrun.com.au/southbank/results",
        "date": "23/12/2017",
        "genderPosition": 61,
        "overallPosition": 70,
        "time": "24:25",
        "ageGrade": "52.83%"
    }, {
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "date": "02/12/2017",
        "genderPosition": 7,
        "overallPosition": 7,
        "time": "22:59",
        "ageGrade": "56.13%"
    }],
    "eventSummary": [{
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "count": 49,
        "bestGenderPosition": 2,
        "bestOverallPosition": 2,
        "bestTime": "00:20:20"
    }, {
        "event": "South Bank parkrun",
        "eventUrl": "http://www.parkrun.com.au/southbank/results",
        "count": 10,
        "bestGenderPosition": 22,
        "bestOverallPosition": 24,
        "bestTime": "00:20:47"
    }, {
        "event": "Mitchelton parkrun",
        "eventUrl": "http://www.parkrun.com.au/mitchelton/results",
        "count": 3,
        "bestGenderPosition": 10,
        "bestOverallPosition": 11,
        "bestTime": "00:20:12"
    }, {
        "event": "Kedron parkrun",
        "eventUrl": "http://www.parkrun.com.au/kedron/results",
        "count": 2,
        "bestGenderPosition": 29,
        "bestOverallPosition": 34,
        "bestTime": "00:21:58"
    }, {
        "event": "Chermside parkrun",
        "eventUrl": "http://www.parkrun.com.au/chermside/results",
        "count": 2,
        "bestGenderPosition": 7,
        "bestOverallPosition": 7,
        "bestTime": "00:20:46"
    }, {
        "event": "New Farm parkrun",
        "eventUrl": "http://www.parkrun.com.au/newfarm/results",
        "count": 1,
        "bestGenderPosition": 47,
        "bestOverallPosition": 50,
        "bestTime": "00:23:24"
    }, {
        "event": "Kelvin Grove parkrun",
        "eventUrl": "http://www.parkrun.com.au/kelvingrove/results",
        "count": 1,
        "bestGenderPosition": 79,
        "bestOverallPosition": 105,
        "bestTime": "00:26:20"
    }, {
        "event": "Town of Seaside parkrun",
        "eventUrl": "http://www.parkrun.com.au/townofseaside/results",
        "count": 1,
        "bestGenderPosition": 5,
        "bestOverallPosition": 7,
        "bestTime": "00:20:52"
    }, {
        "event": "St Lucia parkrun",
        "eventUrl": "http://www.parkrun.com.au/stlucia/results",
        "count": 1,
        "bestGenderPosition": 188,
        "bestOverallPosition": 230,
        "bestTime": "00:25:35"
    }, {
        "event": "Brightwater parkrun",
        "eventUrl": "http://www.parkrun.com.au/brightwater/results",
        "count": 1,
        "bestGenderPosition": 20,
        "bestOverallPosition": 24,
        "bestTime": "00:24:07"
    }, {
        "event": "Noosa parkrun",
        "eventUrl": "http://www.parkrun.com.au/noosa/results",
        "count": 1,
        "bestGenderPosition": 10,
        "bestOverallPosition": 11,
        "bestTime": "00:22:25"
    }, {
        "event": "Kawana parkrun",
        "eventUrl": "http://www.parkrun.com.au/kawana/results",
        "count": 1,
        "bestGenderPosition": 11,
        "bestOverallPosition": 13,
        "bestTime": "00:21:09"
    }],
    "volunteerSummary": [{
        "year": "2017",
        "role": "Photographer",
        "count": 1
    }, {
        "year": "2016",
        "role": "Finish Tokens",
        "count": 1
    }]
};

store.dispatch(testAction(dummyAthlete_matt));


const dummyAthlete_some = {
    "athleteId": "2054391",
    "name": "Some RANDOM",
    "totalRuns": 73,
    "recentRuns": [{
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "date": "14/04/2018",
        "genderPosition": 38,
        "overallPosition": 41,
        "time": "23:33",
        "ageGrade": "54.78%"
    }, {
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "date": "07/04/2018",
        "genderPosition": 63,
        "overallPosition": 87,
        "time": "29:07",
        "ageGrade": "44.30%"
    }, {
        "event": "Kelvin Grove parkrun",
        "eventUrl": "http://www.parkrun.com.au/kelvingrove/results",
        "date": "31/03/2018",
        "genderPosition": 79,
        "overallPosition": 105,
        "time": "26:20",
        "ageGrade": "48.99%"
    }, {
        "event": "St Lucia parkrun",
        "eventUrl": "http://www.parkrun.com.au/stlucia/results",
        "date": "24/03/2018",
        "genderPosition": 188,
        "overallPosition": 230,
        "time": "25:35",
        "ageGrade": "50.42%"
    }, {
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "date": "10/03/2018",
        "genderPosition": 81,
        "overallPosition": 113,
        "time": "28:32",
        "ageGrade": "45.21%"
    }, {
        "event": "Noosa parkrun",
        "eventUrl": "http://www.parkrun.com.au/noosa/results",
        "date": "20/01/2018",
        "genderPosition": 10,
        "overallPosition": 11,
        "time": "22:25",
        "ageGrade": "57.55%"
    }, {
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "date": "13/01/2018",
        "genderPosition": 55,
        "overallPosition": 75,
        "time": "28:07",
        "ageGrade": "45.88%"
    }, {
        "event": "South Bank parkrun",
        "eventUrl": "http://www.parkrun.com.au/southbank/results",
        "date": "25/12/2017",
        "genderPosition": 273,
        "overallPosition": 412,
        "time": "31:36",
        "ageGrade": "40.82%"
    }, {
        "event": "South Bank parkrun",
        "eventUrl": "http://www.parkrun.com.au/southbank/results",
        "date": "23/12/2017",
        "genderPosition": 61,
        "overallPosition": 70,
        "time": "24:25",
        "ageGrade": "52.83%"
    }, {
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "date": "02/12/2017",
        "genderPosition": 7,
        "overallPosition": 7,
        "time": "22:59",
        "ageGrade": "56.13%"
    }],
    "eventSummary": [{
        "event": "Ashgrove parkrun",
        "eventUrl": "http://www.parkrun.com.au/ashgrove/results",
        "count": 49,
        "bestGenderPosition": 2,
        "bestOverallPosition": 2,
        "bestTime": "00:20:20"
    }, {
        "event": "South Bank parkrun",
        "eventUrl": "http://www.parkrun.com.au/southbank/results",
        "count": 10,
        "bestGenderPosition": 22,
        "bestOverallPosition": 24,
        "bestTime": "00:20:47"
    }, {
        "event": "Mitchelton parkrun",
        "eventUrl": "http://www.parkrun.com.au/mitchelton/results",
        "count": 3,
        "bestGenderPosition": 10,
        "bestOverallPosition": 11,
        "bestTime": "00:20:12"
    }, {
        "event": "Kedron parkrun",
        "eventUrl": "http://www.parkrun.com.au/kedron/results",
        "count": 2,
        "bestGenderPosition": 29,
        "bestOverallPosition": 34,
        "bestTime": "00:21:58"
    }, {
        "event": "Chermside parkrun",
        "eventUrl": "http://www.parkrun.com.au/chermside/results",
        "count": 2,
        "bestGenderPosition": 7,
        "bestOverallPosition": 7,
        "bestTime": "00:20:46"
    }, {
        "event": "New Farm parkrun",
        "eventUrl": "http://www.parkrun.com.au/newfarm/results",
        "count": 1,
        "bestGenderPosition": 47,
        "bestOverallPosition": 50,
        "bestTime": "00:23:24"
    }, {
        "event": "Kelvin Grove parkrun",
        "eventUrl": "http://www.parkrun.com.au/kelvingrove/results",
        "count": 1,
        "bestGenderPosition": 79,
        "bestOverallPosition": 105,
        "bestTime": "00:26:20"
    }, {
        "event": "Town of Seaside parkrun",
        "eventUrl": "http://www.parkrun.com.au/townofseaside/results",
        "count": 1,
        "bestGenderPosition": 5,
        "bestOverallPosition": 7,
        "bestTime": "00:20:52"
    }, {
        "event": "St Lucia parkrun",
        "eventUrl": "http://www.parkrun.com.au/stlucia/results",
        "count": 1,
        "bestGenderPosition": 188,
        "bestOverallPosition": 230,
        "bestTime": "00:25:35"
    }, {
        "event": "Brightwater parkrun",
        "eventUrl": "http://www.parkrun.com.au/brightwater/results",
        "count": 1,
        "bestGenderPosition": 20,
        "bestOverallPosition": 24,
        "bestTime": "00:24:07"
    }, {
        "event": "Noosa parkrun",
        "eventUrl": "http://www.parkrun.com.au/noosa/results",
        "count": 1,
        "bestGenderPosition": 10,
        "bestOverallPosition": 11,
        "bestTime": "00:22:25"
    }, {
        "event": "Kawana parkrun",
        "eventUrl": "http://www.parkrun.com.au/kawana/results",
        "count": 1,
        "bestGenderPosition": 11,
        "bestOverallPosition": 13,
        "bestTime": "00:21:09"
    }],
    "volunteerSummary": [{
        "year": "2017",
        "role": "Photographer",
        "count": 1
    }, {
        "year": "2016",
        "role": "Finish Tokens",
        "count": 1
    }]
};

store.dispatch(testAction(dummyAthlete_some));