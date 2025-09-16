import { useParams } from "react-router-dom"
import { ListDataProps, ListProps } from "../../types"
import { WindowComponent } from "../Window/Window.component"
import ReactPlayer from 'react-player'
import './Item.styles.css'
import useDatabaseList from '../../hooks/useDatabaseList';


// TODO
// lazy loading
// add spinner
// switch statement for content 
// context for finding clicked item ?
// cleanup styles for consistency

export const Item = () => {
  const { itemTitle } = useParams()
  const {data } = useDatabaseList()

  const clickedItem = data && data.find((item: ListDataProps) => item.title === itemTitle)

  const Content = () => {
    return (
      <>
      {clickedItem?.contentArr && 
        <div style={{ maxWidth: "500px"}}>
          {clickedItem?.contentArr?.map((content: any) =>
                <div style={{ whiteSpace: "pre-line", padding: "15px"}}>{content}</div>
              )}
              </div>}
      {clickedItem?.fileUrl && 
        <img src={`${clickedItem.fileUrl}`} height={400} width={600} fetchPriority="high"/>}
      {clickedItem?.link && 
        <ReactPlayer src={clickedItem.link} width={450} height={250} controls />
}
</>
    )
  }
  
  return (
      clickedItem ? (
      <div className="Item__Wrapper win7"><WindowComponent className="Item" content={<Content />} title={itemTitle || "untitled"} width="fit-content" /></div>)
      : null
  )
}