import React from "react";
import Rhouse1 from "../assets/images/png/house1.png";

export const OurFeatured = () => {
  return (
    <>
      <section>
        <div className="container py-5">
          <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
            Our Featured Properties.
          </h2>
          <div className="d-flex justify-content-center">
            <p className="ff_space text-center text_rgba_blac fw-normal fs_md col-lg-9">
              One of our biggest product to be featured and that has sold out
              the most.
            </p>
          </div>
          <div className="row pt-5">
            <div className="col-4">
              <div className="px-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
