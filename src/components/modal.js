import React, {Component} from 'react';
import LoginWindow from './login';
import $ from 'jquery';

export default class Modal extends Component{
  hide(){
    console.log('this:', this);
    this.refs.close_modal.click()
  }

  render(){
    return(
      <div className= 'modal fade' id='myModal'>
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button ref='close_modal' type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
            <LoginWindow />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
