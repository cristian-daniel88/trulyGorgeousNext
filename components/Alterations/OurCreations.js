import React from "react";
import { ourCreations } from "../../database/ourCreations";

import SliderContainer from "../SliderContainer/SliderContainer";
import SliderContainerPhone from "../SliderContainerPhone/SliderContainerPhone";

import {
  DesignersContainer,
  GridPhotoContainer,
  ModelNameTitle,
  NameDesigner,
  ProductContainer,
  ProductContainerPhone,
} from "../Designers/DesignersStyles";

import MainPhoto from "../Designers/MainPhoto";
import {
  CartGridOurCreations,
  CartOurCreations,
  DescriptionOurCreations,
  OurCreationsBox,
  OurCreationsBox1,
  OurCreationsBox2,
  OurCreationsBox3,
  OurCreationsBox4,
  OurCreationsContainer,
} from "./OurCreationsStyles";
import { useDispatch } from "react-redux";
import { clickPopUpPhoto } from "../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions";

function OurCreations() {
  const dispatch = useDispatch();

  const click = (value, booleano) => {
    dispatch(clickPopUpPhoto(value, booleano));
  };

  return (
    <DesignersContainer>
      <NameDesigner style={{ marginTop: "30px" }}>Our Creations</NameDesigner>

      <OurCreationsContainer>
        {/* 0 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[0].imgs[0]}
              onClick={() => click(ourCreations[0].imgs[0], true)}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[0].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>

          <OurCreationsBox3 >
            <DescriptionOurCreations >
              {ourCreations[0].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>

        {/* 1 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[1].imgs[0]}
              onClick={() => click(ourCreations[1].imgs[0], true)}

              style={{width:"450px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[1].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>

          <OurCreationsBox3>
            <DescriptionOurCreations style={{'marginRight':"1%"}}>
              {ourCreations[0].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>
      
      {/* 2 */}
      
      <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[2].imgs[0]}
              onClick={() => click(ourCreations[2].imgs[0], true)}

              style={{width:"450px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[2].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>

          <OurCreationsBox3>
            <DescriptionOurCreations style={{'marginRight':"1%"}}>
              {ourCreations[0].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>

        {/* 3 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[3].imgs[0]}
              onClick={() => click(ourCreations[3].imgs[0], true)}

              style={{width:"450px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[3].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>

          <OurCreationsBox3>
            <DescriptionOurCreations style={{'marginRight':"1%"}}>
              {ourCreations[0].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>


        {/* 4 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[4].imgs[0]}
              onClick={() => click(ourCreations[4].imgs[0], true)}

              style={{width:"450px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[4].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>

          <OurCreationsBox3>
            <DescriptionOurCreations style={{'marginRight':"1%"}}>
              {ourCreations[0].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>


        {/* 5 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[5].imgs[0]}
              onClick={() => click(ourCreations[5].imgs[0], true)}

              style={{width:"450px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[5].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>

          <OurCreationsBox3>
            <DescriptionOurCreations style={{'marginRight':"1%"}}>
              {ourCreations[0].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>


        {/* 6 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[6].imgs[0]}
              onClick={() => click(ourCreations[6].imgs[0], true)}

              style={{width:"250px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[6].imgs.map((j, p) => (
                  <CartOurCreations
                    key={p}
                    src={j}
                    onClick={() => click(j, true)}
                    
                  ></CartOurCreations>
                ))}
              </CartGridOurCreations>
            </OurCreationsBox4>
          </OurCreationsBox2>

          <OurCreationsBox3>
            <DescriptionOurCreations style={{'marginRight':"5%"}} >
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>

















      </OurCreationsContainer>

    




      






















      {ourCreations.map((v, i) => (
        <>
          <ProductContainerPhone key={i}>
            <>
              <SliderContainerPhone a={v} />
            </>
          </ProductContainerPhone>
        </>
      ))}

      


    </DesignersContainer>
  );
}

export default OurCreations;
