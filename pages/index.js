import Head from "next/head";
import style from "../styles/Home.module.css";
import { FooterContainer } from "../components/containers";
import {RoutingButton} from '../components/buttons'
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={style.container}>
      <Head>
        <title>Yolimar Marin - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.title}>Hi! I'm Yoli</div>

      <img src="/profile.jpg" className={style.profile} alt="Yolimar Marin" />

      <div className={style.subtitle}>I'm a Web Engineer.</div>

      <div className={style.text}>
        I found my love towards programming 3 years ago while I was finishing my
        major in Electrical Engineering, and, ever since, I have been learning
        about this fascinating world, improving my knowledge and skills.
      </div>

      <div className={style.buttons}>
        <RoutingButton title="About Me" onClick={() => router.push("/about")} />
        <RoutingButton
          title="Portfolio"
          onClick={() => router.push("/portfolio")}
        />
        <RoutingButton title="Skills" onClick={() => router.push("/skills")} />
      </div>

      <FooterContainer />
    </div>
  );
}
