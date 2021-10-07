import { Component } from 'react';
import styled from 'styled-components';

import { propTypes } from './propTypes';

const Container = styled.div`
  padding: 10px;
  width: 40px;
  height: 40px;
  background-color: #a1b4d1;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #0b2245;
  font-size: 2em;
  font-weight: 700px;
`;

class Number extends Component {
  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)}>
        {this.props.value}
      </Container>
    );
  }
}
Number.propTypes = {
  value: propTypes.value,
  onClick: propTypes.onClick
}

export default Number;
