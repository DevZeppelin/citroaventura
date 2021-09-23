import Head from "next/head";

//Comilla invertida ````````

export default function Home() {
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
      <div className="flex flex-col">
        <p className="text-center text-xl mt-10 mx-4">
          ¡ Página en mantenimiento hasta el 1 de noviembre !
        </p>
        <img
          src="/mantenimiento.jpeg"
          alt="citro mantenimiento"
          className="justify-center align-middle mx-auto my-12 w-96 h-72"
        />
      </div>
    </div>
  );
}
