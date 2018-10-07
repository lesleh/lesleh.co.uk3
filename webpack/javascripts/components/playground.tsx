import React from 'react';

export default class Playground extends React.Component<any, any> {
  state = {
    name: ''
  }

  handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    let name = e.currentTarget.value;
    this.setState({
      name
    })
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.handleInputChange} />
        <div>{this.state.name}</div>
      </div>
    )
  }
}
