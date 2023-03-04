import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "src/context/AuthContext";
import { menuItems } from "../helpers/MenuHelper";
import "../public/css/navs/BaseNav.scss";
import AppLogo from "./AppLogo";
import BaseAvatar from "./avatars/BaseAvatar";

function BaseNav() {
  const isAuthenticated = useContext(AuthContext);

  return (
    <div className="base-nav-container">
      <AppLogo />
      <nav id="main-nav">
        <ul>
          {menuItems.filter(item => item.show).map((item) => (
            <li key={item.alias}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}

          <li>
            {isAuthenticated ? (
              <BaseAvatar
                img="https://randomuser.me/api/portraits/women/68.jpg"
                imgAlt="María Fernández"
              />
            ) : (
              <div id="nav-">
                <Button type="button" size="small" variant="outlined">
                  Crear una cuenta
                </Button>
                <Button type="button" size="small" variant="contained">
                  Iniciar sesión
                </Button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BaseNav;
