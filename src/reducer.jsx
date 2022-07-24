export const initialState = {
    //
    basket: [],
    user: {},
};

export const actionTypes = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    LOGIN_USER: "LOGIN_USER",
    LOGOUT_USER:"LOGOUT_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "LOGIN_USER":
            return {
                ...state,
                user: [...state.user, action.item],
            };
            case "LOGOUT_USER":
                return {
                    ...state,
                    user: [...state.user, action.item],
                };            
        default:
            return state;
    }
};

export default reducer;
