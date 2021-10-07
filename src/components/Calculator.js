import { Component } from "react";
import styled from 'styled-components';

import Number from "./Number";
import Operator from "./Operator/Operator";
import Screen from "./Screen";

class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      this.setState({ second: `${this.state.second || ""}${number}` });
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      const first = parseInt(this.state.first);
      const second = parseInt(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      }
    } else if (operator === "clear") {
      this.setState({ first: null, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  render() {
    const { operator, first, second } = this.state;

    const noNumberInputtedYet = first === null;
    const bothNumbersAndOpSelected = ((first || isNaN(first)) && (second))
    
    const disableOperators = !!(noNumberInputtedYet || bothNumbersAndOpSelected) ;
    const disableEquals = (first && (!second || isNaN(second)) || noNumberInputtedYet);

    const CalculatorWrapper = styled.div`
      background-color: #d1d8e3;
      width: 350px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      box-shadow: 2px 2px 10px rgba(0 , 0 , 0, 0.5);
    `;

    const NumPad = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    `;

    const OpPane = styled.div`
      padding-left: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-content: center;
      margin-left: 15px;
      border-left: 3px solid #dddddd;
    `;

    return (
      <CalculatorWrapper>
        <Screen value={this.getScreenValue()} {...{ operator, second }} />
        <div style={{ display: "flex", width: "300px" }}>
          <NumPad>
            <Number value={1} onClick={this.handleNumberClick} />
            <Number value={2} onClick={this.handleNumberClick} />
            <Number value={3} onClick={this.handleNumberClick} />
            <Number value={4} onClick={this.handleNumberClick} />
            <Number value={5} onClick={this.handleNumberClick} />
            <Number value={6} onClick={this.handleNumberClick} />
            <Number value={7} onClick={this.handleNumberClick} />
            <Number value={8} onClick={this.handleNumberClick} />
            <Number value={9} onClick={this.handleNumberClick} />
            <Number value={0} onClick={this.handleNumberClick} />
          </NumPad>
          <OpPane>
            <Operator value="+" onClick={this.handleOperatorClick} disabled={disableOperators}/>
            <Operator value="/" onClick={this.handleOperatorClick} disabled={disableOperators}/>
            <Operator value="x" onClick={this.handleOperatorClick} disabled={disableOperators}/>
            <Operator value="-" onClick={this.handleOperatorClick} disabled={disableOperators}/>
            <Operator value="=" onClick={this.handleOperatorClick} disabled={disableEquals} />
            <Operator value="clear" isClear onClick={this.handleOperatorClick} />
          </OpPane>
        </div>
      </CalculatorWrapper>
    );
  }
}

export default Calculator;
