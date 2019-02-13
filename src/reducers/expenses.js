// Expenses Reducer
const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expenses
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {
                if (expense.id !== action.id) {
                    return expense
                }
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            });
        default:
            return state
    }
}

// export default expensesReducer;