const GET_USER_PARTSHOUSES = "partshouse";

const setUserPartsHouses = (userPartsHouses) => ({
    type: GET_USER_PARTSHOUSES,
    userPartsHouses
});

export const fetchUserPartsHouses = (userId) => {
    return async(dispatch) => {
        const response = await fetch(`/api/users/${userId}/partshouses`);
        const data = await response.json();
        dispatch(
            setUserPartsHouses(data.partshouses)
        );
    };
};

const initialState = [];

const reducer = (state = initialState, action) => {

    let newState;

    switch (action.type) {
        
        case GET_USER_PARTSHOUSES:
            newState = action.userPartsHouses
            return newState

        default:
            return state
    };
};

export default reducer