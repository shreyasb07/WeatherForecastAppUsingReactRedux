import React, {Component} from 'react';

class GoogleMap extends Component{

componentDidMount(){
    
    //Creating an embeded Google maps in our document
    //finds the location on the HTML as to where to display the GMap (get DOM reference)
    new google.maps.Map(this.refs.map, {
        zoom: 12,
        center: {
            lat: this.props.lat,
            lng: this.props.lon
        }
    });
}

    render(){
    //this.ref.map
    return <div ref = 'map'/>;
}
}

export default GoogleMap;