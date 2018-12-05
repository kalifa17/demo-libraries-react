import { Link, Route } from 'react-router-dom';
import styled, { css } from 'styled-components';

import React from 'react';
import TextStyled from './TextStyled';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
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

const Thing = styled.button`
  color: blue;

  ::before {
    content: '🚀';
  }

  :hover {
    color: red;
  }
`;

const StyledComponentsDemo = ({ match }) => (
  <div>
    <Button>Learn React</Button>
    <Button primary>Primary React</Button>
    <TomatoButton>Tomato React</TomatoButton>
    <Button as={TomatoAsButton}>Tomato As React</Button>
    <Thing as={Button}>Hello React</Thing>
    <h1 css="color: red;">The css prop</h1>
    <Button
      css={css`
        color: ${(props) => props.theme.colors.text};
        background: ${(props) => props.theme.colors.primary};
        border-radius: ${(props) => (props.primary ? '4px' : '5px')};
        margin: '20px';
      `}
    >
      Click me (css prop)
    </Button>
    <div>
      <nav>
        <Link to={match.url + '/styled-buttons'}>Styled Text demo</Link>
      </nav>
    </div>
    <div>
      <Route path={match.url + '/styled-buttons'} component={TextStyled} />
    </div>
  </div>
);

export default StyledComponentsDemo;
