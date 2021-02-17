import { fetch } from "./csrf"

const GET_PARTS = "get/Parts"

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