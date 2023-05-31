import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .input-error {
    color: ${(props) => props.theme.colors.bgRedSecond};
  }
`;

export const Input = styled.input`
  border-radius: 20px;
  width: 200px;
  padding: 5px 10px;
  border: 1px solid black;
`;

export const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextArea = styled.textarea`
  width: 400px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
  font-family: "Helvetica", "Roboto", sans-serif;
`;
