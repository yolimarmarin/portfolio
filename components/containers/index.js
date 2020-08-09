import style from "../../styles/Containers.module.css";
import * as Icon from "react-feather";
import { PrimaryCards } from "../cards";

const FooterContainer = () => {

  const OnClickMail = () =>
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=yolimar.ma83@gamil.com"
    );

  const OnClickLinkedIn = () =>
    window.open("https://www.linkedin.com/in/yolimarmarin/");

  const OnClickGitHub = () => window.open("https://github.com/yolimarmarin");

  return (
    <div className={style.footerContainer}>
      <Icon.Mail onClick={OnClickMail} />
      <Icon.Linkedin onClick={OnClickLinkedIn} />
      <Icon.GitHub onClick={OnClickGitHub} />
    </div>
  );
};

const PrimaryCardsContainer = ({cards}) => {
  return(
    <div className={style.PrimaryCardsContainer}>
      {cards.map((card,key)=>
      <PrimaryCards key={key} title={card.title} text={card.description} icon={card.icon}/>
      )}
    </div>
  )
}

export { FooterContainer,PrimaryCardsContainer };
