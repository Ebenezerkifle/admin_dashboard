import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Home from './components/home';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='d-flex'>
        <div className='w-auto'>
          <Sidebar/>
        </div>
        <div className='col'>
          <Navbar/>
          <Home/>
        </div>
      </div>
    );
  }
}
 
export default App;