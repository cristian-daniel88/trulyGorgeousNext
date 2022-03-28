import React, { useState } from "react";
import {
  ContainerLogoAndH2,
  Designer,
  H1Container,
  Header,
  Li,
  LinkA,
  Logo,
  LogoContainer,
  MenuBurguer,
  Navegador,
  Ul,
  LinkAHome,
  PopUp,
  PopUpUl,
  PopUpLi,
  BoxContact,
  IconFaceBook,
  IconInstagram,
  IconPhone,
  AInstagram,
  TelophoneNumber,
  TelephoneNumber2,
} from "./NavStyles";

import { useDispatch, useSelector } from "react-redux";
import { toggleHamburguerHidden } from "../../redux/hamburguer/hamburguerActions";
import {
  hoverPopDesigners,
  hoverPopUpAboutUs,
  hoverPopUpAlterations,
  hoverPopUpWeddingDresses,
} from "../../redux/popUp/popUpActions";

function Nav() {
  const [focuss, setFocuss] = useState(true);

  const dispatch = useDispatch();
  const popAbout = useSelector((state) => state.popUp.hover1);
  const popUpWed = useSelector((state) => state.popUp.hover3);
  const popUpAlt = useSelector((state) => state.popUp.hover2);
  const popUpDes = useSelector((state) => state.popUp.hover4);

  const popUpAboutIn = () => {
    dispatch(hoverPopUpAboutUs(true));
    setFocuss(false);
  };

  const popUpAboutOut = () => {
    dispatch(hoverPopUpAboutUs(false));
    setFocuss(false);
  };

  const popUpWeddingIn = () => {
    dispatch(hoverPopUpWeddingDresses(true));
    setFocuss(false);
  };

  const popUpWeddingOut = () => {
    dispatch(hoverPopUpWeddingDresses(false));
    setFocuss(false);
  };

  const popUpAlterationsIn = () => {
    dispatch(hoverPopUpAlterations(false));
    setFocuss(false);
  };

  const popUpAlterationsOut = () => {
    dispatch(hoverPopUpAlterations(true));
    setFocuss(false);
  };

  const popUpDesignersIn = () => {
    dispatch(hoverPopDesigners(true));
    setFocuss(false);
  };

  const popUpDesignersOut = () => {
    dispatch(hoverPopDesigners(false));
    setFocuss(false);
  };

  const toggleMenu = () => {
    dispatch(toggleHamburguerHidden());
  };

  const fucusHome = () => {
    setFocuss(false);
  };

  return (
    <Header>
      <TelephoneNumber2 href="tel:01243788090" target="_blank">
        <IconPhone style={{ fontSize: "1.3em", color: "rgb(72, 64, 64)" }} />
        &nbsp;
        <div style={{ color: "rgb(72, 64, 64)" }}>01243788090</div>
      </TelephoneNumber2>

      <ContainerLogoAndH2>
        <LinkA href={"/"} >
          <LogoContainer onClick={toggleMenu}>
            <Logo />
          </LogoContainer>
        </LinkA>

        <H1Container>
          <Designer>DESIGNER & BESPOKE BRIDAL WEAR</Designer>
        </H1Container>
      </ContainerLogoAndH2>

      <Navegador>
        <Ul>
          <Li>
            <LinkAHome focuss={focuss == true ? "true" : "false"} href={"/"}>
              Home
            </LinkAHome>
          </Li>

          <Li onClick={fucusHome}>
            {/* onMouseEnter={popUpAboutIn} onMouseLeave={popUpAboutOut} */}
            <LinkA href={"/our-boutique"}>
              <div onClick={popUpAboutOut}>About Us</div>
            </LinkA>
            <PopUp popUp={popAbout ? "true" : "false"}>
              <PopUpUl popUp={popAbout ? "true" : "false"}>
                <LinkA href={"/our-boutique"}>
                  <PopUpLi onClick={popUpAboutOut}>Our Boutique</PopUpLi>
                </LinkA>

                <LinkA href={"/our-brides"}>
                  <PopUpLi onClick={popUpAboutOut}>Our Brides</PopUpLi>
                </LinkA>

                {/* <LinkA href={'/testimonials'}>
                        <PopUpLi onClick={popUpAboutOut}>
                            Testimonials
                        </PopUpLi>
                     </LinkA> */}
              </PopUpUl>
            </PopUp>
          </Li>

          <Li
            onClick={fucusHome}
            onMouseEnter={popUpWeddingIn}
            onMouseLeave={popUpWeddingOut}
          >
            <LinkA href={"/wedding-dresses"}>
              <div onClick={popUpWeddingOut}>Wedding Dresses</div>
            </LinkA>
            <PopUp popUp={popUpWed ? "true" : "false"}>
              <PopUpUl popUp={popUpWed ? "true" : "false"}>
                <LinkA href={"/fairytale"}>
                  <PopUpLi onClick={popUpWeddingOut}>Fairytale</PopUpLi>
                </LinkA>

                <LinkA href={"/romantic"}>
                  <PopUpLi onClick={popUpWeddingOut}>Romantic</PopUpLi>
                </LinkA>

                <LinkA href={"/sophisticated"}>
                  <PopUpLi onClick={popUpWeddingOut}>Sophisticated</PopUpLi>
                </LinkA>

                <LinkA href={"/elegant"}>
                  <PopUpLi onClick={popUpWeddingOut}>Elegant</PopUpLi>
                </LinkA>
              </PopUpUl>
            </PopUp>
          </Li>

          <Li
            onClick={fucusHome}
            onMouseEnter={popUpDesignersIn}
            onMouseLeave={popUpDesignersOut}
          >
            <LinkA href={"/designers"}>
              <div onClick={popUpDesignersOut}>Designers</div>
            </LinkA>
            <PopUp
              popUp={popUpDes ? "true" : "false"}
              style={{ width: "180px" }}
            >
              <PopUpUl popUp={popUpDes ? "true" : "false"}>
                <LinkA href={"/paloma-blanca"}>
                  <PopUpLi onClick={popUpDesignersOut}>Paloma Blanca</PopUpLi>
                </LinkA>

                <LinkA href="/ronald-joyce">
                  <PopUpLi onClick={popUpDesignersOut}>Ronald Joyce</PopUpLi>
                </LinkA>

                <LinkA href={"/victoria-jane"}>
                  <PopUpLi onClick={popUpDesignersOut}>Victoria Jane</PopUpLi>
                </LinkA>

                <a href={"https://dianelegrandbridal.com"} target="_blank">
                  <PopUpLi onClick={popUpDesignersOut}>Diane Legrand</PopUpLi>
                </a>

                
                <LinkA href={"/alan-hannah"}>
                  <PopUpLi onClick={popUpDesignersOut}>Alan Hannah</PopUpLi>
                </LinkA>

                <LinkA href={"/sofia-bianca"}>
                  <PopUpLi onClick={popUpDesignersOut}>Sofia Bianca</PopUpLi>
                </LinkA>


                

                <LinkA href={"/lusan-mandongus"}>
                  <PopUpLi onClick={popUpDesignersOut}>Lusan Mandongus</PopUpLi>
                </LinkA>
              </PopUpUl>
            </PopUp>
          </Li>

          <Li
            onClick={fucusHome}
            onMouseEnter={popUpAlterationsOut}
            onMouseLeave={popUpAlterationsIn}
          >
            <LinkA href={"/alterations"}>
              <div onClick={popUpAlterationsIn}>Alterations</div>
            </LinkA>
            <PopUp
              popUp={popUpAlt ? "true" : "false"}
              style={{ width: "140px" }}
            >
              <PopUpUl popUp={popUpAlt ? "true" : "false"}>
                <LinkA href={"/price-list"}>
                  <PopUpLi onClick={popUpAlterationsIn}>Price list</PopUpLi>
                </LinkA>

                <LinkA href={"/our-creations"}>
                  <PopUpLi onClick={popUpAlterationsIn}>Our Creations</PopUpLi>
                </LinkA>
              </PopUpUl>
            </PopUp>
          </Li>

          <Li onClick={fucusHome}>
            <LinkA href="/testimonials">Testimonials</LinkA>
          </Li>

          <Li onClick={fucusHome}>
            <LinkA href="/contact">Contact</LinkA>
          </Li>
        </Ul>
        <MenuBurguer onClick={toggleMenu} />
      </Navegador>
      <BoxContact>
        <a
          style={{ cursor: "pointer", zIndex: "1000000", color: "#3B5998" }}
          href="https://www.facebook.com/trulygorgeousweddingdresses"
          target="_blank"
        >
          <IconFaceBook />
        </a>
        <AInstagram
          style={{ cursor: "pointer", zIndex: "1000000" }}
          href="https://www.instagram.com/trulygorgeousbridal"
          target="_blank"
        >
          <IconInstagram />
        </AInstagram>

        <a
          style={{
            cursor: "pointer",
            zIndex: "1000000",
            display: "flex",
            color: "#484040",
          }}
          href="tel:01243788090"
          target="_blank"
        >
          <IconPhone></IconPhone> &nbsp;
          <TelophoneNumber>01243788090</TelophoneNumber>
        </a>
      </BoxContact>
    </Header>
  );
}

export default Nav;
