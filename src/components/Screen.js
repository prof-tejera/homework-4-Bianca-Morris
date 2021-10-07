import { Component } from 'react';
import styled from 'styled-components';

import { propTypes } from './propTypes';

const Container = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 70px;
  text-align: right;
  margin-bottom: 10px;
  box-shadow: inset 0px 0px 21px -3px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: row-reverse;
  font-size: 1.5em;
  align-items: center;
`;

const InnerContainer = styled.div`
  overflow-x: scroll;
  direction: rtl;
  height: 100%;
`;

class Screen extends Component {
  render() {
    const { value, operator = null, second } = this.props;
    
    const opToRender = operator === "=" || second ? null: operator;
    return (
      <Container>
        <InnerContainer>
          {value} <div>{opToRender}</div>
        </InnerContainer>
      </Container>
    );
  }
}
Screen.propTypes = {
  value: propTypes.value,
  operator: propTypes.operator,
  second: propTypes.second
}

export default Screen;
