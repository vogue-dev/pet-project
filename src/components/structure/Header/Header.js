import React, { Component } from 'react';
import './Header.css';
import ModalRight from '../Modals/ModalRight/ModalRight.js';
import Logo from '../Logo/Logo.js';

export default class Header extends Component {
	render() {
		return (
			<header>
				<div className="container">
					<Logo />

					<div className="header-menu">
						<span onClick={() => this.props.handleClick(0)}>About me</span>
						<span onClick={() => this.props.toggleModalRight()}>Projects</span>
						<span onClick={() => this.props.handleClick(1)}>Technologies</span>
						<span onClick={() => this.props.handleClick(2)}>Contacts</span>
					</div>

					<div className="header-login">
						{this.props.isRegistered ? (
							<span onClick={() => this.props.handleClick(4)}>Logout</span>
						) : (
							<span onClick={() => this.props.handleClick(3)}>Login</span>
						)}
					</div>

					<ModalRight
						isActiveModalRight={this.props.isActiveModalRight}
						toggleModalRight={this.props.toggleModalRight}
					/>
				</div>
			</header>
		);
	}
}
