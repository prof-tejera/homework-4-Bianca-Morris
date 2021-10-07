import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  background-color: #a5d1a1;
  width: 35px;
  text-align: center;
  align-self: center;
`;

class Operator extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}

export default Operator;
