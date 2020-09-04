import React from 'react';
import './Clicker.scss';
// import ClickBlock from './ClickBlock/ClickBlock.js';

export default class Clicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			handleClick: 1,
			handleClickUpgrade: 100,
			clickPoints: 0,

			autoBotCoasts: 10,
			autoBotQuantity: 0,
			autoBotSpeed: 0,

			machineClickerCoasts: 100,
			machineClickerQuantity: 0,
			machineClickerSpeed: 0,

			factoryClickerCoasts: 1000,
			factoryClickerQuantity: 0,
			factoryClickerSpeed: 0,
		};
	}

	increment = () => {
		this.setState({ clickPoints: this.state.clickPoints + this.state.handleClick });
	};

	autoClicker = () => {
		if (this.state.clickPoints >= this.state.autoBotCoasts)
			this.setState({
				autoBotQuantity: this.state.autoBotQuantity + 1,
				clickPoints: this.state.clickPoints - this.state.autoBotCoasts,
				autoBotCoasts: (+this.state.autoBotCoasts * 1.05).toFixed(1),
			});
	};

	clickMachine = () => {
		if (this.state.clickPoints >= this.state.machineClickerCoasts)
			this.setState({
				machineClickerQuantity: this.state.machineClickerQuantity + 1,
				clickPoints: this.state.clickPoints - this.state.machineClickerCoasts,
				machineClickerCoasts: (+this.state.machineClickerCoasts * 1.05).toFixed(1),
			});
	};

	clickFactory = () => {
		if (this.state.clickPoints >= this.state.factoryClickerCoasts)
			this.setState({
				factoryClickerQuantity: this.state.factoryClickerQuantity + 1,
				clickPoints: this.state.clickPoints - this.state.factoryClickerCoasts,
				factoryClickerCoasts: (+this.state.factoryClickerCoasts * 1.05).toFixed(1),
			});
	};

	incrementUpgrade = () => {
		if (this.state.handleClick === 1 && this.state.clickPoints >= this.state.handleClickUpgrade)
			this.setState({
				handleClick: 2,
				clickPoints: this.state.clickPoints - this.state.handleClickUpgrade,
			});
	};

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick = () => {
		this.state.autoBotQuantity >= 1
			? this.setState({ clickPoints: this.state.clickPoints + 0.5 * this.state.autoBotQuantity })
			: this.setState({ clickPoints: this.state.clickPoints });
		this.state.machineClickerQuantity >= 1
			? this.setState({
					clickPoints: this.state.clickPoints + 3 * this.state.machineClickerQuantity,
			  })
			: this.setState({ clickPoints: this.state.clickPoints });
		this.state.factoryClickerQuantity >= 1
			? this.setState({
					clickPoints: this.state.clickPoints + 12 * this.state.factoryClickerQuantity,
			  })
			: this.setState({ clickPoints: this.state.clickPoints });
	};

	render() {
		return (
			<section>
				<div className="container-content">
					<div className="clicker-section">
						<div className="clicker__game">
							<div className="click__points">
								<div className="points">{+this.state.clickPoints.toFixed(1)}</div>
								<div className="points-per-sec">
									(per second: +
									{0.5 * this.state.autoBotQuantity +
										3 * this.state.machineClickerQuantity +
										12 * this.state.factoryClickerQuantity}
									)
								</div>
							</div>
							<div className="increment">
								<div className="increment-click" onClick={this.increment}>
									+{this.state.handleClick} cp/click
								</div>
								{this.state.handleClick === 1 &&
								this.state.clickPoints >= this.state.handleClickUpgrade ? (
									<div className="increment-click-upgrade active" onClick={this.incrementUpgrade}>
										LVL UP x2 ({this.state.handleClickUpgrade}cp)
									</div>
								) : (
									<div className="increment-click-upgrade" onClick={this.incrementUpgrade}>
										LVL UP x2 ({this.state.handleClickUpgrade}cp)
									</div>
								)}
							</div>
							{this.state.clickPoints >= this.state.autoBotCoasts ? (
								<div className="btn auto-clicker active" onClick={this.autoClicker}>
									<div>CLICK BOT (+{0.5 * this.state.autoBotQuantity} cp/sec)</div>
									<div>Buy price: {this.state.autoBotCoasts} cp</div>
									<div>Now: {this.state.autoBotQuantity}</div>
								</div>
							) : (
								<div className="btn auto-clicker" onClick={this.autoClicker}>
									<div>CLICK BOT (+{0.5 * this.state.autoBotQuantity} cp/sec)</div>
									<div>Buy price: {this.state.autoBotCoasts} cp</div>
									<div>Now: {this.state.autoBotQuantity}</div>
								</div>
							)}
							{this.state.clickPoints >= this.state.machineClickerCoasts ? (
								<div className="btn click-machine active" onClick={this.clickMachine}>
									<div>CLICK MACHINE (+{3 * this.state.machineClickerQuantity} cp/sec)</div>
									<div>Buy price: {this.state.machineClickerCoasts} cp</div>
									<div>Now: {this.state.machineClickerQuantity}</div>
								</div>
							) : (
								<div className="btn click-machine" onClick={this.clickMachine}>
									<div>CLICK MACHINE (+{3 * this.state.machineClickerQuantity} cp/sec)</div>
									<div>Buy price: {this.state.machineClickerCoasts} cp</div>
									<div>Now: {this.state.machineClickerQuantity}</div>
								</div>
							)}
							{this.state.clickPoints >= this.state.factoryClickerCoasts ? (
								<div className="btn click-factory active" onClick={this.clickFactory}>
									<div>CLICK FACTORY (+{12 * this.state.factoryClickerQuantity} cp/sec)</div>
									<div>Buy price: {this.state.factoryClickerCoasts} cp</div>
									<div>Now: {this.state.factoryClickerQuantity}</div>
								</div>
							) : (
								<div className="btn click-factory" onClick={this.clickFactory}>
									<div>CLICKER FACTORY (+{12 * this.state.factoryClickerQuantity} cp/sec)</div>
									<div>Buy price: {this.state.factoryClickerCoasts} cp</div>
									<div>Now: {this.state.factoryClickerQuantity}</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
