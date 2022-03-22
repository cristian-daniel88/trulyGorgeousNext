import React from "react";
import { useDispatch } from "react-redux";
import { clickPopUpPhoto } from "../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions";
import { DesignersContainer, NameDesigner } from "../Designers/DesignersStyles";
import { LinkA } from "../Nav/NavStyles";
import {
  BiographyContainer,
  BoldTitle,
  BoutiqueImg,
  ParrafoPerfil,
  PhotoPerfil,
} from "./BiographyStyles";


function Biography() {

  const dispatch = useDispatch()

 

  const click = (value, booleano) => {
  
    dispatch(clickPopUpPhoto(value, booleano))
  }

  return (
    <DesignersContainer style={{'height':"auto" ,"marginBottom":'50px'}}>
      <NameDesigner style={{ marginBottom: "20px" }}>About Us</NameDesigner>

      <BiographyContainer>
        <BoutiqueImg src="./assets/boutique2.jpg" style={{"width":"30%", 'marginRight':'25px'}} onClick={()=>click('./assets/boutique2.jpg', true)} />
        <ParrafoPerfil style={{'marginBottom':"50px"}}>
          <BoldTitle>Our Boutique</BoldTitle>
          <p style={{'fontSize':'15px', 'textAlign':'justify', 'color':"#494261b5"}}>
            At Truly Gorgeous, we provide a relaxed, customer-focused setting
            for our brides to peruse our collection. We offer a diverse range of
            gowns in distinctive styles and sizes from several award-winning
            designers. We understand that selecting your wedding dress can be
            nerve-wracking, so we are here to guide you through the process and
            support you in expressing your personal style.<br/>
            Our boutique allows
            for one bride and their friends/family at a time guaranteeing
            quality time with our expert Sunay, the owner and bespoke tailor at
            Truly Gorgeous. With over 40 years’ experience in the fashion
            industry, Sunay is on-hand to assist you in making those
            all-important and exciting decisions in selecting and altering your
            dress.
          </p>
        </ParrafoPerfil>

        <PhotoPerfil src="./assets/perfil.jpg" style={{ 'float': "right" , "width":"20%" , 'marginLeft':'25px'}}  onClick={()=>click('./assets/perfil.jpg', true)} />
        <ParrafoPerfil>
          <BoldTitle>Meet Sunay</BoldTitle>
          <p style={{'fontSize':'15px', 'textAlign':'justify' , 'color':"#494261b5"}}>
            I offer a high-quality, one-to-one bridal service from our boutique
            in historical Chichester, West Sussex. I have worked in fashion for
            over 40 years, specialising in tailoring and Couture design. Part of
            what makes Truly Gorgeous unique is our <LinkA href={'/alterations'}><div style={{'display':'inline', 'color':'purple', 'cursor':'pointer'}}>alterations service</div></LinkA>; I
            carefully undertake all alterations myself on-site, promising a
            personalised approach from start to finish. We specialize in making
            your dress ‘unique’ by adding lace tops, boleros, straps, sleeves,
            belts, and trains. Additionally, I can alter the neckline and back
            of the dress to fit your personal style. Our expertise and advice
            assure any alterations fit perfectly with the original design.
            <br/><br/>
            Whether you have a vision in mind, or you require some help in
            finding your style, we guarantee all our brides will feel Truly
            Gorgeous on their special day.
          </p>
        </ParrafoPerfil>
      </BiographyContainer>
    </DesignersContainer>
  );
}

export default Biography;
