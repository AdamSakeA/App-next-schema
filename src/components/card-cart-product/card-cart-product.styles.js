import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 30px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.bgGrey};
  .img__cart {
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  .icon-cart__item {
    font-size: 12px;
  }
  .title-cart__item {
    font-size: ${(props) => props.theme.fontSize.subHead};
    font-weight: 600;
    margin-bottom: 10px;
  }

  .body-cart__item {
    display: flex;
    align-items: center;
    gap: 30px;
    /* justify-content: space-between; */
  }

  .quantity-container__item {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .price-cart__item {
    font-size: ${(props) => props.theme.fontSize.subHead};
    color: ${(props) => props.theme.colors.bgRedPrimary};
    font-weight: 600;
  }

  .quantity-cart__item {
    font-size: ${(props) => props.theme.fontSize.subHead};
    font-weight: 600;
  }
`;
