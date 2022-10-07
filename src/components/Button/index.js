import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder12: "rounded-radius12",
  RoundedBorder30: "rounded-radius30",
  icbCircleBorder30: "rounded-radius30",
};
const variants = {
  FillRed600: "bg-red_600 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-cyan_700",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  FillGray300: "bg-gray_300 text-white_A700",
  FillAmberA400: "bg-amber_A400 text-white_A700",
  FillCyan700: "bg-cyan_700 text-white_A700",
  icbFillGreenA700: "bg-green_A700",
};
const sizes = {
  sm: "lg:p-[12px] p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px]",
  md: "lg:p-[30px] p-[32px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[50px]",
  smIcn: "lg:p-[16px] p-[18px] xl:p-[21px] 2xl:p-[23px] 3xl:p-[28px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder12",
    "RoundedBorder30",
    "icbCircleBorder30",
  ]),
  variant: PropTypes.oneOf([
    "FillRed600",
    "FillWhiteA700",
    "FillBluegray900",
    "FillGray300",
    "FillAmberA400",
    "FillCyan700",
    "icbFillGreenA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
