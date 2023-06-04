import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 100px 0;
`;

export const ShopContainer = styled.div`
  flex: 5;
`;

export const ProductContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
  color: ${(props) => props.theme.colors.bgGrey};
  margin-top: 50px;
  justify-content: flex-start;
`;

export const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
