import React, { useState } from "react";

import { designers } from "../../database/designers";

import { DesignersContainer, NameDesigner } from "./DesignersStyles";

import {
  OurCreationsContainer,
  OurCreationsBox,
  OurCreationsBox1,
  OurCreationsBox2,
  OurCreationsBox4,
  OurCreationsBox3,
  DescriptionOurCreations,
  CartGridOurCreations,
  CartOurCreations,
} from "../Alterations/OurCreationsStyles";
import { useDispatch } from "react-redux";
import { clickPopUpPhoto } from "../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions";

function PalomaBlanca() {
  const ronaldModelsObject = designers[4].models;
  const dispatch = useDispatch();

  const click = (value, booleano) => {
    dispatch(clickPopUpPhoto(value, booleano));
  };

  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);
  const [third, setthird] = useState(0);
  const [fourth, setfourth] = useState(0);
  const [fift, setfift] = useState(0);

  return (
    <DesignersContainer>
      <NameDesigner>Paloma Blanca</NameDesigner>

      <OurCreationsContainer>
        {/* 0 */}
        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[0].imgs[first]}
              onMouseEnter={() => setfirst(1)}
              onMouseLeave={() => setfirst(0)}
              style={{ width: "450px" }}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize="true">
                {ronaldModelsObject[0].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                    palomaBlancaResize="true"
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>
        </OurCreationsBox>

        {/* 1 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[1].imgs[second]}
              onMouseEnter={() => setsecond(1)}
              onMouseLeave={() => setsecond(0)}
              style={{ width: "350px" }}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize="true">
                {ronaldModelsObject[1].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                    palomaBlancaResize="true"
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>
        </OurCreationsBox>

        {/* 2 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[2].imgs[third]}
              onMouseEnter={() => setthird(1)}
              onMouseLeave={() => setthird(0)}
              style={{ width: "350px" }}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize="true">
                {ronaldModelsObject[2].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                    palomaBlancaResize="true"
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>
        </OurCreationsBox>

        {/* 3 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[3].imgs[fourth]}
              onMouseEnter={() => setfourth(1)}
              onMouseLeave={() => setfourth(0)}
              style={{ width: "450px" }}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize="true">
                {ronaldModelsObject[3].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                    palomaBlancaResize="true"
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>
        </OurCreationsBox>

        {/* 4 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ronaldModelsObject[4].imgs[fift]}
              onMouseEnter={() => setfift(1)}
              onMouseLeave={() => setfift(0)}
              style={{ width: "450px" }}
            />

            <OurCreationsBox4>
              <CartGridOurCreations palomaBlancaResize="true">
                {ronaldModelsObject[4].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                    palomaBlancaResize="true"
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
