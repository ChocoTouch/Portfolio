import "./topbar.scss";
import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';

class Topbar extends React.Component {
  constructor() {
    super();

    this.state = {
      sandwich: "OFF",
    };
  }

  handleClick = () => {
    if (this.state.sandwich === "OFF") {
      this.setState({
        sandwich: "ON",
      });
    } else {
      this.setState({
        sandwich: "OFF",
      });
    }
  };

  render() {
    let temp = "topbar";
    if (this.state.sandwich === "ON") {
      temp += " active";
    }
    return (
      <div className={temp}>
        <div className="wrapper">
          <p className="gauche">
            <a href="#presentation" className="logo">
              Anthony Bauchet
            </a>
            <div className="itemContainer">
              <EmailIcon className="icone"/>
              <p>anthony.luu@outlook.fr</p>
            </div>
            <div className="itemContainer">
              <PersonIcon className="icone"/>
              <p>06 XX XX XX 71</p>
            </div>
            
            <div className="menu">
              <div className="itemContainer">
                <a href="#portfolio">Portfolio</a>
              </div>
              <div className="itemContainer">
                <a href="#projets">Projets</a>
              </div>
              <div className="itemContainer">
                <a href="#contact">Contact</a>
              </div>
            </div>
          </p>

          <p className="droite">
            <div className="sandwich" onClick={this.handleClick}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Topbar;

