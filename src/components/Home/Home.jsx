import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home container">
      <div className="homeSkills">
        <img src="./images/chemical.gif" alt="" />
      </div>
      <div className="homecontent">
        <div className="headname">
          <h1>
            Petro<span>Stats</span>
          </h1>
        </div>
        <p className="headpara">
          Presently, production data is being captured based on offline data
          provided via email or by post. There is a need of configured(with
          checks and validations) platform which capture monthly production of
          the Chemical and Petrochemical manufacturing units with their
          respective user name id and password.This system may also allow
          authorized persons to revise their respective statistical information.
        </p>
          <a className="btns" href="/login"> Get Started</a>
      </div>
    </div>
  );
};

export default Home;
