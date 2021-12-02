import Fade from "react-reveal/Fade";

const SectionBackgroundFixed = () => {
  return (
    <section>
      <div className="p-8 md:pr-40 py-6 md:py-16 font-bold h-screen  bg-cover bg-baloon-m md:bg-baloon bg-right bg-fixed flex md:grid md:grid-cols-2">
        <div></div>

        <Fade left>
          <div className="text-primary space-y-3 text-xl textLight font-bold md:pr-24 justify-start m-8">
            <p>
              ¿Te imaginás un Citroen 3CV argentino cruzando el charco atlántico
              para recorrer las rutas del viejo mundo? 
            </p>
          </div>
        </Fade>
      </div>
      <style jsx>{`
        .textLight {
          text-shadow: 1px 2px 4px white;
        }
      `}</style>
    </section>
  );
};

export default SectionBackgroundFixed;
