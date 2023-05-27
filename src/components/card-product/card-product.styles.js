import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  cursor: pointer;

  padding: 20px;
  border-radius: 20px;
  transition: 0.5s;
  &:hover {
    background-color: ${(props) => props.theme.colors.bgRedSecond};
    color: white;
  }
  .image-card__product {
    border-radius: 20px;
    margin-bottom: 20px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  .title-card {
    font-size: ${(props) => props.theme.fontSize.subHead};
  }
  .desc-card {
    font-size: ${(props) => props.theme.fontSize.body};
    font-weight: 300;
  }
  .price-card {
    font-size: ${(props) => props.theme.fontSize.subHead};
  }
`;
