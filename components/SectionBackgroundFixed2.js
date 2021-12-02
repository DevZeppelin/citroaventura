import Fade from "react-reveal/Fade";

const SectionBackgroundFixed2 = () => {
  return (
    <section>
      <div className="p-8 md:p-32 py-16 font-bold text-center bg-cover bg-love-m md:bg-love bg-right bg-fixed flex md:grid md:grid-cols-2 h-screen">
        <div></div>
        <div className="space-y-6">
          <Fade left>
            <div className="text-primary space-y-3 text-xl textLight font-bold justify-start">
              <p>
                Un libro que solo con abrirlo te hará recorrer kilómetros de
                aventuras, historias y personajes únicos. ¡Acompañános a revivir
                este inolvidable viaje de vida!
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <style jsx>{`
        .textLight {
          text-shadow: 1px 2px 4px white;
        }
      `}</style>
    </section>
  );
};

export default SectionBackgroundFixed2;
