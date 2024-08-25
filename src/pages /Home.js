import { Link } from "react-router-dom";
import React from "react";
import Video from "./Video";
import Appbar from "../widgets/Appbar";
import image from "../img/p1.webp";
import image1 from "../img/p2-txt.png";
import image2 from "../img/p3-txt.png";

const Home = () => {
  return (
    <>
      <Appbar />

      <div id="div-container-home">
        <div id="div-column">
          <img id="img1" src={image1} alt="" width="30%" />
          <img src={image2} alt="" width="70%" />
          <Link className="button-26" to="/contactus">
            Apply Now
          </Link>
        </div>
        <img id="img2" src={image} alt="" width="50%" />
      </div>
      <Video />

      <section className="about">
        <div className="about-content" id="dv11">
          <p id="txt1-home">
            The iconic machine that started it all. Our Reformers deliver
            unparalleled workouts that engage your body for maximum results.
          </p>
        </div>
      </section>
      <section className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At BeFit Pilates Center, nestled in the heart of Kiryat Malachi,
            Israel, we are dedicated to helping you discover the transformative
            power of Pilates.
          </p>
          <Link to="/about" className="btn">
            Read More
          </Link>
        </div>
      </section>

      {/* <section className="instructors">
        <div className="instructors-content">
          <h2>Meet Our Instructors</h2>
          <p>
            Our experienced instructors are dedicated to helping you achieve
            your fitness goals...
          </p>
          <Link to="/instructors" className="btn">
            Meet the Instructors
          </Link>
        </div>
      </section> */}

      <section className="contact">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>Have questions or want to get started? Reach out to us today...</p>
          <Link to="/contactus" className="btn">
            Contact Us
          </Link>
        </div>
      </section>
      <div className="dv-center-footer">
        <p className="footer">
          &copy; 2023 BE FIT Pilates Institute. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Home;
