import { useState } from "react";

import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";

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
          <h2 className="text-2xl md:text-4xl text-center my-16">El Libro:</h2>
        <div className="text-gray-800 space-y-3 text-lg mb-32 px-8 md:px-52 md:text-xl textLight mx-auto space-y-8 grid grid-cols-1  md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-xl md:text-3xl pt-8 font-bold">Citroaventura Tapa Dura</p>
            <img src="/book-hard.jpg" className="border-4 border-gray-600" />
            <ul>
              <li>-254 pags.</li>
              <li>-Anillado.</li>
              <li>-Ilustrado</li>
              <li>-Fotografías a color.</li>
              <li>-Stickers para pegar dondequieras.</li>
            </ul>
          </div>
          <div className="space-y-4">
          <p className="text-xl md:text-3xl font-bold">Citroaventura Tapa Blanda</p>
            <img src="/book-soft.jpg" className="border-4 border-gray-600" />
            <ul>
              <li>-254 pags.</li>
              <li>-Anillado.</li>
              <li>-Ilustrado</li>
              <li>-Fotografías a color.</li>              
            </ul>
          </div>

          </div>
          <div className="text-gray-800 bg-citrorange space-y-3 text-lg py-24 px-8 md:px-32 md:text-xl textLight mx-auto ">
            <h2 className="text-center text-4xl">¿Como adquirirlo?</h2>
            <p className= "px-12 md:px-64 text-white">
              Para adquirirlo podés escribirnos a nuestro mail:{" "}
              <a
                href="mailto:citroaventura@gmail.com"
                target="_blank"
                rel="noopener"
                className="font-bold"
              >
                citroaventura@gmail.com
              </a>{" "}
              y te lo haremos llegar hasta vos.
            </p>
          </div>
      </section>
    </div>
  );
}
