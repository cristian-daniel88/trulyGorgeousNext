import React from "react";
import { useDispatch } from "react-redux";

import { designers } from "../../database/designers";
import { clickPopUpPhoto } from "../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions";

import SliderContainer from "../SliderContainer/SliderContainer";
import SliderContainerPhone from "../SliderContainerPhone/SliderContainerPhone";
import { ImagenContainerDesigner, ImgDesignerModel, PhoneCard } from "../SliderContainerPhone/SliderContainerPhoneStyles";
import { Cart, CartGrid } from "../weddingDresses/WeddingDressesStyles";

import {
  DesignersContainer,
  NameDesigner,
  ProductContainerPhone,
} from "./DesignersStyles";

import MainPhoto from "./MainPhoto";

function LusanMandongus() {
  const ronaldModelsObject = designers[5].models;
  const dispatch = useDispatch();

  const click = (value, booleano) => {
    dispatch(clickPopUpPhoto(value, booleano));
  };

  return (
    <DesignersContainer>
      <NameDesigner>Lusan Mandongus</NameDesigner>

      <CartGrid>
        {ronaldModelsObject.map((v, i) => (
          <Cart
            img={v.imgs}
            key={i}
            onClick={() => click(v.imgs[0], true)}
          ></Cart>
        ))}
      </CartGrid>

      {ronaldModelsObject.map((v, i) => (
        <>
          <ProductContainerPhone style={{ marginBottom: "50px" }} key={i}>
            <>
              <PhoneCard>
                <ImagenContainerDesigner>
                  <ImgDesignerModel
                    img={v.imgs[0]}
                  
                  />
                </ImagenContainerDesigner>
              </PhoneCard>
            </>
          </ProductContainerPhone>
        </>
      ))}
    </DesignersContainer>
  );
}

export default LusanMandongus;
