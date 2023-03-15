import React, { useEffect, useState } from "react";

function Loader() {
  const [loader, setloder] = useState(0);
  useEffect(() => {
    setloder(true);
    setTimeout(() => {
      setloder(false);
    }, 3000);
  }, []);
  {
    if (loader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <>
      {loader ? (
        <section className="min-vh-100 bg-light z_indx d-flex justify-content-center align-items-center">
          <div class="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      ) : (
        <> </>
      )}
    </>
  );
}

export default Loader;
