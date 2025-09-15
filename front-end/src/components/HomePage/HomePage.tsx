/* eslint-disable no-restricted-globals */
import React, { useState, useContext, createContext, useEffect } from 'react';
import '../../App.css';
import "7.css/dist/7.css";
import { Link, Outlet } from 'react-router';
import { ListDataProps } from '../../types';
import { DatabaseList } from '../Database/Database';
import DatabaseIcon from '../Icons/DatabaseIcon/DatabaseIcon.component';
import Orb from '../Icons/Orb/Orb.component';
import SpaceInvadersIcon from '../Icons/SpaceInvaders/SpaceInvaders.component';
import { Item } from '../Item/Item';
import TaskBar from '../TaskBar/TaskBar.component';
import { useQuery } from '@tanstack/react-query';


// const ModalContext = createContext();

// TODO 
// Eslint & Prettier 
// useContext to set state of modals open/closed 
// create login screen
// add menu bar
// center bg img
// stretch: add option to leave a note/add a memory 

function HomePage() {
  const [modal, setModalToOpen] = useState<boolean>(false)





  // TODO error handling
  const { error, data, isPending } = useQuery({
    queryKey: ['databaseData'],
    queryFn: async () => {
      const response = await fetch(
        "http://localhost:8000/"
      )
      const res = await response.json()
      return res.reverse()
    }
  })

  console.log("DATA", data)


  if (error) return <h1>"Error loading content"</h1>
  
  return (
    <div className="HomePage">
      <div className="Layout">

      { modal ? (
        <>
        <DatabaseList list={data}/>
        <Item list={data} />
        </>
      ) : null } 

        
        </div>
        <Orb />
        <TaskBar />
        <DatabaseIcon />
      <Link 
        to="/database"       
        onClick={() => {
            setModalToOpen(!modal)
        }}
        data-label="Database"
        className="Database__Icon">
      </Link>
      <SpaceInvadersIcon />
      
    </div>
  );
}

export default HomePage;
