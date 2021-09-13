import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = () => ({
    type: 'ADD_EXPENSE',
    expenses: {
        
    }

})

const expensesReducerDefaultState = [];

const expenseReducer = ( state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortby: 'date',
    startDate: undefined,
    endDate: undefined
    
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store =  createStore(
    combineReducers({
        expenses: expenseReducer,
        filters : filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'poiidjda',
        description: 'January Rent',
        note: 'This is the final payment for this address',
        amount: 54500,
        createdat: 0
    }],
    filters: {
        text: 'rent',
        soryBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};