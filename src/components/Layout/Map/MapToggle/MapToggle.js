import React, { Component } from 'react';
import Button from '../../../Button/Button';

class MapToggle extends Component {
   render() {
      return (
        <div className="nav nav--toggle">
          <Button label="Snapshot" type="toggle" status="active"/>
          <Button label="Risk" type="toggle" />
        </div>
      );
   }
}

export default MapToggle;