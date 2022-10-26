import React from 'react'

import HeroSection from '../components/HomeScreen/HeroSection'
import BlogSection from '../components/HomeScreen/BlogSection'
import GameSection from '../components/HomeScreen/GameSection'
import ServicesSection from '../components/HomeScreen/ServicesSection'
import NewAccSection from '../components/HomeScreen/NewAccSection'

function HomeScreen() {
    return (
        <>
            <HeroSection />
            <BlogSection />
            <GameSection />
            <ServicesSection />
            <NewAccSection />
        </>
    )
}

export default HomeScreen