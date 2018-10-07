import React from 'react';
import Cell from './cell';

export default class Grid extends React.PureComponent<{}> {
  static Cell = Cell

  render () {
    return (
      <div className="grid">{this.props.children}</div>
    )
  }
}
