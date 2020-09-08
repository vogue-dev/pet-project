import React, { Component } from 'react';
import Header from './structure/Header/Header.js';
import Main from './structure/Main/Main.js';
import Modal from './structure/Modals/Modal/Modal.js';
import Footer from './structure/Footer/Footer.js';
import Overlay from './structure/Overlay/Overlay.js';
// import Calculator from './Calculator/Calculator.js';

export default class WebSite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalActive: false,
			isActiveModalRight: false,
			isRegistered: true,
			numberOfContentModal: '',
			modalData: [
				{
					id: 0,
					title: 'About Me',
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				},
				{
					id: 1,
					title: 'Technologies',
					content:
						'HTML/CSS, basic knowledge of JavaScript, jQuery, Bootstrap, SASS/LESS, GIT, BEM. Experience with Adobe Photoshop, Adobe Illustrator and Figma.',
				},
				{
					id: 2,
					title: 'Contacts',
					content:
						'Время консультаций 10:00-20:00 - Без выходных Заказы онлайн - круглосуточно, контактный телефон для связи: +38 (095) 790 03 63',
				},
				{
					id: 3,
					title: 'Login',
					content: (
						<div className="login">
							<form>
								<div className="login__form">
									<div className="login__left">
										<span>Введите login:</span>
										<input></input>
									</div>
									<div className="pass__right">
										<span>Введите pass:</span>
										<input></input>
									</div>
								</div>
								<button className="login__submit btn">Login Submit</button>
							</form>
						</div>
					),
				},
				{
					id: 4,
					title: 'Logout',
					content: (
						<div className="logout">
							<div>Вы точно хотите выйти?</div>
							<button className="logout__submit btn">Logout Submit</button>
						</div>
					),
				},
			],
		};
	}

	escFunction = (event, close) => {
		if (event.keyCode === 27 || close === true) {
			if (this.state.isActiveModalRight === true) {
				this.setState({ isModalActive: false, isActiveModalRight: false });
			} else this.setState({ isModalActive: false });
		}
	};

	handleClick = (num) => {
		this.setState({
			isModalActive: !this.state.isModalActive,
			numberOfContentModal: num,
		});
	};

	toggleModalRight = () => {
		this.setState({
			isActiveModalRight: !this.state.isActiveModalRight,
		});
	};

	componentDidMount() {
		document.addEventListener('keydown', this.escFunction, false);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.escFunction, false);
	}

	render() {
		return (
			<div class="wrapper">
				<Overlay
					isModalActive={this.state.isModalActive}
					handleClick={this.handleClick}
					numberOfContentModal={this.state.numberOfContentModal}
					escFunction={this.escFunction}
				/>
				<Header
					isModalActive={this.state.isModalActive}
					handleClick={this.handleClick}
					toggleModalRight={this.toggleModalRight}
					isActiveModalRight={this.state.isActiveModalRight}
					isRegistered={this.state.isRegistered}
				/>
				<Modal
					handleClick={this.handleClick}
					isModalActive={this.state.isModalActive}
					numberOfContentModal={this.state.numberOfContentModal}
					modalData={this.state.modalData}
				/>
				<Main handleClick={this.handleClick} />
				<Footer />
			</div>
		);
	}
}
