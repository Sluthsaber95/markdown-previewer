import React, { Component } from 'react';
import Markdown from 'react-markdown';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <Form handleChange={this.handleChange}/>
        <Markdown source={this.state.value}/>
      </div>
    );
  }
}
export default App;
