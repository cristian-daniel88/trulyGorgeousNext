import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleHamburguerHidden } from "../../redux/hamburguer/hamburguerActions";
import { LinkA } from "../Nav/NavStyles";
import {
  ButtonBurguer,
  ButtonBurguerContainer,
  ButtonMenu,
  DetailsLanguage,
  LiBurguer,
  Menu,
  MenuContainer,
  NavBurguer,
  SummaryLanguage,
  UlBurguer,
} from "./ToggleMenuStyles";

function ToggleMenu() {
  const toggle = useSelector((state) => state.hamburguer.hidden);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleHamburguerHidden());
  };

  return (
    <Menu toggle={toggle}>
      <MenuContainer>
        <NavBurguer>
          <UlBurguer>
            <LinkA href={"/"}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>HOME</ButtonMenu>
              </LiBurguer>
            </LinkA>

            {/* <DetailsLanguage open>
              <LinkA href={"/about-us"}>
                <SummaryLanguage
                  onClick={toggleMenu}
                  style={{ marginBottom: "5px" }}
                >
                  ABOUT US
                </SummaryLanguage>
              </LinkA>

              <LinkA href={"/our-boutique"}>
                <ButtonMenu
                  style={{ fontSize: "12px", marginBottom: "5px" }}
                  onClick={toggleMenu}
                >
                  OUR BOUTIQUE
                </ButtonMenu>
              </LinkA>
              <br />
              <LinkA href={"/our-brides"}>
                <ButtonMenu
                  style={{ fontSize: "12px", marginBottom: "5px" }}
                  onClick={toggleMenu}
                >
                  OUR BRIDES
                </ButtonMenu>
              </LinkA>
              <br />
              
            
            </DetailsLanguage> */}

            <LinkA href={"/our-boutique"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>ABOUT US</ButtonMenu>
              </LiBurguer>
            </LinkA>

            {/* <DetailsLanguage>
              <SummaryLanguage>WEDDING DRESSES</SummaryLanguage>
              <ButtonMenu
                style={{
                  fontSize: "12px ",
                  display: "block",
                  marginTop: "15px",
                }}
              >
                FAIRYTALE
              </ButtonMenu>
              <ButtonMenu
                style={{
                  fontSize: "12px ",
                  display: "block",
                  marginTop: "15px",
                }}
              >
                ROMANTIC
              </ButtonMenu>
              <ButtonMenu
                style={{
                  fontSize: "12px ",
                  display: "block",
                  marginTop: "15px",
                }}
              >
                SOPHISTICATED
              </ButtonMenu>
              <ButtonMenu
                style={{
                  fontSize: "12px ",
                  display: "block",
                  marginTop: "15px",
                }}
              >
                ELEGANT
              </ButtonMenu>
           
            </DetailsLanguage> */}

            <LinkA href={"/wedding-dresses"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>WEDDING DRESSES</ButtonMenu>
              </LiBurguer>
            </LinkA>

            <LinkA href={"/designers"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>DESIGNERS</ButtonMenu>
              </LiBurguer>
            </LinkA>

            <DetailsLanguage open>
              <LinkA href={"/alterations"}>
                <SummaryLanguage
                  onClick={toggleMenu}
                  style={{ marginBottom: "5px" }}
                >
                  ALTERATIONS
                </SummaryLanguage>
              </LinkA>

              <LinkA href={"/price-list"}>
                <ButtonMenu
                  style={{ fontSize: "12px", marginBottom: "5px" }}
                  onClick={toggleMenu}
                >
                  PRICE LIST
                </ButtonMenu>
              </LinkA>

              <br />
              <LinkA href={"/our-creations"}>
                <ButtonMenu style={{ fontSize: "12px" }} onClick={toggleMenu}>
                  OUR CREATIONS
                </ButtonMenu>
              </LinkA>
            </DetailsLanguage>

            {/* <LinkA href={"/alterations"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>ALTERATIONS</ButtonMenu>
              </LiBurguer>
            </LinkA> */}

            <LinkA href={"/testimonials"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>TESTIMONIALS</ButtonMenu>
              </LiBurguer>
            </LinkA>

            <LinkA href={"/contact"} onClick={toggleMenu}>
              <LiBurguer>
                <ButtonMenu onClick={toggleMenu}>CONTACT</ButtonMenu>
              </LiBurguer>
            </LinkA>
          </UlBurguer>

          <ButtonBurguerContainer>
            <ButtonMenu onClick={toggleMenu}>
              <ButtonBurguer toggle={toggle ? "true" : "false"} />
            </ButtonMenu>
          </ButtonBurguerContainer>
        </NavBurguer>
      </MenuContainer>
    </Menu>
  );
}

export default ToggleMenu;
