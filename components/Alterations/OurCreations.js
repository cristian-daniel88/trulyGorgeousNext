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
              {ourCreations[1].description}
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
              {ourCreations[2].description}
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
              {ourCreations[3].description}
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
              {ourCreations[4].description}
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
              {ourCreations[5].description}
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
              {ourCreations[6].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>

        {/* 7 */}


         
        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[7].imgs[0]}
              onClick={() => click(ourCreations[7].imgs[0], true)}

              style={{width:"400px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[7].imgs.map((j, p) => (
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
            <DescriptionOurCreations style={{'marginRight':"3%"}} >
              {ourCreations[7].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>

        {/* 8 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[8].imgs[0]}
              onClick={() => click(ourCreations[8].imgs[0], true)}

              style={{width:"280px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[8].imgs.map((j, p) => (
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
            <DescriptionOurCreations style={{'marginRight':"7%"}} >
              {ourCreations[8].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>


        {/* 9 */}


        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[9].imgs[0]}
              onClick={() => click(ourCreations[9].imgs[0], true)}

              style={{width:"300px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[9].imgs.map((j, p) => (
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
            <DescriptionOurCreations style={{'marginRight':"2%"}} >
              {ourCreations[9].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>


        {/* 10 */}


        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[10].imgs[0]}
              onClick={() => click(ourCreations[10].imgs[0], true)}

              style={{width:"300px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[10].imgs.map((j, p) => (
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
            <DescriptionOurCreations style={{'marginRight':"7%"}} >
              {ourCreations[10].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>

        {/* 11 */}
        
        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[11].imgs[0]}
              onClick={() => click(ourCreations[11].imgs[0], true)}

              style={{width:"300px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[11].imgs.map((j, p) => (
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
            <DescriptionOurCreations style={{'marginRight':"7%"}} >
              {ourCreations[11].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>


        {/* 12 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[12].imgs[0]}
              onClick={() => click(ourCreations[12].imgs[0], true)}

              style={{width:"300px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[12].imgs.map((j, p) => (
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
            <DescriptionOurCreations style={{'marginRight':"7%"}} >
              {ourCreations[12].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>

        {/* 13 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[13].imgs[0]}
              onClick={() => click(ourCreations[13].imgs[0], true)}

              style={{width:"300px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[13].imgs.map((j, p) => (
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
            <DescriptionOurCreations style={{'marginRight':"7%"}} >
              {ourCreations[13].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>


        {/* 14 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[14].imgs[0]}
              onClick={() => click(ourCreations[14].imgs[0], true)}

              style={{width:"300px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[14].imgs.map((j, p) => (
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
            <DescriptionOurCreations style={{'marginRight':"7%"}} >
              {ourCreations[14].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>


        {/* 15 */}

        <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[15].imgs[0]}
              onClick={() => click(ourCreations[15].imgs[0], true)}

              style={{width:"300px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[15].imgs.map((j, p) => (
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
            <DescriptionOurCreations style={{'marginRight':"7%"}} >
              {ourCreations[15].description}
            </DescriptionOurCreations>
          </OurCreationsBox3>
        </OurCreationsBox>


        {/* 16 */}

         <OurCreationsBox>
          <OurCreationsBox2>
            <OurCreationsBox1
              src={ourCreations[16].imgs[0]}
              onClick={() => click(ourCreations[16].imgs[0], true)}

              style={{width:"300px"}}
            />

            <OurCreationsBox4>
              <CartGridOurCreations>
                {ourCreations[16].imgs.map((j, p) => (
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
            <DescriptionOurCreations style={{'marginRight':"7%"}} >
              {ourCreations[16].description}
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
