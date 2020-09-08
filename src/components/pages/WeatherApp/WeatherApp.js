import React, { Component } from 'react';
import './WeatherApp.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './Info/Info.js';
import Form from './Form/Form.js';
import Weather from './Weather/Weather.js';

const API_KEY = '82b797b6ebc625032318e16f1b42c016';

export default class WeatherApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectCity: undefined,
			temp: undefined,
			city: undefined,
			country: undefined,
			pressure: undefined,
			sunrise: undefined,
			sunset: undefined,
			error: undefined,
			date: new Date(),
		};
	}

	gettingWeather = async (e) => {
		e.preventDefault();
		let city = e.target.elements.city.value;

		if (city) {
			const api_url = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
			);
			const data = await api_url.json();
			console.log(data);

			function time(ms) {
				let date = new Date(ms * 1000);
				let hours = date.getHours();
				// Minutes part from the timestamp
				let minutes = '0' + date.getMinutes();
				// Seconds part from the timestamp
				let seconds = '0' + date.getSeconds();
				return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
			}

			let sunrise = data.sys.sunrise;
			let sunset = data.sys.sunset;
			let sunrise_date = time(sunrise);
			let sunset_date = time(sunset);

			this.setState({
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				pressure: data.main.pressure,
				sunrise: sunrise_date,
				sunset: sunset_date,
				error: undefined,
			});
		} else {
			this.setState({
				temp: undefined,
				city: undefined,
				country: undefined,
				pressure: undefined,
				sunrise: undefined,
				sunset: undefined,
				error: 'Введите название города',
			});
		}
	};

	realTime() {
		this.setState({
			date: new Date(),
		});
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.realTime(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
		return (
			<section>
				<div className="container-content">
					<div className="weather-section">
						<div className="main">
							<div className="real__time">
								<div className="wrap">Now: {this.state.date.toLocaleTimeString()}</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="left-side info">
										<Info />
									</div>
									<div className="right-side form">
										<Form
											gettingWeather={this.gettingWeather}
											selectCity={this.state.selectCity}
											handleChange={this.handleChange}
										/>
										<Weather
											temp={this.state.temp}
											city={this.state.city}
											country={this.state.country}
											pressure={this.state.pressure}
											sunrise={this.state.sunrise}
											sunset={this.state.sunset}
											error={this.state.error}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
