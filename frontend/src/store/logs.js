import { fetch } from "./csrf";

const GET_ALL_LOGS = "get/All_logs"
const ADD_LOG = "add/log"
const DELETE_LOG = "delete/log"

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

export const addLog = (formData, partId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/parts/${partId}/logs/create`, {
            method: "POST",
            body: JSON.stringify({ formData })
        })
        dispatch(addLogAC(response.data.log))
    };
};

const deleteLogAC = (payload) => ({
    type: DELETE_LOG,
    payload
});

export const deleteLog = (logId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/parts/logs/${logId}/delete`, {
            method: "DELETE",
            body: JSON.stringify({ logId })
        });
        dispatch(deleteLogAC(response.data.log))
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

        case DELETE_LOG:
            newState = state.filter((log) => {
                const ret = log.id !== Number(action.payload.id)
                return ret    
            });

            return newState
        
        default:
            return state
    };
};

export default reducer