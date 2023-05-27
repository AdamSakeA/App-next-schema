import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.bgGrey};
  .title-products {
    margin-bottom: 30px;
    font-size: ${(props) => props.theme.fontSize.Head};
  }
  .card-products {
    display: flex;
    gap: 40px;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;
