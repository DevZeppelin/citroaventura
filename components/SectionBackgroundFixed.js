import Fade from "react-reveal/Fade";
import Link from "next/dist/client/link";

const SectionBackgroundFixed = () => {
  return (
    <section>
      <div className="p-6 md:pr-40 py-6 md:py-16 font-bold h-screen  bg-cover bg-us bg-center md:bg-right bg-fixed flex md:grid md:grid-cols-2">
        <div></div>

        <Fade left>
          <div className="text-gray-800 space-y-3 text-lg md:text-xl textLight font-bold md:pl-24 justify-start m-8">
            <p >
            ¡Hola! Somos Gabriela Lucas, Pablo Profetto y nuestro Citroën 3cv llamado "il Morta"
            </p>
            <p>
              ¿Querés acompañarnos en un viaje inolvidable alrededor del mundo?
            </p>
            <div className="md:grid md:grid-cols-2 text-sm md:text-base md:p-4 gap-6 text-white">
               <Link href="/euro2018"><button className="bg-citrorange p-2 border-2 rounded-lg font-extrabold border-black uppercase bg-opacity-80 font-righteous">Citroaventura 2018 Europa-Asia</button></Link>
               <button className="bg-citrorange p-2 border-2 rounded-lg font-extrabold border-black uppercase bg-opacity-80 font-righteous">Actualidad y futuros proyectos</button>
            </div>
          </div>
        </Fade>
      </div>
      <style jsx>{`
        .textLight {
         
         text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
        }
      `}</style>
    </section>
  );
};

export default SectionBackgroundFixed;
