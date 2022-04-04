import React from "react";
import "./Home.css";
import { Typography } from "@mui/material";
const url1 = "https://g.foolcdn.com/art/companylogos/square/mdb.png";
const url2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRVnYFBEl6l5DaYuNjDB_eZTQd6LYSgBZPIZ9Yof5U8dEZfWHeU6MU9CM8WsVLY4oAd0&usqp=CAU";
const url3 = "https://reactjs.org/logo-og.png";
const url4 =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png";
const url5 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA8FBMVEX////kTSbxZSnr6+sAAADkSR7pdVzrWSjIyMj39/fkRBTr8PDwXRbxYiPnp5r4u6f3sZnyek/pzcfkPwbwVwDj4+NVVVXnnI3lZEn97enAwMB6enq6urqnp6flak7jRhoiIiJqamroVCcWFhYuLi7iOADxXxvuXyjqfGXytar41tDwqJr1xLv65eHmXj398vDtlIP1l3frg27S0tLmWDT0iWTmhnPr39zzvbTpx8H52dL60MPul4b5w7Lmi3norqOSkpJERESUlJRQUFA/Pz9xcXHqURTycz71lnXscEz2oojq19T4tJ/5yLrzgVXs+vx+gb60AAALT0lEQVR4nO2de1vaWBDGgxKVgLY1WHW7Ne22UG+AWqpWLXYvra697Pf/NpsQAwnMDBnynpDy8P6zNg+c5Lfn5OTNzJyDZen0eznS88GxwaHyVuIT43qR/PjbeMsvks1Yzwf//E15jdkEJSx/Hjb8PnZ4jgjLy4NG3s4p4aCRl/Gj80QYXX0lcXCuCMthE6/nmPBzcGgteWy+CPvfeTPXhH9a1l8E9BwRln9fHj1SEMLym0gjl1Z51PAB8GVwjCJ89Xz0SFEICW3FPzokfJFoQmxhQWheC8KYFoTlN2/j3331av4Iy/E3pvLakHd+CONvvc+teezD+N+VOSUcWO6XFk+4liNfnPDtVqQMhNaX8K+/LYHw79dx/ZUfIXHJesLHV99liTCp178YYdjgS2uOCQOSf/p/zC1hJfra3BJaLz+H/51fwkgLwgUhSEPCN8QlM4RfEk1whCPN/DkjwuW1SO8HxwaH1irxj24NDifAYx+3mOP9Zt6v0XpvLbTQQgsttNBCCy200EK/oHb3Voqsvd3MhJ2GXWQ1Otk70SkVWU52QKs7awhRXQDhnj1rCkH2HoBwv9CE+wDCnjdrDEFeD0B4VOSpxjkCEB4UmvAAQHjszhpDkHsMIDwsNOEhgLBVaMIWgLBTaEKAabMsLOEfqxn1R4IQAWhhn4erSxm1Gm/NgxC2oaYGSmi3IYQrBSZcgRBibVtmwvh9CDFtlnUDNTVQQmcbQoi1bZkJ441BTBvatkEJIaYNbduwhAjThrZtWEKEaQuibUUifBdvDBFp81Up1EyTIHQqky8/jZCAmQkTpg0RaQu0gzQ1SEJ7B0QItW1QQoxps6wzpG3LSpgwbWcgwu2iEoJMm2VtICfTrITxtpwNEOFlYQkvQYSCbbMdrb7WtFpnCUGmTbJt9vmGVgdPtPqwzhJiTJtl7bK2zdmoaqU//UMzBpg0bdkTwI9iCb2b6rJSep+V6MMkIQpQIDzPgfAuTrhqhpAD9E1FDoS1JY6wBCNk08B2OwfCOkcISQCH4m2bY56wkyBMmLZzGOEJS9gwT9jiCW9ghHwa2L0wTniVIEwMIEQCOBRv29xvxgl/1FhClGmT4onuR+0wVRM+YQndaxjhFUvoXBonfNpkCa9ghKJtM014zxLiTJuQBna2jRP+ZE0bJgEcigOcwrapCZ+xhDhLY1ld1tSobZuaMD5GTaRHQ/G2bcc0YYW1pUDTJlXvdZWAakLetEGq9iLxts0zTSiYthMgodK2Id/xr3hLgzNtUhqYsm3V221eR091umejNKAEcCidbav2XDbU5n1t6iRE2jAJ4FA621bdFgKs2eKlCUKcaZPiiZRtq97mQthAxRID8Wlgj7Bt1Y9CXjwToYkE8KN4wh5BuJkPIRLQYp/4pG37ZorQUKQtEJsGpqNtQm0DjBCWAA7F2zabIhQSjpkIjZk2qXrPIQCr7RwIQVV7kfgnHGXbqsJKIhghLAEcSmnbzgwRxhuCmja9beNvRBgh1LRJaWDStgkriXCEqARwKJxtwxEiTZs22lYVSlKzEBqLtPmq8C/5VLRNsG0wQg9UtReJvWJ7X2fbshAaNG3Cogsy2nZh5j40FksMxFfvkdE2j11evrquUoIwYdpQVXuRznW2bW+H07/PVFrnCMGmTbJtDV20TXdaPpYINm1iPFGXJNXNgNd8LBFr2sQ0sC5JqiP8xKdHsaZNa9tghEJ6FGvaxHiiLkmqI3zIIwEcSkgD65KkOkKhpg1r2ixltA1GyKdHsZG2QOzzkLRtKELW0pRsOCFv23S1bTrCdY4QbtrERRfmCDt8Ahht2iyLD73okqQqwl0+PYpaajHUDW9MVbVtKsKrPKr2IqFsm4pQMG2opRZDoWybipA3bcCqvUjXINumIvyeR9VeJMG23RojFEwbNtIWaBdU26YivOdr2nBVe5E67H2os20qQr5qz4HbUpRtq6oI+aUWeNMmxRN3NhVq7TKizpm4DY2sAI6LXw1suwrVOVHnzGOpxVCgvfeYeOn6HXFK3rTZeNMm2TYI4U/ilLmaNtjeewxh85Q45XUeSy2GAm3iwhE+EKfM1bTBNnFhCGvfiVPmatok2wYh/EGcMsdIW6AWZosTjpDqlHt+fSzellpWRSCkkkw6wjp1ybxpa4DTo6H4maa7Ny7OIHCElM/kTRtig+RxsVsm23v/jeeYLpjblhulVKckPmHctElbJncJ672lI1wiTthhbakR0ybaNuotgvkoTag1bdiqvUh8oZNH1bYxIWSGkDJtwlILdAI4lG7RBVe9RxM274kTCpE2E6ZNrN7bJAiZQc0QUqZNWB+LTgCHwlTv0YSkaRPWx6ITwKGENDARbeMWXTCEn4gT5mza1NV7zM5EDCFl2k5Z02YglhiIr97zTghCJkhOE5KmjU8Ag6v2BuIJz9IvumAIqUDUHU9oBlCIJyoWXTCE1Pn4SBtmg+Rx6dLAF/S7iIKQj7ThE8Ch+DSwRxBWNYSkLeVNGz4BHIq3bY1xwOWqYqbRmjbk+ti4+Hgibdtch/jCOOF6s16nLI2wqQm6ai+SzrYtVy8ue92GMzK0RwibtfrdwzX5xp67aZtiixP/Rfjb7b7txiljhOu1+tLpDzZNlrtp09q2AeXy5sae63p2gtAfmrUPT0RrkmPVXiSdbUt05fLHm3Z4W64GdLXas6cTreVpngngULq1smOUF5fnpYbz1R+aD9dpXFeeVXuP4rdMTrfFSXBbbvQ+pc1P81V7qA2Sx8UBKrY4UdR5J+bcHCJtgRDVe6n/91f4SBt2fWxcykUX2QhnYNrE6r0tOKFg2kwkgEPpbFtGwhmYNkz1XmrCGZg2TPVeakLetBlJAIdCVO+lJpyBaRNt2+1/KRFTE+ZatReJX3RR6vYuA5MNI7x+SDzwDW2QPCYpDew5jZ3tzcmUKQhb33/Wa02B0BigsKykL9txS2eXF1WRcgJh58fpUn1kk/JR02YqlhhIBIy6sr39UehKgbDjD83RzqMI0SuA40r1y7l+V9r7t1xXcoT+0KzVm2OdR1gaQwngUMJ+F6OUje4J2ZUUoT8014mhyRACN0geF7/3HgHpuc7KxrfRrhwjvHp6xwxNjtBE1V4kbfWeP2C7veOLOGSCcPfThyY/NGOKN2ooARxqml+68Fw3/hgZEFb680oKujFCc6Zt6uq9/mPkce4JCVtPPgjzikxopGovUobqvegxEjwUTpupO48iNJMADiXYthTy5x57/+hZbeK8Mqa8TBvil3Ptr7rOIwhNJYBDZa9mn2rnj9wsjbBlcn6ExtKjobL/BFt2QpOmDbHoYirCHKr2ImlsG44wuXuSqQRwqOyLLrSE75I/xG3YtCEWXagIR+n6hOZiiYGyL7pITfhulW7AWAI4VPZFF6kIx4ZmnNCkaUP8cu5kQq7zHmVkqcVQ2X85VyaUOi8iNGraJkXbshFOpusTmgXMbkwZwglDMy7DhJltG0GYYmgOZTABHGql4WVjHCV8p6Drx/DMJYAfdXjTHqvkmpZQ1Xn9iM/ekdlnxaN2L88cd1rK1Wk7zy2dHBueRhO6OgoquaYlVMwrIZ2zf2D2MUiqc3xS0nflasqHQiR/aLaPzKVEJ6p1sO9OPWAnyp9XSr1chyatw+32dANWpguSArMYmrQ6x+dOphl2FM9pdG8OjVWvTanW0YqD6Mowz2oyJppBneubUrau9NzGTj6PvOm1ezBS9qzovEbpvADzShpdHe0o5x5/XnELNK+kUee4l3rA+p3XvpnhI296tQ6CuUem9OcVr7DzShpVRKPuzys5WWmz8o06MfcECfB8rbRZ+Ua9MZx7fDp3JlbarCrHJ92gKwMrvf1Lzitp5A/Y3Ifm/8v/wOysXxQKAAAAAElFTkSuQmCC";
const url6 =
  "data:image/png;base64,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";
const Home = () => {
  return (
    <div className="home container">
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={url1} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={url2} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={url3} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={url4} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={url5} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={url6} alt="Face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>
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
