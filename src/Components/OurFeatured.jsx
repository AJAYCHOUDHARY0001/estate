import React from "react";
import house1 from "../assets/images/png/house1.png";
import house2 from "../assets/images/png/house2.png";
import house3 from "../assets/images/png/house3.png";

export const OurFeatured = () => {
  return (
    <>
      <section>
        <div className="container py-4 py-sm-5">
          <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
            Our Featured Properties.
          </h2>
          <div className="d-flex justify-content-center">
            <p className="ff_space text-center text_rgba_blac fw-normal fs_md col-lg-9 mb-0">
              One of our biggest product to be featured and that has sold out
              the most.
            </p>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className=" ff_nunito fw-semibold fs_xsm px-4 py-1 rounded-4 text-white bg_blue border_tran">
              View more
            </button>
          </div>
          <div className="row pt-5 justify-content-between">
            {/* row start */}
            <div className="col-sm-6 width_md_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 bg-white px-4 border_radius_0_39 ">
                <img className="w-100" src={house1} alt="Rhouse1" />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">The Palace</h5>
                  <p className="m-0 ff_space fw_400 fs_xsm">Duplex</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="m-0 ff_space fw_400 fs_xsm opacity-75">
                    Lekki,phase 2
                  </h5>
                  <p className="m-0 ff_space fw_700 fs_xsm blue_clr">$2,000</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 width_md_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 bg-white px-4 border_radius_0_39 ">
                <img className="w-100" src={house2} alt="Rhouse1" />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">IVY RORY</h5>
                  <p className="m-0 ff_space fw_400 fs_xsm">Duplex</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="m-0 ff_space fw_400 fs_xsm opacity-75">
                    Lekki,phase 2
                  </h5>
                  <p className="m-0 ff_space fw_700 fs_xsm blue_clr">$2,000</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 width_md_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 bg-white px-4 border_radius_0_39 ">
                <img className="w-100" src={house3} alt="Rhouse1" />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">REXONA</h5>
                  <p className="m-0 ff_space fw_400 fs_xsm">Duplex</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="m-0 ff_space fw_400 fs_xsm opacity-75">
                    Lekki,phase 2
                  </h5>
                  <p className="m-0 ff_space fw_700 fs_xsm blue_clr">$2,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
