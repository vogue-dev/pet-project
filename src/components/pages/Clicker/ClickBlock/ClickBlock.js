import React, { Component } from 'react';
import './ClickBlock.scss'

class ClickBlock extends Component {
    render() {
        return(
            <div className={this.props.className} onClick={ this.props.onClick }>
                <div>{this.props.title} (+ cp/sec)</div>
                <div>Buy price:  cp</div>
                <div>Now: </div>
            </div>
        )
    }
}

export default ClickBlock