import { fetch } from "./csrf";

const GET_ALL_LOGS = "get/All_logs"
const ADD_LOG = "add/log"

const setAllLogsAC = (payload) => ({
    type: GET_ALL_LOGS,
    payload
});

export const fetchAllLogs = (partId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/parts/${partId}/logs`);
        dispatch(setAllLogsAC(response.data.logs))
    };
};

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

        case GET_ALL_LOGS:
            newState = action.payload
            return newState

        case ADD_LOG:
            newState = [...state, action.payload]
            return newState
        
        default:
            return state
    };
};

export default reducer