import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          {/* SEO */}
          <link rel="icon" href="https://res.cloudinary.com/truly-gorgeous/image/upload/v1648322711/public/assets/wedding-dress-_2__h2ryrl.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            property="og:image"
            itemprop="image"
            content="https://res.cloudinary.com/truly-gorgeous/image/upload/v1647860031/meta/iconoBig_p2cfxb.jpg"
          />
          <link rel="apple-touch-icon" href="https://res.cloudinary.com/truly-gorgeous/image/upload/v1647860031/meta/iconoBig_p2cfxb.jpg" />
        
          <title>Truly Gorgeous | Wedding Dresses</title>
          <meta
            name="description"
            content="Located in Chichester, West Sussex, we are an independent retailer offering brides a selection of beautiful designer and bespoke bridal gowns and accessories."
          />
          <meta name="keywords" content="Wedding Dresses" />
          <meta name="author" content="Truly Gorgeous" />

          {/* SEO */}

          {/*  */}

          <meta
            name="description"
            content="Located in Chichester, West Sussex, we are an independent retailer offering brides a selection of beautiful designer and bespoke bridal gowns and accessories."
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <link rel="canonical" href="https://trulygorgeous.co.uk/" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Truly Gorgeous Bridalwear | Wedding Dresses"
          />
          <meta
            property="og:description"
            content="Located in Chichester, West Sussex, we are an independent retailer offering brides a selection of beautiful designer and bespoke bridal gowns and accessories."
          />
          <meta property="og:url" content="https://trulygorgeous.co.uk/" />
          <meta
            property="og:site_name"
            content="Truly Gorgeous Bridalwear | Wedding Dresses"
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="Located in Chichester, West Sussex, we are an independent retailer offering brides a selection of beautiful designer and bespoke bridal gowns and accessories."
          />
          <meta
            name="twitter:title"
            content="Truly Gorgeous Bridalwear | Wedding Dresses"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/truly-gorgeous/image/upload/v1647860031/meta/iconoBig_p2cfxb.jpg"
          />

          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://res.cloudinary.com/truly-gorgeous/image/upload/v1647860031/meta/iconoBig_p2cfxb.jpg"/>
          {/* <meta property="og:title" content="Home" />
          <meta property="og:type" content="article" /> */}
          <meta property="og:url" content="https://trulygorgeous.co.uk/" />
          <meta
            property="og:site_name"
            content="Truly Gorgeous Bridalwear | Wedding Dresses"
          />

          <meta
            property="og:description"
            content='Truly Gorgeous Bridal Shop
          "Truly Gorgeous is where brides can find beautiful dresses with a personalised customising alteration service, in house, making your dress completely unique"  
          Wedding Dresses
          Prepare to fall in love within a gorgeous bridal boutique located in'
          />

          {/*  */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Alef&family=Raleway:ital,wght@0,100;1,100&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Carattere&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Carattere&family=
           Cormorant+Garamond&family=Fredoka&display=swap"
            rel="stylesheet"
          ></link>

          <title>Truly Gorgeus</title>
        </Head>

        <body>

          <Main />
          <NextScript />
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;
