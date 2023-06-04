import React from "react";

import styled from "styled-components";

export default function Button(props) {
  const { className, children, onClick, disabled, onSubmit, type } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      onSubmit={onSubmit}
      type={type}
    >
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
  &:disabled {
    background-color: grey;
    box-shadow: none;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
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
  &:disabled {
    background-color: #969696;
    box-shadow: none;
    cursor: not-allowed;
    color: white;
    border: none;
  }
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.bgRedSecond};
    color: white;
    border: none;
    transition: 0.8s;
    box-shadow: 0px 0px 10px rgba(208, 68, 68, 1);
  }
`;
