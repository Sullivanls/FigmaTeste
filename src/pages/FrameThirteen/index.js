import React from "react";

import { Column, Text, FloatingInput, Row, Img, Grid } from "components";

const FrameThirteenPage = () => {
  return (
    <>
      <Column className="font-firasans items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius4 shadow-bs1 w-[100%]">
          <Column className="justify-start 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] w-[100%]">
            <Text className="data3" as="h5" variant="h5">
              Veículo
            </Text>
            <FloatingInput
              className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
              name="mobileNo"
              labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
              focusedClasses="translate-y-[21px] scale-[1]"
              wrapperClasses="w-[100%] mt-[17px] top-[0]"
              labelText="Placa"
              defaultText="1234567890"
            ></FloatingInput>
            <Text
              className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] data3"
              as="h5"
              variant="h5"
            >
              Carregamento
            </Text>
            <FloatingInput
              className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
              name="language"
              labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
              focusedClasses="translate-y-[21px] scale-[1]"
              wrapperClasses="w-[100%] mt-[14px] top-[0]"
              labelText="Pedido - Código Externo "
              defaultText="1234567"
            ></FloatingInput>
            <FloatingInput
              className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
              name="mobileNo One"
              labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
              focusedClasses="translate-y-[21px] scale-[1]"
              wrapperClasses="w-[100%] mt-[8px] top-[0]"
              labelText="Rastreio"
              defaultText="1234567890"
            ></FloatingInput>
            <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]">
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="Input"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[32%] top-[0]"
                labelText="CNPJ/CPF Cliente"
                defaultText="12345678901234"
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="clienteCounter"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[20px] scale-[1]"
                wrapperClasses="w-[67%] top-[0]"
                labelText="Nome Cliente"
                defaultText="Cliente 1"
              ></FloatingInput>
            </Row>
            <FloatingInput
              className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
              name="Input One"
              labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
              focusedClasses="translate-y-[22px] scale-[1]"
              wrapperClasses="w-[100%] mt-[8px] top-[0]"
              labelText="Produto"
              defaultText="Soja"
            ></FloatingInput>
          </Column>
          <Column className="items-center justify-start xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] w-[100%]">
            <Text
              className="bg-white_A700 font-normal not-italic pb-[3px] lg:pr-[35px] xl:pr-[43px] 2xl:pr-[49px] 3xl:pr-[59px] lg:pt-[16px] xl:pt-[20px] 2xl:pt-[22px] 3xl:pt-[27px] text-cyan_700 w-[990px]"
              variant="body1"
            >
              Container
            </Text>
            <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]">
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="Input Two"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[24%] top-[0]"
                labelText="Identificador"
                defaultText="1234567"
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="Input Three"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[24%] top-[0]"
                labelText="Tipo"
                defaultText="DRY"
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="Input Four"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[19px] scale-[1]"
                wrapperClasses="w-[24%] top-[0]"
                labelText="Tamanho"
                defaultText="53"
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic p-[0] text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                wrapClassName="flex top-[0] w-[24%]"
                name="Input Five"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[20px] scale-[1]"
                wrapperClasses="w-[24%] top-[0]"
                labelText="High Cube"
                defaultText="Não"
                suffix={
                  <Img
                    src="images/img_arrowdropdown.svg"
                    className="w-[16px] ml-[0] mr-[12px] top-[0] my-[auto]"
                    alt="arrow_drop_down"
                  />
                }
              ></FloatingInput>
            </Row>
            <Row className="items-start justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]">
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic p-[0] text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                wrapClassName="flex top-[0] w-[50%]"
                name="Input Six"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[20px] scale-[1]"
                wrapperClasses="w-[50%] top-[0]"
                labelText="Situação"
                defaultText="Cheio"
                suffix={
                  <Img
                    src="images/img_arrowdropdown.svg"
                    className="w-[16px] ml-[0] mr-[12px] top-[0] my-[auto]"
                    alt="arrow_drop_down"
                  />
                }
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="Input Seven"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[20px] scale-[1]"
                wrapperClasses="w-[24%] mt-[1px] top-[0]"
                labelText="Peso"
                defaultText="2,3"
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="Input Eight"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[20px] scale-[1]"
                wrapperClasses="w-[24%] mt-[1px] top-[0]"
                labelText="Tara"
                defaultText="2,3"
              ></FloatingInput>
            </Row>
            <Grid className="xl:gap-[10px] 2xl:gap-[11px] 3xl:gap-[13px] lg:gap-[8px] grid grid-cols-2 xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[100%]">
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="Input Nine"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[100%] top-[0]"
                labelText="Instrução de Embarque - Código Externo"
                defaultText="123456789"
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                name="Input Ten"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[100%] top-[0]"
                labelText="Booking"
                defaultText="AA1524A11211ASDA"
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic p-[0] text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                wrapClassName="flex top-[0] w-[100%]"
                name="date"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[100%] top-[0]"
                labelText="Previsão de Saída"
                defaultText="09/09/1999"
                suffix={
                  <Img
                    src="images/img_calendar.svg"
                    className="w-[100%] top-[0]"
                    alt="calendar"
                  />
                }
              ></FloatingInput>
              <FloatingInput
                className="bg-transparent placeholder:bg-white_A700 border-0 font-normal placeholder:left-[16px] not-italic p-[0] text-[14px] text-gray_900 placeholder:text-light_blue_900 placeholder:top-[0] top-[0] w-[100%]"
                wrapClassName="flex top-[0] w-[100%]"
                name="date One"
                labelClasses="bg-white_A700 left-[16px] top-[0] text-light_blue_900"
                focusedClasses="translate-y-[21px] scale-[1]"
                wrapperClasses="w-[100%] top-[0]"
                labelText="Deadline"
                defaultText="09/09/1999"
                suffix={
                  <Img
                    src="images/img_calendar.svg"
                    className="w-[100%] top-[0]"
                    alt="calendar"
                  />
                }
              ></FloatingInput>
            </Grid>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FrameThirteenPage;
