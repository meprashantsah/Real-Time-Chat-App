import React, { createContext, useState } from 'react'
import "./myStyle.css";
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Groups from './Groups';
import Users from './Users';


export const myContext = createContext();

function MainContainer() {

  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
  const [refresh, setRefresh] = useState(true);
  
  return (

    // In React Router, the Outlet component is used within a parent route component to render child routes. It serves as a placeholder where the child routes are rendered. The Outlet component is a crucial part of the nested routing system provided by React Router.

    <div className='main-container'>
      <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
        <Sidebar/>
        <Outlet/>
      </myContext.Provider>
      
      {/* <Welcome/> */}
      {/* <CreateGroups/> */}
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Users/> */}
      {/* <Groups/> */}

    </div>
  )
}
export default MainContainer;