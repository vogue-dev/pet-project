import React, { Component } from 'react';
import './Header.scss';
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
					<div className="header__mobile">
						<div className="header__mobile--button" onClick={() => this.props.toggleModalRight()}>
							<svg
								viewBox="0 0 24 24"
								fill="white"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="feather feather-list">
								<line x1="8" y1="6" x2="21" y2="6"></line>
								<line x1="8" y1="12" x2="21" y2="12"></line>
								<line x1="8" y1="18" x2="21" y2="18"></line>
								<line x1="3" y1="6" x2="3" y2="6"></line>
								<line x1="3" y1="12" x2="3" y2="12"></line>
								<line x1="3" y1="18" x2="3" y2="18"></line>
							</svg>
						</div>
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
