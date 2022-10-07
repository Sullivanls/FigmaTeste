import React from "react";

import { Row, Img, Button, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-cyan_700 items-center justify-between lg:pl-[15px] xl:pl-[18px] 2xl:pl-[21px] 3xl:pl-[25px] shadow-bs w-[100%]">
          <Img
            src="images/img_menu.svg"
            className="lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[39px] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[38px]"
            alt="menu"
          />
          <Img
            src="images/img_cut.svg"
            className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:w-[20px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
            alt="cut"
          />
          <Button
            className="font-bold font-firasans lg:text-[22px] xl:text-[28px] 2xl:text-[31px] 3xl:text-[38px] text-center w-[72%]"
            size="sm"
            variant="FillCyan700"
          >
            Criar agendamento de operação
          </Button>
          <Img
            src="images/img_alarm.svg"
            className="lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[39px] lg:w-[22px] xl:w-[28px] 2xl:w-[31px] 3xl:w-[38px]"
            alt="alarm"
          />
          <Row className="items-center justify-center lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] w-[14%]">
            <Text
              className="cursor-pointer font-firasans ml-[1px] not-italic text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              Fulano da Silva
            </Text>
            <Img
              src="images/img_arrowdown_24X16.svg"
              className="lg:h-[23px] xl:h-[29px] 2xl:h-[32px] 3xl:h-[39px] mb-[1px] ml-[4px] mr-[1px] w-[14%]"
              alt="arrowdown"
            />
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
