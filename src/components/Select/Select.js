import React, { Component } from 'react';

class Select extends Component {

  _renderOptions = (array, selected) => {
    var selectOptions = array.map(function(value, i) {
      return (
        <option key={i} value={value}>{value}</option>
      )
    })
    return selectOptions
  }

  render() {
    return (
      <select className={this.props.type} name={this.props.name} defaultValue={this.props.defaultValue}>
        {this._renderOptions(this.props.options)}
      </select>
    )
  }
}

export default Select;