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

import Alterations from '../components/Alterations/Alterations';

function alterations () {
  return (
    <>
    <Head>
      <title>
        Truly Gorgeus | Alterations
      </title>
      
    </Head>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <>
    <GlobalStyles/>
    <Nav></Nav>
    <Top/>
    <Cover/>
    <ToggleMenu/>


    <Alterations/>

    <Aside/>
    <Footer/>
    <AssetsBottom/>

    </>
    </PersistGate>
    </Provider>
    </>
  )
}

export default alterations