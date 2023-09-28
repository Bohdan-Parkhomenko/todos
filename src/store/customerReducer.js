const initialState = {
    customers: []
}
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers.action.payload]};
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
        default:
            return state;
    }
};


