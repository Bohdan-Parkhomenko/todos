const initialState = {
    cash: 10,
};
const ADD = 'ADD'
const TAKE = 'TAKE'

export const cashReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {...state, cash: state.cash + action.payload};
        case TAKE:
            return {...state, cash: state.cash - action.payload};
        default:
            return state;
    }
};

export const addCashAction = (payload) => ({
    type: ADD, payload
})

export const takeCashAction = (payload) => ({
    type: TAKE, payload
})