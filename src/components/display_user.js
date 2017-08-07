import React, { Component  } from 'react';
import { connect } from 'react-redux';

class DisplayUser extends Component{
  render(){
    return (
      <h3 className='white'>Welcome</h3>
    )
  }
}

const mapStateToProps = function(state) {
  return {
   form: state.form.login
  };
}

export default connect(mapStateToProps)(DisplayUser);
