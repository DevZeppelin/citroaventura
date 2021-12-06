

import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-citrorange text-white text-center">
      <div className="p-2 pt-6 md:p-3 space-y-8">
        
                 
        
        <div className="text-lg md:text-2xl">
          <h3 className=" text-gray-200 font-righteous">¡Contactanos a través de nuestras redes!</h3>
          <div className="flex flex-wrap justify-center p-6 md:p-10m md:pr-30 mx-4 gap-4 text-2xl md:text-4xl">
          <a
            href="mailto:citroaventura@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
              <button aria-label="go to my mail" alt="mail-logo">
                <FiMail className="hover:text-gray-800" />
              </button>
            </a>
            <a
            href="https://api.whatsapp.com/send?phone=5492614703877"
            target="_blank"
            
            rel="noreferrer"
          >
              <button aria-label="go to my instagram" alt="instagram-logo">
                <FaWhatsapp className="hover:text-gray-800" />
              </button>
            </a>
            <a
              href="https://www.instagram.com/citroaventura/"
              target="_blank"
              rel="noreferrer"
            >
              <button aria-label="go to my instagram" alt="instagram-logo">
                <FaInstagram className="hover:text-gray-800" />
              </button>
            </a>
            <a
              href="https://www.facebook.com/citroaventura/"
              target="_blank"
              rel="noreferrer"
            >
              <button aria-label="go to my facebook" alt="facebook-logo">
                <FaFacebook className="hover:text-gray-800" />
              </button>
            </a>
            <a
              href="https://www.youtube.com/channel/UCW74wrVq7_i2fl_wK1vJAzA"
              target="_blank"
              rel="noreferrer"
            >
              <button aria-label="go to my facebook" alt="facebook-logo">
                <FaYoutube className="hover:text-gray-800" />
              </button>
            </a>
           

          </div>
        </div>
      </div>
      <div className="p-2 text-xs bg-citrorange text-lightGray z-50">
       
          Make with &#128153; in Mendoza, Argentina by{" "}
          <a
            href="https://devzepelin.ar"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-yellow"
          >
            Gino.
          </a>
       
          <span> All rights reserved. &copy; &nbsp; {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;