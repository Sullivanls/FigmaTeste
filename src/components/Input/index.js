import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
};
const shapes = { RoundedBorder4: "rounded-radius4" };
const sizes = {
  sm: "xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[14px] lg:pb-[8px] pb-[9px] lg:pt-[5px] pt-[6px] 2xl:pt-[7px] xl:pt-[7px] 3xl:pt-[9px] lg:px-[5px] px-[6px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px]",
  md: "lg:pb-[5px] pb-[6px] 2xl:pb-[7px] xl:pb-[7px] 3xl:pb-[9px] xl:pt-[10px] 2xl:pt-[11px] 3xl:pt-[14px] lg:pt-[8px] pt-[9px] lg:px-[5px] px-[6px] 2xl:px-[7px] xl:px-[7px] 3xl:px-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf(["OutlineGray300"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder4",
  variant: "OutlineGray300",
  size: "sm",
};

export { Input };
