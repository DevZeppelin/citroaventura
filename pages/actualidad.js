import { useState } from "react";

import Head from "next/head";
import MobileNavBar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

//Comilla invertida ````````

export default function Actualidad() {
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
          Actualidad y Futuros Proyectos
        </h2>
        <div className="text-gray-800 space-y-3 text-lg my-16 px-8 md:px-64 md:text-xl textLight mx-auto ">
          <p>
            Actualmente estamos en Mendoza, Argentina y con el libro de nuestra
            travesía recientemente publicado buscamos nuevos horizontes en
            nuestro país. Queremos llegar a pequeñas comunidades del interior
            para llevar nuestra historia y para aprender todo lo que la
            humanidad tenga para enseñar.
          </p>
          <p>
            Efectuamos también presentaciones itinerantes de nuestro libro,
            conciertos de las canciones compuestas a lo largo de nuestra
            travesía, visitas a escuelas, centros culturales y cursos de
            concientización vial.
          </p>
          <p>
            (aqui iria imagen con dibujos de objetivos) Una ventura en la que
            conocimos personajes maravillosos y lugares mágicos. Una experiencia
            inolvidable que nos inspiró para seguir viajando buscando nuevos
            horizontes.
          </p>
          <p>
            ¿Interesado en coordinar actividades o visitas a tu pueblo?
            Escríbenos a{" "}
            <a
              href="mailto:citroaventura@gmail.com"
              target="_blank"
              rel="noopener"
              className="font-bold"
            >
              citroaventura@gmail.com
            </a>{" "}
            o contactanos a traves de nuestras redes... (link)
          </p>

          <div className="my-6">
            <img
              src="/inside-car.jpg"
              className="flex align-middle mx-auto m-8 border-4 rounded-xl border-gray-600"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
