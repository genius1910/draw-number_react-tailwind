import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { SET_THEME } from "../redux/type";
import "primeicons/primeicons.css";

const Header = () => {
  const dispatch = useDispatch();

  const viewMode = useSelector((state) => state.dashboard.theme);

  const setViewMode = (mode) => {
    dispatch({ type: SET_THEME, payload: mode });
  };

  return (
    <header className=" header w-full bg-white fixed z-40 top-0">
      <div className=" flex w-full overflow-auto">
        <div className=" flex flex-start items-baseline overflow-auto w-full">
          <div className=" mb-5">
            <Link to="/draw_number">
              {viewMode === "light" ? (
                <Image
                  src="assets/images/logo_light1.jpg"
                  width="140"
                  className="logo_img"
                />
              ) : (
                <Image
                  src="assets/images/logo_dark1.jpg"
                  width="140"
                  className="logo_img mb"
                />
              )}
            </Link>
          </div>
          <div className="">
            <p className=" logo_name font-mainFont">DRAW</p>
          </div>
          <div className="">
            <p className=" logo_name_number text-textDarkColor">NUMBER</p>
          </div>
        </div>
        <div className=" float-right change_theme_btn items-center mr-4">
          {viewMode === "dark" ? (
            <Button
              className="mr-4"
              label=""
              icon="pi pi-sun"
              rounded
              severity="secondary"
              outlined
              onClick={() => setViewMode("light")}
            />
          ) : (
            <Button
              className="mr-4"
              label=""
              icon="pi pi-moon"
              rounded
              size="small"
              severity="secondary"
              aria-label="Bookmark"
              onClick={() => setViewMode("dark")}
            />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
