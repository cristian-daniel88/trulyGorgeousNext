import styled from "styled-components";

export const OurCreationsContainer = styled.section`
width:100% ;
height: auto;
padding: 0 10%;

@media screen and (max-width: 865px) {
  padding: 0 2%;
   
  }






`

export const OurCreationsBox = styled.div`
width:100%;

border: solid 1px #e8d8d8;

padding:5% 0%;
margin-top:50px ;
margin-bottom:50px ;
border-radius:10px ;


`

export const OurCreationsBox1 = styled.img`
width:400px ;
min-width:200px ;
border: solid 1px #e8d8d8;
border-radius: 5px;
cursor: pointer;


`

export const OurCreationsBox2 = styled.div`
width:100% ;

display:flex ;
justify-content:center;
flex-wrap:wrap ;


`

export const OurCreationsBox3 = styled.div`
width: 100%;
display:flex ;
justify-content:right ;
margin-top:20px ;

`

export const OurCreationsBox4 = styled.div`
width:60% ;
padding:10px ;



@media screen and (max-width: 1300px) {
 width:100%;
 margin-top: 0px;
   
  }


`

export const DescriptionOurCreations = styled.p`
width:60% ;




margin-right:3.5%;
font-size: 15px;

    color: rgba(73, 66, 97, 0.71);
padding :10px ;

@media screen and (max-width: 1300px) {
 width: 100%;
 margin-right: 0;
   
  }



`

export const CartGridOurCreations = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax( 180px, 1fr));
  gap:20px ;


  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(auto-fit, minmax( 130px, 1fr));
    gap:5px ;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax( 100px, 1fr));
   
  }


`;

export const CartOurCreations = styled.img`
 
  width: 200px;
 
  border-radius: 7px;

  cursor: pointer;
  margin:auto ;

  @media screen and (max-width: 1300px) {
    width:130px ;
  }

  @media screen and (max-width: 400px) {
  width: 100px;
   
  }




`;



