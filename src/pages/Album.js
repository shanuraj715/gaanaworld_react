import React, { Component } from 'react';

import Header from '../comps/header/header';
import Search from '../comps/search/search';
import Title from '../comps/main_title/title';
import SongRow from '../comps//song_row/row';
import Tags from '../comps/tags/Tags';
import OtherFeatures from '../comps/other_features/other_features';
import Footer from '../comps/footer/footer';

import { SITE_URL } from '../config';
import HOC from '../comps/HOC/hoc';

class Album extends Component{
    render() {
        return(
            <HOC>
                <Header />
                <Search />
                <Title text="Songs of Aashiqui 2" />
                <SongRow
                    url={ SITE_URL + 'song/605241' }
                    title="Aashiqui 2 Title Song"
                    first="Aashiqui 2"
                    second="Palak Mucchal"
                    third="5.52 MB" />
                <Tags />
                <OtherFeatures />
                <Footer />
            </HOC>
        )
    }
}

export default Album;