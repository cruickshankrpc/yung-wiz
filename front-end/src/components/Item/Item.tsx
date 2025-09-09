import { Link, useParams } from "react-router-dom"
import { ListProps } from "../../types"
import { YoutubeEmbed } from "../../YoutubeEmbed"
import { WindowComponent, WindowComponentProps } from "../Window/Window.component"
import React from 'react'
import ReactPlayer from 'react-player'

import './Item.styles.css'


// TODO
// lazy loading
// add spinner
// switch statement for content 

export const Item = ({ list }: ListProps) => {
  const { itemTitle } = useParams()

  const clickedItem = list && list.find((item: any) => item.title === itemTitle)

  const Content = () => {
    return (
      <>
      {clickedItem?.contentArr && 
        <div style={{ maxWidth: "500px"}}>
          {clickedItem?.contentArr?.map((content: any) =>
                <div style={{ whiteSpace: "pre-line"}}>{content}</div>
              )}
              </div>}
      {clickedItem?.fileUrl && 
        <img src={`${clickedItem.fileUrl}`} height="400" />}
      {clickedItem?.link && 
        <ReactPlayer src={clickedItem.link} width={450} height={250} controls />
}
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