import ListPortfolio from "../listPortfolio/listPortfolio";
import { useEffect, useState } from "react";
import { vensemblePortfolio,siteswebPortfolio,appwebPortfolio,appmobilePortfolio,LiensPortfolio} from "../../data";
import "./portfolio.scss"

export default function Portfolio() {

  const [selected,setSelected] = useState("present");
  const [data,setData] = useState([]);

  const list = [
    {
      id: "p1",
      title: "Vue d'ensemble",
    },
    {
      id: "p2",
      title: "Sites Web",
    },
    {
      id: "p3",
      title: "Applications Web",
    },
    {
      id: "p4",
      title: "Application Mobile",
    },
    {
      id: "p5",
      title: "Où me trouver !",
    },

  ];

  useEffect(()=>{

    switch(selected){
      case "p1":
        setData(vensemblePortfolio);
        break;
        case "p2":
        setData(siteswebPortfolio);
        break;
        case "p3":
        setData(appwebPortfolio);
        break;
        case "p4":
        setData(appmobilePortfolio);
        break;
        case "p5":
        setData(LiensPortfolio);
        break;
        default:
          setData(vensemblePortfolio);
        

    }
  },[selected])
  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
          {list.map((obj) => (
            <ListPortfolio title={obj.title} active={selected === obj.id} setSelected={setSelected} id={obj.id}/>
          ))}
      </ul>
      <div className="objcontainer">
        {data.map((dt) =>(
          <div className="objet">
              <a href={dt.link}>
              <img className="img" src={dt.img} />
              <h3>{dt.title}</h3>
              </a>

          </div>
        ))}
      </div>



    </div>
  );
}
