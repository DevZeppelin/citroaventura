import { useState } from "react";

import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AudioBox from "../components/AudioBox";

//Comilla invertida ````````

export default function Audio() {
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
        <h2 className="text-2xl md:text-4xl text-center my-16">Audiocuentos</h2>
        <div className="text-gray-800 space-y-3 text-lg mb-32 px-8 md:px-52 md:text-xl textLight mx-auto space-y-8">
          <div className="space-y-6">
            <img
              src="/audiocuento.webp"
              className="border-4 border-gray-600 mx-auto rounded-lg"
            />
            <p>
              Escuchá nuestros audiocuentos para tener una idea de lo que
              encontrarás en nuestro libro
            </p>

           <AudioBox title='Gente Vip (página 151)' src='/mp3/151-gente-vip.mp3'/>
           <AudioBox title='Citroneros de Esmirna (página 187)' src='/mp3/187-citroneros-de-esmirna.mp3'/>
           <AudioBox title='Samantha Lumur (página 197)' src='/mp3/197-samantha-lumur.mp3'/>
            

            
           
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}
