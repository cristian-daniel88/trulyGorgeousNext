import React from "react";
import { ourCreations } from "../../database/ourCreations";

import SliderContainer from "../SliderContainer/SliderContainer";
import SliderContainerPhone from "../SliderContainerPhone/SliderContainerPhone";

import {
  DesignersContainer,
  GridPhotoContainer,

  ModelNameTitle,
  NameDesigner,
  ProductContainer,
  ProductContainerPhone,
} from "../Designers/DesignersStyles";

import MainPhoto from '../Designers/MainPhoto'

function OurCreations() {
  

  return (
    <DesignersContainer>
      <NameDesigner>Our Creations</NameDesigner>

      {ourCreations.map((value, index) => (
        <ProductContainer key={index}>
          <MainPhoto front={value.imgs[0]} back={value.imgs[1]} key={index} src={value.imgs[0]}></MainPhoto>
          <GridPhotoContainer>

             <SliderContainer photoMain={value.imgs} i={index} by={0} s/> 

            <ModelNameTitle>{value.description}</ModelNameTitle>
          
          </GridPhotoContainer>
          
        </ProductContainer>
      
      ))}
      

     {
       ourCreations.map((v, i) => (
          
          
            <>
            <ProductContainerPhone>
     
              
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

export default OurCreations;
