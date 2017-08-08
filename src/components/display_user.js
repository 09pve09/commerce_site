import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { LoginUser } from '../actions';
import { withRouter } from 'react-router';
import Modal from './modal'
import ReactDOM from 'react-dom';
import $ from 'jquery';

class DisplayUserName extends Component{
  componentDidUpdate(previosProps){
        if(previosProps.user.login !== this.props.user.login){
          // Modal.hide;
          console.log('hide:', Modal);
          this.props.history.push('/ads');
        }
  }

  closeModal(){
    var DOM_WIN = ReactDOM.findDOMNode(Modal);
    // return(
    //   $(DOM_WIN).modal("hide")
    // );
  }


  render(){
      if(this.props.user.login != null){
        return(
          <h3 className='white'>Welcome, {this.props.user.login}</h3>
        )
      }
      else{
        return (
            <h3 className='white'>Welcome, stranger</h3>
        )
      }
  }
}


function mapStateToProps(state){
  return {user: state.login};
}
export default withRouter(connect(mapStateToProps, { LoginUser })(DisplayUserName));
