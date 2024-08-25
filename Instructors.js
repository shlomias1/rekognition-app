import React from "react";
import Appbar from "../widgets/Appbar";
const Instructors = () => {
  return (
    <>
      <Appbar />
      <section class="about">
        <div class="about-content">
          <h2>Our Instructors</h2>
          <p>
            At BE FIT Pilates Institute, we are dedicated to helping you achieve
            your fitness goals...
          </p>
        </div>
      </section>

      <div className="dv-center-footer">
        <p class="footer">
          &copy; 2023 BE FIT Pilates Institute. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Instructors;
