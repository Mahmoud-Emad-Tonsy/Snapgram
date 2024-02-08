import { bottombarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { pathname } = useLocation();
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            to={link.route}
            key={link.label}
            className={` ${
              isActive && "bg-primary-500 rounded-[10px]"
            } flex-center flex-col p-2 gap-1 transition`}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              className={` ${isActive && "invert-white"}`}
              width={20}
              height={20}
            />
            {link.label}
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
