import React from 'react'

export default class Warning extends React.Component {
  render() {
    return (
      <div>
	      <span> If this is a police, fire, medical, or other emergency, please call 911 immediately.</span>
	      <div className="space"></div>
      </div>
    ) 
  }
}