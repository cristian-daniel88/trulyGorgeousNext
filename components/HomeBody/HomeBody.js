import React, { useEffect, useState } from 'react'
import { BodyHome } from './HomeBodyStyles'
import Arrows from '../Arrows/Arrows'
import Balls from '../Balls/Balls'
import { useDispatch, useSelector } from 'react-redux'
import { hoverSlider, sliderManual } from '../../redux/slider/sliderActions'








function HomeBody({toggle}) {
  const [count, setCount] = useState(1);
  
  const [opaci , setOpaci] = useState(1);
  
  const dispatch = useDispatch()
  const stopAutoSlider = useSelector((state)=> state.slider.slider)
  
  const stopSlider = () => {
    dispatch(sliderManual())
  }

  const activateSlider = () => {
    dispatch(hoverSlider())
  }
  

  useEffect(() => {
    

    if (!stopAutoSlider) {
      let timer = setTimeout(()=> {
        setOpaci(1)
        if(count == 3){
          setCount(1)
          return
       }
       setCount(count + 1)
      } , 4000);

      let timerOpacity1 = setTimeout(()=> {
          setOpaci(.5)
      } , 3000);

      let timerOpacity2 = setTimeout(()=> {
        setOpaci(.4)
      } , 3100);

      let timerOpacity3 = setTimeout(()=> {
        setOpaci(.3)
      } , 3200);

      let timerOpacity4 = setTimeout(()=> {
        setOpaci(.2)
      } , 3300);

      let timerOpacity5 = setTimeout(()=> {
        setOpaci(.1)
      } , 3400);

      let timerOpacity6 = setTimeout(()=> {
        setOpaci(0)
      } , 3500);







      return () => {
        clearTimeout(timer);
        clearTimeout(timerOpacity1);
        clearTimeout(timerOpacity2);
        clearTimeout(timerOpacity3);
        clearTimeout(timerOpacity4);
        clearTimeout(timerOpacity5);
        clearTimeout(timerOpacity6)
        
        
      }

    }

    
    
  }, [count])


  



  

  return (
   
    <div onMouseEnter={activateSlider} onMouseLeave={activateSlider} style={{'overflowX':'hidden'}} onClick={stopSlider}>

    {count === 1 && (<BodyHome image={`./assets/banner${count}.jpg`} op={opaci} indx={count} toggle={toggle}>


    {/* <Letters titulo={'Truly Gorgeous'} letters={'Bridalwear'} button={'01243 788090'} cuenta={count} />   */}
    <div
    style={{
      'position':'absolute',
      'bottom':'0',
      'right':'10px'
    }}
    >
      <p
      style={{
        'fontSize':'10px',
        'color':'white'

      }}
      >
        MALCOLM HARRIS | PHOTOGRAPHY
      </p>
    </div>


    
    </BodyHome>)}

    {count === 2 && (<BodyHome image={`./assets/banner${count}.jpg`} op={opaci} indx={count}>>
    {/* <Letters titulo={'titulo 2'} letters={'letters 2'} button={'button 2'} cuenta={count}/> */}


  
    </BodyHome>)}

    {count === 3 && (<BodyHome image={`./assets/banner${count}.jpg`} op={opaci}  indx={count}>
    {/* <Letters  titulo={'titulo 3'}  letters={'letters3'} button={'button 3'} cuenta={count}/>  */}


    
  
    </BodyHome>)}

    <Arrows countFunction={setCount} cuenta={count}/>
    <Balls bola={count}/>


   

    


    </div>
  )
}



export default HomeBody