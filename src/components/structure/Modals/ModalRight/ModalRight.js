import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button.js';
import './ModalRight.css';
// import '../ModalRight/ModalRight.scss'
// import PostData from '../../../../data/menuRightData.json'

export default class ModalRight extends Component {
	constructor(props) {
		super(props);
		this.modalRightRef = React.createRef();
	}

	handleOutsideClick = (e) => {
		let path = e.path || (e.composedPath && e.composedPath()) || e.composedPath(e.target);
		if (
			this.props.isActiveModalRight === true &&
			this.props.isModalActive === false &&
			!path.includes(this.modalRightRef.current)
		) {
			this.props.toggleModalRight();
		}
	};

	componentDidMount() {
		document.body.addEventListener('click', this.handleOutsideClick);
	}

	componentWillUnmount() {
		document.body.addEventListener('click', this.handleOutsideClick);
	}

	render() {
		let isActiveModalRight = this.props.isActiveModalRight;

		return (
			<div
				ref={this.modalRightRef}
				className={isActiveModalRight ? 'container-right-show' : 'container-right'}>
				{/* <div className="lvl-1">Calculator</div>
                    <div className="lvl-1">Weather App</div> */}
				<ul>
					<li onClick={() => this.props.handleClick(0)}>
						<Link>About me</Link>
					</li>
					<li onClick={() => this.props.handleClick(1)}>
						<Link>Technologies</Link>
					</li>
					<li onClick={() => this.props.handleClick(2)}>
						<Link>Contacts</Link>
					</li>
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
						<a href="https://vogue-dev.github.io/slider-pureJS/">NativeJS-Slider</a>
					</li>
					<li>
						<a href="https://e-shop-ua.herokuapp.com/">E-commerce (shop)</a>
					</li>
				</ul>

				<div className="buttons__modal__right" onClick={() => this.props.toggleModalRight()}>
					{isActiveModalRight ? (
						<Button children={'Close modal'} className="right-modal" />
					) : (
						<Button children={'Open modal'} className="right-modal" />
					)}
				</div>
			</div>
		);
	}
}
