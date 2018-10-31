import axios from 'axios';
const API_KEY = '1fc545d23514060a107fb9ce6937fdfd';
//const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=appid='+ API_KEY;

//Using ES6 template strings
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//below function is an action creator
export function fetchWeather(city){
    const url =  `${ROOT_URL}&q=${city},us`;
    const request=  axios.get(url);


    // action  which is an object  must always return  an action type
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
