import styled from "styled-components";
import Link from "next/link";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  color: ${(props) => props.theme.colors.bgGrey};
  font-size: ${(props) => props.theme.fontSize.captions};
  align-items: center;
`;

export const NavbarRight = styled.div`
  display: flex;
  gap: 30px;
  .navbar {
    font-weight: 300;
    color: ${(props) => props.theme.colors.bgGrey};
    &:hover {
      color: ${(props) => props.theme.colors.bgRedPrimary};
    }
  }
  .navbar-active {
    color: red;
    font-weight: 300;

    color: ${(props) => props.theme.colors.bgRedPrimary};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
