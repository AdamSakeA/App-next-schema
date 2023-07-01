import styles from "./navigation.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useMobile } from "@/src/hooks";
import { Button } from "..";
import { useSession, signOut } from "next-auth/react";
import {
  navigationAdmin,
  navigationData as navLink,
} from "@/src/utils/navigationData";

export default function Navigation() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [navToggle, setNavToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { isMobile } = useMobile();

  const toggleDropdown = () => {
    setDropdown((prevDropdown) => !prevDropdown);
  };

  const handledNavToggle = () => {
    setNavToggle((prevToggle) => !prevToggle);
  };

  const handleSignOut = () => {
    router.push("/admin/signin");
    signOut();
  };

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
        <div className={styles.navbar_contents}>
          {showLink}
          <div className={styles.dropdown}>
            {status !== "authenticated" ? (
              <Button
                className={styles.navbar_contents__button}
                onClick={() => router.push("/admin/signin")}
              >
                Login Admin
              </Button>
            ) : (
              <>
                <Link
                  className={isActive(navigationAdmin)}
                  href={navigationAdmin.url}
                >
                  Dashboard Admin
                </Link>
                <Button onClick={signOut}>Sign Out</Button>
              </>
            )}
            {/* {status === "authenticated" && (
              <div>
                <Link href="/admin/dashboard">Dashboard Admin</Link>
                <button onClick={signOut}>Sign Out</button>
              </div>
            )} */}
          </div>
        </div>
        {/* {navToggle && (
          <NavbarContents
            navLink={navLink}
            router={router}
            session={session}
            status={status}
            signOut={handleSignOut}
          />
        )} */}
      </>
    );
  } else {
    return (
      <>
        <nav className={styles.navbar}>
          <h2 className={styles.title_navbar}>Sate Taichan Bu Cin</h2>
          <div className={styles.navbar_contents}>
            {showLink}
            <div className={styles.dropdown}>
              {status !== "authenticated" ? (
                <Button
                  className={styles.navbar_contents__button}
                  onClick={() => router.push("/admin/signin")}
                >
                  Login Admin
                </Button>
              ) : (
                <div onClick={toggleDropdown}>
                  <label>Hello {session.user.name}</label>
                  <FaChevronDown className={styles.dropdown__arrow} />
                </div>
              )}
              {status === "authenticated" && dropdown && (
                <div>
                  <Link href="/admin/dashboard">Dashboard Admin</Link>
                  <button onClick={signOut}>Sign Out</button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </>
    );
  }
}

const NavbarContents = ({ navLink, router, ...rest }) => {
  const { session, status, signOut } = rest;
  const [dropdown, setDropdown] = useState();
  // const isActive = (item) => {
  //   const route = router.pathname !== item.url;
  //   if (route) {
  //     return styles.navbar_contents__link;
  //   } else {
  //     return `${styles.navbar_contents__link} ${styles.active}`;
  //   }
  // };

  const toggleDropdown = () => {
    setDropdown((prevDropdown) => !prevDropdown);
  };

  const showLink = navLink.map((item, i) => (
    <Link className={isActive(item)} href={item.url} key={i}>
      {item.name}
    </Link>
  ));

  return (
    <div className={styles.navbar_contents}>
      {showLink}
      <div className={styles.dropdown}>
        {status !== "authenticated" ? (
          <Button
            className={styles.navbar_contents__button}
            onClick={() => router.push("/admin/signin")}
          >
            Login Admin
          </Button>
        ) : (
          <div onClick={toggleDropdown}>
            Hello {session.user.name}
            <FaChevronDown className={styles.dropdown__arrow} />
          </div>
        )}
        {status === "authenticated" && dropdown && (
          <>
            <button onClick={signOut}>Sign Out</button>
            <Link href="/admin/dashboard">Dashboard Admin</Link>
          </>
        )}
      </div>
    </div>
  );
};
