import React, { Component } from 'react';

import Header from '../comps/header/header';
import Search from '../comps/search/search';
import Title from '../comps/main_title/title';
import CategoryRow from '../comps/cat_row/row';
import OtherFeatures from '../comps/other_features/other_features';
import Footer from '../comps/footer/footer';

import { SITE_URL } from '../config';
import HOC from '../comps/HOC/hoc';

class AlbumList extends Component{
    render(){
        return(
            <HOC>
                <Header />
                <Search />
                <Title text="Album List" />
                <CategoryRow
                    url={ SITE_URL + 'album/424145' }
                    text="Aashiqui 2" />
                <OtherFeatures />
                <Footer />
            </HOC>
        )
    }
}

export default AlbumList;