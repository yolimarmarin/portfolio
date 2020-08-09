import style from "../../styles/Buttons.module.css";

const RoutingButton = ({ title, onClick, active }) => {
  return (
    <button
      className={`${style.routingButton} ${active ? style.activeButton : null}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export { RoutingButton };
