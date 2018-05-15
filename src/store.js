import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reducer from "./reducers"
import { fetchedAthleteData, followAthleteAction } from './actions'
import { getAthlete, getAthletesFollowing } from './shim';


const middleware = applyMiddleware(createLogger());


const store = createStore(reducer, middleware);
export default store;


// Load athletes
const loadInitialData = async () => {
     try {
        let athletesFollowing = getAthletesFollowing();
        let downloadQueue = [];

        for (let athleteId of await athletesFollowing) {
            downloadQueue.push(
                getAthlete(athleteId)
                    .then((athlete) => {
                        store.dispatch(fetchedAthleteData(athlete));
                    })
            );
        }

        Promise.all(downloadQueue)
            .then(() => {
                console.log('done');
            });

     } catch (error) {
         console.log(error)
     }
}


loadInitialData();
