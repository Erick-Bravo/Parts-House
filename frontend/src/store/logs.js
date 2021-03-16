import { fetch } from "./csrf";

const ADD_LOG = "add/log"

const addLogAC = (payload) => ({
    type: ADD_LOG,
    payload
});

export const addLog = (formData) => {
    return async (dispatch) => {
        const response = await fetch(`/api/parts/${partsId}/logs/create`, {
            method: "POST",
                body: JSON.stringify({ formData })
        })
        dispatch(addLogAC(response.data.log))
    };
};


const reducer = (state = [], action) => {
    let newState;

    switch (action.type) {

        case ADD_LOG:
            newState = [...state, action.payload]
            return newState
        
        default:
            return state
    };
};

export default reducer