import Link from "next/dist/client/link";

const MobileNavBar = ({ open }) => {
  return (
    <div
      className="absolute z-50 left-0 font-bold bg-citrorange border-gray-600 border-2 w-3/5 rounded-b-3xl"
      style={{ display: open ? "block" : "none" }}
    >
      <div className="flex text-right flex-col text-base p-2 text-gray-200 mb-5">
        <Link href="/">
          <a className="mr-2  mt-2 px-3 ">Home</a>
        </Link>
        <Link href="/us">
          <a className="mr-2 mt-5 px-3 ">
            Acerca de nosotros
          </a>
        </Link>
        <Link href="/book">
          <a className="mr-2 mt-5 px-3 ">El libro</a>
        </Link>
        <a
          href="https://www.google.com/maps/d/u/1/viewer?mid=1Bqt_6NO_SpImg1BNDNUwqRvHxp83IGWq&ll=43.274924631755056%2C20.666686326186177&z=4"
          target="_blank"
          rel="noopener"
          className="mr-2 mt-5 px-3"           
        >          
          Mapa del recorrido
         </a>
      </div>
    </div>
  );
};

export default MobileNavBar;
