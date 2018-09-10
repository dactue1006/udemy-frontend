import React, { Component } from 'react';
import AppBar from './components/AppBar/index';
import Streamer from './components/Streamer/index';
import NewChannel from './components/NewChannel/index';
import Footer from './components/Footer/index';

export default class Home extends Component{
  render(){
    return (
      <div>
        <AppBar />
        <Streamer />
        <NewChannel />
        <Footer />
      </div>
    )
  }
}