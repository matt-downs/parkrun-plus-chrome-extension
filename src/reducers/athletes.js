const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCHED_ATHLETE_DATA": {
            let newState =  { ...state };
            newState[action.athlete.athleteId] = action.athlete;
            return newState;
        }

        default: return { ...state };
    }
}