import {customerReducer} from './customerReducer';

describe('customerReducer', () => {
  it('should add a customer to the state', () => {
    const initialState = {customers: []};
    const newCustomer = {id: 1, name: 'John'};
    const newState = customerReducer(initialState, {type: 'ADD_CUSTOMER', payload: newCustomer});
    expect(newState.customers).toHaveLength(1);
    expect(newState.customers[0]).toEqual(newCustomer);
  });
});
