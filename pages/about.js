import Head from "next/head";
import { firebase } from "../data/firebase";
import style from "../styles/About.module.css";
import {
  FooterContainer,
  PrimaryCardsContainer,
} from "../components/containers";
import { NavBar } from "../components/navbar";
import { TimeLine } from "../components/timeline";
import Loader from '../components/loader';

export default function About(props) {
  const { hobbies, formation, experience } = props;

  return (
    hobbies.length !== 0 && formation.length !== 0 && experience.length !== 0 ? 
    <div className="mainContainer">
      <Head>
        <title>Yolimar Marin - About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={style.sectionContainer}>
        <div className='title'>My Hobbies</div>
        <div className={style.sectionContent}>
          <PrimaryCardsContainer cards={hobbies} />
        </div>
      </div>

      <div className={style.sectionContainer}>
        <div className='title'>My Formation</div>
        <div className={style.sectionContent}>
          <TimeLine items={formation} />
        </div>
      </div>

      <div className={style.sectionContainer}>
        <div className='title'>My Experience</div>
        <div className={style.sectionContent}>
          <TimeLine items={experience} />
        </div>
      </div>

      <FooterContainer />
    </div> :
    <Loader/>
  );
}

export async function getStaticProps() {
  const hobbies = [];
  const formation = [];
  const experience = [];

  await firebase
    .firestore()
    .collection("hobbies")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        hobbies.push({
          ...doc.data(),
          icon:
            doc.data().title === "Books"
              ? "/books.svg"
              : doc.data().title === "Music"
              ? "/music.svg"
              : "/runnig.svg",
        });
      });
    });

  await firebase
    .firestore()
    .collection("formation")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        formation.push({ ...doc.data() });
      });
    });

  await firebase
    .firestore()
    .collection("experience")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        experience.push({ ...doc.data() });
      });
    });

  return {
    props: {
      hobbies: hobbies,
      formation: formation.sort((a, b) => {
        return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
      }),
      experience: experience.sort((a, b) => {
        return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
      }),
    },
  };
}
