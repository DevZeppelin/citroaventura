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

      <NavBar toggleNav={toggleNav} />
      <MobileNavBar open={open} />

      <section>
      <h2 className="text-2xl md:text-4xl text-center my-16">Acerca de nosotros:</h2>
        <div className="text-gray-800 space-y-3 text-lg my-16 px-8 md:px-64 md:text-xl textLight mx-auto">
          <p>
            Somos <b>Gabriela Lucas</b> y <b>Pablo Profetto</b> a bordo de
            nuestro Citroën 3cv argentino naranja y blanco.
          </p>
          <p>Un proyecto que empezó con las simples ganas de viajar.</p>{" "}
          <p>
            En 2018 dimos inicio a esta <i>"Citroaventura"</i> recorriendo en
            nuestro bólido parte de Europa y Asia en lo que ha sido una
            experiencia inolvidable.
          </p>{" "}
          <p>
            Hoy de regreso en Argentina y con el libro de nuestra travesía
            recientemente publicado buscamos nuevos horizontes en nuestro país
            buscando llegar a pequeñas comunidades para llevar nuestra historia
            y para aprender todo lo que la humanidad tenga para enseñar.
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
              src="/us.png"
              className="flex align-middle mx-auto m-8 border-4 rounded-xl border-gray-600"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
