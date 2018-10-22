import React from "react";
import styled, { css } from "styled-components";
import TextStyled from "./TextStyled";
import { Route, Link } from "react-router-dom";

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

const Thing = styled.button`
  color: blue;

  ::before {
    content: "🚀";
  }

  :hover {
    color: red;
  }
`;


const StyledComponentsDemo = ({match}) => (
    <div>
        <Button>Learn React</Button>
        <Button primary>Primary React</Button>
        <TomatoButton>Tomato React</TomatoButton>
        <Button as={TomatoAsButton}>Tomato As React</Button>
        <Thing as={Button}>Hello React</Thing>
        <div>
          <nav>
            <Link to={match.url + "/styled-buttons"}>Styled Text demo</Link>
          </nav>
        </div>
        <div>
          <Route path={match.url + "/styled-buttons"} component={TextStyled} />
        </div>
    </div>
);

export default StyledComponentsDemo;