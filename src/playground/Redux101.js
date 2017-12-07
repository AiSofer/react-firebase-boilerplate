import { createStore } from 'Redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({ // incrementBy object desructuring
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({ // decrementBy object desructuring
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({ count = 1 } = {}) => ({ // count object desructuring
    type: 'SET',
    count
});
const resetCount = () => ({
    type: 'RESET'
});

// Reducers (of react):
// 1. Reducers are pure functions (functions that do NOT untaract with somthing outside of their scope)
// 2. Never change state or actiton
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'SET':
            return { count: action.count };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(incrementCount({ incrementBy: 100 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 4 }));
store.dispatch(resetCount());
store.dispatch(incrementCount());
store.dispatch(setCount({ count: 8 }));

