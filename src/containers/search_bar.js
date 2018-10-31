import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {fetchWeather} from '../actions/index';


class SearchBar extends Component{
    constructor(props){
        super(props);
        // iniially blank search field
        this.state =  {term:''};
        

        // bind the exisiting funtion onInputChange to 'this', that is the class SearchBar, and then replace the exisiting function with it.
        //whenever a callback function has a reference to 'this', we need to bind the context
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        // get search field value
    console.log(event.target.value);        
    this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        // dont submit the form
        event.preventDefault(); 
        //call action creator
        //this.state.term => search field term i.e city
        this.props.fetchWeather(this.state.term);
        //clear searchstring
        this.setState({term: ''});
    }


    render() {
        return(
            <form onSubmit = {this.onFormSubmit} className = "input-group">
            <input
            placeholder = "Get a 5 day forecast in your favorite cities" 
            className = "form-control"
            value = {this.state.term}
            onChange = {this.onInputChange} />

            <span className = "input-group-btn">
                <button type = "submit" className = "btn btn-secondary">Search</button>

            </span>
            </form>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators( {fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);