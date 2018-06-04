import React, { Component } from 'react';
import Form from './components/Form';
import MarkdownPreviewer from './components/MarkdownPreviewer'

import './App.css'

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
        <MarkdownPreviewer value={this.state.value}/>
      </div>
    );
  }
}
export default App;
