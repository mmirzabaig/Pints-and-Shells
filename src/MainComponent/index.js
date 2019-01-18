import React, { Component } from 'react';
import BreweryMap from '../BreweryMap';
import './style.css';

class MainComponent extends Component {
  constructor(){
    super();
    this.state = {
      locations: [],
    }
  }

  getBrewData = async () => {
    try {
      const brewData = await fetch('https://api.openbrewerydb.org/breweries?by_city=austin&per_page=50');
      const brewDataJson = await brewData.json();
      return brewDataJson

    } catch(err) {
      return(err)
    }
  }
  getGeoLocation = async (data,  index) => {
    try {
      const coordinates = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+ data.street + 'Austin,+TX&key=AIzaSyDRUpBESMbs6306QTg9QeIvQmbhApYl2Qw');
      const coordinatesJson = await coordinates.json();
      data.latitude = coordinatesJson.results[0].geometry.location.lat;
      data.longitude = coordinatesJson.results[0].geometry.location.lng;

      this.setState(prevState => ({
        locations: [...prevState.locations, data]
      }));

    } catch(err) {
      return(err)
    }
  }
  componentDidMount() {
    this.getBrewData().then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].street.length > 3) {
          const street = data[i].street.split(' ').join('+');
          data[i].street = street;
          this.getGeoLocation(data[i], i)
        }
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {

    return (
      <div className="MainComponent">
        <div className='directions'>
          <div className='box'>
            <h2>Directions 1</h2>
          </div>
          <div className='box'>
              <h2>Directions 2</h2>
          </div>
          <div className='box'>
            <h2>Directions 3</h2>
          </div>
          <div className='box'>
            <h2>Directions 4</h2>
          </div>
        </div>
        <div className="mapContainer">
          <BreweryMap brewData={this.state.locations}/>
        </div>
      </div>
    );
  }
}

export default MainComponent;
