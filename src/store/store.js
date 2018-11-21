import {createStore} from 'redux';
import cons from './constents';

const initState = {
    Text: 'Using React, Redux',
    color: '#fff',
}

function reducer(state = initState, action) {
    console.log('reducer is running', action.type);
    
    switch (action.type) {

        case cons.changeColor:
            console.log('state:', state.color);
            return Object.assign({}, state, {color: action.color});
        default:
            return state
    }

}

const store = createStore(reducer);

export default store;