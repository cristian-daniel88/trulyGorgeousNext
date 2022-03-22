import React from "react";
import { LinkA } from "../Nav/NavStyles";
import { AlterationsContainer, BoxAlterations } from "./AlterationsStyles";

function Alterations() {
  return (
    <div style={{

      'backgroundImage':`url('./assets/alterations2.jpg')`,

      'backgroundPosition':'center',

      'backgroundRepeat':'no-repeat',

      'backgroundSize':'cover'

      
    }}>

    <AlterationsContainer>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
      </style>
      
      <LinkA href={'/our-creations'}>
      <BoxAlterations>Our Creations</BoxAlterations>
      </LinkA>

      <LinkA href={'/price-list'}>
      <BoxAlterations>Price List</BoxAlterations>
      </LinkA>
    </AlterationsContainer>
    </div>
  );
}

export default Alterations;
