import React, { useState } from 'react'
import { MainPhotoContainer } from './DesignersStyles'

function MainPhoto({front , back}) {
 const [backFront, setBackFront] = useState(false);

  const changePhotoBack = () => {
    setBackFront(true)
  }

  const changePhotoFront = () => {
    setBackFront(false)
  }
  return (
  
          <MainPhotoContainer src={backFront ? back : front} onMouseEnter={changePhotoBack} onMouseLeave={changePhotoFront}>
             
           </MainPhotoContainer>
   
  )
}

export default MainPhoto