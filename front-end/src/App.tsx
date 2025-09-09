/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import './App.css';
import "7.css/dist/7.css";
import { Link, Outlet } from 'react-router';
import { DatabaseList } from './components/Database/Database';
import { Item } from './components/Item/Item';
import { ListDataProps } from './types';
import Orb from './components/Icons/Orb/Orb.component';
import TaskBar from './components/TaskBar/TaskBar.component';
import DatabaseIcon from './components/Icons/DatabaseIcon/DatabaseIcon.component';
import SpaceInvadersIcon from './components/Icons/SpaceInvaders/SpaceInvaders.component';
import { WindowComponent } from './components/Window/Window.component';


// TODO 
// useContext to set state of modals open/closed 
// create login screen
// add startup music
// add menu bar
// add icon for db 
// add icon for space invaders 
// center bg img
// stretch: add option to leave a note/add a memory 

function App() {
  const [list, setList] = useState<ListDataProps[]>([])
  const [modal, setModalToOpen] = useState<boolean>(false)
  
  return (
    <div className="App">
      <div className="Layout">

      { modal && (
        <>
        <DatabaseList list={list}/>
        <Item list={list}/>
        </>
      )}
        
        </div>
        <Orb />
        <TaskBar />
        <DatabaseIcon />
        <SpaceInvadersIcon />

  

      <Link 
        to="/database"       
        onClick={() => {
          fetch("http://localhost:8000/")
            .then((response) => response.json())
            .then((payload) => {
              // console.log("PAYLOAD>>", payload)
              setList(payload)
              setModalToOpen(!modal)
            });
        }}
        data-label="Database"
        className="Database__Icon">

      </Link>
      
    </div>
  );
}

export default App;
