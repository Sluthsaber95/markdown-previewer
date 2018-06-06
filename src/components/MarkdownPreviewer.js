import React, { Component } from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import './MarkdownPreviewer.css';

class MarkdownPreviewer extends Component {
  render() {
    return (
      <section className="markdown-container">
        <section className="preview-container">
        <article className="preview-wrapper">
          <div className="scrollbox">
            <Markdown source={this.props.value} />
          </div>
        </article>
        </section>
      </section>
    );
  }
}

MarkdownPreviewer.propTypes = {
  value: PropTypes.string.isRequired
}
export default MarkdownPreviewer;