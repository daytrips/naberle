import React from 'react'

class Places extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const issueList = this.props.markers.map((pin, i) => {
      return(
        <li className="listItem" key={i}>
          <div>Issue - {pin.type}</div>
          <div>Neighbor - {pin.reporter}</div>
          <div style={{fontStyle:'italic'}}>{pin.description}</div>
        </li>
      )
    })
    return (
      <div className="issues">
        <h3>Issues</h3>
        <ul>
          {issueList}
        </ul>
      </div>
    )
  }
}

export default Places