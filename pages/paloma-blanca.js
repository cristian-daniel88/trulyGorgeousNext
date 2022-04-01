import Head from "next/head";
import React from "react";
import { Provider} from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import PopUpPhotoDesignerOurCreations from "../components/Alterations/PopUpPhotoDesignerOurCreations";
import Aside from "../components/Aside/Aside";
import AssetsBottom from "../components/AssetsBottom/AssetsBottom";

import Cover from "../components/Cover/Cover";
import PalomaBlanca from "../components/Designers/PalomaBlanca";


import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

import ToggleMenu from "../components/ToggleMenu/ToggleMenu";
import Top from "../components/Top/Top";
import { persistor, store } from "../redux/store";
import { GlobalStyles } from "../styles/GlobalStyles";

function ronaldJoyce() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Head>
            <title>Truly Gorgeous | Paloma Blanca </title>
          
          </Head>
          <>
            <GlobalStyles />
            <Nav></Nav>
            <Top />
            <Cover />
            <PopUpPhotoDesignerOurCreations />

            <ToggleMenu />

            <PalomaBlanca/>

            <Aside />
            <Footer />
            <AssetsBottom/>
          </>
        </PersistGate>
      </Provider>
    </>
  );
}

export default ronaldJoyce;
