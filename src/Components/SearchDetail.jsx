import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import search from "../assets/images/svg/Search_logo.svg";

function SearchDetail() {
  return (
    <section>
      <div className="container py-4 py-sm-5 d-flex justify-content-center">
        <div className="detail_box col-xl-10">
          <div className="row justify-content-between align-items-center text-center text-sm-start">
            <div className="col-sm-6 col-lg-2">
              <Dropdown>
                <Dropdown.Toggle
                  className="ff_space fw_700 fs_sm blue_clr"
                  variant="success"
                  id="dropdown-basic"
                >
                  Loaction
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Lekki </Dropdown.Item>
                  <Dropdown.Item href="#">Hisar</Dropdown.Item>
                  <Dropdown.Item href="#">Rohtak</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <p className="ff_space fw_400 fs_sm blk_clr opacity-50 ps-3">
                Lekki
              </p>
            </div>
            <div className="ps-sm-5 ps-lg-0 col-sm-6 col-lg-2">
              <Dropdown>
                <Dropdown.Toggle
                  className="ff_space fw_700 fs_sm blue_clr"
                  variant="success"
                  id="dropdown-basic"
                >
                  Property Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Duplex </Dropdown.Item>
                  <Dropdown.Item href="#">Flat</Dropdown.Item>
                  <Dropdown.Item href="#">Farmhouse</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <p className="ff_space fw_400 fs_sm blk_clr opacity-50 ps-3">
                Duplex
              </p>
            </div>
            <div className="col-sm-6 col-lg-2">
              <Dropdown>
                <Dropdown.Toggle
                  className="ff_space fw_700 fs_sm blue_clr"
                  variant="success"
                  id="dropdown-basic"
                >
                  Max Price
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">$10,000 </Dropdown.Item>
                  <Dropdown.Item href="#">$25,000 </Dropdown.Item>
                  <Dropdown.Item href="#">$50,000 </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <p className="ff_space fw_400 fs_sm blk_clr opacity-50 ps-3">
                $10,000
              </p>
            </div>
            <div className="ps-sm-5 ps-lg-0 col-sm-6 col-lg-3">
              <a
                href="#"
                className="d-inline-block butn1 ff_space fw_700 fs_sm text-nowrap"
              >
                <img className="pe-3" src={search} alt="search" />
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchDetail;
