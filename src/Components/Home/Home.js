import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
export default function Home () {
    return (
        <div className="home">
            <div>
                <Header />
            </div>
            <div>
                <Body />
            </div>
        </div>
    )
}