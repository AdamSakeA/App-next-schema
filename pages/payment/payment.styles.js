import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.title};
  color: ${(props) => props.theme.colors.bgRedPrimary};
  font-weight: 600;
`;

export const Desc = styled.p`
  font-size: ${(props) => props.theme.fontSize.body};
  font-weight: 300;
  color: ${(props) => props.theme.colors.bgGrey};
`;
