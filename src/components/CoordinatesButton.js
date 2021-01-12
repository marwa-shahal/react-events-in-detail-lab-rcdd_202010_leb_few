// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
  
  xyCoordinates=(X,Y) => [X,Y]
  
render(){
  return (
    <button onClick={xyCoordinates}> </button>
    )
  }
}