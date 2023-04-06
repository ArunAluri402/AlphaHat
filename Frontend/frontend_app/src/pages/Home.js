import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../Styles/Home.css";



function Home() {
  return (
    <div>
      <Header />
      <div className="Hero_Container">
        <img className="Hero_img" src="./Hero.png" />
        <div className="Hero_content">
          <h2 className="Hero_text">
            The skills for now _ now
            <br /> on sale
          </h2>
          <p className="Hero_subtext">
            Chart your path to success. Log in for limited-time <br />
            savings on the latest topics.
          </p>
        </div>
      </div>
      <h2>Top Categories</h2>

      <div className="Main_grid_Container">
        <div className="Main_grid_sub">
          <img className="grid_img" src="./design.jpg" />
          <h4>Design</h4>
        </div>
        <div className="Main_grid_sub">
          <img className="grid_img" src="./dev.jpg" />
          <h4>Development</h4>
        </div>
        <div className="Main_grid_sub">
          <img className="grid_img" src="./BUSSiness.jpg" />
          <h4>Bussiness</h4>
        </div>
        <div className="Main_grid_sub">
          <img src="./IT.jpg" className="grid_img" />
          <h4>IT and Software</h4>
        </div>
        <div className="Main_grid_sub">
          <img src="./market.jpg" className="grid_img" />
          <h4>Marketing</h4>
        </div>
        <div className="Main_grid_sub">
          <img src="./Music.jpg" className="grid_img" />
          <h4>Music</h4>
        </div>
        <div className="Main_grid_sub">
          <img src="./PD.jpg" className="grid_img" />
          <h4>Personal Development</h4>
        </div>
        <div className="Main_grid_sub">
          <img src="./Photo.jpg" className="grid_img" />
          <h4>Photography</h4>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
