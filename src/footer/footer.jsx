import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Fragment>
      <Outlet />
      <div>
        <footer>© paulakhere@gmail.com {date}</footer>
      </div>
    </Fragment>
  );
};

export default Footer;
