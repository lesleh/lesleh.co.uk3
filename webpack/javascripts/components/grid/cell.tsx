import React from 'react';

export interface ICellProps {
  span?: number;
}

export default class Cell extends React.PureComponent<ICellProps> {
  static defaultProps = {
    span: 12
  }

  createClassName () {
    return `grid__column grid__column--${this.props.span}`;
  }

  render () {
    return (
      <div className={this.createClassName()}>
        {this.props.children}
      </div>
    )
  }
}
