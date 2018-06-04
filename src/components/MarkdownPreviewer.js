import React, { Component } from 'react';
import Markdown from 'react-markdown';

class MarkdownPreviewer extends Component {
  render() {
    return (
      <div>
        <Markdown source={this.props.value} />
      </div>
    );
  }
}
export default MarkdownPreviewer;