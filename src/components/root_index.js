import React, { Component  } from 'react';
import Modal from './modal';


export default class RootIndex extends Component{
  componentDidMount(){

  }

  render(){
    return(
    <div className='intro-background'>
      <div className='intro'>
        <div className="intro-body">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h3 className="brand-heading">Welcome to my awesome commerce site!</h3>
                  <button type="button" className="btn btn-lg btn-black-big" data-toggle="modal" data-target="#myModal">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
    );
  }

}
