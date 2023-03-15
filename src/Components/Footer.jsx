import React from "react";

export const Footer = () => {
  return (
    <>
      <section className="bg_blue">
        <div className=" container py-5">
          <div className="row py-lg-5 justify-content-between">
            {/* Dee’s Estate */}
            <div className="col-4">
              <div className="h-100">
                <a className=" ff_oleo fw_400 fs_lg text-white m-0" href="/">
                  Dee’s Estate
                </a>
                <p className=" ff_nunito fw_400 fs_sm text-white mb-0 width_400">
                  Solution for easy and flexible house hunting.You can trust us
                  anywhere through this platform
                </p>
              </div>
            </div>
            {/* Property */}
            <div className="col-2">
              <div className="h-100">
                <a className=" ff_oleo fw_400 fs_lg text-white m-0" href="/">
                  Property
                </a>
                <li className="mt-3">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Learning Modules
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Partnership
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Watch demo
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Event
                  </a>
                </li>
              </div>
            </div>
            {/* About  */}
            <div className="col-2">
              <div className="h-100">
                <a className=" ff_oleo fw_400 fs_lg text-white m-0" href="/">
                  About
                </a>
                <li className="mt-3">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Our Company
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Career
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Investors Relations
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Social Impact
                  </a>
                </li>
              </div>
            </div>
            {/* Resources  */}
            <div className="col-2">
              <div className="h-100">
                <a className=" ff_oleo fw_400 fs_lg text-white m-0" href="/">
                  Resources
                </a>
                <li className="mt-2">
                  <a
                    href="tell:+"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Contact
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Give feedback
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    System status
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="/"
                    className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0"
                  >
                    Privacy Policy
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
