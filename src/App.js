import React, { Component } from 'react';
import './App.css';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
    margin: 1em 1em;
`;

const TomatoAsButton = styled.button`
    color: tomato;
    border-color: tomato;
    margin: 1em 1em;
`;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const Thing = styled.button`
  color: blue;

  ::before {
    content: '🚀';
  }

  :hover {
    color: red;
  }
`;


class App extends Component {
  render() {
    return (
      <div className="App">
          <Button>Learn React</Button>
          <Button primary>Primary React</Button>
          <Wrapper>
            <Title>Hello!</Title>
          </Wrapper>
          <TomatoButton>Tomato React</TomatoButton>
          <Button as={TomatoAsButton}>Tomato As React</Button>
          <StyledLink>Styled, exciting Link</StyledLink>
          <br />
          <Thing as={Button}>Hello React</Thing>
      </div>
    );
  }
}

export default App;
