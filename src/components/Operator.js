import { Component } from 'react';
import styled from 'styled-components';

import { propTypes } from './propTypes';

const Container = styled.div`
  padding: 10px;
  width: 35px;
  text-align: center;
  align-self: center;
  cursor: pointer;
`;

class Operator extends Component {
  render() {
    const { onClick, value, isClear } = this.props;
    return (
      <Container 
        style={{
          backgroundColor: isClear ? "#9e4c4c": "#a5d1a1",
          color: isClear ? "#ffffff": "#21381f",
          fontWeight: isClear ? 500: 700,
        }}
        onClick={() => onClick(value)}>
        {value}
      </Container>
    );
  }
}
Operator.propTypes = {
  value: propTypes.value,
  onClick: propTypes.onClick,
  isClear: propTypes.isClear
}

export default Operator;
