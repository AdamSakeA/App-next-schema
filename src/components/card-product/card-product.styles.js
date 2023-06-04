import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 320px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
  .image-card__product {
    border-radius: 10px;
    margin-bottom: 20px;
    object-fit: cover;
  }
  .icon-cart__product {
    position: absolute;
    background-color: white;
    color: ${(props) => props.theme.colors.bgRedSecond};
    margin: 10px;
    opacity: 0.8;
    cursor: pointer;
    transition: 0.5s;
    font-size: 24px;
    padding: 10px 15px;
    &:hover {
      background-color: ${(props) => props.theme.colors.bgRedSecond};
      color: white;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .title-card {
    font-size: ${(props) => props.theme.fontSize.subHead};
  }
  .desc-card {
    font-size: ${(props) => props.theme.fontSize.body};
    font-weight: 300;
  }
  .price-card {
    font-size: ${(props) => props.theme.fontSize.subHead};
    color: ${(props) => props.theme.colors.bgRedSecond};
  }
`;
