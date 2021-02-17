import { fetch } from "./csrf"

const GET_ALL_PARTS = "get/All_Parts"

const setAllRecPartsAC = (payload) => ({
    type: GET_ALL_PARTS,
    payload
});

export const fetchAllRecParts = (recordId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/records/${recordId}/parts`);

        dispatch(setAllRecPartsAC(response.data.parts));
    };
};




const reducer = (state = [], action) => {
    let newState;

    switch (action.type) {

        case GET_ALL_PARTS:
            newState = action.payload
            return newState

        default:
            return state
    };
};

export default reducer