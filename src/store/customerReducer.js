const initialState = {
    customers: []
}
const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            // Add the new customer to the existing array of customers
            // The previous implementation attempted to access `state.customers.action`
            // which is undefined and resulted in an array with a single `undefined` value.
            // By spreading the current customers and appending `action.payload`, the reducer
            // correctly returns a new state with the added customer.
            return {...state, customers: [...state.customers, action.payload]};
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
        default:
            return state;
    }
};


