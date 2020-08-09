import style from "../../styles/Navbar.module.css";
import { useState } from "react";
import * as Icon from "react-feather";
import { useRouter } from "next/router";
import { RoutingButton } from "../buttons";

const NavBar = () => {
  const router = useRouter();

  const buildOptions = () =>
    [
      {
        title: "Home",
        onClick: () => router.push("/"),
        active: router.pathname === "/",
      },
      {
        title: "About Me",
        onClick: () => router.push("/about"),
        active: router.pathname === "/about",
      },
      {
        title: "Portfolio",
        onClick: () => router.push("/portfolio"),
        active: router.pathname === "/portfolio",
      },
      {
        title: "Skills",
        onClick: () => router.push("/skills"),
        active: router.pathname === "/skills",
      },
    ].map((option, key) => (
      <RoutingButton
        key={key}
        title={option.title}
        onClick={option.onClick}
        active={option.active}
      />
    ));

  const NavBarMobile = () => {
    const [displayMenu, setDisplayMenu] = useState(false);

    const onClickShowMenu = () => {
      setDisplayMenu(!displayMenu);
    };

    return displayMenu ? (
      <div className={style.containerMobile}>
        <div className={style.containerShowMenu}>
          <Icon.XCircle onClick={onClickShowMenu} />
        </div>
        <img
          src="/profile.jpg"
          className={style.navPhoto}
          alt="Yolimar Marin"
        />
        <div className={style.options}>{buildOptions()}</div>
      </div>
    ) : (
      <div className={style.containerShowMenu}>
        <Icon.Menu onClick={onClickShowMenu} />
      </div>
    );
  };

  return (
    <>
      <div className={style.container}>
        <img
          src="/profile.jpg"
          className={style.navPhoto}
          alt="Yolimar Marin"
        />
        <div className={style.options}>{buildOptions()}</div>
      </div>
      <NavBarMobile />
    </>
  );
};

export { NavBar };
