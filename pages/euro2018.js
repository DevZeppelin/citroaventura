import { useState } from "react";
import Link from "next/dist/client/link";

import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

//Comilla invertida ````````

export default function Euro2018() {
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
        <h2 className="text-2xl md:text-4xl text-center my-16">
          Europa-Asia 2018
        </h2>
        <div className="text-gray-800 space-y-3 text-lg my-16 px-8 md:px-64 md:text-xl textLight mx-auto ">
          <p>Los sueños de casi todas nuestras vidas en un solo viaje...</p>
          <p>
            Salimos en Abril del 2018 desde Argentina con tumbo a España con los
            siguientes objetivos:
          </p>
          <p>
            (aqui iria imagen con dibujos de objetivos) Una ventura en la que
            conocimos personajes maravillosos y lugares mágicos. Una experiencia
            inolvidable que nos inspiró para seguir viajando buscando nuevos
            horizontes.
          </p>
          <p>
            ¿Querés saber cómo nos fue? ¿Cuántos kilómetros recorrimos? ¿Cuántos
            países visitamos? ¿Si logramos todos nuestros objetivos?
          </p>
          <p>
            Puedes saberlo todo haciendo click aquí:
          </p>
          <Link href="/book">
            <button className="bg-citrorange p-4 border-2 rounded-lg font-extrabold border-black">
                  Libro Citroaventura 2018
            </button>
          </Link>
          <p>
            o bien siguiéndonos en nuestras redes (anlaces al final de esta página).... 
          </p>
          <p>
            ¡Podés escribirnos a nuestro mail:{" "}
            <a
              href="mailto:citroaventura@gmail.com"
              target="_blank"
              rel="noopener"
              className="font-bold"
            >
              citroaventura@gmail.com
            </a>{" "}
            y comentarnos lo que quieras acerca de nuestro viaje!
          </p>
          <div className="my-6">
            <img
              src="/baloon.jpg"
              className="flex align-middle mx-auto m-8 border-4 rounded-xl border-gray-600"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
