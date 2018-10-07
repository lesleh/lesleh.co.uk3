import React from 'react';
import Grid from './grid';

interface IPlaygroundState {
  name: string;
}

export default class Playground extends React.Component<any, IPlaygroundState> {
  state = {
    name: ''
  }

  handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    let name = e.currentTarget.value;
    this.setState({ name })
  }

  render () {
    return (
      <Grid>
        <Grid.Column>
          <div className="input">
            <label>Input</label>
            <input value={this.state.name} onChange={this.handleInputChange}/>
          </div>
          <div>{this.state.name}</div>
        </Grid.Column>
      </Grid>
    )
  }
}
