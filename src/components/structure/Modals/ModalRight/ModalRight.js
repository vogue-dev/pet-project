import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button.js';
import './ModalRight.css';
// import '../ModalRight/ModalRight.scss'
// import PostData from '../../../../data/menuRightData.json'

export default class ModalRight extends Component {
	render() {
		let isActiveModalRight = this.props.isActiveModalRight;

		return (
			<div className={isActiveModalRight ? 'container-right-show' : 'container-right'}>
				{/* <div className="lvl-1">Calculator</div>
                    <div className="lvl-1">Weather App</div> */}
				<ul>
					<li>
						<Link to={{ pathname: '/' }}>Main Page</Link>
					</li>
					<li>
						<Link to={{ pathname: '/calculator' }}>Calculator App</Link>
					</li>
					<li>
						<Link to={{ pathname: '/weather-app' }}>Weather App</Link>
					</li>
					<li>
						<Link to={{ pathname: '/clicker' }}>Clicker ( Mini Game )</Link>
					</li>
					<li>
						<a href="https://e-shop-ua.herokuapp.com/">E-commerce (shop)</a>
					</li>
				</ul>

				<div className="buttons__modal__right" onClick={() => this.props.toggleModalRight()}>
					{isActiveModalRight ? (
						<Button children={'Close [-->]'} className="right-modal" />
					) : (
						<Button children={'Open [<--]'} className="right-modal" />
					)}
				</div>
			</div>
		);
	}
}
