import { useState } from "react";

import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

//Comilla invertida ````````

export default function Services() {
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

      <NavBar toggleNav={toggleNav} />
      <MobileNavBar open={open} />
      <section>
          <h2 className="text-2xl md:text-4xl text-center my-16">Otros Productos</h2>
        <div className="text-gray-800 space-y-3 text-lg mb-32 px-8 md:px-52 md:text-xl textLight mx-auto space-y-8 ">
          <div className="space-y-4 text-center">
            <p className="text-xl md:text-3xl font-bold">¡Citro dibujos!</p>
            <img src="/mantenimiento.webp" className="border-2 border-gray-600 mx-auto space-y-4" />
            <div>
              <p>Dibujos citroneros originales a pedido. ¿Que esperás para tener el citro-dibujo digital de tu Citro-nave para imprimir en calcomanías y pegar en todos lados?</p>
              <p>¡Tu Citroen se lo merece!</p>
            </div>
          </div>
         
          </div>
          <Footer/>
      </section>
    </div>
  );
}
