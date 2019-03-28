const initialState = {
    selectedID: 0,
    tasks : [
        {"id": 1, "name": "Test 1", "owner": "Gerdes"},
        {"id": 2, "name": "Test 2", "owner": "Mueller"},
        {"id": 3, "name": "Test 3", "owner": "Hoffmann"},
        {"id": 4, "name": "Test 4", "owner": "Ballermann"},
        {"id": 5, "name": "Test 4", "owner": "Ballermann"},
        {"id": 6, "name": "Test 4", "owner": "Ballermann"},
        {"id": 7, "name": "Test 4", "owner": "Ballermann"},
        {"id": 8, "name": "Test 4", "owner": "Ballermann"},
        {"id": 9, "name": "Test 4", "owner": "Ballermann"},
        {"id": 10, "name": "Test 4", "owner": "Ballermann"},
        {"id": 11, "name": "Test 4", "owner": "Letzter Eintrag"},

    ]
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "SELECT_TASK":
            state.selectedID = action.payload.selectedID;
            return Object.assign(state, action.payload);
        default:
            return state;
    }
}

export default rootReducer;
