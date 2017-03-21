
import React from 'react';
import Map from './Maps.jsx';
class Reporting extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <select id='select' onChange={this.props.menu}>
          <option value="default">Choose an issue</option>
          <option value="Trash">Trash Pickup</option>
          <option value="Road Work">Road Work</option>
          <option value="Traffic Sign">Traffic Light</option>
        </select>
        <input id='name' type="text" onChange={this.props.name} placeholder='Enter your Name' />
        <input id='description' type="text" onChange={this.props.description} placeholder="Enter a description" />
      </div>
    )
  }
}

export default Reporting;
