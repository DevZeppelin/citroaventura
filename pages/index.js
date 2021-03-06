import { useState } from "react";

import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import SectionMain from "../components/SectionMain";
import SectionBackgroundFixed from "../components/SectionBackgroundFixed";
import SectionBackgroundFixed2 from "../components/SectionBackgroundFixed2";
import Footer from "../components/Footer";

//Comilla invertida ````````

export default function Home() {

  const [open, setOpen] = useState(false);

    const toggleNav = (e) => {
      e.preventDefault();
      setOpen(!open);
    };

  return (
    <div>
      <Head>
        <title>Citroaventura</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Citroaventura, libro, viaje, mendoza, auropa, citroen, mundo, aventura"
        />
        <meta
          name="keywords"
          content="Citroaventura, libro, viaje, mendoza, auropa, citroen, mundo, aventura"
        />
        <meta name="author" content="Gino Pietrobon" />
      </Head>
     
     
      <NavBar toggleNav={toggleNav}/>
      <MobileNavBar open={open}/>
      <SectionMain/>

      
      <SectionBackgroundFixed/>
      <SectionBackgroundFixed2/>
      <Footer/>
     
      <style jsx>{`
      
      .mainImage:hover {
          transform: scale(1.1);
             }
      
      `}</style>
    </div>
  );
}
