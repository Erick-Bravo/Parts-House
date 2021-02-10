const GET_USER_RECORD = "record/with parts"

const setUserRecord = (userRecord) => ({
    type: GET_USER_RECORD,
    userRecord
});

export const fetchUserRecord = (recordId) => {
    return async(dispatch) => {
        const response = await fetch(`/api/records/${recordId}`);
        const data = await response.json();
        dispatch(
            setUserRecord(data.records)
        );
    };
};

const initialState = [];

const reducer = (state = initialState, action) => {

    let newState;
    switch (action.type) {

        case GET_USER_RECORD:
            newState = action.userRecord
            return newState
        default:
            return state;
    };
};

export default reducer