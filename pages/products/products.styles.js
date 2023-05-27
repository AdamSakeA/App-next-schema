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

export const Content = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProductTitleSideBar = styled.div`
  height: 100vh;
  color: black;
  overflow-y: scroll;
  flex: 3;
  color: ${(props) => props.theme.colors.bgGrey};
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: grey;
  }
`;

export const ProductSideBar = styled.div`
  flex: 8;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.colors.bgSecondary};
  border-radius: 20px;
  padding: 30px;
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: grey;
  }
`;
