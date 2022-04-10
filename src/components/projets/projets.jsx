import "./projets.scss";
import { useState } from "react";

export default function Projets() {
  const [CurrentSl, setCurrentSl] = useState(0);
  const data = [
    {
      id: 1,
      desc: "Application web M2L dans le cadre du BTS SIO",
      title: "Projet Application GestionMatos",
      img: "assets/gestionmatos.svg",
      icon: "assets/m2llogo.svg",
      link: "https://drive.google.com/drive/folders/1ApIze_7HaWqyzhp925v5N3Ij2uTU9UNm?usp=sharing"
    },
    {
      id: 2,
      desc: "Site web M2L dans le cadre du BTS SIO",
      title: "Projet Site M2L",
      img: "assets/m2l.svg",
      icon: "assets/m2llogo.svg",
      link: "https://drive.google.com/drive/folders/1ApIze_7HaWqyzhp925v5N3Ij2uTU9UNm?usp=sharing"
    },
    {
      id: 3,
      desc: "Veille Technologique sur le GPU dans le cadre du BTS SIO",
      title: "Veille Technologique GPU",
      img: "assets/veilletech.svg",
      icon: "assets/f2i.svg",
      link: "https://www.pearltrees.com/anthonyluu1/veilles-informationnelles/id51870663"
    },
    {
      id: 4,
      desc: "Veille Juridique sur le RGPD dans le cadre du BTS SIO",
      title: "Veille Juridique RGPD",
      img: "assets/veillejur.svg",
      icon: "assets/f2i.svg",
      link: "https://www.pearltrees.com/anthonyluu1/veilles-informationnelles/id51870663"
    },
  ];

  function handleClick (way) {
    way === "g"
      ? setCurrentSl(CurrentSl > 0 ? CurrentSl - 1 : 3 )
      : setCurrentSl(CurrentSl < data.length - 1 ? CurrentSl + 1 : 0);
  };

  return (
    <div className="projets" id="projets">
      <div
        className="sl"
        style={{ transform: `translateX(-${CurrentSl * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="objet">
              <div className="g">
                <div className="gcontainer">
                  <div className="imgcontainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link}>Lien vers le projet</a>
                </div>
              </div>
              <div className="d">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/downarrow.svg"
        className="arrow g"
        alt=""
        onClick={() => handleClick("g")}
      />
      <img
        src="assets/downarrow.svg"
        className="arrow d"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
