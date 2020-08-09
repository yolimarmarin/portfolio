import Head from "next/head";
import style from "../styles/Home.module.css";
import { FooterContainer } from "../components/containers";
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Yolimar Marin - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.title}>Hi! I'm Yoli</div>

      <img src="/profile.jpg" className={style.profile} alt="Yolimar Marin"/>

      <div className={style.subtitle}>I'm a Front-End Developer.</div>

      <div className={style.text}>
        I found my love towards programming 3 years ago while I was finishing my
        major in Electrical Engineering, and, ever since, I have been learning
        about this fascinating world, improving my knowledge and skills.
      </div>

      <div className={style.buttons}>
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

      <FooterContainer />
    </div>
  );
}
