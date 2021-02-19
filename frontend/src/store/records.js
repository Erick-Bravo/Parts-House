import { fetch } from "./csrf" 

const GET_ALL_RECORDS = "get/All_Records"
const ADD_RECORD = "create/Record";
const DELETE_RECORD = "delete/Record";



const fetchAllRecordsAC = (payload) => ({
    type: GET_ALL_RECORDS,
    payload
});

// This actually should be named fetchAllPartsHouseRecords or fetchPhRecords
export const fetchAllRecords = (partsHouseId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/parts-houses/${partsHouseId}/records`);
        // const data = await response.json();
        dispatch(fetchAllRecordsAC(response.data.records));
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
      
        dispatch(addRecordAC(response.data.record));
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
        });
        dispatch(deleteRecordAC(response.data.record));
    };
};






const reducer = (state = [], action) => {

    let newState;
    switch (action.type) {

        case GET_ALL_RECORDS:
            newState = action.payload
            return newState

        case ADD_RECORD:
            newState = [...state, action.payload]
            return newState

        case DELETE_RECORD:
            newState = state.filter((record) => {
                const ret = record.id !== Number(action.payload.id)
                return ret
            });
            return newState

        default:
            return state;
    };
};

export default reducer