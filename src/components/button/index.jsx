import React from "react";

import styled from "styled-components";

export default function Button(props) {
  const { className, children, onClick, disabled } = props;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export const ButtonPrimary = styled(Button)`
  background-color: ${(props) => props.theme.colors.bgRedSecond};
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 30px;
  border-radius: 20px;
  font-size: ${(props) => props.theme.fontSize.subHead};
  font-weight: 600;
  &:hover {
    transition: 0.8s;
    box-shadow: 0px 0px 10px rgba(208, 68, 68, 1);
  }
`;

export const ButtonSecondary = styled(Button)`
  color: ${(props) => props.theme.colors.bgRedSecond};
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.bgRedSecond};
  padding: 10px 30px;
  border-radius: 20px;
  font-size: ${(props) => props.theme.fontSize.subHead};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.bgRedSecond};
    color: white;
    border: none;
    transition: 0.8s;
    box-shadow: 0px 0px 10px rgba(208, 68, 68, 1);
  }
`;
