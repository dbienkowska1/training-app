import "./Button.css";

const Button = ({ icon, iconDescription, title }) => {
  return (
    <button>
      {icon && (
        <img src={icon} alt={iconDescription} className="button-icon"></img>
      )}
      <span>{title}</span>
    </button>
  );
};

export default Button;
