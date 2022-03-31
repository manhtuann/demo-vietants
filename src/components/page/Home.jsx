import React from 'react';
import HomeMain from '../HomeMain';
import HomeDetail from '../HomeDetail';
import Togeter from '../Togeter';
import Strong from '../Strong';
import Workforce from '../Workforce';
import EndHome from '../EndHome';
import Footer from '../../footer/Footer';


function Home(){
    return (
        <>
            <HomeMain />
            <HomeDetail />
            <Togeter />
            <Strong />
            <Workforce />
            <EndHome />
            <Footer />
        </>
    )
}
export default Home;