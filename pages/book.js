import { useState } from "react";
import Link from "next/dist/client/link";

import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

//Comilla invertida ````````

export default function Book() {
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
        <h2 className="text-2xl md:text-4xl text-center my-16">El Libro</h2>
        <div className="text-gray-800 space-y-3 text-lg my-16 px-8 md:px-64 md:text-xl textLight mx-auto ">       
            <p>
              Libro que cuenta al detalle nuestro viaje por Europa y Parte de Asia
            a bordo de nuestro Citroën 3cv argentino durante el año 2018.{" "}
            </p>
            <p>
              ¿Cómo cruzamos el mar con el auto? ¿Cómo logramos el sustento?
              ¿Dónde dormimos cuando hacía frío? ¿Hasta dónde llegamos?{" "}
            </p>
            <p>
              Página a página el libro responderá cada pregunta. Acción,
              diversión, sopresa, romance, miedo y vértigo asegurados. Abróchense
              los cinturones y prepársense...
            </p>
            <p>¡Alla vamos!</p>
            
        </div>

          <div className="text-gray-800 space-y-3 text-lg mb-32 px-8 md:px-52 md:text-xl textLight mx-auto space-y-8 grid grid-cols-1  md:grid-cols-2 gap-6">

          <div className="space-y-8">
            <p className="text-xl md:text-3xl pt-8 font-bold">
              Citroaventura Tapa Dura
            </p>
            <img src="/book-hard.webp" className="border-4 border-gray-600" />
            <ul className="space-y-2">
              <li>-247 pags.</li>
              <li>-Anillado.</li>
              <li>-Ilustrado</li>
              <li>-Fotografías a color.</li>
              <li>-Stickers para pegar dondequieras.</li>
            </ul>
            <a
              href="https://articulo.mercadolibre.com.ar/MLA-1109198758-citroaventura-el-libro-version-sublime-_JM"
              target="_blank"
              rel="noopener"
            >
              <button className="bg-citrorange hover:bg-gray-800 text-white p-4 border-2 rounded-lg font-extrabold border-black my-4">
                Comprar
              </button>
            </a>
          </div>
          <div className="space-y-8">
            <p className="text-xl md:text-3xl font-bold">
              Citroaventura Tapa Blanda
            </p>
            <img src="/book-soft.webp" className="border-4 border-gray-600" />
            <ul className="space-y-2">
              <li>-247 pags.</li>
              <li>-Anillado.</li>
              <li>-Ilustrado</li>
              <li>-Fotografías a color.</li>
             
            </ul>
            <a
              href="https://articulo.mercadolibre.com.ar/MLA-1109159958-citroaventura-el-libro-version-tapa-blanda-_JM
"
              target="_blank"
              rel="noopener"
            >
              <button className="bg-citrorange hover:bg-gray-800 text-white p-4 border-2 rounded-lg font-extrabold border-black my-4">
                Comprar
              </button>
            </a>
          </div>
          <div className="flex justify-center text-center bg-citrorange rounded-lg border-2 border-gray-800 bg-opacity-60">
            <p className="px-4 md:px-24 text-lg p-2">
                <b>¿Quieres una muestra del libro?</b> <p>
                  Escucha 3 episodios en audio
                  haciendo click <a className="text-3xl font-righteous">
                    <Link href="/audio">AQUÌ</Link>
                  </a>{" "}
                </p>
              </p>
          </div>
        </div>
       <Footer/>
      </section>
    </div>
  );
}
