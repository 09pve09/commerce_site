import React, {Component} from 'react';
import LoginWindow from './login';


export default class Modal extends Component{
  render(){
    return(
      <div className= 'modal fade' id='myModal'>
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
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
