import { fetch } from "./csrf"

const GET_ALL_PARTS = "get/All_Parts"
const GET_PARTS = "get/Parts"

const setAllRecPartsAC = (payload) => ({
    type: GET_ALL_PARTS,
    payload
});

export const fetchAllRecParts = (recordId) => {
    return async (dispatch) => {
        const response = await fetch(`api/records/${recordId}/parts`)
    };
};


const setPart = (payload) => ({
    type: GET_PARTS,
    payload
});

export const fetchPart = (partId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/parts/${partId}`)

        dispatch(
            setPart(response.data.part)
        );
    };
};



const reducer = (state = [], action) => {
    let newState;

    switch (action.type) {
        case GET_PARTS:
            newState = action.payload
            return newState

        default:
            return state
    };
};

export default reducer