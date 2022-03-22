import React, { useEffect, useState } from 'react'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { GlobalStyles } from '../styles/GlobalStyles';
import Nav from '../components/Nav/Nav';
import Head from 'next/head';
import HomeBody from '../components/HomeBody/HomeBody';
import Top from '../components/Top/Top';
import Footer from '../components/Footer/Footer';
import Cover from '../components/Cover/Cover';
import ToggleMenu from '../components/ToggleMenu/ToggleMenu';
import Aside from '../components/Aside/Aside';
import Loading from '../components/Loading/Loading';

import AssetsBottom from '../components/AssetsBottom/AssetsBottom';


function index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     let timerLoading = setTimeout(() => {
       setLoading(false)

     }, 1000);
  
    return () => {
      clearTimeout(timerLoading)
    }
  }, [])
  

  return (
    <>
    <Head>
      <title>
        Truly Gorgeus | Wedding Dresses
      </title>
    </Head>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
          <GlobalStyles/>
           <Nav></Nav>
           <Top/>
           <Cover/>
           <Loading toggle={loading ? 'true' : 'false'}/>
           <ToggleMenu/>
     
            {loading == false && (
              <HomeBody />

            )}

           
              
          <Aside/>
           <Footer>

           </Footer>
           <AssetsBottom/>
          </PersistGate>
      </Provider>
    </>
  )
}

export default index

//"build": "next build && next export"
