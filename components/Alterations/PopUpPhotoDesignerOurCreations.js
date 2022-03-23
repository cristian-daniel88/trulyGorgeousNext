import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clickPopUpPhoto } from '../../redux/popUpPhotoDesigner/popUpPhotoDesignerActions';

import { CloseContainerOurCreations, CloseIconOurCreations, MarcoPhotoOurCreations, PhotoPopUpOurCreations, PopUpPhotoOurCreations } from './PopUpPhotoOurCreationsStyles';

function PopUpPhotoDesignerOurCreations() {
  const popUpPhoto =  useSelector(state => state.popUpDesigner);
  
  const dispatch = useDispatch()
  const click = (value , boolean) => {
    dispatch(clickPopUpPhoto(value))
  }
  return (
    <PopUpPhotoOurCreations toggle={popUpPhoto.hidden ? 'true' : 'false'} onClick={()=> {click('', false)}}>
      <MarcoPhotoOurCreations w={popUpPhoto.imgUrl} anchoOurBrides={popUpPhoto.imgUrl.split('/')[7] == 'ourBrides' ? 'true' : 'false'}>
      <CloseContainerOurCreations onClick={()=>click('', false)}>
        <CloseIconOurCreations/>
      </CloseContainerOurCreations>
      
      {console.log(popUpPhoto.imgUrl.split('/')[7])}

      {popUpPhoto.imgUrl.split('/')[7] == 'ourBrides' ? (<><PhotoPopUpOurCreations img={popUpPhoto.imgUrl} width='90%'/></>) : (<><PhotoPopUpOurCreations src={popUpPhoto.imgUrl}/></>)}
      </MarcoPhotoOurCreations>
    </PopUpPhotoOurCreations>
  )
}

export default PopUpPhotoDesignerOurCreations