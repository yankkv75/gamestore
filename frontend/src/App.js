import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import BlogScreen from './screens/BlogScreen'
import PostScreen from './screens/PostScreen'
import GamesScreen from './screens/GamesScreen'
import SingleGameScreen from './screens/SingleGameScreen'
import CartScreen from './screens/CartScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'

function App() {
    return (
        <Router>
            <Header />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/blog' component={BlogScreen} />
            <Route path='/post/:id' component={PostScreen} />
            <Route path='/games' component={GamesScreen} />
            <Route path='/game/:id' component={SingleGameScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/sign-in' component={SignInScreen} />
            <Route path='/sign-up' component={SignUpScreen} />
            <Footer />
        </Router>
    );
}

export default App