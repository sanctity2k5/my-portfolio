import React from "react";
import profileImg from "../assets/img/ellipse.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import file from "../assets/img/Kachi-cv.pdf"
AOS.init()


function UpperSection() {
    return(
            // <!-- ======= Upper Body Section ======= -->
  <section id="home" className="hero d-flex align-items-center section-bg">
    <div className="container">
      <div className="row justify-content-between gy-5">
        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
          <h2 data-aos="fade-up">Hi, I am<br />Anyadi Onyekachukwu</h2>
          <p data-aos="fade-up" data-aos-delay="100">Full Stack Web Developer</p>
          <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
            <a href={file} download={file} className="btn-book-a-table">Download Cv</a>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
          <img src={profileImg} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
        </div>
      </div>
    </div>
  </section>
    )
}

export default UpperSection;