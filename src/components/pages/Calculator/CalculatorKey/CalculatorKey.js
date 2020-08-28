import React, { Component } from 'react'
import './CalculatorKey.scss'

export default class CalculatorKey extends Component {
    render() {
        const { onPress, className, ...props } = this.props

        return( 
            <div className={`calculator__key ${ this.props.className }`} {...props}>
                <button>{ this.props.children }</button>
            </div>
        )
    }
}