import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import BlogScreen from './screens/BlogScreen'
import PostScreen from './screens/PostScreen'

function App() {
    return (
        <Router>
            <Header />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/blog' component={BlogScreen} />
            <Route path='/post/:id' component={PostScreen} />
            <Footer />
        </Router>
    );
}

export default App