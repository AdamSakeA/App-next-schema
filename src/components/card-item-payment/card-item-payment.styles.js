import styled from "styled-components";

export const CardItem = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  width: 400px;
  margin-bottom: 20px;
  .image-card-item__payment {
    border-radius: 20px;
    object-fit: cover;
  }
`;

export const Body = styled.div`
  .title-card__payment {
    font-size: ${(props) => props.theme.fontSize.subHead};
    font-weight: 600;
    margin-bottom: 20px;
  }
  .desc-card__payment {
    font-size: ${(props) => props.theme.fontSize.subHead};
    font-weight: 300;
  }
`;
