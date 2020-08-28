import React, { Component } from 'react';
import CalculatorDisplay from './CalculatorDisplay/CalculatorDisplay.js';
import CalculatorKey from './CalculatorKey/CalculatorKey.js';
import './Calculator.scss';
// import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

const CalculatorOperations = {
	'/': (prevValue, nextValue) => prevValue / nextValue,
	'*': (prevValue, nextValue) => prevValue * nextValue,
	'+': (prevValue, nextValue) => prevValue + nextValue,
	'-': (prevValue, nextValue) => prevValue - nextValue,
	'=': (nextValue) => nextValue,
};

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null,
			displayValue: '0',
			operator: null,
			waitingForOperand: false,
		};
	}

	clearAll() {
		this.setState({
			value: null,
			displayValue: '0',
			operator: null,
			waitingForOperand: false,
		});
	}

	clearDisplay() {
		this.setState({
			displayValue: '0',
		});
	}

	clearLastChar() {
		const { displayValue } = this.state;

		this.setState({
			displayValue: displayValue.substring(0, displayValue.length - 1) || '0',
		});
	}

	toggleSign() {
		const { displayValue } = this.state;
		const newValue = parseFloat(displayValue) * -1;

		this.setState({
			displayValue: String(newValue),
		});
	}

	inputDigit(digit) {
		const { displayValue, waitingForOperand } = this.state;

		if (waitingForOperand) {
			this.setState({
				displayValue: String(digit),
				waitingForOperand: false,
			});
		} else {
			this.setState({
				displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
			});
		}
	}

	inputPercent() {
		const { displayValue } = this.state;
		const currentValue = parseFloat(displayValue);

		if (currentValue === 0) return;

		const fixedDigits = displayValue.replace(/^-?\d*\.?/, '');
		const newValue = parseFloat(displayValue) / 100;

		this.setState({
			displayValue: String(newValue.toFixed(fixedDigits.length + 2)),
		});
	}

	inputDot() {
		const { displayValue } = this.state;
		if (!/\./.test(displayValue)) {
			this.setState({
				displayValue: displayValue + '.',
				waitingForOperand: false,
			});
		}
	}

	performOperation(nextOperator) {
		const { value, displayValue, operator } = this.state;
		const inputValue = parseFloat(displayValue);

		if (value == null) {
			this.setState({
				value: inputValue,
			});
		} else if (operator) {
			const currentValue = value || 0;
			const newValue = CalculatorOperations[operator](currentValue, inputValue);

			this.setState({
				value: newValue,
				displayValue: String(newValue),
			});
		}

		this.setState({
			waitingForOperand: true,
			operator: nextOperator,
		});
	}

	handleKeyDown = (event) => {
		let { key } = event;

		if (key === 'Enter') key = '=';

		if (/\d/.test(key)) {
			event.preventDefault();
			this.inputDigit(parseInt(key, 10));
		} else if (key in CalculatorOperations) {
			event.preventDefault();
			this.performOperation(key);
		} else if (key === '.') {
			event.preventDefault();
			this.inputDot();
		} else if (key === '%') {
			event.preventDefault();
			this.inputPercent();
		} else if (key === 'Backspace') {
			event.preventDefault();
			this.clearLastChar();
		} else if (key === 'Clear') {
			event.preventDefault();

			if (this.state.displayValue !== '0') {
				this.clearDisplay();
			} else {
				this.clearAll();
			}
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown);
	}

	render() {
		const { displayValue } = this.state;
		const clearDisplay = displayValue === '0';
		const clearText = clearDisplay ? 'AC' : 'C';

		return (
			<section>
				<div className="container-content">
					<div className="calculator__wrap">
						<div className="calculator">
							<CalculatorDisplay displayValue={displayValue} />
							<div className="calculator__keyboard">
								<div className="input__keys">
									<div className="functional__keys">
										<CalculatorKey
											className="key-clear"
											onClick={() => (clearDisplay ? this.clearDisplay() : this.clearAll())}>
											{clearText}
										</CalculatorKey>
										<CalculatorKey className="key-sign" onClick={() => this.toggleSign()}>
											+/-
										</CalculatorKey>
										<CalculatorKey className="key-percent" onClick={() => this.inputPercent()}>
											%
										</CalculatorKey>
									</div>
									<div className="digit__keys">
										<CalculatorKey className="key-0" onClick={() => this.inputDigit(0)}>
											0
										</CalculatorKey>
										<CalculatorKey className="key-dot" onClick={() => this.inputDot()}>
											,
										</CalculatorKey>
										<CalculatorKey className="key-1" onClick={() => this.inputDigit(1)}>
											1
										</CalculatorKey>
										<CalculatorKey className="key-2" onClick={() => this.inputDigit(2)}>
											2
										</CalculatorKey>
										<CalculatorKey className="key-3" onClick={() => this.inputDigit(3)}>
											3
										</CalculatorKey>
										<CalculatorKey className="key-4" onClick={() => this.inputDigit(4)}>
											4
										</CalculatorKey>
										<CalculatorKey className="key-5" onClick={() => this.inputDigit(5)}>
											5
										</CalculatorKey>
										<CalculatorKey className="key-6" onClick={() => this.inputDigit(6)}>
											6
										</CalculatorKey>
										<CalculatorKey className="key-7" onClick={() => this.inputDigit(7)}>
											7
										</CalculatorKey>
										<CalculatorKey className="key-8" onClick={() => this.inputDigit(8)}>
											8
										</CalculatorKey>
										<CalculatorKey className="key-9" onClick={() => this.inputDigit(9)}>
											9
										</CalculatorKey>
									</div>
								</div>
								<div className="operator__keys">
									<CalculatorKey className="key-divide" onClick={() => this.performOperation('/')}>
										÷
									</CalculatorKey>
									<CalculatorKey
										className="key-multiply"
										onClick={() => this.performOperation('*')}>
										×
									</CalculatorKey>
									<CalculatorKey
										className="key-subtract"
										onClick={() => this.performOperation('-')}>
										−
									</CalculatorKey>
									<CalculatorKey className="key-add" onClick={() => this.performOperation('+')}>
										+
									</CalculatorKey>
									<CalculatorKey className="key-equals" onClick={() => this.performOperation('=')}>
										=
									</CalculatorKey>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Calculator;
