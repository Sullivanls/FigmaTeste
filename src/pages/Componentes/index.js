import React from "react";

import {
  Stack,
  Row,
  Column,
  Img,
  Text,
  Line,
  List,
  SelectBox,
  Button,
  Input,
  Slider,
} from "components";

const ComponentesPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Stack className="font-firasans xl:h-[1063px] 2xl:h-[1196px] 3xl:h-[1435px] lg:h-[850px] mx-[auto] w-[100%]">
        <Row className="absolute items-start justify-between left-[0] top-[0] w-[65%]">
          <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius5 w-[49%]">
            <Column className="items-center justify-start xl:mt-[1px] lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] rounded-radius8 w-[99%]">
              <Row className="bg-light_blue_600 items-center justify-between xl:p-[1px] lg:p-[1px] 3xl:p-[2px] 2xl:p-[2px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                <Img src="images/img_eye.svg" className="eye" alt="eye" />
                <Row className="items-start justify-between xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[56%]">
                  <Text className="Title" as="h5" variant="h5">
                    MOVIMENTAÇÕES
                  </Text>
                  <Img
                    src="images/img_arrowdown_24X16.svg"
                    className="arrowright"
                    alt="arrowright"
                  />
                </Row>
              </Row>
              <Line className="bg-light_blue_600 h-[5px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]" />
            </Column>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] w-[99%]"
              orientation="vertical"
            >
              <Column className="items-center justify-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] rounded-radius8 w-[100%]">
                <SelectBox
                  className="font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px] text-white_A700 w-[100%]"
                  placeholderClassName="text-white_A700"
                  name="space One"
                  placeholder="MOVIMENTAÇÕES"
                  isSearchable={false}
                  isMulti={false}
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        src="images/img_eye.svg"
                        className="lg:w-[9px] lg:h-[10px] lg:mr-[10px] xl:w-[12px] xl:h-[13px] xl:mr-[13px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[17px]"
                        alt="eye"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="lg:w-[10px] lg:h-[11px] lg:mr-[1px] xl:w-[12px] xl:h-[14px] xl:mr-[1px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[2px] 3xl:w-[17px] 3xl:h-[18px] 3xl:mr-[2px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Column className="items-center justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Row className="items-center w-[96%]">
                    <Button
                      className="flex items-center justify-center text-center w-[13%]"
                      leftIcon={
                        <Img
                          src="images/img_close.svg"
                          className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder12"
                      size="md"
                      variant="FillRed600"
                    >
                      <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                        IGNORAR
                      </div>
                    </Button>
                    <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                      <Text className="Input" variant="body1">
                        Container
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="columntext" as="h2" variant="h2">
                          UCTR454545460
                        </Text>
                      </Column>
                    </Column>
                    <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                      <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="columntext" as="h2" variant="h2">
                          ABC-12345
                        </Text>
                      </Column>
                      <Text className="Label_One" variant="body1">
                        Origem
                      </Text>
                    </Stack>
                    <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                      <Text className="Input" variant="body1">
                        Destino
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="columntext" as="h2" variant="h2">
                          A313
                        </Text>
                      </Column>
                    </Column>
                    <Row className="bg-green_A700 items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius12 w-[13%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark"
                        alt="checkmark"
                      />
                      <Text className="rowcheckmark" as="h5" variant="h5">
                        OK
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                    <Button
                      className="flex items-center justify-center text-center w-[13%]"
                      leftIcon={
                        <Img
                          src="images/img_close.svg"
                          className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder12"
                      size="md"
                      variant="FillRed600"
                    >
                      <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                        IGNORAR
                      </div>
                    </Button>
                    <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                      <Text className="Input" variant="body1">
                        Container
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="columntext" as="h2" variant="h2">
                          UCTR454545460
                        </Text>
                      </Column>
                    </Column>
                    <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                      <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="columntext" as="h2" variant="h2">
                          ABC-12345
                        </Text>
                      </Column>
                      <Text className="Label_One" variant="body1">
                        Origem
                      </Text>
                    </Stack>
                    <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                      <Text className="Input" variant="body1">
                        Destino
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="columntext" as="h2" variant="h2">
                          A313
                        </Text>
                      </Column>
                    </Column>
                    <Row className="bg-green_A700 items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius12 w-[13%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark"
                        alt="checkmark One"
                      />
                      <Text className="rowcheckmark" as="h5" variant="h5">
                        OK
                      </Text>
                    </Row>
                  </Row>
                </Column>
                <Line className="bg-light_blue_600 h-[5px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]" />
              </Column>
              <Column className="items-center justify-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] rounded-radius8 w-[100%]">
                <SelectBox
                  className="font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px] text-white_A700 w-[100%]"
                  placeholderClassName="text-white_A700"
                  name="space Two"
                  placeholder="MOVIMENTAÇÕES"
                  isSearchable={false}
                  isMulti={false}
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        src="images/img_eye.svg"
                        className="lg:w-[9px] lg:h-[10px] lg:mr-[10px] xl:w-[12px] xl:h-[13px] xl:mr-[13px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[17px]"
                        alt="eye"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="lg:w-[10px] lg:h-[11px] lg:mr-[1px] xl:w-[12px] xl:h-[14px] xl:mr-[1px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[2px] 3xl:w-[17px] 3xl:h-[18px] 3xl:mr-[2px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Column className="items-center justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                  <Row className="items-center w-[96%]">
                    <Column className="w-[27%]">
                      <Text className="Input" variant="body1">
                        Container
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="column6" as="h2" variant="h2">
                          UCTR454545460
                        </Text>
                      </Column>
                    </Column>
                    <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[27%]">
                      <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="column6" as="h2" variant="h2">
                          ABC-12345
                        </Text>
                      </Column>
                      <Text className="Label_One_One" variant="body1">
                        Origem
                      </Text>
                    </Stack>
                    <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[27%]">
                      <Text className="Input" variant="body1">
                        Destino
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="column6" as="h2" variant="h2">
                          A313
                        </Text>
                      </Column>
                    </Column>
                    <Button
                      className="2xl:ml-[6px] 3xl:ml-[7px] flex items-center justify-center lg:ml-[4px] text-center w-[13%] xl:ml-[5px]"
                      leftIcon={
                        <Img
                          src="images/img_reply.svg"
                          className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                          alt="reply"
                        />
                      }
                      shape="RoundedBorder12"
                      size="md"
                      variant="FillGray300"
                    >
                      <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                        DESFAZER
                      </div>
                    </Button>
                  </Row>
                  <Row className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                    <Column className="w-[27%]">
                      <Text className="Input" variant="body1">
                        Container
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="column6" as="h2" variant="h2">
                          UCTR454545460
                        </Text>
                      </Column>
                    </Column>
                    <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[27%]">
                      <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="column6" as="h2" variant="h2">
                          ABC-12345
                        </Text>
                      </Column>
                      <Text className="Label_One_One" variant="body1">
                        Origem
                      </Text>
                    </Stack>
                    <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[27%]">
                      <Text className="Input" variant="body1">
                        Destino
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="column6" as="h2" variant="h2">
                          A313
                        </Text>
                      </Column>
                    </Column>
                    <Button
                      className="2xl:ml-[6px] 3xl:ml-[7px] flex items-center justify-center lg:ml-[4px] text-center w-[13%] xl:ml-[5px]"
                      leftIcon={
                        <Img
                          src="images/img_reply.svg"
                          className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                          alt="reply"
                        />
                      }
                      shape="RoundedBorder12"
                      size="md"
                      variant="FillAmberA400"
                    >
                      <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                        DESFAZER
                      </div>
                    </Button>
                  </Row>
                  <Row className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                    <Button
                      className="flex items-center justify-center text-center w-[13%]"
                      leftIcon={
                        <Img
                          src="images/img_close.svg"
                          className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder12"
                      size="md"
                      variant="FillRed600"
                    >
                      <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                        IGNORAR
                      </div>
                    </Button>
                    <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                      <Text className="Input" variant="body1">
                        Container
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="columntext" as="h2" variant="h2">
                          UCTR454545460
                        </Text>
                      </Column>
                    </Column>
                    <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                      <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="columntext" as="h2" variant="h2">
                          ABC-12345
                        </Text>
                      </Column>
                      <Text className="Label_One" variant="body1">
                        Origem
                      </Text>
                    </Stack>
                    <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                      <Text className="Input" variant="body1">
                        Destino
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                        <Text className="columntext" as="h2" variant="h2">
                          A313
                        </Text>
                      </Column>
                    </Column>
                    <Row className="bg-green_A700 items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius12 w-[13%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark"
                        alt="checkmark One"
                      />
                      <Text className="rowcheckmark" as="h5" variant="h5">
                        OK
                      </Text>
                    </Row>
                  </Row>
                </Column>
                <Line className="bg-light_blue_600 h-[5px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]" />
              </Column>
            </List>
            <Column className="items-center justify-start xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-radius8 w-[99%]">
              <Row className="bg-light_blue_600 items-center justify-between xl:p-[1px] lg:p-[1px] 3xl:p-[2px] 2xl:p-[2px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                <Img src="images/img_eye.svg" className="eye" alt="eye One" />
                <Row className="items-start justify-between xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[56%]">
                  <Text className="Title" as="h5" variant="h5">
                    MOVIMENTAÇÕES
                  </Text>
                  <Img
                    src="images/img_arrowdown_24X16.svg"
                    className="arrowright"
                    alt="arrowright One"
                  />
                </Row>
              </Row>
              <Line className="bg-light_blue_600 h-[5px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]" />
            </Column>
            <Column className="items-center justify-start 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] rounded-radius8 w-[99%]">
              <SelectBox
                className="font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px] text-white_A700 w-[100%]"
                placeholderClassName="text-white_A700"
                name="space Four"
                placeholder="MOVIMENTAÇÕES"
                isSearchable={false}
                isMulti={false}
                getOptionLabel={(e) => (
                  <div className="flex items-center">
                    <Img
                      src="images/img_eye.svg"
                      className="lg:w-[9px] lg:h-[10px] lg:mr-[10px] xl:w-[12px] xl:h-[13px] xl:mr-[13px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[17px]"
                      alt="eye"
                    />
                    <span>{e.label}</span>
                  </div>
                )}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="lg:w-[10px] lg:h-[11px] lg:mr-[1px] xl:w-[12px] xl:h-[14px] xl:mr-[1px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[2px] 3xl:w-[17px] 3xl:h-[18px] 3xl:mr-[2px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <List
                className="gap-[0] min-h-[auto] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center mx-[auto] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] w-[96%]">
                  <Column className="w-[27%]">
                    <Text className="Input" variant="body1">
                      Container
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        UCTR454545460
                      </Text>
                    </Column>
                  </Column>
                  <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[27%]">
                    <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        ABC-12345
                      </Text>
                    </Column>
                    <Text className="Label_One_One" variant="body1">
                      Origem
                    </Text>
                  </Stack>
                  <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[27%]">
                    <Text className="Input" variant="body1">
                      Destino
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        A313
                      </Text>
                    </Column>
                  </Column>
                  <Button
                    className="2xl:ml-[6px] 3xl:ml-[7px] flex items-center justify-center lg:ml-[4px] text-center w-[13%] xl:ml-[5px]"
                    leftIcon={
                      <Img
                        src="images/img_reply.svg"
                        className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                        alt="reply"
                      />
                    }
                    shape="RoundedBorder12"
                    size="md"
                    variant="FillGray300"
                  >
                    <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                      DESFAZER
                    </div>
                  </Button>
                </Row>
                <Row className="items-center mx-[auto] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] w-[96%]">
                  <Column className="w-[27%]">
                    <Text className="Input" variant="body1">
                      Container
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        UCTR454545460
                      </Text>
                    </Column>
                  </Column>
                  <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[27%]">
                    <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        ABC-12345
                      </Text>
                    </Column>
                    <Text className="Label_One_One" variant="body1">
                      Origem
                    </Text>
                  </Stack>
                  <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[27%]">
                    <Text className="Input" variant="body1">
                      Destino
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        A313
                      </Text>
                    </Column>
                  </Column>
                  <Button
                    className="2xl:ml-[6px] 3xl:ml-[7px] flex items-center justify-center lg:ml-[4px] text-center w-[13%] xl:ml-[5px]"
                    leftIcon={
                      <Img
                        src="images/img_reply.svg"
                        className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                        alt="reply"
                      />
                    }
                    shape="RoundedBorder12"
                    size="md"
                    variant="FillGray300"
                  >
                    <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                      DESFAZER
                    </div>
                  </Button>
                </Row>
                <Row className="items-center mx-[auto] xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] w-[96%]">
                  <Column className="w-[27%]">
                    <Text className="Input" variant="body1">
                      Container
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        UCTR454545460
                      </Text>
                    </Column>
                  </Column>
                  <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[27%]">
                    <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        ABC-12345
                      </Text>
                    </Column>
                    <Text className="Label_One_One" variant="body1">
                      Origem
                    </Text>
                  </Stack>
                  <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[27%]">
                    <Text className="Input" variant="body1">
                      Destino
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        A313
                      </Text>
                    </Column>
                  </Column>
                  <Button
                    className="2xl:ml-[6px] 3xl:ml-[7px] flex items-center justify-center lg:ml-[4px] text-center w-[13%] xl:ml-[5px]"
                    leftIcon={
                      <Img
                        src="images/img_reply.svg"
                        className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                        alt="reply"
                      />
                    }
                    shape="RoundedBorder12"
                    size="md"
                    variant="FillAmberA400"
                  >
                    <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                      DESFAZER
                    </div>
                  </Button>
                </Row>
              </List>
              <Line className="bg-light_blue_600 h-[5px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]" />
            </Column>
          </Column>
          <Column className="justify-start w-[49%]">
            <Column className="border border-deep_purple_A200 border-solid items-center justify-start 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[96%]">
              <List
                className="gap-[0] min-h-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[99%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center w-[13%]"
                    leftIcon={
                      <Img
                        src="images/img_close.svg"
                        className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                        alt="close"
                      />
                    }
                    shape="RoundedBorder12"
                    size="md"
                    variant="FillRed600"
                  >
                    <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                      IGNORAR
                    </div>
                  </Button>
                  <Column className="w-[23%]">
                    <Text className="Input" variant="body1">
                      Container
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="columntext" as="h2" variant="h2">
                        UCTR454545460
                      </Text>
                    </Column>
                  </Column>
                  <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] w-[23%]">
                    <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="columntext" as="h2" variant="h2">
                        ABC-12345
                      </Text>
                    </Column>
                    <Text className="Label_One" variant="body1">
                      Origem
                    </Text>
                  </Stack>
                  <Column className="w-[23%]">
                    <Text className="Input" variant="body1">
                      Destino
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="columntext" as="h2" variant="h2">
                        A313
                      </Text>
                    </Column>
                  </Column>
                  <Row className="bg-green_A700 items-center lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius12 w-[13%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="checkmark"
                      alt="checkmark Two"
                    />
                    <Text className="rowcheckmark" as="h5" variant="h5">
                      OK
                    </Text>
                  </Row>
                </Row>
                <Row className="items-center justify-between lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] w-[100%]">
                  <Column className="w-[27%]">
                    <Text className="Input" variant="body1">
                      Container
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        UCTR454545460
                      </Text>
                    </Column>
                  </Column>
                  <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] w-[27%]">
                    <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        ABC-12345
                      </Text>
                    </Column>
                    <Text className="Label_One_One" variant="body1">
                      Origem
                    </Text>
                  </Stack>
                  <Column className="w-[27%]">
                    <Text className="Input" variant="body1">
                      Destino
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                      <Text className="column6" as="h2" variant="h2">
                        A313
                      </Text>
                    </Column>
                  </Column>
                  <Button
                    className="flex items-center justify-center text-center w-[13%]"
                    leftIcon={
                      <Img
                        src="images/img_reply.svg"
                        className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                        alt="reply"
                      />
                    }
                    shape="RoundedBorder12"
                    size="md"
                    variant="FillAmberA400"
                  >
                    <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                      DESFAZER
                    </div>
                  </Button>
                </Row>
              </List>
              <Button
                className="font-bold 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px] text-center w-[99%]"
                shape="RoundedBorder12"
                size="md"
                variant="FillAmberA400"
              >
                DESFAZER
              </Button>
              <Button
                className="font-bold lg:mb-[34px] xl:mb-[42px] 2xl:mb-[48px] 3xl:mb-[57px] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px] text-center w-[99%]"
                shape="RoundedBorder12"
                size="md"
                variant="FillRed600"
              >
                IGNORAR
              </Button>
            </Column>
            <Row className="items-start lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[73%]">
              <Column className="border border-deep_purple_A200 border-solid items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius5 w-[21%]">
                <Button
                  className="flex items-center justify-center mt-[1px] text-center w-[99%]"
                  leftIcon={
                    <Img
                      src="images/img_reply.svg"
                      className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                      alt="reply"
                    />
                  }
                  shape="RoundedBorder12"
                  size="md"
                  variant="FillAmberA400"
                >
                  <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                    DESFAZER
                  </div>
                </Button>
                <Button
                  className="2xl:mt-[4px] 3xl:mt-[5px] flex items-center justify-center lg:mt-[3px] text-center w-[99%] xl:mt-[3px]"
                  leftIcon={
                    <Img
                      src="images/img_reply.svg"
                      className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                      alt="reply"
                    />
                  }
                  shape="RoundedBorder12"
                  size="md"
                  variant="FillGray300"
                >
                  <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                    DESFAZER
                  </div>
                </Button>
                <List
                  className="gap-[0] min-h-[auto] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[99%]"
                  orientation="vertical"
                >
                  <Row className="bg-green_A700 items-center xl:my-[1px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="checkmark"
                      alt="checkmark Three"
                    />
                    <Text className="rowcheckmark" as="h5" variant="h5">
                      OK
                    </Text>
                  </Row>
                  <Row className="bg-gray_300 items-center xl:my-[1px] lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius12 w-[100%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="checkmark"
                      alt="checkmark Four"
                    />
                    <Text className="rowcheckmark" as="h5" variant="h5">
                      OK
                    </Text>
                  </Row>
                </List>
                <Button
                  className="2xl:mt-[4px] 3xl:mt-[5px] flex items-center justify-center lg:mt-[3px] text-center w-[99%] xl:mt-[3px]"
                  leftIcon={
                    <Img
                      src="images/img_close.svg"
                      className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                      alt="close"
                    />
                  }
                  shape="RoundedBorder12"
                  size="md"
                  variant="FillRed600"
                >
                  <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                    IGNORAR
                  </div>
                </Button>
                <Button
                  className="2xl:mt-[4px] 3xl:mt-[5px] flex items-center justify-center lg:mt-[3px] text-center w-[99%] xl:mt-[3px]"
                  leftIcon={
                    <Img
                      src="images/img_close.svg"
                      className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                      alt="close"
                    />
                  }
                  shape="RoundedBorder12"
                  size="md"
                  variant="FillRed600"
                >
                  <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                    IGNORAR
                  </div>
                </Button>
                <Button
                  className="2xl:mt-[4px] 3xl:mt-[5px] flex items-center justify-center lg:mt-[3px] mb-[1px] text-center w-[99%] xl:mt-[3px]"
                  leftIcon={
                    <Img
                      src="images/img_close.svg"
                      className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                      alt="close"
                    />
                  }
                  shape="RoundedBorder12"
                  size="md"
                  variant="FillGray300"
                >
                  <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                    IGNORAR
                  </div>
                </Button>
              </Column>
              <List
                className="border border-deep_purple_A200 border-solid gap-[0] min-h-[auto] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[30%]"
                orientation="vertical"
              >
                <Row className="items-center xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] pr-[3px] py-[3px] w-[100%]">
                  <Img
                    src="images/img_checkmark_32X32.svg"
                    className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] my-[1px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                    alt="checkmark Five"
                  />
                  <Text className="CheckboxOption" as="h1" variant="h1">
                    HANDLING
                  </Text>
                </Row>
                <Row className="items-center xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] pr-[3px] py-[3px] w-[100%]">
                  <Img
                    src="images/img_checkmark_1.svg"
                    className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] my-[1px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                    alt="checkmark Six"
                  />
                  <Text className="CheckboxOption" as="h1" variant="h1">
                    HANDLING
                  </Text>
                </Row>
              </List>
              <Column className="border border-deep_purple_A200 border-solid justify-start lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[36%]">
                <Button
                  className="flex lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] items-center justify-center rounded-radius50 lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                  size="smIcn"
                  variant="icbFillGreenA700"
                >
                  <Img
                    src="images/img_playarrow.svg"
                    className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                    alt="playarrow"
                  />
                </Button>
                <Button
                  className="2xl:mt-[8px] 3xl:mt-[10px] flex items-center justify-center lg:mt-[6px] text-center w-[46%] xl:mt-[7px]"
                  leftIcon={
                    <Img
                      src="images/img_trash_24X24.svg"
                      className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[2px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[3px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[4px]"
                      alt="trash"
                    />
                  }
                  shape="RoundedBorder30"
                  size="md"
                  variant="FillAmberA400"
                >
                  <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[5px] xl:text-[5px] 3xl:text-[7px]">
                    PARAR
                  </div>
                </Button>
                <Button
                  className="2xl:mb-[145px] 2xl:mt-[12px] 3xl:mb-[175px] 3xl:mt-[15px] flex items-center justify-center lg:mb-[103px] lg:mt-[9px] text-center w-[56%] xl:mb-[129px] xl:mt-[11px]"
                  leftIcon={
                    <Img
                      src="images/img_remove.svg"
                      className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[2px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[3px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[4px]"
                      alt="stop"
                    />
                  }
                  shape="RoundedBorder30"
                  size="md"
                  variant="FillRed600"
                >
                  <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[5px] xl:text-[5px] 3xl:text-[7px]">
                    ENCERRAR
                  </div>
                </Button>
              </Column>
            </Row>
            <Column className="border border-deep_purple_A200 border-solid justify-start lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[100%]">
              <List
                className="gap-[0] min-h-[auto] w-[88%]"
                orientation="vertical"
              >
                <Row className="bg-gray_100 items-center xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
                  <Text className="x" as="h2" variant="h2">
                    Container
                  </Text>
                  <Input
                    className="placeholder:text-gray_700 Input_One"
                    wrapClassName="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] w-[21%] xl:ml-[9px]"
                    name="Input One"
                    placeholder="Veículo"
                  ></Input>
                  <Img
                    src="images/img_arrowright.svg"
                    className="arrowright_Two"
                    alt="arrowright Two"
                  />
                  <Input
                    className="placeholder:text-gray_700 Input_One"
                    wrapClassName="2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[10px] w-[21%] xl:ml-[12px]"
                    name="Input Two"
                    placeholder="Endereço"
                    size="md"
                  ></Input>
                </Row>
                <Row className="bg-gray_100 items-center xl:my-[3px] lg:my-[3px] 2xl:my-[4px] 3xl:my-[5px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[100%]">
                  <Text className="x" as="h2" variant="h2">
                    Container
                  </Text>
                  <Input
                    className="placeholder:text-gray_700 Input_One"
                    wrapClassName="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] w-[21%] xl:ml-[9px]"
                    name="Input One One"
                    placeholder="Endereço"
                    size="md"
                  ></Input>
                  <Img
                    src="images/img_arrowright.svg"
                    className="arrowright_Two"
                    alt="arrowright Three"
                  />
                  <Input
                    className="placeholder:text-gray_700 Input_One"
                    wrapClassName="2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[10px] w-[21%] xl:ml-[12px]"
                    name="Input Two One"
                    placeholder="Veículo"
                  ></Input>
                </Row>
              </List>
              <Row className="bg-gray_100 items-center lg:mb-[27px] xl:mb-[34px] 2xl:mb-[39px] 3xl:mb-[47px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[88%]">
                <Column className="bg-white_A700 border border-gray_300 border-solid lg:p-[1px] 2xl:p-[2px] xl:p-[2px] 3xl:p-[3px] rounded-radius4 w-[29%]">
                  <Text
                    className="mb-[2px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] not-italic text-gray_700 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Container
                  </Text>
                </Column>
                <Column className="bg-white_A700 border border-gray_300 border-solid 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:p-[1px] 2xl:p-[2px] xl:p-[2px] 3xl:p-[3px] rounded-radius4 w-[21%]">
                  <Text className="Input3" as="h2" variant="h2">
                    Endereço
                  </Text>
                </Column>
                <Img
                  src="images/img_arrowright.svg"
                  className="arrowright_Two"
                  alt="arrowright Four"
                />
                <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:p-[1px] 2xl:p-[2px] xl:p-[2px] 3xl:p-[3px] rounded-radius4 w-[21%]">
                  <Text className="Input3" as="h2" variant="h2">
                    Endereço
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
        <footer className="absolute border border-deep_purple_A200 border-solid bottom-[0] rounded-radius5 w-[100%]">
          <Column className="justify-start w-[98%]">
            <Row className="items-center justify-between w-[100%]">
              <Row className="items-center justify-between w-[66%]">
                <Row className="items-center justify-evenly w-[49%]">
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[13%]">
                    <Text className="data4" as="h3" variant="h3">
                      HANDLING
                    </Text>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[12%]">
                    <Text className="data4" as="h3" variant="h3">
                      DESCARGA
                    </Text>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] w-[17%]">
                    <Text className="data6" as="h3" variant="h3">
                      {" "}
                      UCTR454545460
                    </Text>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[12%]">
                    <Text className="data4" as="h3" variant="h3">
                      A313
                    </Text>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[16%]">
                    <Text className="data7" as="h3" variant="h3">
                      10/10/2022 10:00
                    </Text>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[13%]">
                    <Button
                      className="flex lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] items-center justify-center rounded-radius50 lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                      size="smIcn"
                      variant="icbFillGreenA700"
                    >
                      <Img
                        src="images/img_playarrow.svg"
                        className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                        alt="playarrow One"
                      />
                    </Button>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                </Row>
                <Row className="items-center justify-evenly w-[49%]">
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[13%]">
                    <Text className="data4" as="h3" variant="h3">
                      HANDLING
                    </Text>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[12%]">
                    <Text className="data4" as="h3" variant="h3">
                      CARGA
                    </Text>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[17%]">
                    <Text className="data4" as="h3" variant="h3">
                      BOOK1234#01
                    </Text>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[12%]">
                    <Text className="data4" as="h3" variant="h3">
                      A313
                    </Text>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[16%]">
                    <Text className="data7" as="h3" variant="h3">
                      10/10/2022 10:00
                    </Text>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                  <Column className="bg-white_A700 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[13%]">
                    <Button
                      className="flex lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] items-center justify-center rounded-radius50 lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                      size="smIcn"
                      variant="icbFillGreenA700"
                    >
                      <Img
                        src="images/img_playarrow.svg"
                        className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                        alt="playarrow Two"
                      />
                    </Button>
                  </Column>
                  <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                </Row>
              </Row>
              <Row className="items-center justify-evenly w-[32%]">
                <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                <Column className="bg-white_A700 lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[13%]">
                  <Text className="data4" as="h3" variant="h3">
                    HANDLING
                  </Text>
                </Column>
                <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                <Column className="bg-white_A700 lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[12%]">
                  <Text className="data4" as="h3" variant="h3">
                    MOVTO
                  </Text>
                </Column>
                <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                <Column className="bg-white_A700 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] w-[17%]">
                  <Text className="data6" as="h3" variant="h3">
                    {" "}
                    UCTR454545460
                  </Text>
                </Column>
                <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                <Column className="bg-white_A700 lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[12%]">
                  <Text className="data4" as="h3" variant="h3">
                    A313
                  </Text>
                </Column>
                <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                <Column className="bg-white_A700 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[16%]">
                  <Text className="data7" as="h3" variant="h3">
                    10/10/2022 10:00
                  </Text>
                </Column>
                <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
                <Column className="bg-white_A700 items-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[13%]">
                  <Button
                    className="flex lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] items-center justify-center rounded-radius50 lg:w-[18px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    size="smIcn"
                    variant="icbFillGreenA700"
                  >
                    <Img
                      src="images/img_playarrow.svg"
                      className="flex items-center justify-center lg:h-[8px] xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px]"
                      alt="playarrow Three"
                    />
                  </Button>
                </Column>
                <div className="bg-white_A700 lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[47px] w-[2%]"></div>
              </Row>
            </Row>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={4}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[0.15]"
              magnifiedIndex={1}
              centerMode
              ref={sliderRef}
              className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]"
              items={[...Array(12)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[71px] w-[100%]">
                    <Row className="absolute items-center justify-evenly top-[0] w-[100%]">
                      <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                      <Column className="bg-gray_100 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[13%]">
                        <Text className="data8" as="h3" variant="h3">
                          HANDLING
                        </Text>
                      </Column>
                      <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                      <Column className="bg-gray_100 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[12%]">
                        <Text className="data8" as="h3" variant="h3">
                          DESCARGA
                        </Text>
                      </Column>
                      <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                      <Column className="bg-gray_100 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] w-[17%]">
                        <Text className="data9" as="h3" variant="h3">
                          {" "}
                          UCTR454545460
                        </Text>
                      </Column>
                      <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                      <Column className="bg-gray_100 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[12%]">
                        <Text className="data8" as="h3" variant="h3">
                          A313
                        </Text>
                      </Column>
                      <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                      <Column className="bg-gray_100 3xl:pr-[10px] lg:pr-[6px] xl:pr-[7px] 2xl:pr-[8px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] w-[16%]">
                        <Text className="data8" as="h3" variant="h3">
                          10/10/2022 10:00
                        </Text>
                      </Column>
                      <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                      <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[13%]"></div>
                      <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                    </Row>
                    <Row className="absolute bg-gray_100 bottom-[0] items-center left-[0] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[85%]">
                      <Text className="x" as="h2" variant="h2">
                        Container
                      </Text>
                      <Text className="Input_Three" as="h2" variant="h2">
                        Veículo
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="arrowright_Two"
                        alt="arrowright Five"
                      />
                      <Text className="Input_Four" as="h2" variant="h2">
                        Endereço
                      </Text>
                    </Row>
                    <Column className="absolute bg-gray_100 items-center justify-start 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] right-[0] w-[15%]">
                      <Button
                        className="flex items-center justify-center text-center w-[96%]"
                        leftIcon={
                          <Img
                            src="images/img_trash_24X24.svg"
                            className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[2px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[3px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[4px]"
                            alt="trash"
                          />
                        }
                        shape="RoundedBorder30"
                        size="md"
                        variant="FillAmberA400"
                      >
                        <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[5px] xl:text-[5px] 3xl:text-[7px]">
                          PARAR
                        </div>
                      </Button>
                    </Column>
                  </Stack>
                </React.Fragment>
              ))}
            />
            <Column className="items-center justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[32%]">
              <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[71px] w-[100%]">
                <Row className="absolute items-center justify-evenly top-[0] w-[100%]">
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <Column className="bg-gray_100 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[13%]">
                    <Text className="data8" as="h3" variant="h3">
                      HANDLING
                    </Text>
                  </Column>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <Column className="bg-gray_100 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[12%]">
                    <Text className="data8" as="h3" variant="h3">
                      DESCARGA
                    </Text>
                  </Column>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <Column className="bg-gray_100 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] w-[17%]">
                    <Text className="data9" as="h3" variant="h3">
                      {" "}
                      UCTR454545460
                    </Text>
                  </Column>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <Column className="bg-gray_100 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[12%]">
                    <Text className="data8" as="h3" variant="h3">
                      A313
                    </Text>
                  </Column>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <Column className="bg-gray_100 3xl:pr-[10px] lg:pr-[6px] xl:pr-[7px] 2xl:pr-[8px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] w-[16%]">
                    <Text className="data8" as="h3" variant="h3">
                      10/10/2022 10:00
                    </Text>
                  </Column>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[13%]"></div>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                </Row>
                <Row className="absolute bg-gray_100 bottom-[0] items-center left-[0] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[85%]">
                  <Input
                    className="placeholder:text-gray_700 Input_One"
                    wrapClassName="w-[29%]"
                    name="Input Eleven"
                    placeholder="Container"
                  ></Input>
                  <Input
                    className="placeholder:text-gray_700 Input_One"
                    wrapClassName="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] w-[21%] xl:ml-[9px]"
                    name="Input Twelve"
                    placeholder="Veículo"
                  ></Input>
                  <Img
                    src="images/img_arrowright.svg"
                    className="arrowright_Two"
                    alt="arrowright Eight"
                  />
                  <Input
                    className="placeholder:text-gray_700 Input_One"
                    wrapClassName="2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[10px] w-[21%] xl:ml-[12px]"
                    name="Input Thirteen"
                    placeholder="Endereço"
                    size="md"
                  ></Input>
                </Row>
                <Column className="absolute bg-gray_100 items-center justify-start 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] right-[0] w-[15%]">
                  <Button
                    className="flex items-center justify-center text-center w-[96%]"
                    leftIcon={
                      <Img
                        src="images/img_trash_24X24.svg"
                        className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[2px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[3px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[4px]"
                        alt="trash"
                      />
                    }
                    shape="RoundedBorder30"
                    size="md"
                    variant="FillAmberA400"
                  >
                    <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[5px] xl:text-[5px] 3xl:text-[7px]">
                      PARAR
                    </div>
                  </Button>
                </Column>
              </Stack>
              <Column className="bg-gray_100 items-center justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                <Column className="items-center justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] rounded-radius8 w-[98%]">
                  <SelectBox
                    className="font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px] text-white_A700 w-[100%]"
                    placeholderClassName="text-white_A700"
                    name="space Six"
                    placeholder="MOVIMENTAÇÕES"
                    isSearchable={false}
                    isMulti={false}
                    getOptionLabel={(e) => (
                      <div className="flex items-center">
                        <Img
                          src="images/img_eye.svg"
                          className="lg:w-[9px] lg:h-[10px] lg:mr-[10px] xl:w-[12px] xl:h-[13px] xl:mr-[13px] 2xl:w-[13px] 2xl:h-[14px] 2xl:mr-[14px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[17px]"
                          alt="eye"
                        />
                        <span>{e.label}</span>
                      </div>
                    )}
                    indicator={
                      <Img
                        src="images/img_arrowdown.svg"
                        className="lg:w-[10px] lg:h-[11px] lg:mr-[1px] xl:w-[12px] xl:h-[14px] xl:mr-[1px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[2px] 3xl:w-[17px] 3xl:h-[18px] 3xl:mr-[2px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <Column className="items-center justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[100%]">
                    <Row className="items-center w-[96%]">
                      <Button
                        className="flex items-center justify-center text-center w-[13%]"
                        leftIcon={
                          <Img
                            src="images/img_close.svg"
                            className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                            alt="close"
                          />
                        }
                        shape="RoundedBorder12"
                        size="md"
                        variant="FillRed600"
                      >
                        <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                          IGNORAR
                        </div>
                      </Button>
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                        <Text className="Input" variant="body1">
                          Container
                        </Text>
                        <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                          <Text className="columntext" as="h2" variant="h2">
                            UCTR454545460
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                        <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                          <Text className="columntext" as="h2" variant="h2">
                            ABC-12345
                          </Text>
                        </Column>
                        <Text className="Label_One" variant="body1">
                          Origem
                        </Text>
                      </Stack>
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                        <Text className="Input" variant="body1">
                          Destino
                        </Text>
                        <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                          <Text className="columntext" as="h2" variant="h2">
                            A313
                          </Text>
                        </Column>
                      </Column>
                      <Row className="bg-green_A700 items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius12 w-[13%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="checkmark"
                          alt="checkmark Seven"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                          OK
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[96%]">
                      <Button
                        className="flex items-center justify-center text-center w-[13%]"
                        leftIcon={
                          <Img
                            src="images/img_close.svg"
                            className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[3px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[4px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[5px]"
                            alt="close"
                          />
                        }
                        shape="RoundedBorder12"
                        size="md"
                        variant="FillRed600"
                      >
                        <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[6px] xl:text-[6px] 3xl:text-[8px]">
                          IGNORAR
                        </div>
                      </Button>
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                        <Text className="Input" variant="body1">
                          Container
                        </Text>
                        <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                          <Text className="columntext" as="h2" variant="h2">
                            UCTR454545460
                          </Text>
                        </Column>
                      </Column>
                      <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                        <Column className="absolute bg-white_A700 border border-gray_300 border-solid bottom-[0] justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                          <Text className="columntext" as="h2" variant="h2">
                            ABC-12345
                          </Text>
                        </Column>
                        <Text className="Label_One" variant="body1">
                          Origem
                        </Text>
                      </Stack>
                      <Column className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[23%]">
                        <Text className="Input" variant="body1">
                          Destino
                        </Text>
                        <Column className="bg-white_A700 border border-gray_300 border-solid justify-start 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] rounded-radius4 w-[100%]">
                          <Text className="columntext" as="h2" variant="h2">
                            A313
                          </Text>
                        </Column>
                      </Column>
                      <Row className="bg-green_A700 items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius12 w-[13%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="checkmark"
                          alt="checkmark Eight"
                        />
                        <Text className="rowcheckmark" as="h5" variant="h5">
                          OK
                        </Text>
                      </Row>
                    </Row>
                  </Column>
                  <Line className="bg-light_blue_600 h-[5px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]" />
                </Column>
              </Column>
            </Column>
            <Column className="items-center justify-start lg:mt-[19px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] w-[32%]">
              <Stack className="lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[71px] w-[100%]">
                <Row className="absolute items-center justify-evenly top-[0] w-[100%]">
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <Column className="bg-gray_100 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[13%]">
                    <Text className="data8" as="h3" variant="h3">
                      HANDLING
                    </Text>
                  </Column>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <Column className="bg-gray_100 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[12%]">
                    <Text className="data8" as="h3" variant="h3">
                      DESCARGA
                    </Text>
                  </Column>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <Column className="bg-gray_100 2xl:p-[2px] xl:p-[2px] lg:p-[2px] 3xl:p-[3px] w-[17%]">
                    <Text className="data9" as="h3" variant="h3">
                      {" "}
                      UCTR454545460
                    </Text>
                  </Column>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <Column className="bg-gray_100 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[12%]">
                    <Text className="data8" as="h3" variant="h3">
                      A313
                    </Text>
                  </Column>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <Column className="bg-gray_100 3xl:pr-[10px] lg:pr-[6px] xl:pr-[7px] 2xl:pr-[8px] 3xl:py-[10px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] w-[16%]">
                    <Text className="data8" as="h3" variant="h3">
                      10/10/2022 10:00
                    </Text>
                  </Column>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[13%]"></div>
                  <div className="bg-gray_100 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[2%]"></div>
                </Row>
                <Row className="absolute bg-gray_100 bottom-[0] items-center left-[0] lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] w-[85%]">
                  <Input
                    className="placeholder:text-gray_700 Input_One"
                    wrapClassName="w-[29%]"
                    name="Input Fourteen"
                    placeholder="Container"
                  ></Input>
                  <Input
                    className="placeholder:text-gray_700 Input_One"
                    wrapClassName="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] w-[21%] xl:ml-[9px]"
                    name="Input Fifteen"
                    placeholder="Veículo"
                  ></Input>
                  <Img
                    src="images/img_arrowright.svg"
                    className="arrowright_Two"
                    alt="arrowright Nine"
                  />
                  <Input
                    className="placeholder:text-gray_700 Input_One"
                    wrapClassName="2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[10px] w-[21%] xl:ml-[12px]"
                    name="Input Sixteen"
                    placeholder="Endereço"
                    size="md"
                  ></Input>
                </Row>
                <Column className="absolute bg-gray_100 items-center justify-start lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] right-[0] w-[15%]">
                  <Button
                    className="2xl:my-[4px] 3xl:my-[5px] flex items-center justify-center lg:my-[3px] text-center w-[99%] xl:my-[4px]"
                    leftIcon={
                      <Img
                        src="images/img_remove.svg"
                        className="text-center lg:w-[7px] lg:h-[8px] lg:mr-[2px] xl:w-[9px] xl:h-[10px] xl:mr-[3px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[3px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[4px]"
                        alt="stop"
                      />
                    }
                    shape="RoundedBorder30"
                    size="md"
                    variant="FillRed600"
                  >
                    <div className="bg-transparent font-bold lg:text-[4px] 2xl:text-[5px] xl:text-[5px] 3xl:text-[7px]">
                      ENCERRAR
                    </div>
                  </Button>
                </Column>
              </Stack>
              <Column className="bg-gray_100 items-center justify-start lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] w-[100%]">
                <Column className="items-center justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] rounded-radius8 w-[98%]">
                  <Row className="bg-light_blue_600 items-center justify-between xl:p-[1px] lg:p-[1px] 3xl:p-[2px] 2xl:p-[2px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                    <Img
                      src="images/img_eye.svg"
                      className="eye"
                      alt="eye Two"
                    />
                    <Row className="items-start justify-between xl:mb-[1px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[56%]">
                      <Text className="Title" as="h5" variant="h5">
                        MOVIMENTAÇÕES
                      </Text>
                      <Img
                        src="images/img_arrowdown_24X16.svg"
                        className="arrowright"
                        alt="arrowright Ten"
                      />
                    </Row>
                  </Row>
                  <Line className="bg-light_blue_600 h-[5px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]" />
                </Column>
              </Column>
            </Column>
          </Column>
        </footer>
      </Stack>
    </>
  );
};

export default ComponentesPage;
