import { Link, useParams } from "react-router-dom"
import { ListProps } from "../../types"
import { YoutubeEmbed } from "../../YoutubeEmbed"
import { WindowComponent, WindowComponentProps } from "../Window/Window.component"
import './Item.styles.css'

// TODO
// lazy loading
// add spinner
// switch statement for content 

export const Item = ({ list }: ListProps) => {
  const { itemTitle } = useParams()

  const clickedItem = list && list.find((item: any) => item.title === itemTitle)

  console.log('itemTitle', itemTitle)

  const Content = () => {
    return (
      <>
      {clickedItem?.contentArr && 
        <div style={{ maxWidth: "500px"}}>
          {clickedItem?.contentArr?.map((content: any) =>
                <p>{content}</p>
              )}
              </div>}
      {clickedItem?.fileUrl && 
        <img src={`${clickedItem.fileUrl}`} height="400" />}
      {clickedItem?.youtubeEmbed && 
        <YoutubeEmbed embedId={clickedItem.youtubeEmbed} />}
</>
    )
  }
  


  return (
      clickedItem ? (
      <div className="Item__Wrapper"><WindowComponent className="Item" content={<Content />} title={itemTitle || "untitled"} width={"fit-content"} /> </div>)
      : (
        <></>
      )
  )
}