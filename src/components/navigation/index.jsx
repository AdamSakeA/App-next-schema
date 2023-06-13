import styles from "./navigation.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useMobile } from "@/src/hooks";

export default function Navigation({ navLink }) {
  const router = useRouter();
  const [navToggle, setNavToggle] = useState(false);
  const { isMobile } = useMobile();

  const handledNavToggle = () => {
    setNavToggle((prevToggle) => !prevToggle);
  };

  const IconToggle = () => {
    if (navToggle) {
      return (
        <FaTimes
          className={styles.icon__toggle_closed}
          onClick={handledNavToggle}
        />
      );
    } else {
      return (
        <FaBars
          className={styles.icon__toggle_bar}
          onClick={handledNavToggle}
        />
      );
    }
  };

  // render
  if (isMobile) {
    return (
      <>
        <nav className={styles.navbar}>
          <h2 className={styles.title_navbar}>Sate Taichan Bu Cin</h2>
          <IconToggle />
        </nav>
        {navToggle && <NavbarContents navLink={navLink} router={router} />}
      </>
    );
  } else {
    return (
      <>
        <nav className={styles.navbar}>
          <h2 className={styles.title_navbar}>Sate Taichan Bu Cin</h2>
          <NavbarContents navLink={navLink} router={router} />
        </nav>
      </>
    );
  }
}

const NavbarContents = ({ navLink, router }) => {
  const isActive = (item) => {
    const route = router.pathname !== item.url;
    if (route) {
      return styles.navbar_contents__link;
    } else {
      return `${styles.navbar_contents__link} ${styles.active}`;
    }
  };

  const showLink = navLink.map((item, i) => (
    <Link className={isActive(item)} href={item.url} key={i}>
      {item.name}
    </Link>
  ));

  return <div className={styles.navbar_contents}>{showLink}</div>;
};
