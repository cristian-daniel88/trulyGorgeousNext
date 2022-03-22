import React from "react";

import { designers } from "../../database/designers";

import SliderContainer from "../SliderContainer/SliderContainer";
import SliderContainerPhone from "../SliderContainerPhone/SliderContainerPhone";

import {
  DesignersContainer,
  GridPhotoContainer,

  ModelNameTitle,
  NameDesigner,
  ProductContainer,
  ProductContainerPhone,
} from "./DesignersStyles";

import MainPhoto from './MainPhoto'

function AlanHannah() {
  const ronaldModelsObject = designers[2].models;

  return (
    <DesignersContainer>
      <NameDesigner>Alan Hannah</NameDesigner>

      {ronaldModelsObject.map((value, index) => (
        <ProductContainer key={index}>
          <MainPhoto front={value.imgs[0]} back={value.imgs[1] ? value.imgs[1] : value.imgs[0]} key={index} src={value.imgs[0]}></MainPhoto>
          <GridPhotoContainer>
            <ModelNameTitle></ModelNameTitle>

             <SliderContainer photoMain={value.imgs} i={index} by={0} s/> 

          
          </GridPhotoContainer>
        </ProductContainer>
      ))}

     {
       ronaldModelsObject.map((v, i) => (
          
          
            <>
            <ProductContainerPhone style={{'marginBottom':'50px'}}>
     
              
              <>
               <SliderContainerPhone a={v}/>
              </>
         
            </ProductContainerPhone>
            </>
          

       ))

     }
    </DesignersContainer>
  );
}

export default AlanHannah;
