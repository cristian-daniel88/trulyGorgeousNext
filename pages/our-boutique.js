import React from 'react'
import Nav from '../components/Nav/Nav'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { GlobalStyles } from '../styles/GlobalStyles';
import Head from 'next/head';
import Top from '../components/Top/Top';

import Footer from '../components/Footer/Footer';
import ToggleMenu from '../components/ToggleMenu/ToggleMenu';
import Cover from '../components/Cover/Cover';
import Aside from '../components/Aside/Aside';
import AssetsBottom from '../components/AssetsBottom/AssetsBottom';

import PopUpPhotoDesigner from '../components/PopUpPhotoDesigner/PopUpPhotoDesigner';

import Biography from '../components/AboutUs/Biography';

function biography() {
  return (
    <>
    <Head>
      <title>
        Truly Gorgeus | Our Boutique
      </title>
    </Head>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <>
    <GlobalStyles/>
    <Nav></Nav>
    <Top/>
    <Cover/>
    <PopUpPhotoDesigner />

    <ToggleMenu/>
 
    <Biography/>

    <Aside/>
    <Footer/>
    <AssetsBottom/>

    </>
    </PersistGate>
    </Provider>
    </>
  )
}

export default biography