import React, { Component } from 'react';

import Header from '../comps/header/header';
import Search from '../comps/search/search';
import OtherFeatures from '../comps/other_features/other_features';
import Footer from '../comps/footer/footer';
import PageDescription from '../comps/page_description/Page_description';
import Tags from '../comps/tags/Tags';

import Title from '../comps/main_title/title';
import SongRow from '../comps/song_row/row';
import { SITE_URL } from '../config';

import HOC from '../comps/HOC/hoc';

class Singer extends Component {
    render(){
        return(
            <HOC>
                <Header />
                <Search />
                <Title text="Arijit Singh All Songs" />
                <SongRow
                    url={ SITE_URL + 'song/123456'}
                    title="Song Name at least 60 Characters"
                    first="Bhojpuri"
                    second="Khesari Lal"
                    third="4.52 MB" />

                <PageDescription />
                <Tags />
                <OtherFeatures />
                <Footer />
            </HOC>
        )
    }
}

export default Singer;