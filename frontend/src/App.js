import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import BlogScreen from './screens/BlogScreen'

function App() {
    return (
        <Router>
            <Header />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/blog' component={BlogScreen} exact />
            <Footer />
        </Router>
    );
}

export default App