import React, { Component } from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import './MarkdownPreviewer.css';

class MarkdownPreviewer extends Component {
  render() {
    return (
      <section className="preview-container">
        <article className="preview-wrapper">
          <Markdown source={this.props.value} />
        </article>
      </section>
    );
  }
}

MarkdownPreviewer.propTypes = {
  value: PropTypes.string.isRequired
}
export default MarkdownPreviewer;