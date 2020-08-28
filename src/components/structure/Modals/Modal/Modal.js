import React, { Component } from 'react';
import Button from '../../Button/Button.js';
import button__close from '../../../../../src/img/button__close.png';
import './Modal.scss';

export default class Modal extends Component {
	render() {
		let isModalActive = this.props.isModalActive;
		let modalData = this.props.modalData;
		let i = Number(this.props.numberOfContentModal);

		return (
			<div className="modal__wrap">
				<div className={isModalActive ? 'modal active' : 'modal'}>
					<div className="modal__close">
						<img
							onClick={() => this.props.handleClick(i)}
							src={button__close}
							alt="modal__close"></img>
					</div>
					<div className="modal__title">{modalData[i].title}</div>
					<div className="modal__content">{modalData[i].content}</div>
					<div className="modal__buttons">
						<Button className="modal__button" onClick={() => alert('Why do you do this, men?')}>
							Send Alert
						</Button>
						<Button className="modal__button" onClick={() => this.props.handleClick(i)}>
							Close
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
