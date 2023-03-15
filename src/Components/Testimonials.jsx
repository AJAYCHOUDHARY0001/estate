import React from "react";

function Testimonials() {
  return (
    <>
      {" "}
      <section>
        <div className="container py-4 py-sm-5">
          <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
            Testimonials.
          </h2>
          <div className="d-flex justify-content-center">
            <p className="ff_space text-center text_rgba_blac fw-normal fs_md col-lg-9 mb-0">
              This is what our client are saying
            </p>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className=" ff_nunito fw-semibold fs_xsm px-4 py-1 rounded-4 text-white bg_blue border_tran">
              View more
            </button>
          </div>
          <div className="row pt-5 justify-content-between">
            {/* row start */}
            <div className="col-sm-6 col-md-4 h-100 mt-4 mt-md-0">
              <div className="p-3 bg-white rounded-4 card_1">
                <h5 className="m-0 ff_space fw_700 fs_md">Alex Godwin </h5>
                <p className="m-0 ff_nunito fw-semibold fs_xsm">South Africa</p>
                <p className="m-0 ff_space fw_400 opacity-75 fs_xsm col-lg-11 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                  ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum
                  netus
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 h-100 mt-4 mt-md-0">
              <div className="p-3 bg-white rounded-4 card_1">
                <h5 className="m-0 ff_space fw_700 fs_md">Alex Godwin </h5>
                <p className="m-0 ff_nunito fw-semibold fs_xsm">South Africa</p>
                <p className="m-0 ff_space fw_400 opacity-75 fs_xsm col-lg-11 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                  ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum
                  netus
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 h-100 mt-4 mt-md-0">
              <div className="p-3 bg-white rounded-4 card_1">
                <h5 className="m-0 ff_space fw_700 fs_md">Alex Godwin </h5>
                <p className="m-0 ff_nunito fw-semibold fs_xsm">South Africa</p>
                <p className="m-0 ff_space fw_400 opacity-75 fs_xsm col-lg-11 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                  ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum
                  netus
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
