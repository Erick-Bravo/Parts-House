import { fetch } from "./csrf" 

const GET_USER_RECORD = "get/Records";
const ADD_RECORD = "create/Record";
const DELETE_RECORD = "delete/Record";

const setUserRecord = (userRecord) => ({
    type: GET_USER_RECORD,
    userRecord
});

export const fetchUserRecord = (recordId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/records/${recordId}`);
        // const data = await response.json();
        dispatch(
            setUserRecord(response.data.records)
        );
    };
};

const addRecordAC = (payload) => ({
    type: ADD_RECORD,
    payload
});

export const addRecord = (formData) => {
    return async (dispatch) => {
        const response = await fetch(`/api/records/create`, {
            method: "POST",
            body: JSON.stringify({formData})
        });
      
        dispatch(addRecordAC(response.data.payload));
    };
};

const deleteRecordAC = (payload) => ({
    type: DELETE_RECORD,
    payload
});

export const deleteRecord = (recordId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/records/${recordId}/delete`, {
            method: "DELETE",
            body: JSON.stringify({ recordId }),
        })
        dispatch(deleteRecordAC(response.data.record))
    };
};


const reducer = (state = [], action) => {

    let newState;
    switch (action.type) {

        case GET_USER_RECORD:
            newState = action.userRecord
            return newState

        case ADD_RECORD:
            newState = [...state, action.payload]
            return newState

        case DELETE_RECORD:
            newState = state.filter(record => {
                const ret = record.id !== Number(action.payload.id)
                return ret
            });
            return newState

        default:
            return state;
    };
};

export default reducer