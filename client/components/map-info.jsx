import React, { Component } from 'react';

export default class MapForm extends Component {
  constructor(props) {
    super(props);
  }

  handleVote() {
    const { id } = this.props.data;
    this.props.vote(id);
  }

  render() {
    const { display, data: { votes, type, description, id } } = this.props;
    return (
      <div style={{ fontSize: '30px', width: '90%', height: '20%', position: 'absolute', bottom: '10%', left: '5%', display }} className="panel panel-default">
        <div className="panel-heading" style={{ position: 'relative' }}>
          <h1 className="panel-title" style={{ fontFamily: 'arial', fontSize: '40px', display: 'inline-block' }}>{type}</h1>

          <button onClick={this.handleVote.bind(this)} className="btn btn-primary" style={{ position: 'absolute', top: '25%', right: '10px', display: 'inline-block', color: 'white' }} >{votes} <span style={{ marginRight: '5px', marginLeft: '5px' }}>|</span> <span className="glyphicon glyphicon-thumbs-up" /></button>
        </div>
        <div className="panel-body">
          <h5>{description}</h5>
        </div>
      </div>
    );
  }
}
