const SectionMain = () => {
  return (
    <section className="bg-citrorange">
      <div className="min-h-screen text-center">
        <div className="py-4 md:py-8 ">
          <img src="/mini.webp" className="mx-auto p-12"/>
          <h2 className="text-4xl md:text-6xl font-righteous fadeIn text-yellow textDark  text-white uppercase animate-bounce">
            Citroaventura
          </h2>
          <div className="text-gray-800 space-y-3 xs:text-base sm:text-xl px-8 md:px-64 md:text-2xl textLight font-bold mx-auto">
            <p className=" leading-relaxed">
            Viaje intercontinental a bordo de un <strong>Citroën 3cv</strong> argentino
            </p>
          </div>        

          
        </div>
      </div>
      
    </section>
  );
};

export default SectionMain;
