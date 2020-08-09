import Head from "next/head";
import { firebase, storage } from "../data/firebase";
import style from "../styles/Portfolio.module.css";
import { FooterContainer } from "../components/containers";
import { NavBar } from "../components/navbar";
import { useEffect, useState } from "react";
import { PortfolioCards } from "../components/cards";
import Loader from '../components/loader';

export default function Portfolio(props) {
  const [portfolio, setPortfolio] = useState([]);

  const getImages = async () => {
    const aux = [...portfolio]
    for (let work of props.portfolio) {
      await storage
        .refFromURL("gs://my-portfolio-c6a5a.appspot.com")
        .child(work.imgPath)
        .getDownloadURL()
        .then((url) => {
          if(portfolio.filter((portfolio_)=>portfolio_.title === work.title).length === 0){
            aux.push({ ...work, img: url });
          }      
        });
    }
    setPortfolio([...aux]);
  };

  useEffect(() => {
    if (props.portfolio) {
      getImages();
    }
  }, []);

  const onClickCard = (url) =>{
    window.open(url)
  }

  const isPortfolioReady = () =>{
    for(let work of portfolio){
      if(!work.img){ return false}
    }
    return true
  }

  return (
    isPortfolioReady() ?
    <div className="mainContainer">
      <Head>
        <title>Yolimar Marin - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className={style.sectionContainer}>
        <div className="title">My Projects</div>
        <div className={style.contentContainer}>
          {portfolio.map((work, key) =>
            <PortfolioCards
              key={key}
              title={work.title}
              text={work.description}
              img={work.img}
              callback={onClickCard}
              url={work.url}
              tags={work.tech}
            />
          )}
        </div>
      </div>

      <FooterContainer />
    </div> : 
    <Loader/>
  );
}

export async function getStaticProps() {
  const portfolio = [];

  await firebase
    .firestore()
    .collection("portfolio")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        portfolio.push({
          ...doc.data(),
        });
      });
    });

  return {
    props: {
      portfolio: portfolio,
    },
  };
}
