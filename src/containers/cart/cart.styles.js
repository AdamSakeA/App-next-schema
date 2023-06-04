import styled from "styled-components";

export const CartContainer = styled.div`
  flex: 2;
  padding: 20px 30px;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.bgGrey};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  .title__cart {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    /* font-size: ${(props) => props.theme.fontSize.body}; */
  }

  .cart__ordered {
    margin-bottom: 20px;
    font-size: ${(props) => props.theme.fontSize.subHead};
  }

  .list__cart {
    height: 70vh;
    color: black;
    overflow-y: scroll;
    color: ${(props) => props.theme.colors.bgGrey};
    margin: 30px 0;
    ::-webkit-scrollbar {
      width: 5px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
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
  }
`;
