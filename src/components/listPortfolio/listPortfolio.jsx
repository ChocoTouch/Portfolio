import "./listPortfolio.scss"


export default function ListPortfolio({title,active,setSelected,id}) {
  return (
    <li className={active ? "listPortfolio active" : "listPortfolio"} onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}
