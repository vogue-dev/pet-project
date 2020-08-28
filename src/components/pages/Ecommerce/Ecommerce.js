import React, { Component } from 'react';
import './Ecommerce.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class Ecommerce extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0
        }
    }

    render() {
        return (
            <section>
                <div className="container-content">
                    <div className="ecommerce-section">
                        <div className="ecommerce">
                            Hello, Ecommerce project
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}