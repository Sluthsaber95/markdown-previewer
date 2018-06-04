import React, { Component } from 'react';
import Form from './components/Form';
import MarkdownPreviewer from './components/MarkdownPreviewer'

import './App.css'

const defaultMarkdown = `
# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)

Pretty neat, eh?

## Tables?

| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |

## More info?

Check this project out [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal` ;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: defaultMarkdown }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <MarkdownPreviewer value={this.state.value}/>
        <Form 
          handleChange={this.handleChange} 
          defaultMarkdown={this.state.value}
        />
      </div>
    );
  }
}
export default App;
