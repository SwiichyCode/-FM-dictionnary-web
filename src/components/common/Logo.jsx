import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

export const Logo = () => {
  return <Img src={logo} />;
};

const Img = styled.img`
  width: 100%;
  max-width: 2.8rem;
`;
