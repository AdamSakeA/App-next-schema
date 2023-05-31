import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: ${(props) => props.theme.colors.bgWhite};
  margin-top: 50px;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.bgGrey};
  position: fixed;
  bottom: 50px;
  z-index: 999;
  width: 80%;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
  .title__cart {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;
