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
import { CartGridOurCreations, CartOurCreations, DescriptionOurCreations, OurCreationsBox, OurCreationsBox1, OurCreationsBox2, OurCreationsBox3, OurCreationsBox4, OurCreationsContainer } from "./OurCreationsStyles";
import { useDispatch } from "react-redux";
import { clickPopUpPhoto } from "../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions";

function OurCreations() {
  
  const dispatch = useDispatch()

 

  const click = (value, booleano) => {
  
    dispatch(clickPopUpPhoto(value, booleano))
  }

  return (
    <DesignersContainer>
      <NameDesigner>Our Creations</NameDesigner>

      <OurCreationsContainer>

      
             {/* 0 */}

               <OurCreationsBox>




                  <OurCreationsBox2>

                  <OurCreationsBox1 src={ourCreations[0].imgs[0]} onClick={()=> click(ourCreations[0].imgs[0], true)}/>


                  <OurCreationsBox4 >
                    <CartGridOurCreations>
                      {ourCreations[0].imgs.map((j , p) => (

                        <CartOurCreations key={p} src={j} onClick={()=> click(j, true)} >

                        </CartOurCreations>
                      ))}
                    </CartGridOurCreations>
                  </OurCreationsBox4>
                  
                  </OurCreationsBox2>
                  
                  
                  <OurCreationsBox3 >

                    <DescriptionOurCreations>{ourCreations[0].description}</DescriptionOurCreations>
                  </OurCreationsBox3>



                  
               </OurCreationsBox>
              
             
        
         
      


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
