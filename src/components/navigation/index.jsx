import React from "react";
import { Navbar, StyledLink, NavbarRight } from "./navigation.styles";
import { useRouter } from "next/router";

export default function Navigation({ navLink, active }) {
  const router = useRouter();
  return (
    <Navbar>
      <h2>Sate Taichan Bu Cin</h2>
      <NavbarRight>
        {navLink.map((item, i) => {
          return (
            <div key={i}>
              <StyledLink href={item.url}>
                <h2
                  className={
                    router.pathname === item.url ? "navbar-active" : "navbar"
                  }
                >
                  {item.name}
                </h2>
              </StyledLink>
            </div>
          );
        })}
      </NavbarRight>
    </Navbar>
  );
}
