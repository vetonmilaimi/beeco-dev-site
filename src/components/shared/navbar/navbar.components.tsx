import React from "react";
import LightLogo from "../../../assets/Icons/light-1.png";
import "./navbar.scss";

interface Props {}

const Navbar: React.FC<Props> = ({}) => {
  return (
    <div className="nav">
      <img src={LightLogo.src} alt="logo" width={40} />
    </div>
  );
};

export default Navbar;
