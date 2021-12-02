import { useState } from "react";

import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";


//Comilla invertida ````````

export default function Us() {

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
      
      




         <a
            href="mailto:citroaventura@gmail.com"
            target="_blank"
            rel="noopener"
            className="font-bold"
          >citroaventura@gmail.com</a>

     
     
    </div>
  );
}
