import Link from "next/dist/client/link";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({
  toggleNav,
  classHome,
  classQuienesSomos,
  classServicios,
}) => {
  return (
    <div className="flex my-0 md:py-0 justify-between px-0 font-bold bg-yellow text-gray-800 text-base bg-citrorange ">
      <div className="hidden md:flex">
        <Link href="/">
          <a className={`px-3 hover:text-white ml-24 py-3 ${classHome}`}>
            Home
          </a>
        </Link>
        <Link href="/euro2018">
          <a className={`px-3 hover:text-white py-3 ${classQuienesSomos}`}>
            Europa-Asia 2018
          </a>
        </Link>
        <Link href="/actualidad">
          <a className={`px-3 hover:text-white py-3 ${classQuienesSomos}`}>
            Futuros proyectos
          </a>
        </Link>
        <Link href="/book">
          <a className={`px-3 hover:text-white py-3 ${classServicios}`}>
            El libro
          </a>
        </Link>

        <Link href="/services">
          <a className={`px-3 hover:text-white py-3 ${classServicios}`}>
            Otros productos
          </a>
        </Link>

        <a
          href="https://www.google.com/maps/d/u/1/viewer?mid=1Bqt_6NO_SpImg1BNDNUwqRvHxp83IGWq&ll=43.274924631755056%2C20.666686326186177&z=4"
          target="_blank"
          rel="noopener"
          className="px-3 hover:text-white py-3"
        >
          Mapa del recorrido 2018
        </a>

        <Link href="/audio">
          <a className={`px-3 hover:text-white py-3 ${classServicios}`}>
            Audiocuentos
          </a>
        </Link>
      </div>
      <div className="p-2 ml-2 md:hidden flex justify-start w-10 text-4xl text-white">
        <button
          onClick={toggleNav}
          aria-label="Hamburguer Button of Main Content"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

/* md:hidden */

export default NavBar;
