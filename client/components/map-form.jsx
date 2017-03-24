import React, { Component } from 'react';

export default class MapForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Select an issue',
      description: '',
      err: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    const state = {};
    state[name] = value;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { type, description } = this.state;
    if (this.state.type === 'Select an issue') {
      return this.setState({ err: true });
    }
    this.props.refresh();
    this.props.handleSubmit(type, description, this.props.latLng.lat(), this.props.latLng.lng());
    this.setState({ type: '', description: '', err: false });
  }

  renderAlert() {
    return this.state.err ? 'has-error' : '';
  }

  render() {
    const display = this.props.show();
    const renderError = `form-group ${this.renderAlert.call(this)}`;
    if (this.props.submitted) {
      return <h3 style={{ fontSize: '30px', position: 'absolute', bottom: '30%', left: '40%' }}>Issue Submitted</h3>;
    }
    return (
      <form className="signin" action="" onSubmit={this.handleSubmit} style={{ position: 'absolute', bottom: '12%', width: '90%', left: '5%', display }}>
        <fieldset className={renderError}>
          <label>Type:</label>
          <select name="type" value={this.state.type} onChange={this.handleChange} className="form-control" required >
            <option disabled>Select an issue</option>
            <option>Trash Pickup</option>
            <option>Road Work</option>
            <option>Traffic Light</option>
          </select>
        </fieldset>
        <fieldset className="form-group">
          <label>Description:</label>
          <textarea type="description" name="description" value={this.state.description} onChange={this.handleChange} className="form-control" required />
        </fieldset>
        <button action="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
