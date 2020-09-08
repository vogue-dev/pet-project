import React, { Component } from 'react';

export default class Form extends Component {
	render() {
		return (
			<form onSubmit={this.props.gettingWeather} className="weather-form">
				<select name="city">
					<option value="Kiev" selected>
						Kiev
					</option>
					<option value="Moscow">Moscow</option>
					<option value="Minsk">Minsk</option>
					<option value="Lviv">Lviv</option>
					<option value="Donetsk">Donetsk</option>
				</select>

				{/* <input type="text" name="city" placeholder="Город"/> */}
				<button className="button-weather">Получить погоду</button>
			</form>
		);
	}
}
