import React, { useState } from "react";
import menu from "../assets/images/svg/menu.svg";
import play_btn from "../assets/images/svg/Video_play_btn.svg";
import hero_img from "../assets/images/png/Hero_img.png";
function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <header>
      <section className="border_bottom">
        <div className="container">
          <nav className="d-flex justify-content-between align-items-center py-4">
            <a className="ff_oleo fw_400 fs_lg blk_clr" href="#">
              Dee’s Estate
            </a>
            <ul className="d-flex gap-5 m-0 d-none d-lg-flex">
              <li>
                <a
                  className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
                  href="#"
                >
                  Rent
                </a>
              </li>
              <li>
                <a
                  className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
                  href="#"
                >
                  Land
                </a>
              </li>
              <li>
                <a
                  className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
                  href="#"
                >
                  Agent
                </a>
              </li>
              <li>
                <a
                  className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <a
              href="#"
              className="d-inline-block butn1 ff_space fw_700 fs_sm me-xl-4 d-none d-lg-flex"
            >
              Get Started
            </a>
            <button
              onClick={() => setNavShow(true)}
              className="d-flex d-lg-none p-2 rounded-2 border_none"
            >
              <img src={menu} alt="menu" />
            </button>
          </nav>
          <div className={`${navShow ? "nav-fix white_bg" : "fix-navbar"}`}>
            <button
              onClick={() => setNavShow(false)}
              className="butn btn-close position-absolute end-0 top-0 bg-light m-4"
            ></button>
            <nav className="flex-column trans_x d-lg-none d-flex min-vh-100 align-items-center justify-content-center text-center">
              <ul className="m-0 p-0">
                <li className="mb-4">
                  <a
                    className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
                    href="#"
                  >
                    Rent
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
                    href="#"
                  >
                    Land
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
                    href="#"
                  >
                    Agent
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className="ff_space fw_400 blk_clr fs_sm blue_hover_clr"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <a
                href="#"
                className="d-inline-block butn1 ff_space fw_700 fs_sm"
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </section>
      <section className="container py-4 py-5">
        <div className="row flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <h1 className="ff_space fw_500 fs_xxl blue_clr">
              Helping you find the property of your dreams.
            </h1>
            <p className="ff_space fw_400 fs_md blk_clr opacity-75 mb-4 mb-sm-5">
              Creating quality urban lifestyles,building stronger communities
            </p>
            <div className="d-flex align-items-center gap-5">
              <a
                href="#"
                className="d-inline-block butn1 ff_space fw_700 fs_sm"
              >
                Learn More
              </a>
              <a href="#">
                <img
                  className="play_butn_hover"
                  src={play_btn}
                  alt="play_btn"
                />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <img className="w-100" src={hero_img} alt="hero_img" />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
