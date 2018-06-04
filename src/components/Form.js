import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = { value: ''}
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
    this.setState({ value: event.target.value})
    this.props.handleChange(event)
  }
  render(){
    return (
      <Fragment>
        <form>
          <label>
            Name:
            <textarea type="text" value={this.state.value} onChange={this.handleInput} />
          </label>
        </form> 
      </Fragment>
    )
  }
}
Form.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default Form;