import React, { Component } from 'react';

import Header from '../comps/header/header';
import Search from '../comps/search/search';
import CategoryRow from '../comps/cat_row/row';
import OtherFeatures from '../comps/other_features/other_features';
import Footer from '../comps/footer/footer';
import Tags from '../comps/tags/Tags';

import Title from '../comps/main_title/title';
import { SITE_URL } from '../config';

import HOC from '../comps/HOC/hoc';

class SingerList extends Component {
    render(){
        return(
            <HOC>
                <Header />
                <Search />
                <Title text="All Singer List" />
                <CategoryRow
                    url={ SITE_URL + 'singer/424146' }
                    text="Arijit Singh" />
                <Tags />
                <OtherFeatures />
                <Footer />
            </HOC>
        )
    }
}

export default SingerList;