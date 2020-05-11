import React, {Component} from 'react';
//import DateTimePicker from 'react-datetime-picker';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

//const API_KEY = "0e922b7f07dee5170635e075362b7a0c";

class App extends Component {

    state = {
        temperature: undefined,
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        
        const api_call = await fetch 
        (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=0e922b7f07dee5170635e075362b7a0c&units=metric`);
        
        const data = await api_call.json();
        if(city && country) {
            console.log(data);
        this.setState({
            temperature:data.main.temp,
            city:data.name,
            country:data.sys.country,
            humidity: data.main.humidity,
            description:data.weather[0].description,
            error:""
            })
        }
        else {
            this.setState({
                temperature:undefined,
                city:undefined,
                country:undefined,
                description:undefined,
                humidity:undefined,
                error:"Please enter the values"
                })
        }
    }

    render() {
        return(
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            
                            <div className="row">
                            
                        <div className="col-md-4 title-container" >
                                    <Titles/>
                                </div>    
                                <div className="col-md-8 form-container">
                                    
                                    <Form getWeather = {this.getWeather}/>
                                    <Weather
                                        temperature={this.state.temperature} 
                                        city = {this.state.city} 
                                        country = {this.state.country} 
                                        humidity = {this.state.humidity}
                                        description = {this.state.description} 
                                        error = {this.state.error}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;