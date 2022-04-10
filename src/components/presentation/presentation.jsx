import "./presentation.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { init } from 'ityped'
import React, { useEffect, useRef } from "react";
export default function Presentation() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 50,
      cursorChar: "|",
      strings: ["Back-end","Front-end","Mobile prochainement :)"],
    });
  }, []);


  return (
    <div className="presentation" id="presentation">
      <div className="gch">
        <div className="imageContainer">
          <img src="assets/photo.png" alt="" />
        </div>
      </div>
      <div className="drt">
        <div className="bloc">
          <h2>Bienvenue sur le portfolio de</h2>
          <h1>Bauchet Anthony</h1>
          <h3>Développeur <span ref={textRef}></span></h3>
          <a className="arrow" href="#portfolio">
            <KeyboardArrowDownIcon className="icone" />
          </a>
        </div>
      </div>
    </div>
  );
}
