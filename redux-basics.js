const redux = require( 'redux' );
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
const rootReducer = ( state = initialState, action ) => {

    if ( action.type === 'INC_COUNTER' ) {
        const stateCopy = { ...state }

        return {
            counter: stateCopy.counter + 1
        }

    }
    if ( action.type === 'ADD_COUNTER' ) {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

//Store takes in a reducer
const store = createStore( rootReducer );

//Subscriptions -> so we don't have to manually set state
//subscription is triggered when an action is dispatched/state is updated
store.subscribe( () => {
    console.log( '[Subscription]', store.getState() )
} )

//Dispatch Action -> takes an arugemnt of object
store.dispatch( { type: 'INC_COUNTER' } );
store.dispatch( { type: 'ADD_COUNTER', value: 10 } );
console.log( store.getState() );

