import { Link } from "react-router-dom";
import styles from "../../styles";
import "./NavBar.css";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { navItems } from "../../constants";

const NavBar = () => {
  const [activeNavItem, setactiveNavItem] = useState(0);

  const [navToggel, setnavToggel] = useState(false);

  return (
    <nav className={`${styles.paddingX} sm:mt-4 mt-3`}>
      <div className="nav-container border-2 bg-white border-Grey_15 flex  justify-between rounded-xl overflow-hidden">
        <div className="logo bg-primary ">
          <img
            src="/assets/Logo.png"
            className="sm:w-44 w-36 px-5 py-4"
            alt="Logo"
          />
        </div>

        <div className="menu ">
          <ul className="sm:flex hidden">
            {navItems.map((el, index) => {
              return (
                <li className="" key={index}>
                  <Link to={el.path} onClick={() => setactiveNavItem(index)}>
                    <span
                      className={`
                        border-r-2  border-Grey_15 px-8 py-6 flex hover:bg-Orange_97
                        ${activeNavItem == index ? "bg-Orange_95" : ""}
                    ${
                      index == navItems.length - 1
                        ? "!bg-Orange_75 !border-r-0"
                        : ""
                    }
                    ${index == 0 ? " border-l-2" : ""}
                    `}
                    >
                      {el.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-Nav sm:hidden  flex">
            <span
              className={`
                        border-l-2  border-Grey_15 px-7 py-4 flex bg-Orange_95
                    `}
            >
              {navToggel ? (
                <IoCloseOutline
                  size={28}
                  onClick={() => {
                    setnavToggel((prev) => !prev);
                  }}
                />
              ) : (
                <HiOutlineMenuAlt3
                  size={28}
                  onClick={() => {
                    setnavToggel((prev) => !prev);
                  }}
                />
              )}
            </span>

            <div
              className={`${
                navToggel ? "block" : "hidden"
              } mobile-list  fixed top-0 left-0 bg-white h-full shadow-lg z-50`}
            >
              <ul className="flex flex-col justify-center h-full">
                {navItems.map((el, index) => {
                  return (
                    <li className="" key={index}>
                      <Link
                        to={el.path}
                        onClick={() => setactiveNavItem(index)}
                      >
                        <span
                          className={`
                        border-r-2   px-8 py-6 flex hover:bg-Orange_97
                        ${
                          activeNavItem == index
                            ? "bg-Orange_95 border-Grey_15"
                            : ""
                        }
                    ${
                      index == navItems.length - 1
                        ? "!bg-Orange_75 !border-r-0"
                        : ""
                    }
                    `}
                        >
                          {el.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
