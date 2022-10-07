import React from "react";

import { Column, Row, Img, Button, Stack, Text, List } from "components";

const FrameFourteenPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-firasans items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Row className="bg-bluegray_900 items-center justify-end lg:pl-[14px] xl:pl-[18px] 2xl:pl-[20px] 3xl:pl-[24px] shadow-bs w-[100%]">
            <Img
              src="images/img_menu.svg"
              className="lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px] lg:w-[21px] xl:w-[27px] 2xl:w-[30px] 3xl:w-[36px]"
              alt="menu"
            />
            <Button
              className="font-bold lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[21px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-center w-[96%]"
              size="sm"
              variant="FillBluegray900"
            >
              HANDLINGS | DISPONÍVEIS
            </Button>
          </Row>
          <Column className="items-center justify-end lg:pl-[18px] xl:pl-[22px] 2xl:pl-[25px] 3xl:pl-[30px] lg:py-[18px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] w-[100%]">
            <Stack className="lg:h-[524px] xl:h-[655px] 2xl:h-[737px] 3xl:h-[884px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Column className="absolute items-center justify-start lg:pb-[35px] xl:pb-[44px] 2xl:pb-[49px] 3xl:pb-[59px] right-[3%] w-[97%]">
                <Row className="bg-white_A700 items-start justify-evenly pb-[2px] w-[100%]">
                  <Img
                    src="images/img_separator.svg"
                    className="separator1"
                    alt="separator"
                  />
                  <Column className="bg-white_A700 items-center justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] w-[13%]">
                    <Text
                      className="mb-[1px] text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      ATIVIDADE
                    </Text>
                  </Column>
                  <Img
                    src="images/img_separator.svg"
                    className="separator1"
                    alt="separator One"
                  />
                  <Column className="bg-white_A700 items-center justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[12%]">
                    <Text className="header3" as="h4" variant="h4">
                      SERVIÇO
                    </Text>
                  </Column>
                  <Img
                    src="images/img_separator.svg"
                    className="separator1"
                    alt="separator Two"
                  />
                  <Column className="bg-white_A700 items-center justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] w-[17%]">
                    <Text
                      className="mb-[1px] text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      CONTAINER
                    </Text>
                  </Column>
                  <Img
                    src="images/img_separator.svg"
                    className="separator1"
                    alt="separator Three"
                  />
                  <Column className="bg-white_A700 items-center justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[12%]">
                    <Text className="header3" as="h4" variant="h4">
                      ENDEREÇO
                    </Text>
                  </Column>
                  <Img
                    src="images/img_separator.svg"
                    className="separator1"
                    alt="separator Four"
                  />
                  <Column className="bg-white_A700 items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] w-[16%]">
                    <Text
                      className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      DATA PREVISÃO
                    </Text>
                  </Column>
                  <Img
                    src="images/img_separator.svg"
                    className="separator1"
                    alt="separator Five"
                  />
                  <div className="bg-white_A700 lg:h-[44px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] w-[13%]"></div>
                  <Img
                    src="images/img_separator.svg"
                    className="separator1"
                    alt="separator Six"
                  />
                </Row>
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="items-center justify-evenly lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[13%]">
                      <Text className="data4" as="h3" variant="h3">
                        HANDLING
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[12%]">
                      <Text className="data4" as="h3" variant="h3">
                        DESCARGA
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[17%]">
                      <Text className="data5" as="h3" variant="h3">
                        {" "}
                        UCTR454545460
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[12%]">
                      <Text className="data4" as="h3" variant="h3">
                        A313
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[22px] xl:pr-[28px] 2xl:pr-[31px] 3xl:pr-[38px] lg:py-[22px] xl:py-[28px] 2xl:py-[31px] 3xl:py-[38px] w-[16%]">
                      <Text className="data6" as="h3" variant="h3">
                        10/10/2022 10:00
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 items-center lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[13%]">
                      <Button
                        className="flex lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center rounded-radius50 lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                        size="smIcn"
                        variant="icbFillGreenA700"
                      >
                        <Img
                          src="images/img_playarrow.svg"
                          className="flex items-center justify-center lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px]"
                          alt="playarrow"
                        />
                      </Button>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                  </Row>
                  <Row className="items-center justify-evenly lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[13%]">
                      <Text className="data4" as="h3" variant="h3">
                        HANDLING
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[12%]">
                      <Text className="data4" as="h3" variant="h3">
                        DESCARGA
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[17%]">
                      <Text className="data5" as="h3" variant="h3">
                        {" "}
                        UCTR454545460
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[12%]">
                      <Text className="data4" as="h3" variant="h3">
                        A313
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[22px] xl:pr-[28px] 2xl:pr-[31px] 3xl:pr-[38px] lg:py-[22px] xl:py-[28px] 2xl:py-[31px] 3xl:py-[38px] w-[16%]">
                      <Text className="data6" as="h3" variant="h3">
                        10/10/2022 10:00
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 items-center lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[13%]">
                      <Button
                        className="flex lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center rounded-radius50 lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                        size="smIcn"
                        variant="icbFillGreenA700"
                      >
                        <Img
                          src="images/img_playarrow.svg"
                          className="flex items-center justify-center lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px]"
                          alt="playarrow One"
                        />
                      </Button>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                  </Row>
                  <Row className="items-center justify-evenly lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[13%]">
                      <Text className="data4" as="h3" variant="h3">
                        HANDLING
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[12%]">
                      <Text className="data4" as="h3" variant="h3">
                        CARGA
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[17%]">
                      <Text className="data4" as="h3" variant="h3">
                        BOOK1234#01
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[12%]">
                      <Text className="data4" as="h3" variant="h3">
                        A313
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[22px] xl:pr-[28px] 2xl:pr-[31px] 3xl:pr-[38px] lg:py-[22px] xl:py-[28px] 2xl:py-[31px] 3xl:py-[38px] w-[16%]">
                      <Text className="data6" as="h3" variant="h3">
                        10/10/2022 10:00
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 items-center lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[13%]">
                      <Button
                        className="flex lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center rounded-radius50 lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                        size="smIcn"
                        variant="icbFillGreenA700"
                      >
                        <Img
                          src="images/img_playarrow.svg"
                          className="flex items-center justify-center lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px]"
                          alt="playarrow Two"
                        />
                      </Button>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                  </Row>
                  <Row className="items-center justify-evenly lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[13%]">
                      <Text className="data4" as="h3" variant="h3">
                        HANDLING
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[12%]">
                      <Text className="data4" as="h3" variant="h3">
                        CARGA
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[17%]">
                      <Text className="data4" as="h3" variant="h3">
                        BOOK1234#01
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[12%]">
                      <Text className="data4" as="h3" variant="h3">
                        A313
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[22px] xl:pr-[28px] 2xl:pr-[31px] 3xl:pr-[38px] lg:py-[22px] xl:py-[28px] 2xl:py-[31px] 3xl:py-[38px] w-[16%]">
                      <Text className="data6" as="h3" variant="h3">
                        10/10/2022 10:00
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 items-center lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[13%]">
                      <Button
                        className="flex lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center rounded-radius50 lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                        size="smIcn"
                        variant="icbFillGreenA700"
                      >
                        <Img
                          src="images/img_playarrow.svg"
                          className="flex items-center justify-center lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px]"
                          alt="playarrow Three"
                        />
                      </Button>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                  </Row>
                  <Row className="items-center justify-evenly lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[13%]">
                      <Text className="data4" as="h3" variant="h3">
                        HANDLING
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[12%]">
                      <Text className="data4" as="h3" variant="h3">
                        MOVTO
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[17%]">
                      <Text className="data5" as="h3" variant="h3">
                        {" "}
                        UCTR454545460
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[30px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[51px] lg:py-[30px] xl:py-[38px] 2xl:py-[43px] 3xl:py-[51px] w-[12%]">
                      <Text className="data4" as="h3" variant="h3">
                        A313
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 lg:pr-[22px] xl:pr-[28px] 2xl:pr-[31px] 3xl:pr-[38px] lg:py-[22px] xl:py-[28px] 2xl:py-[31px] 3xl:py-[38px] w-[16%]">
                      <Text className="data6" as="h3" variant="h3">
                        10/10/2022 10:00
                      </Text>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                    <Column className="bg-white_A700 items-center lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[13%]">
                      <Button
                        className="flex lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] items-center justify-center rounded-radius50 lg:w-[54px] xl:w-[67px] 2xl:w-[76px] 3xl:w-[91px]"
                        size="smIcn"
                        variant="icbFillGreenA700"
                      >
                        <Img
                          src="images/img_playarrow.svg"
                          className="flex items-center justify-center lg:h-[22px] xl:h-[28px] 2xl:h-[31px] 3xl:h-[37px]"
                          alt="playarrow Four"
                        />
                      </Button>
                    </Column>
                    <div className="bg-white_A700 xl:h-[102px] 2xl:h-[115px] 3xl:h-[138px] lg:h-[82px] w-[2%]"></div>
                  </Row>
                </List>
              </Column>
              <Stack className="absolute bg-light_blue_900 lg:h-[440px] xl:h-[550px] 2xl:h-[619px] 3xl:h-[742px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] right-[0] rotate-[180deg] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] top-[5%] w-[3%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="absolute lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] inset-[0] justify-center m-[auto] w-[71%]"
                  alt="arrowleft"
                />
              </Stack>
            </Stack>
            <Row className="bg-white_A700 items-center justify-between xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[95%]">
              <Text
                className="not-italic text-gray_700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Página 1 de 21 (210 itens)
              </Text>
              <Row className="items-start justify-between my-[3px] w-[40%]">
                <Text
                  className="bg-light_blue_900 flex font-bold items-center lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] rounded-radius2 text-white_A700 w-[20px]"
                  as="h5"
                  variant="h5"
                >
                  1
                </Text>
                <Column className="items-center justify-start mt-[1px] rounded-radius2 w-[2%]">
                  <Text
                    className="font-bold text-light_blue_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    2
                  </Text>
                </Column>
                <Column className="items-center justify-start mt-[1px] rounded-radius2 w-[2%]">
                  <Text
                    className="font-bold text-light_blue_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    3
                  </Text>
                </Column>
                <Column className="items-center justify-start mt-[1px] rounded-radius2 w-[2%]">
                  <Text
                    className="font-bold text-light_blue_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    4
                  </Text>
                </Column>
                <Column className="items-center justify-start mt-[1px] rounded-radius2 w-[2%]">
                  <Text
                    className="font-bold text-light_blue_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    5
                  </Text>
                </Column>
                <Column className="items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] rounded-radius4 w-[4%]">
                  <Text className="text-gray_700 w-[auto]" variant="body2">
                    . . .
                  </Text>
                </Column>
                <Column className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-start mt-[1px] rounded-radius2 lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]">
                  <Text
                    className="flex font-bold items-center text-light_blue_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    21
                  </Text>
                </Column>
              </Row>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FrameFourteenPage;
