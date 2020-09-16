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
						"Skilled and motivated front-end developer with 5+ years of experience in front-end development and digital marketing. Created more than 15 e-commerce and SPA websites. Seeking a front-end developer position with company which will require me to utilize my skills, abilities and experience in the IT field to ensure the company's success.",
				},
				{
					id: 1,
					title: 'Technologies',
					content: (
						<ul>
							<li>HTML5, SCSS/SASS</li>
							<li>JavaScript, TypeScript, jQuery</li>
							<li>React & Redux</li>
							<li>Webpack</li>
							<li>JSON API</li>
							<li>Bootstrap, Materiale UI</li>
							<li>Flex, Grid</li>
							<li>axios, react-router-dom, redux-thunk, prop-types</li>
						</ul>
					),
				},
				{
					id: 2,
					title: 'Contacts',
					content: (
						<ul>
							<li>Oprya Mark, 25 years</li>
							<li>Tel: +380 (95) 706 72 36</li>
							<li>Email: oprya.mark@gmail.com</li>
							<li>Telegram: @markoprya</li>
							<li>City: Kiev, Ukraine</li>
							<li>
								GitHub: <a href="https://github.com/vogue-dev">https://github.com/vogue-dev</a>
							</li>
							<li>
								LinkedIn:{' '}
								<a href="https://linkedin.com/in/vogue-dev/">https://linkedin.com/in/vogue-dev/</a>
							</li>
						</ul>
					),
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
