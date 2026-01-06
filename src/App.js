import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './components/firebase/firebase.utils';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
      return (
    <div>
      <Header currentUser = {this.state.currentUser}/> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
  }
}

export default App;
