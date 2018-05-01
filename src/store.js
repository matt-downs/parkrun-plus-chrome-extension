import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import reducer from "./reducers"

import { testAction } from './actions'


const middleware = applyMiddleware(createLogger());


const store = createStore(reducer, middleware);
export default store;


const dummyAthlete = {
  athleteId: '2054291',
  name: 'Matt DOWNS',
  totalRuns: 73,
  recentRuns: [{
      event: 'Ashgrove parkrun',
      eventUrl: 'http://www.parkrun.com.au/ashgrove/results',
      date: '14/04/2018',
      genderPosition: 38,
      overallPosition: 41,
      time: '23:33',
      ageGrade: '54.78%'
  }],
  eventSummary: [{
      event: 'Ashgrove parkrun',
      eventUrl: 'http://www.parkrun.com.au/ashgrove/results',
      count: 49,
      bestGenderPosition: 2,
      bestOverallPosition: 2,
      bestTime: '00:20:20'
  }],
  volunteerSummary: [{
      year: '2017',
      role: 'Photographer',
      count: 1
  }]
};

store.dispatch(testAction(dummyAthlete));
