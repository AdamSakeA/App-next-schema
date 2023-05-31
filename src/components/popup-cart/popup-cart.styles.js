import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 147%;
  top: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  h3 {
    font-size: ${(props) => props.theme.fontSize.head};
    margin: 30px 0;
  }
`;

export const Contents = styled.div`
  border-radius: 20px;
  width: 600px;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.bgRedPrimary};
  padding: 30px 50px;
`;

export const HeadContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .title-popup__cart {
    color: white;
    font-weight: 300;
    font-size: ${(props) => props.theme.fontSize.head};
  }
`;
