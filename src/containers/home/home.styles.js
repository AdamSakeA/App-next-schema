import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  .wrapper-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
  }
  .button-container {
    display: flex;
    gap: 30px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.bgRedPrimary};
  line-height: 50px;
  font-size: ${(props) => props.theme.fontSize.title};
`;

export const Desc = styled.p`
  color: ${(props) => props.theme.colors.bgGrey};
  font-size: ${(props) => props.theme.fontSize.body};
  font-weight: 700;
  line-height: 16px;
`;
