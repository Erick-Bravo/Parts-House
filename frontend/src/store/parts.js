import { fetch } from "./csrf"

const GET_PARTS = "get/Parts"

const setParts = (payload) => ({
    type: GET_PARTS,
    payload
});

export const fetchParts = (partId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/parts/${partId}`)

        dispatch(
            setParts(response.data.part)
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