const actionTypes = {
    INCREMENT_COUNTER: "INCREMENT_COUNTER",
    DECREMENT_COUNTER: "DECREMENT_COUNTER",
    CLEAR_COUNTER: "CLEAR_COUNTER",
}

export const actionCreators = {
    incrementCounter: (productId) => ({type: actionTypes.INCREMENT_COUNTER, productId}),
    decrementCounter: (productId) => ({type: actionTypes.DECREMENT_COUNTER, productId}),
    clearCounter: (productId) => ({type: actionTypes.CLEAR_COUNTER, productId}),
}

const initialState = {
    counters: [
        {id: 1, value: 0, productName: "Pizza", image: 'pizza.jpeg'},
        {id: 2, value: 0, productName: "Papanasi", image: 'papanasi.jpeg'},
        {id: 3, value: 0, productName: "Brownie", image: 'brownie.jpeg'},
        {id: 4, value: 0, productName: "Salad", image: 'salad.jpeg'},
        {id: 5, value: 0, productName: "Sandwich", image: 'sandwich.jpeg'},
        {id: 6, value: 0, productName: "Burger", image: 'burger.jpeg'},
    ],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                counters: state.counters.map(counter => counter.id === action.productId ? {
                    ...counter,
                    value: counter.value + 1
                } : counter)
            }
        case actionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                counters: state.counters.map(counter => counter.id === action.productId ? {
                    ...counter,
                    value: Math.max(0, counter.value - 1)
                } : counter)
            }
        case actionTypes.CLEAR_COUNTER:
            return {
                ...state,
                counters: state.counters.map(counter => counter.id === action.productId ? {
                    ...counter,
                    value: 0
                } : counter)
            }
        default:
            return state;
    }
}
