import {FETCH_WEATHER} from '../actions/index';
//initial state of array to accomodate diffrent cities
export default function(state = [], action){
    switch(action.type)
    {
        case FETCH_WEATHER:
        //return state.concat([action.payload.data]);
        // [city,city, city]
        return [action.payload.data, ...state];
    }
        
    return state;
}