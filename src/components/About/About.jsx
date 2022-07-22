import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="bg-about">
        <div className="container">
            <div className="aboutcard">
                <div className="cardLetters">A</div>
                <div className="cardLetters">B</div>
                <div className="cardLetters">O</div>
                <div className="cardLetters">U</div>
                <div className="cardLetters">T</div>
                <div className="cardLetters">U</div>
                <div className="cardLetters">S</div>
            </div>
            <div className="aboutus">
                <div className="about">
                    <img className="aboutImg" src="https://media-exp1.licdn.com/dms/image/C5603AQEpDtCcpcdfWA/profile-displayphoto-shrink_800_800/0/1638074669352?e=1655942400&v=beta&t=mdkYaDKxzX6l-EC4wxlhOyaAOGdHnFqyxBjA1HwedDY" alt="" />
                    <h1 className="about-name">Karan Sharma</h1>
                    <h2 className="about-role">Frontend Developer</h2>
                    <a className="linkbtn" href="#">Contact</a>
                </div>
                <div className="about">
                    <img className="aboutImg" src="https://media-exp1.licdn.com/dms/image/C4E03AQH5Cu3RwH7ngg/profile-displayphoto-shrink_400_400/0/1640112391508?e=1655942400&v=beta&t=U1bgDlVCHWOCy3gE-QIVsm5pHnh7__pHQINoh2pgWwk" alt="" />
                    <h1 className="about-name">Jay Bhavsar</h1>
                    <h2 className="about-role">Backend Developer</h2>
                    <a className="linkbtn" href="#">Contact</a>
                </div>
                <div className="about">
                    <img className="aboutImg" src="https://media-exp1.licdn.com/dms/image/C5603AQEQDBbEpgIw-Q/profile-displayphoto-shrink_400_400/0/1648355791522?e=1655942400&v=beta&t=Mj2sTfGl91JM72dKfVQGJFsifX-YZGX11zJ3Dr4yXIE" alt="" />
                    <h1 className="about-name">Khushi Soni</h1>
                    <h2 className="about-role">Content Writer</h2>
                    <a className="linkbtn" href="#">Contact</a>
                </div>
                <div className="about">
                    <img className="aboutImg" src="https://media-exp1.licdn.com/dms/image/C4D03AQHtQALHqT4uVg/profile-displayphoto-shrink_100_100/0/1648113829724?e=1655942400&v=beta&t=4AffGltdFjy2iLJjo_39zG4mQH9X_qV9BxzYR9dJL08" alt="" />
                    <h1 className="about-name">Mayank Rohilla</h1>
                    <h2 className="about-role">UI/UX Designer</h2>
                    <a className="linkbtn" href="#">Contact</a>
                </div>
                <div className="about">
                    <img className="aboutImg" src="https://media-exp1.licdn.com/dms/image/C5603AQHrg7MAy10f9g/profile-displayphoto-shrink_100_100/0/1628949431031?e=1655942400&v=beta&t=_8xmr_u78sUNZMKbqLUZ3W72YRUDMNCcGKAukvBfb30" alt="" />
                    <h1 className="about-name">Khushi Garg</h1>
                    <h2 className="about-role">Frontend Developer</h2>
                    <a className="linkbtn" href="#">Contact</a>
                </div>
                <div className="about">
                    <img className="aboutImg" src="https://media-exp1.licdn.com/dms/image/C4D03AQEdhJDenc7uxg/profile-displayphoto-shrink_100_100/0/1612512425910?e=1655942400&v=beta&t=2yXJ2H2G9KTsrmpOIWEE0WOKbC9TrPSAGZjBVM_j4SY" alt="" />
                    <h1 className="about-name">Nishant Munshi</h1>
                    <h2 className="about-role">Graphics Designer</h2>
                    <a className="linkbtn" href="#">Contact</a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
