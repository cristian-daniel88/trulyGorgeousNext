import React from "react";
import { useDispatch } from "react-redux";

import { testimonials } from "../../database/testimonials";
import { clickPopUpPhoto } from "../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions";
import { DesignersContainer, NameDesigner, ProductContainerPhone } from "../Designers/DesignersStyles";
import SliderContainerPhone from "../SliderContainerPhone/SliderContainerPhone";
import { CartGrid } from "../weddingDresses/WeddingDressesStyles";
import { CardBride, CardBridesContainer, TestimonialsImg } from "./OurBridesStyles";
import { CardGridTestimonials, CartTestimonials, TestimonalsCartsDetails, TestimonialsContainer } from "./TestimonialsStyles";

function Testimonials() {
  const dispatch = useDispatch()

  const click = (value, boleano) => {
    
    dispatch(clickPopUpPhoto(value, boleano));
  };


  return (
    <DesignersContainer>
      <NameDesigner style={{'marginTop':'30px'}}>Testimonials</NameDesigner>
    

      <TestimonialsContainer>

      < CardGridTestimonials>
          { testimonials.map((v, i) => (
            <>
            <div>

            <CartTestimonials img={v.models[0].imgs} key={i} >
            
            </CartTestimonials>

            <TestimonalsCartsDetails>
              <i>{v.models[0].dedicated}</i><br/>
              <i>{v.models[0].description}</i><br/><br/>
              <i>{v.models[0].thanks}</i><br/>
              <i>{v.models[0].thanks2}</i>
            </TestimonalsCartsDetails>
            </div>
            
            </>
            


          ))}
       
        </ CardGridTestimonials>


      </TestimonialsContainer>



      
     
    </DesignersContainer>
  );
}

export default Testimonials;
