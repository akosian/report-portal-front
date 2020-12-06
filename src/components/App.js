import './App.css';
import {BrowserRouter} from "react-router-dom";
import React from 'react';
import NavBar from "./navbar/NavBar";
import Header from "./header/Header";
import {Provider} from "react-redux";
import store from '../redux/ReduxStore'
import Content from "./content/Content";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className='app-wrapper'>
                    <NavBar/>
                    <Header/>
                    <Content/>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
