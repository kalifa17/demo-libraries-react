import React from "react";
import styled from "styled-components";
import Link from './Link.react';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const LinkSC = ({ className, children }) => (
  <a href="https://github.com" className={className}>{children}</a>
);
const StyledLink = styled(LinkSC)`
  color: palevioletred;
  font-weight: bold;
`;

const TextStyled = () => (
    <div>
        <StyledLink>Styled, exciting Link</StyledLink>
        <br />
        <Wrapper>
          <Title>Hello!</Title>
        </Wrapper>
        <Link>Link react jest</Link>
    </div>
);

export default TextStyled;