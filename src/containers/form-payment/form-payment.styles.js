import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.bgGrey};

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 3;
  }
  .form__image {
    flex: 7;
  }
`;

export const Contents = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;
