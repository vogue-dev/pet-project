import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from '../../pages/Calculator/Calculator.js';
import WeatherApp from '../../pages/WeatherApp/WeatherApp.js';
import MainPage from '../../pages/MainPage/MainPage.js';
import Clicker from '../../pages/Clicker/Clicker.js';
import Ecommerce from '../../pages/Ecommerce/Ecommerce.js';
import './Main.css';

export default class Main extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route path="/calculator" component={Calculator} />
				<Route path="/clicker" component={Clicker} />
				<Route path="/weather-app" component={WeatherApp} />
				<Route path="/ecommerce" component={Ecommerce} />
			</Switch>
		);
	}
}
