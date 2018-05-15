import { followAthlete } from '../shim';


// Got athlete data from web source
export const fetchedAthleteData = (athlete) => ({
  type: 'FETCHED_ATHLETE_DATA',
  athlete
});


// Loaded list of athletes from browser storage
export const loadedAthletes = (athlete) => ({
  type: 'LOADED_ATHLETE',
  athlete
});


// Follow a new athlete
export const followAthleteAction = (athleteId) => ({
  type: 'ADD_ATHLETE',
  payload: followAthlete(athleteId)
});
