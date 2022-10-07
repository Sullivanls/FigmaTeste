import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const sizes = {
  sm: "lg:pb-[11px] pb-[12px] xl:pb-[14px] 2xl:pb-[15px] 3xl:pb-[19px] lg:pt-[19px] pt-[21px] xl:pt-[24px] 2xl:pt-[27px] 3xl:pt-[33px] lg:px-[11px] px-[12px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[19px]",
};

const FloatingInput = React.forwardRef(
  (
    {
      wrapClassName = "",
      className,
      name,
      labelClasses,
      wrapperClasses,
      labelText,
      defaultText,
      focusedClasses,
      errors = [],
      onChange,
      prefix,
      suffix,
      size,
      ...rest
    },
    ref
  ) => {
    const [value, setValue] = React.useState(defaultText || "");

    function handleChange(e) {
      setValue(e.target.value);
      onChange?.(e.target.value);
    }

    return (
      <div className={`${wrapClassName}   ${sizes[size] || ""}`}>
        {!!prefix && prefix}
        <div className={`input-container group ${wrapperClasses}`}>
          <input
            ref={ref}
            name={name}
            onChange={handleChange}
            className={`${className}`}
            placeholder=" "
            value={value}
            {...rest}
          />
          <label
            className={`transform group-focus-within:translate-y-[4px] group-focus-within:scale-[0.8] ${labelClasses} ${
              value ? "translate-y-[4px] scale-[0.8]" : focusedClasses
            } `}
          >
            {labelText}
          </label>
        </div>
        {!!suffix && suffix}
        {!!errors && <ErrorMessage errors={errors} />}
      </div>
    );
  }
);

FloatingInput.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  labelClasses: PropTypes.string,
  wrapperClasses: PropTypes.string,
  labelText: PropTypes.string,
  defaultText: PropTypes.string,
  focusedClasses: PropTypes.string,
  onChange: PropTypes.func,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  size: PropTypes.oneOf(["sm"]),
};
FloatingInput.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  labelClasses: "",
  wrapperClasses: "",
  labelText: "",
  defaultText: "",
  focusedClasses: "",
  prefix: null,
  suffix: null,
  size: "sm",
};

export { FloatingInput };
