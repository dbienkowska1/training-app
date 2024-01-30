import "./Button.css";
import PropTypes from "prop-types";

const Button = ({
  icon,
  iconDescription,
  title,
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`button ${className ? className : ""}`}
    >
      {icon && (
        <img src={icon} alt={iconDescription} className="button-icon"></img>
      )}
      <span>{title}</span>
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  iconDescription: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
