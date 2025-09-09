import { Link } from "react-router"
import { ListProps } from "../../types"
import { WindowComponent } from "../Window/Window.component"
import './Database.styles.css'
// TODO
// Add scroll 

export const DatabaseList = ({ list }: ListProps) => {
  const Content = () => {
    return (
      <ul role="listbox" className="has-shadow has-hover">
      {list && list.map((item, idx) => {

        return (
          <div>
            <Link to={`/database/${item.title}`}>
              <li role="option" key={idx} id={item.title} >{item.title}</li>
            </Link>
          </div>
        )
      })}
    </ul>
    )
  }
  return (
    <div className="Database__Wrapper">
    <WindowComponent className="Database" content={<Content/>} title="Database" />
    </div>
  )
}