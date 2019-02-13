import uuid from 'uuid';

// ADD_EXPENESE
const addExpense = ({ 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expenses: {
            id:uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

// REMOVE_EXPENSE
const removeExpense = ({ id }) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

// EDIT_EXPENSE
const editExpensePage = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

export {
    addExpense,
    removeExpense,
    editExpensePage
}