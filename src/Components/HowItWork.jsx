import React from "react";
import location from "../assets/images/svg/Address_mark.svg";
import smartHouse from "../assets/images/svg/Make_Payements.svg";
import lock from "../assets/images/svg/Secure_data_lock.svg";

export const HowItWork = () => {
  return (
    <>
      <section>
        <div className="container py-4 py-sm-5">
          <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
            How it works.
          </h2>
          <div className="d-flex justify-content-center">
            <p className="ff_space text-center text_rgba_blac fw-normal fs_md col-lg-9 mb-0">
              This is how our products works
            </p>
          </div>
          <div className="row pt-5 justify-content-between ">
            {/* row start */}
            <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
              <div className="px-4 py-5 bg-white card_1 text-center h-100">
                <img className="py-5" src={location} alt="location" />
                <h5 className="m-0 ff_space fw_500 fs_lg">Alex Godwin </h5>
                <p className="m-0 ff_space fw_400 fs_sm px-lg-2 mt-2">
                  Our properties are located at prime areas where by there won’t
                  be problem with transportation
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
              <div className="px-4 py-5 bg-white card_1 text-center h-100">
                <img className="py-5" src={smartHouse} alt="location" />
                <h5 className="m-0 ff_space fw_500 fs_lg">Make payments </h5>
                <p className="m-0 ff_space fw_400 fs_sm mt-2 px-lg-3">
                  Our estates comes with good network,portable water , 24hrs
                  light and round the clock security.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
              <div className="px-4 py-5 bg-white card_1 text-center h-100">
                <img className="py-5" src={lock} alt="location" />
                <h5 className="m-0 ff_space fw_500 fs_lg">Make it Official </h5>
                <p className="m-0 ff_space fw_400 fs_sm mt-2 px-lg-2">
                  We have been in business for over 32 years,for client outside
                  the country you can trust us to deliver well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
