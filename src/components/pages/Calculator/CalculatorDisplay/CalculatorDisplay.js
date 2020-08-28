import React, { Component } from 'react'
import './CalculatorDisplay.scss'

export default class CalculatorDisplay extends Component {
    render() {
        return( 
            <div className="calculator__display">
                <div className="display__wrap">
                    { this.props.displayValue }
                </div>
            </div>
        )
    }
}