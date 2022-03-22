import Head from "next/head";
import React from "react";
import { Provider} from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Aside from "../components/Aside/Aside";
import AssetsBottom from "../components/AssetsBottom/AssetsBottom";

import Cover from "../components/Cover/Cover";



import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import PopUpPhotoDesigner from "../components/PopUpPhotoDesigner/PopUpPhotoDesigner";
import ToggleMenu from "../components/ToggleMenu/ToggleMenu";
import Top from "../components/Top/Top";
import Sophisticated from "../components/weddingDresses/Sophisticated";


import { persistor, store } from "../redux/store";
import { GlobalStyles } from "../styles/GlobalStyles";

function romantic() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <title>Truly Gorgeus | Sophisticated</title>
          
          </Head>
          <>
            <GlobalStyles />
            <Nav></Nav>
            <Top />
            <Cover />
            <PopUpPhotoDesigner />

            <ToggleMenu />

            <Sophisticated/>

            <Aside />
            <Footer />
            <AssetsBottom/>
          </>
        </PersistGate>
      </Provider>
    </>
  );
}

export default romantic;
