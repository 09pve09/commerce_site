import React, { Component  } from 'react';
import DisplayUserName from './display_user';


class Navbar extends Component{
  render(){
      console.log(this.props);
      return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <DisplayUserName />
            </div>
          </div>
        </nav>
      );
  }
}
export default Navbar;
