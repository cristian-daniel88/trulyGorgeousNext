import styled from "styled-components";

export const BiographyContainer = styled.section`
width:100% ;
padding:0 25%;
height: auto;

@media screen and (max-width: 865px) {
    padding:0 10%;
  
   
  }



`

export const PhotoPerfil = styled.img`
width: 45%;
float:left ;
display: block;


`

export const BoutiqueImg = styled.img`
//width: 45%;
//height:250px; 
float:left ;
display: block;

@media screen and (max-width: 865px) {
 // height: 150px;
   
  }


`

export const ParrafoPerfil = styled.div`
margin-bottom: 10px;
margin-bottom:${({parrafo1}) => parrafo1 && '150px'} ;

@media screen and (max-width: 865px) {
  margin-bottom:${({parrafo1}) => parrafo1 && '30px'} ;
  
   
  }

`

export const BoldTitle = styled.strong`
width: 100%;
//background-color:gainsboro ;
background-color:white ;
border-radius:2px ;
display:block ;
text-align:center ;
margin-bottom:10px ;
border: solid 1px #e8d8d8;
font-family: "FuturaStd", sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
  color: #a59797;
  font-size: 120%;
`