const SectionMain = () => {
  return (
    <section className="bg-citrorange">
      <div className="min-h-screen text-center">
        <div className="py-4 md:py-8 ">
          <img src="/mini.png" className="mx-auto p-12 scale-img"/>
          <h2 className="text-4xl md:text-6xl font-righteous fadeIn text-yellow textDark  text-white uppercase animate-bounce">
            Citroaventura
          </h2>
          <div className="text-gray-800 space-y-3 xs:text-base sm:text-xl px-8 md:px-64 md:text-2xl textLight font-bold mx-auto">
            <p className=" leading-relaxed">
            Libro del viaje intercontinental de un <strong>Citroën 3cv</strong> argentino
            </p>
          </div>        

          
        </div>
      </div>
      <style jsx>{`  
          .scale-img {
            transform: scale(1.1)
          }          
        `}</style>
    </section>
  );
};

export default SectionMain;
