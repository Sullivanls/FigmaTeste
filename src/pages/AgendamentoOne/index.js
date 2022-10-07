import React from "react";

import { Column, Text, FloatingInput, Row, Img } from "components";
import Header from "components/Header/Header";

const AgendamentoOnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-firasans items-center justify-start mx-[auto] lg:pb-[25px] xl:pb-[31px] 2xl:pb-[35px] 3xl:pb-[42px] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="bg-white_A700 justify-start lg:p-[36px] xl:p-[45px] 2xl:p-[51px] 3xl:p-[61px] rounded-radius4 shadow-bs1 w-[100%]">
          <Text
            className="lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] data3"
            as="h5"
            variant="h5"
          >
            Geral
          </Text>
          <FloatingInput
            className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-red_400 placeholder:top-[0] top-[0] w-[100%]"
            name="language"
            labelClasses="bg-white_A700 left-[16px] top-[0] text-red_400"
            focusedClasses="translate-y-[21px] scale-[1]"
            wrapperClasses="w-[98%] mt-[16px] ml-[16px] top-[0]"
            labelText=" Terminal"
            defaultText="Rondonópolis"
          ></FloatingInput>
          <Row className="items-center lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[98%]">
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
              wrapClassName="flex ml-[15px] top-[0] w-[32%]"
              name="Input"
              labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
              focusedClasses="translate-y-[22px] scale-[1]"
              wrapperClasses="w-[32%] ml-[15px] top-[0]"
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
              wrapClassName="flex ml-[15px] top-[0] w-[32%]"
              name="language One"
              labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
              focusedClasses="translate-y-[20px] scale-[1]"
              wrapperClasses="w-[32%] ml-[15px] top-[0]"
              labelText="Modal"
              defaultText="-- Selecione -- "
              suffix={
                <Img
                  src="images/img_arrowdropdown.svg"
                  className="w-[16px] ml-[0] mr-[12px] top-[0] my-[auto]"
                  alt="arrow_drop_down"
                />
              }
            ></FloatingInput>
          </Row>
          <Row className="items-center lg:mb-[544px] xl:mb-[681px] 2xl:mb-[766px] 3xl:mb-[920px] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[98%]">
            <FloatingInput
              className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic p-[0] text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
              wrapClassName="flex top-[0] w-[49%]"
              name="language Two"
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
              wrapClassName="flex ml-[15px] top-[0] w-[49%]"
              name="date"
              labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
              focusedClasses="translate-y-[21px] scale-[1]"
              wrapperClasses="w-[49%] ml-[15px] top-[0]"
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
      </Column>
    </>
  );
};

export default AgendamentoOnePage;
