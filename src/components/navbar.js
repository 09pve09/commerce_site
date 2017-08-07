import React, { Component  } from 'react';
import DisplayUser from './display_user';


class Navbar extends Component{
  render(){
      return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <DisplayUser />
            </div>
          </div>
        </nav>
      );
  }
}
export default Navbar;
