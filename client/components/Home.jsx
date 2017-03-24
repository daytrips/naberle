import React, { Component } from 'react';
import loadJS from 'loadjs';
import MapForm from './map-form.jsx';
import MapInfo from './map-info.jsx';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latLng: '',
      marker: {},
      submitted: false,
      clicked: {
        display: 'none',
        data: 0,
      },
    };
  }

  componentWillMount() {
    this.props.getIssues();
  }

  componentDidMount() {
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAYVAslO99OwvCeZmCZG37ZOaUZ0p9DIUg', {
      success: () => {
        this.map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 37.769, lng: -122.446 },
          zoom: 12,
        });
        const map = this.map;
        this.props.data.map((issue, i) => {
          const { lat, lng } = issue;
          const marker = new window.google.maps.Marker({
            position: { lat, lng },
            map,
            animation: window.google.maps.Animation.DROP,
          });
          marker.addListener('click', () => {
            this.setState({ latLng: '', submitted: false, clicked: { display: 'block', data: i } });
          });
        });

        const placeMarkerAndPanTo = (latLng, map) => {
          this.state.marker.setMap ? this.state.marker.setMap(null) : null;
          const marker = new window.google.maps.Marker({
            position: latLng,
            map,
          });
          console.log(this.map.getZoom());
          this.map.panTo(latLng);
          this.setState({ marker });
          this.setState({ latLng });
        };

        this.map.addListener('click', (e) => {
          this.setState({
            submitted: false,
            clicked: {
              display: 'none',
              data: {},
            },
          });
          placeMarkerAndPanTo(e.latLng, this.map);
        });
      },
    });
  }

  componentWillUpdate(nextProps) {
    if (this.props.vote !== nextProps.vote) {
      this.props.getIssues();
    }
  }

  componentWillUnmount() {
    window.google = null;
  }


  showForm() {
    return this.state.latLng ? 'block' : 'none';
  }


  handleSubmit(type, description, lat, lng) {
    console.log('RichardSux', type, description, lat, lng, this.props.signedIn.username);
    axios.post('/issue', { name: 'RichardSux', type, description, lat, lng, username: this.props.signedIn.username });
  }

  handleVote(id) {
    this.props.postVote(id, this.props.signedIn.username);
  }

  refresh() {
    this.setState({
      latLng: '',
      marker: {},
      submitted: true,
    });
    this.map.setZoom(12);
    this.map.setCenter({ lat: 37.769, lng: -122.446 });
  }


  render() {
    return (
      <div>
        <h1>nābərlē</h1>
        <div id="map" style={{ height: '50%', width: '100%', position: 'absolute' }} />
        <MapForm
          submitted={this.state.submitted}
          show={this.showForm.bind(this)}
          refresh={this.refresh.bind(this)}
          latLng={this.state.latLng}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <MapInfo
          display={this.state.clicked.display}
          data={this.props.data[this.state.clicked.data] ? this.props.data[this.state.clicked.data] : {}}
          vote={this.handleVote.bind(this)}
        />
      </div>
    );
  }
}
