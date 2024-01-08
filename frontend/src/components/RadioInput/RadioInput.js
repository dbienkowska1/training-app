import PropTypes from "prop-types";
import "./RadioInput.css";

const RadioInput = ({ value, checked, onChange }) => {
  return (
    <div className="radio">
      <input
        type="radio"
        id={value}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label>{value}</label>
    </div>
  );
};

RadioInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default RadioInput;
