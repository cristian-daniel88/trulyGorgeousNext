import React from "react";
import { LinkA } from "../Nav/NavStyles";
import {
  DesignersCardContainer,
  DesignersContainer,
  DesignersMainCard,
  DesignersMainColum,
  DesignersMainContainer,
  TitleBrand,
} from "./DesignersStyles";

function DesignersMain() {
  return (
    <DesignersContainer  style={{
      "background-image": "url('')" , 
      "backgroundRepeat":"no-repeat",
      "backgroundPosition":"center",
      "backgroundSize":"cover"
      }}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
      </style>
      <DesignersMainContainer style={{'marginTop':'50px'}}>
        <DesignersCardContainer>
          <LinkA href={"/ronald-joyce"}>
            <DesignersMainCard>
            <TitleBrand>
                <p className="brandTitle">Ronald Joyce</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA href={"/victoria-jane"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Victoria Jane</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>
        </DesignersCardContainer>

        <DesignersCardContainer>
          <LinkA href={"/paloma-blanca"}>
            <DesignersMainCard>
            <TitleBrand>
                <p className="brandTitle">Paloma Blanca</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

          <LinkA href={"/sofia-bianca"}>
            <DesignersMainCard>
              <TitleBrand>
                <p className="brandTitle">Sofia Bianca</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>
        </DesignersCardContainer>

        <DesignersCardContainer>
          <LinkA href={"/alan-hannah"}>
            <DesignersMainCard>
            <TitleBrand>
                <p className="brandTitle">Alan Hannah</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

            <DesignersMainCard>
          <a href={"https://dianelegrandbridal.com/"} target="_blank">
              <TitleBrand>
                <p className="brandTitle">Diane Legrand</p>
              </TitleBrand>
          </a>
            </DesignersMainCard>
        </DesignersCardContainer>

        <DesignersCardContainer style={{'justifyContent':'left', }} bottom='true'>
          <LinkA href={"/lusan-mandongus"}>
            <DesignersMainCard>
            <TitleBrand>
                <p className="brandTitle">Lusan Mandongus</p>
              </TitleBrand>
            </DesignersMainCard>
          </LinkA>

        
        </DesignersCardContainer>
      </DesignersMainContainer>
    </DesignersContainer>
  );
}

export default DesignersMain;
