import React, { Component } from 'react';
import './Overlay.scss';

export default class Overlay extends Component {
	render() {
		let isModalActive = this.props.isModalActive;

		return (
			<div
				className={isModalActive ? 'modal-overlay active' : 'modal-overlay'}
				onClick={() => this.props.escFunction('', true)}></div>
		);
	}
}
