import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  color: ${(props) => props.theme.colors.bgGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  .list-item__card {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;
