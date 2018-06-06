import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MarkdownInput.css'

class MarkdownInput extends Component {
  constructor(props){
    super(props);
    this.state = { value: "" }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
    this.setState({ value: event.target.value})
    this.props.handleChange(event)
  }
  componentDidMount(){
    this.setState({ value: this.props.defaultMarkdown})
  }
  render(){
    return (
      <div className="form-container">
        <form>
          <label>Enter markdown below :</label>
            <div className="line-decor"></div>
            <textarea type="text" value={this.state.value} onChange={this.handleInput}/>
        </form> 
      </div>
    )
  }
}
MarkdownInput.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default MarkdownInput;