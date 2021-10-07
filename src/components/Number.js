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
  cursor: pointer;
`;

class Number extends Component {
  render() {
    const { onClick, value } = this.props;
    return (
      <Container
        onClick={() => onClick(value)}>
        {value}
      </Container>
    );
  }
}
Number.propTypes = {
  value: propTypes.value,
  onClick: propTypes.onClick
}

export default Number;
