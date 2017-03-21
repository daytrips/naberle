import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/Maps.jsx';
import Places from './components/Places.jsx';
import Navigation from './components/Nav.jsx';
import Reporting from './components/Reporting.jsx';
import Warning from './components/Warning.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: []
    }

    this.updatingName = this.updatingName.bind(this);
    this.updatingDescription = this.updatingDescription.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.menuChange = this.menuChange.bind(this);
    this.clearFields = this.clearFields.bind(this);
    this.getIssues = this.getIssues.bind(this);
    this.postIssues = this.postIssues.bind(this);
    this.getIssues();
  }

  updatingName(e) {
    this.setState ({name: e.target.value})
  }

  updatingDescription(e) {
    this.setState ({description: e.target.value})
  }

  submitInfo(e){
    console.log(this.state.issue + " " + this.state.name + " and " + this.state.description);
  }

  menuChange(e) {
    this.setState({issue: e.target.value});
  }

  clearFields (e) {
   document.getElementById('name').value = '',
   document.getElementById('description').value = ''
   document.getElementById('select').value = 'default'
  }

  getIssues() {
    axios.get('/issue')
      .then(({ data }) => {
        this.setState({
          pins: data
        })
      })
      .catch(err => {
        console.error('Get Issues Failed.')
      });
  }

  postIssues(row) {
    axios.post('/issue', row)
      .then(() => {
        this.getIssues();
      })
      .catch(err => {
        console.error('Post Issues Failed')
      });
  }
  
  render() {
    const location = {
      lat: 37.78725,
      lng: -122.402935
    }
    const zoom = 14;

    return (
      <div>
        <div style={{display:'flex', justifyContent:'center', color:'#77A618'}}>
          <Navigation className="nav"/>
        </div>
        <Warning />
        <div>
          <div style={{width: 700, height: 400}}>
            <Map center={location} zoom={zoom} markers={this.state.pins} name={this.state.name} issue={this.state.issue} description={this.state.description} submit={this.submitInfo} postIssues={this.postIssues} clearFields={this.clearFields}/>
          </div>

          <div className="inputsDiv">
            <Reporting name={this.updatingName} description={this.updatingDescription} menu={this.menuChange} />
          </div>
          <Places markers={this.state.pins} />
         </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
