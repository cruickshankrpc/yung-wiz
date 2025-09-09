import React, { useState } from 'react'
import './Window.styles.css'

export interface WindowComponentProps {
  list?: any;
  content: any
  width?: string;
  title: string;
  className?: string;
}

export const WindowComponent = ({ content, title, width = "500px", className }: WindowComponentProps) => {
  const [open, setOpen] = useState<boolean>(true)

  console.log(open)
  return (
    open ? (
      <div className={`Window ${className} window active`} style={{ maxWidth: width, height: 'fit-content' }}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" onClick={() => setOpen(open ? false : true)}></button>
        </div>
      </div>
      <div className="window-body has-space">
        {content}
      </div>
    </div>
    ) : (
      <></>
    )

  )
}
