import React from "react";
import "./Goals.css";

const Goals = () => {
  return (
    <div className="bgimg">
      <div className="m-at">
        <h1 className="Heading ch">
          <span>G</span>oals
        </h1>
        <div className="goalCard">
          <div className="card">
            <img className="cardImg w-50" src="./images/fu1.gif" alt="" />
            <h1 className="cardHeading">BlockChain</h1>
            <p>
              Developing a Digitally Distributed Blockchain that would be
              Decentralized existing across a peer-to-peer network. This would
              help to provide more security and transparency to the Data.
            </p>
          </div>
          <div className="card">
            <img className="cardImg" src="./images/fu2.gif" alt="" />
            <h1 className="cardHeading">Tenders</h1>
            <p>
            Establishing a formal, structured procedure for generating competing offers from different potential suppliers or contractors looking to obtain an award of business activity.
            </p>
          </div>
          <div className="card">
            <img className="cardImg" src="./images/fu3.gif" alt="" />
            <h1 className="cardHeading">Android</h1>
            <p>
            To increse comfort and to take the feasibility at a higher level our website will soon becoming an Android Friendly. This will definitely gonna increase productivity as well as mobility.
            </p>
          </div>
          <div className="card">
            <img className="cardImg" src="./images/fu4.gif" alt="" />
            <h1 className="cardHeading">Schemes</h1>
            <p>
            We are providing Government Schemes launched by the Government of India with the aim of addressing the socio-economic welfare of the citizens of this nation. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
