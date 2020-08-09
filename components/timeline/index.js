import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import * as Icon from "react-feather";
import style from "../../styles/Timeline.module.css";

const TimeLineElement = ({ children, icon, date }) => {
  const iconStyle = {
    background: "#272928",
    boxShadow:
      "0 0 0 2px #c48445, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
  };

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "rgba(255, 255, 255, 0.05)", color: "#ffff" }}
      contentArrowStyle={{ borderRight: "7px solid  rgba(255, 255, 255, 0.1)" }}
      date={date}
      iconStyle={iconStyle}
      icon={
        icon === "code" ? (
          <Icon.Code />
        ) : icon === "major" ? (
          <Icon.Star />
        ) : icon === "language" ? (
          <Icon.Globe />
        ) : (
          <Icon.Briefcase />
        )
      }
    >
      {children}
    </VerticalTimelineElement>
  );
};

const TimeLine = ({ items }) => {
  return (
    <VerticalTimeline>
      {items.map((item, key) => (
        <TimeLineElement key={key} icon={item.type} date={item.date ?? item.company}>
          <h3 className={style.timelineTitle}>{item.title}</h3>
          {item.description ? (
            <div className={style.timelineText}>{item.description}</div>
          ) : null}
        </TimeLineElement>
      ))}
    </VerticalTimeline>
  );
};

export { TimeLine };
