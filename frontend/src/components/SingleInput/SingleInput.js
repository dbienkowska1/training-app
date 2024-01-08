import "./SingleInput.css";
import PropTypes from "prop-types";

const SingleInput = ({ label, placeholder, type, value, onChange }) => {
  return (
    <div className="input-div">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SingleInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SingleInput;
