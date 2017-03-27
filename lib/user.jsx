import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';

export default
class User extends Component {
  constructor() {
    super();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="full-width">
        <Header
          user={user}
          signOut={this.props.signOut} 
        />
        <div style={{height: '90vh'}}>

        </div>
        <Footer />
      </div>
    );
  }
};
