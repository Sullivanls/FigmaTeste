import React from "react";
const variantClasses = {
  h1: "font-normal lg:text-[30px] text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px]",
  h2: "font-normal lg:text-[22px] text-[24px] xl:text-[28px] 2xl:text-[31px] 3xl:text-[38px]",
  h3: "font-normal lg:text-[18px] text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[31px]",
  h4: "font-bold lg:text-[16px] text-[18px] xl:text-[21px] 2xl:text-[23px] 3xl:text-[28px]",
  h5: "lg:text-[15px] text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px]",
  h6: "font-normal lg:text-[13px] text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px]",
  body1:
    "lg:text-[11px] text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px]",
  body2:
    "font-bold text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
