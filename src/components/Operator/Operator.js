import { Component } from 'react';
import styled from 'styled-components';

import { propTypes } from './../propTypes'
import "./Operator.css";

const Container = styled.div`
  padding: 10px;
  width: 35px;
  text-align: center;
  align-self: center;
`;

class Operator extends Component {
  render() {
    const { onClick, value, isClear, disabled } = this.props;
    const cls = `operator-btn ${disabled ? "disabled" : ""} ${isClear ?  "is-clear": ""}`;

    return (
      <Container
        className={cls}
        onClick={disabled ? undefined : () => onClick(value)}>
        {value}
      </Container>
    );
  }
}
Operator.propTypes = {
  value: propTypes.value,
  onClick: propTypes.onClick,
  isClear: propTypes.isClear,
  disabled: propTypes.disabled
}

export default Operator;
