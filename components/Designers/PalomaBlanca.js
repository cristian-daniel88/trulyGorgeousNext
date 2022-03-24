import React from "react";

import { designers } from "../../database/designers";

import {
  DesignersContainer,
  NameDesigner,
 
} from "./DesignersStyles";

import {OurCreationsContainer, OurCreationsBox, OurCreationsBox1, OurCreationsBox2, OurCreationsBox4, OurCreationsBox3, DescriptionOurCreations, CartGridOurCreations, CartOurCreations} from "../Alterations/OurCreationsStyles"
import { useDispatch } from "react-redux";
import { clickPopUpPhoto } from "../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions";


function PalomaBlanca() {
  const ronaldModelsObject = designers[4].models;

  const dispatch = useDispatch();

  const click = (value, booleano) => {
    dispatch(clickPopUpPhoto(value, booleano));
  };


  return (
    <DesignersContainer>
      <NameDesigner>Paloma Blanca</NameDesigner>

        
      <OurCreationsContainer>

      <OurCreationsBox>

          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[0].imgs[0]}
              onClick={() => click(ronaldModelsObject[0].imgs[0], true)}

              style={{width:"450px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize='true'>
                {ronaldModelsObject[0].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                    palomaBlancaResize='true'

                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>

      
        </OurCreationsBox> 

      </OurCreationsContainer>
  


    </DesignersContainer>
  );
}

export default PalomaBlanca;
