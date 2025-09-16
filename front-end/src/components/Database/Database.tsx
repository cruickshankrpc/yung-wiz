import { Link } from "react-router"
import { ListDataProps, ListProps } from "../../types"
import { WindowComponent } from "../Window/Window.component"
import './Database.styles.css'
import useDatabaseList from "../../hooks/useDatabaseList"


// TODO add error component
const Content = () => {
  const { error, data } = useDatabaseList()  
  
    if (error) return <span>Error loading content</span>

  return (
    <ul role="listbox" className="has-shadow has-hover">
    {data && data.map((item: ListDataProps, idx: number) => {
      return (
        <div>
          <Link to={`/home/database/${item.title}`}>
            <li role="option" key={idx} id={item.title} >{item.title}</li>
          </Link>
        </div>
      )
    })}
  </ul>
  )
}

export const DatabaseList = () => {
  return (
    <div className="Database__Wrapper win7">
    <WindowComponent className="Database" content={<Content/>} title="Database" />
    </div>
  )
}