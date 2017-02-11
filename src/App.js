import React, { Component } from 'react';

import BodyContainer from './containers/BodyContainer';
import FooterContainer from './containers/FooterContainer';
import HeaderContainer from './containers/HeaderContainer';

import './App.css';

class App extends Component {
    render() {
        return (
            <div id="app">
                <HeaderContainer />
                <BodyContainer />
                <FooterContainer />
            </div>
        );
    }
}

export default App;
