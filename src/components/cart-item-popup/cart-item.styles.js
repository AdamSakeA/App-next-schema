import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: white;
  gap: 30px;
  align-items: center;
  margin-bottom: 20px;
  .image-cart__item {
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .title-cart__item {
    font-size: ${(props) => props.theme.fontSize.head};
  }

  .body-cart__item {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .quantity-cart__item {
    font-size: ${(props) => props.theme.fontSize.subHead};
    font-weight: 600;
  }
`;
