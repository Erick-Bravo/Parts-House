import { fetch } from "./csrf"

const GET_USER_PARTSHOUSES = "get/partshouse";
const ADD_PARTSHOUSE = "add/partshouse";
const UPDATE_PARTSHOUSE = "update/partshouse";
const DELETE_PARTSHOUSE = "delete/partshouse";


const setUserPartsHouses = (payload) => ({
    type: GET_USER_PARTSHOUSES,
    payload
});

export const fetchUserPartsHouses = (userId) => {
    return async (dispatch) => {
        const response = await fetch(`/api/users/${userId}/partshouses`);
        // const data = await response.json();

        dispatch(
            setUserPartsHouses(response.data.partshouses)
        );
    };
};

const addPartsHouseAC = (payload) => ({
    type: ADD_PARTSHOUSE,
    payload
});

export const addPartsHouse = (name, userId) => {
    return async (dispatch) => {

        const response = await fetch("/api/parts-houses/create", {
            method: "POST",
            body: JSON.stringify({ name, userId })
        });
        dispatch(addPartsHouseAC(response.data.ph))
    };
};


const updatePartsHouseAC = (payload) => ({
    type: UPDATE_PARTSHOUSE,
    payload
});

export const updatePartsHouse = (name, partsHouseId) => {
    return async (dispatch) => {

        const response = await fetch(`api/parts-house/${partsHouseId}/update`, {
            method: "POST",
            body: JSON.stringify({ name })
        });
        dispatch(updatePartsHouseAC(response.data.ph))
    };
};



const deletePartsHouseAC = (payload) => ({
    type: DELETE_PARTSHOUSE,
    payload
});

export const deletePartsHouse = (partsHouseId) => {
    return async (dispatch) => {
        let response = await fetch(`/api/parts-houses/${partsHouseId}/delete`, {

            method: "DELETE",
            body: JSON.stringify({ partsHouseId }),
        })
        // const data = await response.json()
        dispatch(deletePartsHouseAC(response.data.ph));
    };
};


const reducer = (state = [], action) => {

    let newState;

    switch (action.type) {

        case GET_USER_PARTSHOUSES:
            newState = action.payload
            return newState

        case ADD_PARTSHOUSE:
            newState = [...state, action.payload]
            return newState

        case UPDATE_PARTSHOUSE:
            newState = state.filter((ph) => {
                const ret = ph.id !== Number(action.payload.id)
                return ret
            })
            upDatedState = [...newState, action.payload]

            return upDatedState

        case DELETE_PARTSHOUSE:
            newState = state.filter((ph) => {
                const ret = ph.id !== Number(action.payload.id)
                return ret
            });
            return newState

        default:
            return state
    };
};

export default reducer