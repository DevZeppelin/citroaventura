import Fade from "react-reveal/Fade";

const SectionBackgroundFixed2 = () => {
  return (
    <section>
      <div className="p-8 md:p-32 py-16 font-bold text-center bg-cover bg-love-m md:bg-love bg-center bg-fixed flex md:grid md:grid-cols-2 h-screen ">
        <div></div>
        <div className="space-y-6">
          <Fade left>
            <div className="text-gray-800 space-y-3 text-xl textLight font-bold justify-start">
              <p>
              ¿Estás listo para ver hasta donde es capáz de llegar la comunidad Citronera unida sin fronteras? 
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <style jsx>{`
        .textLight {
          text-shadow: 1px 1px 1px white;
        }
      `}</style>
    </section>
  );
};

export default SectionBackgroundFixed2;
