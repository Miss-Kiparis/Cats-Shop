import PropTypes from "prop-types";

const Input = (props) => {
  const {
    type,
    name,
    placeholder,
    errors,
    errorMessage,
    id,
    htmlFor,
    onChange,
    onBlur,
    value,
  } = props;
  return (
    <>
      <input
        id={id}
        className="input__style"
        placeholder={placeholder}
        type={type}
        name={name}
        htmlFor={htmlFor}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {errors && <p className="error__text">{errorMessage}</p>}
    </>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Input;
