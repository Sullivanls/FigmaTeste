import React from "react";

import {
  Column,
  Text,
  FloatingInput,
  Row,
  Img,
  Stack,
  Button,
  Line,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";

const AgendamentoTwoPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/framethirteen");
  }

  return (
    <>
      <Column className="bg-white_A700 font-firasans items-center justify-start mx-[auto] lg:pb-[25px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[31px] 3xl:p-[38px] w-[100%]">
          <Column className="bg-white_A700 justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius4 shadow-bs1 w-[98%]">
            <Text className="Form1" as="h5" variant="h5">
              Geral
            </Text>
            <FloatingInput
              className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-red_400 placeholder:top-[0] top-[0] w-[100%]"
              name="language"
              labelClasses="bg-white_A700 left-[16px] top-[0] text-red_400"
              focusedClasses="translate-y-[21px] scale-[1]"
              wrapperClasses="w-[100%] mt-[16px] top-[0]"
              labelText=" Terminal"
              defaultText="Rondonópolis"
            ></FloatingInput>
            <Row className="items-center justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="zipcode"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[32%] top-[0]"
                labelText="Identificador Externo"
                defaultText="341414"
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic p-[0] text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                wrapClassName="flex top-[0] w-[32%]"
                name="Input"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[22px] scale-[1]"
                wrapperClasses="w-[32%] top-[0]"
                labelText="Tipo de agendamento"
                defaultText="Carga"
                suffix={
                  <Img
                    src="images/img_arrowdropdown.svg"
                    className="w-[16px] ml-[0] mr-[12px] top-[0] my-[auto]"
                    alt="arrow_drop_down"
                  />
                }
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic p-[0] text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                wrapClassName="flex top-[0] w-[32%]"
                name="Input One"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[20px] scale-[1]"
                wrapperClasses="w-[32%] top-[0]"
                labelText="Modal"
                defaultText="Ferroviário"
                suffix={
                  <Img
                    src="images/img_arrowdropdown.svg"
                    className="w-[16px] ml-[0] mr-[12px] top-[0] my-[auto]"
                    alt="arrow_drop_down"
                  />
                }
              ></FloatingInput>
            </Row>
            <Row className="items-center justify-between mb-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic p-[0] text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                wrapClassName="flex top-[0] w-[49%]"
                name="language One"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[49%] top-[0]"
                labelText="Inicio "
                defaultText="09/09/1999"
                suffix={
                  <Img
                    src="images/img_calendar.svg"
                    className="w-[16px] ml-[0] mr-[12px] top-[0] my-[auto]"
                    alt="calendar"
                  />
                }
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic p-[0] text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                wrapClassName="flex top-[0] w-[49%]"
                name="date"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[49%] top-[0]"
                labelText="Fim"
                defaultText="09/09/1999"
                suffix={
                  <Img
                    src="images/img_calendar.svg"
                    className="w-[16px] ml-[0] mr-[12px] top-[0] my-[auto]"
                    alt="calendar"
                  />
                }
              ></FloatingInput>
            </Row>
          </Column>
          <Column className="bg-white_A700 justify-start xl:mb-[111px] 2xl:mb-[125px] 3xl:mb-[150px] lg:mb-[89px] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] rounded-radius4 shadow-bs1 w-[98%]">
            <Text className="Form1" as="h5" variant="h5">
              Ferroviário
            </Text>
            <Row className="items-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="Input Two"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[33%] top-[0]"
                labelText="CPF/CNPJ"
                defaultText="01234567890123"
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="Input Three"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[20px] scale-[1]"
                wrapperClasses="w-[66%] mt-[1px] ml-[8px] top-[0]"
                labelText="Nome"
                defaultText="Transportador"
              ></FloatingInput>
            </Row>
            <Text
              className="bg-white_A700 font-normal ml-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic pb-[3px] lg:pr-[32px] xl:pr-[41px] 2xl:pr-[46px] 3xl:pr-[55px] lg:pt-[15px] xl:pt-[18px] 2xl:pt-[21px] 3xl:pt-[25px] text-cyan_700 w-[990px]"
              variant="body1"
            >
              Comboio
            </Text>
            <FloatingInput
              className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
              name="Input Four"
              labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
              focusedClasses="translate-y-[21px] scale-[1]"
              wrapperClasses="w-[100%] mt-[8px] top-[0]"
              labelText="Prefixo"
              defaultText="AAA1234"
            ></FloatingInput>
            <Text
              className="bg-white_A700 font-normal ml-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic lg:pr-[32px] xl:pr-[41px] 2xl:pr-[46px] 3xl:pr-[55px] lg:pt-[15px] xl:pt-[18px] 2xl:pt-[21px] 3xl:pt-[25px] text-cyan_700 w-[990px]"
              variant="body1"
            >
              Vagões
            </Text>
            <Column className="bg-white_A700 border border-gray_300 border-solid justify-start mb-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] rounded-radius4 w-[100%]">
              <Row className="bg-white_A700 items-center 3xl:pr-[1064px] lg:pr-[630px] xl:pr-[788px] 2xl:pr-[887px] w-[100%]">
                <Column className="items-center w-[8%]">
                  <Column className="bg-white_A700 items-end justify-start lg:pl-[14px] xl:pl-[17px] 2xl:pl-[19px] 3xl:pl-[23px] lg:py-[14px] xl:py-[17px] 2xl:py-[19px] 3xl:py-[23px] w-[100%]">
                    <Stack className="bg-light_blue_900 lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] rounded-radius1 xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px] lg:w-[9px]">
                      <Img
                        src="images/img_remove.svg"
                        className="remove"
                        alt="remove"
                      />
                    </Stack>
                  </Column>
                  <Column className="bg-gray_100 items-end justify-start lg:pl-[10px] xl:pl-[12px] 2xl:pl-[14px] 3xl:pl-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[100%]">
                    <Stack className="bg-light_blue_900 lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] rounded-radius1 xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px] lg:w-[9px]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="remove"
                        alt="checkmark"
                      />
                    </Stack>
                  </Column>
                  <Stack className="bg-white_A700 lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[9px] w-[100%]">
                    <Img
                      src="images/img_checkbox.svg"
                      className="Checkbox"
                      alt="Checkbox"
                    />
                  </Stack>
                  <Column className="bg-gray_100 items-end justify-start lg:pl-[10px] xl:pl-[12px] 2xl:pl-[14px] 3xl:pl-[17px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] w-[100%]">
                    <Stack className="bg-light_blue_900 lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] rounded-radius1 xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px] lg:w-[9px]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="remove"
                        alt="checkmark One"
                      />
                    </Stack>
                  </Column>
                  <Stack className="bg-white_A700 lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[9px] w-[100%]">
                    <Img
                      src="images/img_checkbox.svg"
                      className="Checkbox"
                      alt="Checkbox One"
                    />
                  </Stack>
                </Column>
                <Img
                  src="images/img_separator_168X24.svg"
                  className="separator"
                  alt="separator"
                />
                <Column className="items-center w-[25%]">
                  <Column className="bg-white_A700 items-center justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[19px] w-[100%]">
                    <Text
                      className="font-bold text-cyan_700 w-[auto]"
                      variant="body1"
                    >
                      Vagão
                    </Text>
                  </Column>
                  <Column className="bg-gray_100 justify-start xl:pr-[10px] 2xl:pr-[11px] 3xl:pr-[14px] lg:pr-[8px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[14px] lg:py-[8px] w-[100%]">
                    <Text className="data" variant="body1">
                      AAA1234
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 justify-start xl:pr-[10px] 2xl:pr-[11px] 3xl:pr-[14px] lg:pr-[8px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[14px] lg:py-[8px] w-[100%]">
                    <Text className="data" variant="body1">
                      AAA1234
                    </Text>
                  </Column>
                  <Column className="bg-gray_100 justify-start xl:pr-[10px] 2xl:pr-[11px] 3xl:pr-[14px] lg:pr-[8px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[14px] lg:py-[8px] w-[100%]">
                    <Text className="data" variant="body1">
                      AAA1234
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 justify-start xl:pr-[10px] 2xl:pr-[11px] 3xl:pr-[14px] lg:pr-[8px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[14px] lg:py-[8px] w-[100%]">
                    <Text className="data" variant="body1">
                      AAA1234
                    </Text>
                  </Column>
                </Column>
                <Img
                  src="images/img_separator_168X24.svg"
                  className="separator"
                  alt="separator One"
                />
                <Column className="items-center w-[52%]">
                  <Button
                    className="font-bold lg:text-[11px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[19px] text-center w-[100%]"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    Carregamentos
                  </Button>
                  <Text className="data1" variant="body1">
                    Dolor sit amet
                  </Text>
                  <Text
                    className="bg-white_A700 font-normal not-italic lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] text-cyan_700 w-[164px]"
                    variant="body1"
                  >
                    Consectetur adipiscing elit
                  </Text>
                  <Text className="data1" variant="body1">
                    Dolor sit amet
                  </Text>
                  <Column className="bg-white_A700 justify-start 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] w-[100%]">
                    <Text className="data3" variant="body1">
                      Consectetur adipiscing elit
                    </Text>
                  </Column>
                </Column>
              </Row>
              <Line className="bg-gray_300 h-[4px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] rounded-radius2 w-[84%]" />
              <Line className="bg-gray_300 h-[1px] w-[100%]" />
              <Row className="items-center justify-end lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[19px] w-[100%]">
                <Row
                  className="common-pointer items-start justify-center w-[6%]"
                  onClick={handleNavigate1}
                >
                  <Img src="images/img_plus.svg" className="plus" alt="plus" />
                  <Text className="ActionOptions" variant="body1">
                    Incluir
                  </Text>
                </Row>
                <Row className="items-start justify-center lg:ml-[30px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[6%]">
                  <Img src="images/img_edit.svg" className="plus" alt="edit" />
                  <Text className="ActionOptions" variant="body1">
                    Editar
                  </Text>
                </Row>
                <Row className="items-start justify-center lg:ml-[30px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] mr-[4px] w-[6%]">
                  <Img
                    src="images/img_trash.svg"
                    className="plus"
                    alt="trash"
                  />
                  <Text className="ActionOptions1" variant="body1">
                    Apagar
                  </Text>
                </Row>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default AgendamentoTwoPage;
