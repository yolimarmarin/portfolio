import Head from "next/head";
import { firebase } from "../data/firebase";
import style from "../styles/Skills.module.css";
import { FooterContainer } from "../components/containers";
import { NavBar } from "../components/navbar";
import CircularProgressBar from "../components/circular-progress-bar";
import Loader from '../components/loader';

export default function Skills(props) {
  const { skills } = props;

  return (
    skills.length !== 0 ?
    <div className="mainContainer">
      <Head>
        <title>Yolimar Marin - Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={style.sectionContainer}>
        <div className="title">My Skills</div>
        <div className={style.contentContainer}>
          {skills.map((skill, key) => (
            <div className={style.skillContainer} key={key}>
              <CircularProgressBar percentage={skill.level} />
              <div className={style.skillTitle}>{skill.title}</div>
            </div>
          ))}
        </div>
      </div>

      <FooterContainer />
    </div>:
    <Loader/>
  );
}

export async function getStaticProps() {
  const skills = [];

  await firebase
    .firestore()
    .collection("skills")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        skills.push({
          ...doc.data(),
        });
      });
    });

  return {
    props: {
      skills: skills.sort((a, b) => {
        return a.title.toUpperCase() < b.title.toUpperCase()
          ? -1
          : a.title.toUpperCase() > b.title.toUpperCase()
          ? 1
          : 0;
      }),
    },
  };
}
