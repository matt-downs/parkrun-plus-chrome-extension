const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GOT_ATHLETE": {
            let newState =  { ...state };
            newState[action.athlete.athleteId] = action.athlete;
            return newState;
        }

        default: return { ...state };
    }
}