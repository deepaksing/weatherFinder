import React from 'react'


const API_KEY = "0e922b7f07dee5170635e075362b7a0c";


export const weather = () => {

    const getWeather = async () => {
        const api_call = await fetch(`
        api.openweathermap.org/data/2.5/weather?q={city name}&appid=${API_KEY}`);
        const data = await api_call.json();
    }


}