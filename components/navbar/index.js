import style from "../../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import * as Icon from "react-feather";

const NavBarMobile = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const onClickShowMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
      displayMenu ? (
        <div className={style.containerMobile}>
          <div className={style.containerShowMenu}>
          <Icon.XCircle onClick={onClickShowMenu} />
          </div>
          <img
            src="/profile.jpg"
            className={style.navPhoto}
            alt="Yolimar Marin"
          />
          <div className={style.options}>
            <Link href="/">
              <a className="routingButton">Home</a>
            </Link>
            <Link href="/about">
              <a className="routingButton">About Me</a>
            </Link>
            <Link href="/portfolio">
              <a className="routingButton">Portfolio</a>
            </Link>
            <Link href="/skills">
              <a className="routingButton">Skills</a>
            </Link>
          </div>
        </div>
      ) : <div className={style.containerShowMenu}>
        <Icon.Menu onClick={onClickShowMenu} />
      </div>
  );
};

const NavBar = () => {
  return (
    <>
      <div className={style.container}>
        <img
          src="/profile.jpg"
          className={style.navPhoto}
          alt="Yolimar Marin"
        />
        <div className={style.options}>
          <Link href="/">
            <a className="routingButton">Home</a>
          </Link>
          <Link href="/about">
            <a className="routingButton">About Me</a>
          </Link>
          <Link href="/portfolio">
            <a className="routingButton">Portfolio</a>
          </Link>
          <Link href="/skills">
            <a className="routingButton">Skills</a>
          </Link>
        </div>
      </div>
      <NavBarMobile />
    </>
  );
};

export { NavBar };
