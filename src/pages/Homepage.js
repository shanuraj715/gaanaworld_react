import React, { Component } from 'react';

import Header from '../comps/header/header';
import Search from '../comps/search/search';
import RecentSongList from '../comps/latest_uploads/latest_uploads';
import MusicCategories from '../comps/category/category';
import OtherFeatures from '../comps/other_features/other_features';
import Footer from '../comps/footer/footer';

import HOC from '../comps/HOC/hoc';

class Homepage extends Component{

    state = {
        
    }


    render(){
        return(
            <HOC>
                <Header />
                <Search />
                <RecentSongList />
                <MusicCategories />
                <OtherFeatures />
                <Footer />
            </HOC>
        )
    }
}

export default Homepage;