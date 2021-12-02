import Fade from "react-reveal/Fade";


const SectionBackgroundFixed3 = () => {
    return (
        <section>
        <div className="p-2 md:p-16 py-4 md:py-32 font-bold text-center bg-cover bg-inside-m md:bg-inside bg-right bg-fixed flex md:grid md:grid-cols-2 h-screen">
         <div></div>
           
           <Fade left>
           
              <div className="text-white space-y-3 xs:text-sm sm:text-base md:text-lg font-bold mt-96 md:mt-64">
                <p className="bg-gray-500 p-4 rounded-md bg-opacity-90 m-2">
                "Hoy de regreso en Argentina y con el libro de nuestra travesía recientemente publicado buscamos nuevos horizontes en nuestro país buscando llegar a pequeñas comunidades para llevar nuestra historia y para aprender todo lo que la humanidad tenga para enseñar."
                </p>
              </div>
            
          </Fade>
           
        </div>
       
      </section>
    )
}

export default SectionBackgroundFixed3