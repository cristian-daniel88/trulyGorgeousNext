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
import { DescriptionOurCreations, OurCreationsBox, OurCreationsBox1, OurCreationsBox2, OurCreationsBox3, OurCreationsBox4, OurCreationsContainer } from "./OurCreationsStyles";

function OurCreations() {
  

  return (
    <DesignersContainer>
      <NameDesigner>Our Creations</NameDesigner>

      <OurCreationsContainer>

          {ourCreations.map((v, i) => (
             <>
               <OurCreationsBox>




                  <OurCreationsBox2>

                  <OurCreationsBox1 src={v.imgs[0]}/>


                  <OurCreationsBox4 >
                    Grid
                  </OurCreationsBox4>
                  
                  </OurCreationsBox2>
                  
                  
                  <OurCreationsBox3 >

                    <DescriptionOurCreations>description</DescriptionOurCreations>
                  </OurCreationsBox3>



                  
               </OurCreationsBox>
              
             </>
          ))}
         
      


      </OurCreationsContainer>















      

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
