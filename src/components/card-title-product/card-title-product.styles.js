import styled from "styled-components";

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.5s;
  padding: 10px 30px;
  border-radius: 5px;
  color: ${(props) => (props.active ? "white" : props.theme.colors.bgGrey)};
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? props.theme.colors.bgRedSecond : "white"};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.bgRedSecond};
  }
`;
