const initialState = {
    user_vars: [],
    user_array: []
}

const taskReducer = (state = initialState, action) => {
    console.log(state);
    switch(action.type) {
        case "TASK":
            state.user_vars.push(action.value);
            return {
                ...state,
            }
        case "IMPORTANCE":
            state.user_vars.push(action.value);
            return {
                ...state,
            }
        case "DATE":
            state.user_vars.push(action.value);
            return {
                ...state,
            }
        case "SUBMIT":
            state.user_array.push(state.user_vars);
            return {
                ...state,
                user_vars: []
            }
        case "REMOVE":
            state.user_array.splice(action.value1, 1);
            return {
                ...state
            }
        default:
            return state
    }
}

export default taskReducer;