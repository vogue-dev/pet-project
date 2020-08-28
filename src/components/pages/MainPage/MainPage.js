import React, { Component } from 'react';
// import { Router } from 'react-router-dom'
import './MainPage.css';

export default class MainPage extends Component {

    render() {
        return (
            <main>

                <div className="container">
                    <section>
                        <div className="container-content">
                            <div className="first__block">
                                <div className="content">Portfolio</div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container-content">
                            <div className="second__block">
                                <div className="content">My works</div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        )
    }
}