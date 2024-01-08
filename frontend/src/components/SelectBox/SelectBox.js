import "./SelectBox.css";
import PropTypes from "prop-types";

const SelectBox = ({ options, label, onChange, value }) => {
  const mappedOptions = options.map((option, idx) => {
    return (
      <option key={idx} value={option}>
        {option}
      </option>
    );
  });

  return (
    <div className="input-div">
      <label>{label}</label>
      <select onChange={onChange} value={value}>
        {mappedOptions}
      </select>
    </div>
  );
};

SelectBox.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default SelectBox;
