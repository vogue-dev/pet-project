import React, { Component } from 'react';
// import { Router } from 'react-router-dom'
import './MainPage.css';

export default class MainPage extends Component {
	render() {
		return (
			<main>
				<div className="container__main">
					<section>
						<div class="first__block">
							<div class="block__wrapper">
								<div className="content">Portfolio</div>
							</div>
						</div>
					</section>

					<section>
						<div class="second__block">
							<div class="block__wrapper">
								<div className="content">My works</div>
							</div>
						</div>
					</section>
				</div>
			</main>
		);
	}
}
